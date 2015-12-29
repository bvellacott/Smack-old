if(!$)
	throw 'jQuery is required';
if(!antlr4)
	throw 'antlr4 is required';
if(!antlr4.SmackParser)
	throw 'SmackParser is required';

var Smack = {};

Smack.api = (function($) {
	var connections = {};
	var syncUris = {'/compile' : true, '/delete' : true, '/deleteall' : true, };

	var newConnection = function(name, host, requester) {
		return {
			sessionId : undefined,
			name : name,
			host : host,
			latestRequest : undefined,
			executeAllSync : false,
			request : requester,
			queue : [],
			pendingUri : undefined,
		};
	}
	
	var requestHandler = function(data) {
		throw 'Request handler not implemented';
	}
	
	var testRequestHandler = function(data) {
		this.latestRequest = { url : this.host + data.uri, headers : data.headers, body : data.body };
		console.log('Last request data : ' + this.latestRequest);
		if(data.cb) data.cb({});
	}
	
	return {
		call : function(connection, uri, headers, body, cb) {
			var con = this.getConnection(connection);
			var data = {
				con : con,
				uri : uri, 
				headers : $.extend({
					'content-type' : 'application/json', 
					session : (con.sessionId ? con.sessionId : '')
				}, headers),
				body : body, 
				cb : function(response) {
					if(response.err) throw 'Error prosessing call to ' + this.con.host + uri + ' : ' + response.err;
					if(cb) cb(response.result)
					con.pendingUri = undefined;
					if(con.queue.length > 0) {
						var data = con.queue.shift();
						data.con.request(data);
					}
						
				},
			};
			if((con.executeAllSync && con.pendingUri) || syncUris[con.pendingUri] || (syncUris[uri] && con.pendingUri))
				con.queue.push(data);
			else {
				try {
					con.pendingUri = uri;
					con.request(data);
				} catch(e) {
					con.pendingUri = undefined;
					throw e;
				}
			}
		},
		compile : function(connection, units, cb) {
			this.call(connection, '/compile', undefined, units, cb)
		},
		del : function(connection, names, cb) {
			this.call(connection, '/delete', undefined, names, cb)
		},
		delAll : function(connection, cb) {
			this.call(connection, '/deleteall', undefined, undefined, cb)
		},
		get : function(connection, names, cb) {
			this.call(connection, '/get', undefined, names, cb)
		},
		getNames : function(connection, regex, cb) {
			this.call(connection, '/getnames', undefined, regex, cb)
		},
		// The javascript arguments array is used as input
		execute : function(connection, name, args, cb) {
			this.call(connection, '/execute', undefined, { name : name, args : args }, cb)
		},
		createConnection : function(name, host, uname, passw, cb) {
			if(this.hasConnection(name))
				throw 'A connection by the name ' + name + ' exists';
			if(this.hasHost(host))
				throw 'The host ' + host + ' has already been connected to';
			var con = undefined;
			if(host == 'tst.com')
				con = newConnection(name, host, testRequestHandler);
			else if(host == 'browser')
				con = newConnection(name, host, Smack.browserRequestHandler);
			else
				con = newConnection(name, host, requestHandler);
			connections[name] = con;
			this.call(name, '/connect', {uname : uname, passw : passw}, undefined, function(data) {
				con.sessionId = data;
				if(cb) cb({});
			});
		},
		hasConnection : function(name) {
			return (connections[name] ? true : false);
		},
		hasHost : function(host) {
			for(var name in connections)
				if(connections[name].host == host)
					return true;
			return false;
		},
		getConnection : function(name) {
			if(typeof name !== 'string')
				throw 'Please provide the connection name';
			var con = connections[name]
			if(!con)
				throw 'No connection was found by the name ' + name;
			return con;
		},
		closeConnection : function(name, cb) {
			this.call(name, '/close', undefined, undefined, function() {
				delete connections[name];
				if(cb) cb();
			});
		},
	}
})($);

Smack.bserver = (function(){
	var code = {};
	var units = {};
	var compile = function(name, source) {
		addUnit(Smack.translate(name, source));
	}
	
	var addUnit = function(unit) {
		if(units[unit.name])
			throw 'a compilation unit by the name ' + unit.name + ' already exists';
		if(!code[unit.pack])
			code[unit.pack] = {};
		for(fn in unit.funcs)
			if(code[unit.pack][fn])
				throw 'a function by the name ' + unit.pack + '.' + fn + ' already exists';
		for(fn in unit.funcs)
			code[unit.pack][fn] = unit.funcs[fn];
		units[unit.name] = unit;
	}
	
	var delUnit = function(name) {
		if(!units[unit.name])
			throw 'a compilation unit by the name ' + unit.name + ' doesn\'t exist';
		for(fn in unit.funcs)
			delete code[unit.pack][fn];
		delete units[unit.name];
	}
	
	var getFunc = function(name) {
		var parts = name.split('.');
		var curObj = code;
		for(var i = 0; i < parts.length; i++) {
			curObj = curObj[parts[i]];
			if(!curObj)
				throw 'No function exists by the name ' + name;
		}
		if(!(typeof curObj === 'function'))
			throw 'No function exists by the name ' + name;
		return curObj;
	}
	
	var activeSession = undefined;
	
	return {
		code : code,
		getFunction : getFunc,
		connect : function(uname, passw, cb) { 
			activeSession = 'browser-session';
			cb(activeSession); 
		},
		close : function(cb) {
			var sessionId = activeSession;
			activeSession = undefined;
			cb('closed' + sessionId); 
		},
		compile : function(units, cb) {
			try {
				for(name in units)
					compile(name, units[name]);
				if(cb) cb('done');
			} catch(e) {
				if(cb) cb(e);
			}
		},
		del : function(names, cb) {
			for(var i = 0; i < names.length; i++) {
				try {
					delUnit(names[i]);
				} catch(e){}
			}
			cb('done');
		},
		delAll : function(cb) {
			for(name in units) {
				try {
					delUnit(name);
				} catch(e){}
			}
			cb('done');
		},
		get : function(names, cb) {
			var sources = [];
			for(var i = 0; i < names.length; i++)
				if(units[names[i]])
					sources.push(units[names[i]].source);
			cb(sources);
		},
		getNames : function(regex, cb) {
			var names = [];
			if(!regex)
				cb(Object.keys(units));
			cb(names);
		},
		execute : function(name, args, cb) { 
			cb(getFunc(name).apply(null, args));
		},
	};
})();


Smack.translate = (function(){
	var createUnit = function(name, source, pack, funcs) {
		return {
			name : name,
			source : source,
			pack : pack,
			funcs : funcs,
		};
	}
	
	var getParseTree = function(source) {
		var chars = new antlr4.InputStream(source);
		var lexer = new antlr4.SmackLexer(chars);
		var tokens  = new antlr4.CommonTokenStream(lexer);
		var parser = new antlr4.SmackParser(tokens);
		parser.buildParseTrees = true;
		return parser.smkFile();
	}
	
	var Translator = function(){
		this.pack = undefined;
		this.funcs = {};
		this.curFunctionName = undefined;
		this.curFunctionSrc = '';
		this.declaredVars = {};
	};
	Translator.prototype = new antlr4.SmackListener();
	Translator.prototype.enterSmkFile = function(ctx) { console.log('enterSmkFile'); };
	Translator.prototype.exitSmkFile = function(ctx) { console.log('exitSmkFile'); };
	Translator.prototype.enterPackageDecl = function(ctx) {
		var id = '';
		var ids = ctx.children[1].children;
		for(var i = 0; i < ids.length; i++) {
			if(i > 0)
				id += '.';
			id += ids[i].symbol.text;
		}
		this.pack = id;
	};
	Translator.prototype.exitPackageDecl = function(ctx) { console.log('exitPackageDecl'); };
	Translator.prototype.enterPlus = function(ctx) { 
		this.curFunctionSrc += '+';
	};
	Translator.prototype.exitPlus = function(ctx) { console.log('exitPlus'); };
	Translator.prototype.enterMinus = function(ctx) { 
		this.curFunctionSrc += '-';
	};
	Translator.prototype.exitMinus = function(ctx) { console.log('exitMinus'); };
	Translator.prototype.enterMul = function(ctx) { 
		this.curFunctionSrc += '*';
	};
	Translator.prototype.exitMul = function(ctx) { console.log('exitMul'); };
	Translator.prototype.enterDiv = function(ctx) { 
		this.curFunctionSrc += '/';
	};
	Translator.prototype.exitDiv = function(ctx) { console.log('exitDiv'); };
	Translator.prototype.enterMod = function(ctx) { 
		this.curFunctionSrc += '%';
	};
	Translator.prototype.enterPow = function(ctx) { 
//		this.curFunctionSrc += ', '; 
	};
	Translator.prototype.exitPow = function(ctx) { console.log('exitPow'); };
	Translator.prototype.enterPowOp = function(ctx) {
		this.curFunctionSrc += ', '; 
	};
	Translator.prototype.exitPowOp = function(ctx) { console.log('exitPowOp'); };
	Translator.prototype.exitMod = function(ctx) { console.log('exitMod'); };
	Translator.prototype.enterEq = function(ctx) { 
		this.curFunctionSrc += '==';
	};
	Translator.prototype.exitEq = function(ctx) { console.log('exitEq'); };
	Translator.prototype.enterNeq = function(ctx) { 
		this.curFunctionSrc += '!=';
	};
	Translator.prototype.exitNeq = function(ctx) { console.log('exitNeq'); };
	Translator.prototype.enterLt = function(ctx) { 
		this.curFunctionSrc += '<';
	};
	Translator.prototype.exitLt = function(ctx) { console.log('exitLt'); };
	Translator.prototype.enterLe = function(ctx) { 
		this.curFunctionSrc += '<=';
	};
	Translator.prototype.exitLe = function(ctx) { console.log('exitLe'); };
	Translator.prototype.enterGt = function(ctx) {
		this.curFunctionSrc += '>';
	};
	Translator.prototype.exitGt = function(ctx) { console.log('exitGt'); };
	Translator.prototype.enterGe = function(ctx) { 
		this.curFunctionSrc += '>=';
	};
	Translator.prototype.exitGe = function(ctx) { console.log('exitGe'); };
	Translator.prototype.enterLp = function(ctx) {
		this.curFunctionSrc += '(';
	};
	Translator.prototype.exitLp = function(ctx) { console.log('exitLp'); };
	Translator.prototype.enterRp = function(ctx) {
		this.curFunctionSrc += ')';
	};
	Translator.prototype.exitRp = function(ctx) { console.log('exitRp'); };
	Translator.prototype.enterAssign = function(ctx) { 
		this.curFunctionSrc += ' = ';
	};
	Translator.prototype.exitAssign = function(ctx) {};
	Translator.prototype.enterVarAssign = function(ctx) {
		var name = ctx.children[0].getText();
		if(!this.declaredVars[name])
			this.curFunctionSrc += 'var ';
		this.declaredVars[name] = true;
	};
	Translator.prototype.exitVarAssign = function(ctx) { console.log('exitVarAssign'); };
	Translator.prototype.enterFuncDeclParams = function(ctx) {
		this.curFunctionName = ctx.children[1].symbol.text;
		this.curFunctionSrc += 'function ' + this.curFunctionName + '(' + ctx.children[3].symbol.text;
		for(var i = 5; i < ctx.children.length; i++) {
			if(ctx.children[i].symbol && ctx.children[i].symbol.type == antlr4.SmackParser.Id)
				this.curFunctionSrc += ', ' +  ctx.children[i].symbol.text;
		}
		this.curFunctionSrc += ')';
	};
	Translator.prototype.exitFuncDeclParams = function(ctx) { 
		try {
			eval('this.funcs[this.curFunctionName] = ' + this.curFunctionSrc);
		} catch(e) {
			throw e;
		}
		this.curFunctionName = undefined;
		this.curFunctionSrc = '';
		this.declaredVars = {};
	};
	Translator.prototype.enterFuncDeclNoParams = function(ctx) { 
		this.curFunctionName = ctx.children[1].symbol.text;
		this.curFunctionSrc += 'function ' + this.curFunctionName + '()';
	};
	Translator.prototype.exitFuncDeclNoParams = function(ctx) { 
		this.exitFuncDeclParams(ctx); 
	};
	Translator.prototype.enterFuncInvokeParams = function(ctx) { 
		this.curFunctionSrc += 'Smack.bserver.code. ' + ctx.children[0].getText() + '(';
	};
	Translator.prototype.exitFuncInvokeParams = function(ctx) { 
		this.curFunctionSrc += ')';
	};
	Translator.prototype.enterFuncInvokeNoParams = function(ctx) { 
		this.curFunctionSrc += 'Smack.bserver.code. ' + ctx.children[0].getText() + '()';
	};
	Translator.prototype.exitFuncInvokeNoParams = function(ctx) { console.log('exitFuncInvokeNoParams'); };
	Translator.prototype.enterRetStatement = function(ctx) { 
		this.curFunctionSrc += 'return ';
	};
	Translator.prototype.exitRetStatement = function(ctx) { console.log('exitRetStatement'); };
	Translator.prototype.enterIfStat = function(ctx) { 
		this.curFunctionSrc += 'if ';
	};
	Translator.prototype.exitIfStat = function(ctx) { console.log('exitIfStat'); };
	Translator.prototype.enterElseIfStat = function(ctx) { 
		this.curFunctionSrc += 'else if ';
	};
	Translator.prototype.exitElseIfStat = function(ctx) { console.log('exitElseIfStat'); };
	Translator.prototype.enterElseStat = function(ctx) { 
		this.curFunctionSrc += 'else ';
	};
	Translator.prototype.exitElseStat = function(ctx) { console.log('exitElseStat'); };
	Translator.prototype.enterLoop = function(ctx) { 
		this.curFunctionSrc += 'while ';
	};
	Translator.prototype.exitLoop = function(ctx) { console.log('exitLoop'); };
	Translator.prototype.enterNonParenExpr = function(ctx) { console.log('enterNonParenExpr'); };
	Translator.prototype.exitNonParenExpr = function(ctx) { console.log('exitNonParenExpr'); };
	Translator.prototype.enterAtomExpr = function(ctx) { console.log('enterAtomExpr'); };
	Translator.prototype.exitAtomExpr = function(ctx) { console.log('exitAtomExpr'); };
	Translator.prototype.enterNonParenSumExpr = function(ctx) { console.log('enterNonParenSumExpr');  };
	Translator.prototype.exitNonParenSumExpr = function(ctx) { console.log('exitNonParenSumExpr');  };
	Translator.prototype.enterNonParenPowExpr = function(ctx) {
		this.curFunctionSrc += 'Math.pow(';
	};
	Translator.prototype.exitNonParenPowExpr = function(ctx) { 
		this.curFunctionSrc += ')';
	};
	Translator.prototype.enterParenExpr = function(ctx) {
		this.curFunctionSrc += '(';
	};
	Translator.prototype.exitParenExpr = function(ctx) { 
		this.curFunctionSrc += ')';
	};
	Translator.prototype.enterValResolv = function(ctx) { console.log('enterValResolv'); };
	Translator.prototype.exitValResolv = function(ctx) { console.log('exitValResolv'); };
	Translator.prototype.enterJpathResolv = function(ctx) { console.log('enterJpathResolv'); };
	Translator.prototype.exitJpathResolv = function(ctx) { console.log('exitJpathResolv'); };
	Translator.prototype.enterInvokeResolv = function(ctx) { console.log('enterInvokeResolv'); };
	Translator.prototype.exitInvokeResolv = function(ctx) { console.log('exitInvokeResolv'); };
	Translator.prototype.enterCodeBlock = function(ctx) { 
		this.curFunctionSrc += '{';
	};
	Translator.prototype.exitCodeBlock = function(ctx) { 
		this.curFunctionSrc += '}';
	};
	Translator.prototype.enterSentence = function(ctx) { console.log('enterSentence'); };
	Translator.prototype.exitSentence = function(ctx) { console.log('exitSentence'); };
	Translator.prototype.enterStatement = function(ctx) { console.log('enterStatement'); };
	Translator.prototype.exitStatement = function(ctx) { 
		this.curFunctionSrc += ';';
	};
	Translator.prototype.enterJson = function(ctx) { console.log('enterJson'); };
	Translator.prototype.exitJson = function(ctx) { console.log('exitJson'); };
	Translator.prototype.enterObject = function(ctx) { console.log('enterObject'); };
	Translator.prototype.exitObject = function(ctx) { console.log('exitObject'); };
	Translator.prototype.enterPair = function(ctx) { console.log('enterPair'); };
	Translator.prototype.exitPair = function(ctx) { console.log('exitPair'); };
	Translator.prototype.enterArray = function(ctx) { console.log('enterArray'); };
	Translator.prototype.exitArray = function(ctx) { console.log('exitArray'); };
	Translator.prototype.enterValue = function(ctx) { 
		this.curFunctionSrc += ctx.getText();
	};
	Translator.prototype.exitValue = function(ctx) { console.log('exitValue'); };
 	Translator.prototype.enterJsonPath = function(ctx) { 
 		this.curFunctionSrc += ctx.getText();
 	};
	Translator.prototype.exitJsonPath = function(ctx) { console.log('exitJsonPath'); };
	Translator.prototype.enterKeyRef = function(ctx) { console.log('enterKeyRef'); };
	Translator.prototype.exitKeyRef = function(ctx) { console.log('exitKeyRef'); };
	
	return function(name, source) {
		var tree = getParseTree(source);
		var translator = new Translator();
		try {
			antlr4.tree.ParseTreeWalker.DEFAULT.walk(translator, tree);
		} catch(e) {
			console.log(e);
		}
		return createUnit(name, source, translator.pack, translator.funcs);
	};
})();

Smack.browserRequestHandler = function(data) {
	this.latestRequest = { url : this.host + data.uri, headers : data.headers, body : data.body };
	var response;
	if(data.uri === '/connect') {
		try {
			Smack.bserver.connect(data.headers.uname, data.headers.passw, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/close') {
		try {
			Smack.bserver.close(function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/compile') {
		try {
			Smack.bserver.compile(data.body, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/delete') {
		try {
			Smack.bserver.del(data.body, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/deleteall') {
		try {
			Smack.bserver.delAll(function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/get') {
		try {
			Smack.bserver.get(data.body, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/getnames') {
		try {
			Smack.bserver.getNames(data.body, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/execute') {
		try {
			Smack.bserver.execute(data.body.name, data.body.args, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else
		throw 'Invalid uri';
}

