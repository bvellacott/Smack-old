if(!$)
	throw 'jQuery is required';
if(!Smack)
	throw 'Smack is required';

Smack.compile = (function(){
	var createUnit = function(name, smkSource, targetSource, pack, funcNames) {
		var packParts = pack.split('.');
		var packAbr = packParts[packParts.length-1];
		return {
			name : name,
			smkSource : smkSource,
			targetSource : targetSource,
			pack : pack,
			packAbr : packAbr,
			funcNames : funcNames,
		};
	}
	
	var getParseTree = function(source) {
		var chars = new antlr4.InputStream(source);
		var lexer = new antlr4.SmackLexer(chars);
		var tokens = new antlr4.CommonTokenStream(lexer);
		var parser = new antlr4.SmackParser(tokens);
		parser.buildParseTrees = true;
		return parser.smkFile();
	}
	
	return function(name, smkSource) {
		var tree = getParseTree(smkSource);
		var pack = Smack.jsCompilers.compilePackageDecl(tree.packageDecl(0));
		var result = Smack.jsCompilers.compileSmkFile(tree)
		return createUnit(name, smkSource, result.source, pack, result.funcNames);
	};
})();

Smack.jsCompilers = (function(){
	return {
		getIds : function(dottedId) {
			var ids = [];
			for(var i = 0; dottedId.Id(i); i++)
				ids.push(dottedId.Id(i).getText());
			return ids;
		},
		compilePackageDecl : function(ctx) {
			var ids = this.getIds(ctx.dottedId(0));
			return Smack.sourceGenerators.generatePackageDecl(ids);
		},
		compileComment : function(ctx) {
			return Smack.sourceGenerators.generateComment(ctx.getText());
		},
		compileValue : function(ctx) {
			return Smack.sourceGenerators.generateValue(ctx.getText());
		},
		compileResolvable : function(ctx, pack) {
			ctx = ctx.children[0];
			if(ctx instanceof antlr4.SmackParser.ValueContext)
				return this.compileValue(ctx);
			if(ctx instanceof antlr4.SmackParser.JsonPathContext)
				return this.compileJsonPath(ctx, pack);
			if(ctx instanceof antlr4.SmackParser.FuncInvokeContext)
				return this.compileFuncInvoke(ctx, pack);
			throw 'Unhandled resolvable';
		},
		compileKeyRef : function(ctx, pack) {
			var resolvableSrc = this.compileResolvable(ctx.resolvable(0), pack);
			return Smack.sourceGenerators.generateKeyRef(resolvableSrc);
		},
		compileJsonPath : function(ctx, pack) {
			var id = ctx.Id(0).getText();
			var keyRefSrcs = [];
			for(var i = 0; ctx.keyRef(i); i++)
				keyRefSrcs.push(this.compileKeyRef(ctx.keyRef(i), pack));
			return Smack.sourceGenerators.generateJsonPath(id, keyRefSrcs);
		},
		compileExpression : function(ctx, pack) {
			if(ctx instanceof antlr4.SmackParser.AtomExprContext)
				return this.compileResolvable(ctx.resolvable(0), pack);
			if(ctx instanceof antlr4.SmackParser.SignedExprContext)
				return Smack.sourceGenerators.generateSignedExpr(this.compileExpression(ctx.expression(0), pack));
			if(ctx instanceof antlr4.SmackParser.NotExprContext)
				return Smack.sourceGenerators.generateNotExpr(this.compileExpression(ctx.expression(0), pack));
			if(ctx instanceof antlr4.SmackParser.ParenExprContext)
				return Smack.sourceGenerators.generateParenExpr(this.compileExpression(ctx.expression(0), pack));
			var expr1Src = this.compileExpression(ctx.expression(0), pack);
			var expr2Src = this.compileExpression(ctx.expression(1), pack);
			if(ctx instanceof antlr4.SmackParser.SumExprContext) {
				var isPos = true;
				for(var i = 1; i < ctx.children.length; i++) {
					var c = ctx.children[i];
					if(c.symbol && c.symbol.type === antlr4.SmackParser.Minus)
						isPos = !isPos;
				}
				if(isPos)
					return Smack.sourceGenerators.generatePlusExpr(expr1Src, expr2Src);
				else
					return Smack.sourceGenerators.generateMinusExpr(expr1Src, expr2Src);
			}
			if(ctx instanceof antlr4.SmackParser.PowExprContext) {
				if(ctx.expression(0) instanceof antlr4.SmackParser.SignedExprContext)
					return Smack.sourceGenerators.generateSignedPowExpr(this.compileExpression(ctx.expression(0).expression(0)), expr2Src);
				return Smack.sourceGenerators.generatePowExpr(expr1Src, expr2Src);
			}
			if(ctx instanceof antlr4.SmackParser.MulExprContext)
				return Smack.sourceGenerators.generateMulExpr(expr1Src, expr2Src);
			if(ctx instanceof antlr4.SmackParser.DivExprContext)
				return Smack.sourceGenerators.generateDivExpr(expr1Src, expr2Src);
			if(ctx instanceof antlr4.SmackParser.ModExprContext)
				return Smack.sourceGenerators.generateModExpr(expr1Src, expr2Src);
			if(ctx instanceof antlr4.SmackParser.EqExprContext)
				return Smack.sourceGenerators.generateEqExpr(expr1Src, expr2Src);
			if(ctx instanceof antlr4.SmackParser.NeqExprContext)
				return Smack.sourceGenerators.generateNeqExpr(expr1Src, expr2Src);
			if(ctx instanceof antlr4.SmackParser.LtExprContext)
				return Smack.sourceGenerators.generateLtExpr(expr1Src, expr2Src);
			if(ctx instanceof antlr4.SmackParser.LeExprContext)
				return Smack.sourceGenerators.generateLeExpr(expr1Src, expr2Src);
			if(ctx instanceof antlr4.SmackParser.GtExprContext)
				return Smack.sourceGenerators.generateGtExpr(expr1Src, expr2Src);
			if(ctx instanceof antlr4.SmackParser.GeExprContext)
				return Smack.sourceGenerators.generateGeExpr(expr1Src, expr2Src);
			if(ctx instanceof antlr4.SmackParser.AndExprContext)
				return Smack.sourceGenerators.generateAndExpr(expr1Src, expr2Src);
			if(ctx instanceof antlr4.SmackParser.OrExprContext)
				return Smack.sourceGenerators.generateOrExpr(expr1Src, expr2Src);
			else
				throw 'Uhandled expression';
		},
		compileVarAssign : function(ctx, pack) {
			var jsonPathSrc = this.compileJsonPath(ctx.jsonPath(0), pack);
			var expressionSrc = this.compileExpression(ctx.expression(0), pack);
			return Smack.sourceGenerators.generateVarAssign(jsonPathSrc, expressionSrc);
		},
		compileFuncInvoke : function(ctx, pack) {
			var ids = this.getIds(ctx.dottedId(0));
			var resolvableSrcs = [];
			for(var i = 0; ctx.resolvable(i); i++)
				resolvableSrcs.push(this.compileResolvable(ctx.resolvable(i), pack));
			return Smack.sourceGenerators.generateFuncInvoke(pack, ids, resolvableSrcs);
		},
		compileRetStatement : function(ctx, pack) {
			var expressionSrc = this.compileExpression(ctx.expression(0), pack);
			return Smack.sourceGenerators.generateRetStatement(expressionSrc);
		},
		compileStatement : function(ctx, pack) {
			var statement = ctx.children[0];
			var src;
			if(statement instanceof antlr4.SmackParser.VarAssignContext)
				src = this.compileVarAssign(statement, pack);
			else if(statement instanceof antlr4.SmackParser.FuncInvokeContext)
				src = this.compileFuncInvoke(statement, pack);
			else if(statement instanceof antlr4.SmackParser.RetStatementContext)
				src = this.compileRetStatement(statement, pack);
			return src + ';';
		},
		compileLoop : function(ctx, pack) {
			var expressionSrc = this.compileExpression(ctx.expression(0), pack);
			var codeBlockSrc = this.compileCodeBlock(ctx.codeBlock(0), pack);
			return Smack.sourceGenerators.generateLoop(expressionSrc, codeBlockSrc);
		},
		compileElseStat : function(ctx, pack) {
			var codeBlockSrc = this.compileCodeBlock(ctx.codeBlock(0), pack);
			return Smack.sourceGenerators.generateElseStat(codeBlockSrc);
		},
		compileElseIfStat : function(ctx, pack) {
			var expressionSrc = this.compileExpression(ctx.expression(0), pack);
			var codeBlockSrc = this.compileCodeBlock(ctx.codeBlock(0), pack);
			return Smack.sourceGenerators.generateElseIfStat(expressionSrc, codeBlockSrc);
		},
		compileIfStat : function(ctx, pack) {
			var expressionSrc = this.compileExpression(ctx.expression(0), pack);
			var codeBlockSrc = this.compileCodeBlock(ctx.codeBlock(0), pack);
			var elseifStatSrcs = [];
			for(var i = 0; ctx.elseIfStat(i); i++)
				elseifStatSrcs.push(this.compileElseIfStat(ctx.elseIfStat(i), pack));
			var elseStatSrc = '';
			if(ctx.elseStat(0))
				elseStatSrc = this.compileElseStat(ctx.elseStat(0), pack);
			return Smack.sourceGenerators.generateIfStat(expressionSrc, codeBlockSrc, elseifStatSrcs, elseStatSrc);
		},
		compileSentence : function(ctx, pack) {
			var sentence = ctx.children[0];
			var src;
			if(sentence instanceof antlr4.SmackParser.StatementContext)
				src = this.compileStatement(sentence, pack);
			else if(sentence instanceof antlr4.SmackParser.LoopContext)
				src = this.compileLoop(sentence, pack);
			else if(sentence instanceof antlr4.SmackParser.IfStatContext)
				src = this.compileIfStat(sentence, pack);
			return src;
		},
		compileCodeBlock : function(ctx, pack) {
			var sentenceSrcs = [];
			for(var i = 0; ctx.sentence(i); i++)
				sentenceSrcs.push(this.compileSentence(ctx.sentence(i), pack));
			return Smack.sourceGenerators.generateCodeBlock(sentenceSrcs);
		},
		compileFuncDecl : function(ctx, pack) {
			var source = '';
			var codeBlockSrc 
			var ids = [];
			
			for(var i = 0; i < ctx.children.length; i++) {
				var c = ctx.children[i];
				if(c.symbol && c.symbol.type === antlr4.SmackParser.Id)
					ids.push(c.getText());
				else if(c instanceof antlr4.SmackParser.CodeBlockContext)
					codeBlockSrc = this.compileCodeBlock(c, pack);
			}
			return Smack.sourceGenerators.generateFuncDecl(pack, ids, codeBlockSrc);
		},
		compileSmkFile : function(ctx) {
			var pack = this.compilePackageDecl(ctx.packageDecl(0));
			var funcNames = [];
			var source = '';
			for(var i = 0; i < ctx.children.length; i++) {
				var c = ctx.children[i];
				if(c instanceof antlr4.SmackParser.FuncDeclContext) {
					source += this.compileFuncDecl(c, pack);
					funcNames.push(c.Id(0).getText());
				}
			}
			return {
				source : source,
				funcNames : funcNames
			};
		}
	}
})();

Smack.sourceGenerators = (function(){
	return {
		generateDottedId : function(ids) {
			return ids.join('.');
		},
		generatePackageDecl : function(ids) {
			return 'Smack.bserver.code.' + ids.join('.');
		},
		generateComment : function(str) {
			return ' ';//'// ' + str + '\n';
		},
		generateVarAssign : function(jsonPathSrc, expressionSrc) {
			return jsonPathSrc + '=' + expressionSrc;
		},
		generateValue : function(valueStr) {
			return valueStr;
		},
		generateKeyRef : function(resolvableSrc) {
			return '[' + resolvableSrc + ']';
		},
		generateJsonPath : function(id, keyRefSrcs) {
			var src = id;
			for(var i = 0; i < keyRefSrcs.length; i++)
				src += keyRefSrcs[i];
			return src;
		},
		generateSignedExpr : function(expressionSrc) {
			return '-' + expressionSrc;
		},
		generateNotExpr : function(expressionSrc) {
			return '!' + expressionSrc;
		},
		generateParenExpr : function(expressionSrc) {
			return '(' + expressionSrc + ')';
		},
		generatePlusExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' + ' + expr2Src;
		},
		generateMinusExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' - ' + expr2Src;
		},
		generateMulExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' * ' + expr2Src;
		},
		generateDivExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' / ' + expr2Src;
		},
		generateModExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' % ' + expr2Src;
		},
		generatePowExpr : function(expr1Src, expr2Src) {
			return 'Math.pow(' + expr1Src + ', ' + expr2Src + ')';
		},
		generateSignedPowExpr : function(expr1Src, expr2Src) {
			return '-Math.pow(' + expr1Src + ', ' + expr2Src + ')';
		},
		generateEqExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' === ' + expr2Src;
		},
		generateNeqExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' !== ' + expr2Src;
		},
		generateLtExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' < ' + expr2Src;
		},
		generateLeExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' <= ' + expr2Src;
		},
		generateGtExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' > ' + expr2Src;
		},
		generateGeExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' >= ' + expr2Src;
		},
		generateAndExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' && ' + expr2Src;
		},
		generateOrExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' || ' + expr2Src;
		},
		generateFuncInvoke : function(pack, ids, resolvableSrcs) {
			var src = '';
			if(ids.length > 1)
				src += 'Smack.bserver.code.' + ids.slice(0, ids.length-1).join('.') + '._funcs_.' + ids[ids.length-1] ;
			else if(Smack.bserver.code._funcs_[ids[0]])
				src += 'Smack.bserver.code._funcs_.' + ids[0];
			else
				src += pack + '._funcs_.' + ids[0]
			src += '(' + resolvableSrcs.join(', ') + ')';
			return src;	
		},
		generateRetStatement : function(expressionSrc) {
			return 'return ' + expressionSrc;
		},		
		generateLoop : function(expressionSrc, codeBlockSrc) {
			return 'while' + '('  + expressionSrc + ')' + codeBlockSrc;
		},
		generateElseStat : function(codeBlockSrc) {
			return 'else' + codeBlockSrc;
		},
		generateElseIfStat : function(expressionSrc, codeBlockSrc) {
			return 'else if' + '(' + expressionSrc + ')' + codeBlockSrc;
		},
		generateIfStat : function(expressionSrc, codeBlockSrc, elseifStatSrcs, elseStat) {
			var src = 'if' + '(' + expressionSrc + ')' + codeBlockSrc;
			for(var i = 0; i < elseifStatSrcs.length; i++)
				src += elseifStatSrcs[i];
			if(elseStat)
				src += elseStat;
			return src;
		},
		generateCodeBlock : function(sentenceSources) {
			var source = '{';
			for(var i = 0; i < sentenceSources.length; i++)
				source += sentenceSources[i];
			source += '}\n';
			return source;
		},
		generateFuncDecl : function(pack, ids, codeBlockSrc) {
			var funcPath = pack + '._funcs_.' + ids[0];
			eval('if(' + pack + ' && ' + funcPath + ') throw "the function ' + funcPath + ' already exists";' )
			var source = funcPath + ' = function(';
			var isFirst = true;
			for(var i = 1; i < ids.length; i++) {
				if(!isFirst)
					source += ', ';
				source += ids[i];
				isFirst = false;
			}
			source += ')' + codeBlockSrc;
			return source;
		},
	};
})();
