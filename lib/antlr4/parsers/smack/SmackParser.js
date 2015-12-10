// Generated from ./Smack.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('../../index');
var SmackListener = require('./SmackListener').SmackListener;
var SmackVisitor = require('./SmackVisitor').SmackVisitor;

var grammarFileName = "Smack.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3$\u00f1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\3\2\3\2\7\2\63\n\2\f\2\16\2\66\13\2\3\3\3\3\3\3\3\4",
    "\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4F\n\4\3\5\3\5\3\5\3\5\3",
    "\6\3\6\3\6\3\6\3\6\3\6\7\6R\n\6\f\6\16\6U\13\6\3\6\3\6\3\6\3\6\3\6\3",
    "\6\3\6\5\6^\n\6\3\7\3\7\3\7\3\7\3\7\7\7e\n\7\f\7\16\7h\13\7\3\7\3\7",
    "\3\7\3\7\3\7\5\7o\n\7\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\7\tz\n\t\f",
    "\t\16\t}\13\t\3\t\5\t\u0080\n\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\f\3",
    "\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\5\r\u0095\n\r\3\r\3\r\3\r",
    "\3\r\7\r\u009b\n\r\f\r\16\r\u009e\13\r\3\16\3\16\3\16\5\16\u00a3\n\16",
    "\3\17\7\17\u00a6\n\17\f\17\16\17\u00a9\13\17\3\20\3\20\3\20\3\20\3\20",
    "\5\20\u00b0\n\20\3\21\3\21\3\21\5\21\u00b5\n\21\3\22\3\22\5\22\u00b9",
    "\n\22\3\23\3\23\3\23\3\23\7\23\u00bf\n\23\f\23\16\23\u00c2\13\23\3\23",
    "\3\23\3\23\3\23\5\23\u00c8\n\23\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3",
    "\25\7\25\u00d2\n\25\f\25\16\25\u00d5\13\25\3\25\3\25\3\25\3\25\5\25",
    "\u00db\n\25\3\26\3\26\3\26\3\26\3\26\3\26\3\26\5\26\u00e4\n\26\3\27",
    "\3\27\7\27\u00e8\n\27\f\27\16\27\u00eb\13\27\3\30\3\30\3\30\3\30\3\30",
    "\2\3\30\31\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\2\2\u00ff",
    "\2\60\3\2\2\2\4\67\3\2\2\2\6E\3\2\2\2\bG\3\2\2\2\n]\3\2\2\2\fn\3\2\2",
    "\2\16p\3\2\2\2\20s\3\2\2\2\22\u0081\3\2\2\2\24\u0085\3\2\2\2\26\u0088",
    "\3\2\2\2\30\u0094\3\2\2\2\32\u00a2\3\2\2\2\34\u00a7\3\2\2\2\36\u00af",
    "\3\2\2\2 \u00b4\3\2\2\2\"\u00b8\3\2\2\2$\u00c7\3\2\2\2&\u00c9\3\2\2",
    "\2(\u00da\3\2\2\2*\u00e3\3\2\2\2,\u00e5\3\2\2\2.\u00ec\3\2\2\2\60\64",
    "\5\4\3\2\61\63\5\n\6\2\62\61\3\2\2\2\63\66\3\2\2\2\64\62\3\2\2\2\64",
    "\65\3\2\2\2\65\3\3\2\2\2\66\64\3\2\2\2\678\7\3\2\289\7!\2\29\5\3\2\2",
    "\2:F\7\4\2\2;F\7\5\2\2<F\7\6\2\2=F\7\7\2\2>F\7\b\2\2?F\7\t\2\2@F\7\n",
    "\2\2AF\7\13\2\2BF\7\f\2\2CF\7\r\2\2DF\7\16\2\2E:\3\2\2\2E;\3\2\2\2E",
    "<\3\2\2\2E=\3\2\2\2E>\3\2\2\2E?\3\2\2\2E@\3\2\2\2EA\3\2\2\2EB\3\2\2",
    "\2EC\3\2\2\2ED\3\2\2\2F\7\3\2\2\2GH\5,\27\2HI\7\17\2\2IJ\5\30\r\2J\t",
    "\3\2\2\2KL\7\20\2\2LM\7$\2\2MN\7\21\2\2NS\7$\2\2OP\7\22\2\2PR\7$\2\2",
    "QO\3\2\2\2RU\3\2\2\2SQ\3\2\2\2ST\3\2\2\2TV\3\2\2\2US\3\2\2\2VW\7\23",
    "\2\2W^\5\34\17\2XY\7\20\2\2YZ\7$\2\2Z[\7\21\2\2[\\\7\23\2\2\\^\5\34",
    "\17\2]K\3\2\2\2]X\3\2\2\2^\13\3\2\2\2_`\7!\2\2`a\7\21\2\2af\5\32\16",
    "\2bc\7\22\2\2ce\5\32\16\2db\3\2\2\2eh\3\2\2\2fd\3\2\2\2fg\3\2\2\2gi",
    "\3\2\2\2hf\3\2\2\2ij\7\23\2\2jo\3\2\2\2kl\7!\2\2lm\7\21\2\2mo\7\23\2",
    "\2n_\3\2\2\2nk\3\2\2\2o\r\3\2\2\2pq\7\24\2\2qr\5\30\r\2r\17\3\2\2\2",
    "st\7\25\2\2tu\7\21\2\2uv\5\30\r\2vw\7\23\2\2w{\5\34\17\2xz\5\22\n\2",
    "yx\3\2\2\2z}\3\2\2\2{y\3\2\2\2{|\3\2\2\2|\177\3\2\2\2}{\3\2\2\2~\u0080",
    "\5\24\13\2\177~\3\2\2\2\177\u0080\3\2\2\2\u0080\21\3\2\2\2\u0081\u0082",
    "\7\26\2\2\u0082\u0083\7\25\2\2\u0083\u0084\5\34\17\2\u0084\23\3\2\2",
    "\2\u0085\u0086\7\26\2\2\u0086\u0087\5\34\17\2\u0087\25\3\2\2\2\u0088",
    "\u0089\7\27\2\2\u0089\u008a\7\21\2\2\u008a\u008b\5\30\r\2\u008b\u008c",
    "\7\23\2\2\u008c\u008d\5\34\17\2\u008d\27\3\2\2\2\u008e\u008f\b\r\1\2",
    "\u008f\u0095\5\32\16\2\u0090\u0091\7\21\2\2\u0091\u0092\5\30\r\2\u0092",
    "\u0093\7\23\2\2\u0093\u0095\3\2\2\2\u0094\u008e\3\2\2\2\u0094\u0090",
    "\3\2\2\2\u0095\u009c\3\2\2\2\u0096\u0097\f\4\2\2\u0097\u0098\5\6\4\2",
    "\u0098\u0099\5\30\r\5\u0099\u009b\3\2\2\2\u009a\u0096\3\2\2\2\u009b",
    "\u009e\3\2\2\2\u009c\u009a\3\2\2\2\u009c\u009d\3\2\2\2\u009d\31\3\2",
    "\2\2\u009e\u009c\3\2\2\2\u009f\u00a3\5*\26\2\u00a0\u00a3\5,\27\2\u00a1",
    "\u00a3\5\f\7\2\u00a2\u009f\3\2\2\2\u00a2\u00a0\3\2\2\2\u00a2\u00a1\3",
    "\2\2\2\u00a3\33\3\2\2\2\u00a4\u00a6\5\36\20\2\u00a5\u00a4\3\2\2\2\u00a6",
    "\u00a9\3\2\2\2\u00a7\u00a5\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\35\3\2",
    "\2\2\u00a9\u00a7\3\2\2\2\u00aa\u00ab\5 \21\2\u00ab\u00ac\7\30\2\2\u00ac",
    "\u00b0\3\2\2\2\u00ad\u00b0\5\26\f\2\u00ae\u00b0\5\20\t\2\u00af\u00aa",
    "\3\2\2\2\u00af\u00ad\3\2\2\2\u00af\u00ae\3\2\2\2\u00b0\37\3\2\2\2\u00b1",
    "\u00b5\5\b\5\2\u00b2\u00b5\5\f\7\2\u00b3\u00b5\5\16\b\2\u00b4\u00b1",
    "\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b4\u00b3\3\2\2\2\u00b5!\3\2\2\2\u00b6",
    "\u00b9\5$\23\2\u00b7\u00b9\5(\25\2\u00b8\u00b6\3\2\2\2\u00b8\u00b7\3",
    "\2\2\2\u00b9#\3\2\2\2\u00ba\u00bb\7\31\2\2\u00bb\u00c0\5&\24\2\u00bc",
    "\u00bd\7\22\2\2\u00bd\u00bf\5&\24\2\u00be\u00bc\3\2\2\2\u00bf\u00c2",
    "\3\2\2\2\u00c0\u00be\3\2\2\2\u00c0\u00c1\3\2\2\2\u00c1\u00c3\3\2\2\2",
    "\u00c2\u00c0\3\2\2\2\u00c3\u00c4\7\32\2\2\u00c4\u00c8\3\2\2\2\u00c5",
    "\u00c6\7\31\2\2\u00c6\u00c8\7\32\2\2\u00c7\u00ba\3\2\2\2\u00c7\u00c5",
    "\3\2\2\2\u00c8%\3\2\2\2\u00c9\u00ca\7\"\2\2\u00ca\u00cb\7\33\2\2\u00cb",
    "\u00cc\5*\26\2\u00cc\'\3\2\2\2\u00cd\u00ce\7\34\2\2\u00ce\u00d3\5*\26",
    "\2\u00cf\u00d0\7\22\2\2\u00d0\u00d2\5*\26\2\u00d1\u00cf\3\2\2\2\u00d2",
    "\u00d5\3\2\2\2\u00d3\u00d1\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4\u00d6\3",
    "\2\2\2\u00d5\u00d3\3\2\2\2\u00d6\u00d7\7\35\2\2\u00d7\u00db\3\2\2\2",
    "\u00d8\u00d9\7\34\2\2\u00d9\u00db\7\35\2\2\u00da\u00cd\3\2\2\2\u00da",
    "\u00d8\3\2\2\2\u00db)\3\2\2\2\u00dc\u00e4\7\"\2\2\u00dd\u00e4\7#\2\2",
    "\u00de\u00e4\5$\23\2\u00df\u00e4\5(\25\2\u00e0\u00e4\7\36\2\2\u00e1",
    "\u00e4\7\37\2\2\u00e2\u00e4\7 \2\2\u00e3\u00dc\3\2\2\2\u00e3\u00dd\3",
    "\2\2\2\u00e3\u00de\3\2\2\2\u00e3\u00df\3\2\2\2\u00e3\u00e0\3\2\2\2\u00e3",
    "\u00e1\3\2\2\2\u00e3\u00e2\3\2\2\2\u00e4+\3\2\2\2\u00e5\u00e9\7$\2\2",
    "\u00e6\u00e8\5.\30\2\u00e7\u00e6\3\2\2\2\u00e8\u00eb\3\2\2\2\u00e9\u00e7",
    "\3\2\2\2\u00e9\u00ea\3\2\2\2\u00ea-\3\2\2\2\u00eb\u00e9\3\2\2\2\u00ec",
    "\u00ed\7\34\2\2\u00ed\u00ee\7\"\2\2\u00ee\u00ef\7\35\2\2\u00ef/\3\2",
    "\2\2\27\64ES]fn{\177\u0094\u009c\u00a2\u00a7\u00af\u00b4\u00b8\u00c0",
    "\u00c7\u00d3\u00da\u00e3\u00e9"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'pack'", "'+'", "'-'", "'*'", "'/'", "'%'", 
                     "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'='", 
                     "'func'", "'('", "','", "')'", "'ret'", "'if'", "'else'", 
                     "'while'", "';'", "'{'", "'}'", "':'", "'['", "']'", 
                     "'true'", "'false'", "'null'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', "DottedId", "STRING", "NUMBER", 
                      "Id" ];

var ruleNames =  [ "smkFile", "packageDecl", "op", "varAssign", "funcDecl", 
                   "funcInvoke", "retStatement", "ifStat", "elseIfStat", 
                   "elseStat", "loop", "expression", "resolvable", "codeBlock", 
                   "centence", "statement", "json", "object", "pair", "array", 
                   "value", "jsonPath", "keyRef" ];

function SmackParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SmackParser.prototype = Object.create(antlr4.Parser.prototype);
SmackParser.prototype.constructor = SmackParser;

Object.defineProperty(SmackParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SmackParser.EOF = antlr4.Token.EOF;
SmackParser.T__0 = 1;
SmackParser.T__1 = 2;
SmackParser.T__2 = 3;
SmackParser.T__3 = 4;
SmackParser.T__4 = 5;
SmackParser.T__5 = 6;
SmackParser.T__6 = 7;
SmackParser.T__7 = 8;
SmackParser.T__8 = 9;
SmackParser.T__9 = 10;
SmackParser.T__10 = 11;
SmackParser.T__11 = 12;
SmackParser.T__12 = 13;
SmackParser.T__13 = 14;
SmackParser.T__14 = 15;
SmackParser.T__15 = 16;
SmackParser.T__16 = 17;
SmackParser.T__17 = 18;
SmackParser.T__18 = 19;
SmackParser.T__19 = 20;
SmackParser.T__20 = 21;
SmackParser.T__21 = 22;
SmackParser.T__22 = 23;
SmackParser.T__23 = 24;
SmackParser.T__24 = 25;
SmackParser.T__25 = 26;
SmackParser.T__26 = 27;
SmackParser.T__27 = 28;
SmackParser.T__28 = 29;
SmackParser.T__29 = 30;
SmackParser.DottedId = 31;
SmackParser.STRING = 32;
SmackParser.NUMBER = 33;
SmackParser.Id = 34;

SmackParser.RULE_smkFile = 0;
SmackParser.RULE_packageDecl = 1;
SmackParser.RULE_op = 2;
SmackParser.RULE_varAssign = 3;
SmackParser.RULE_funcDecl = 4;
SmackParser.RULE_funcInvoke = 5;
SmackParser.RULE_retStatement = 6;
SmackParser.RULE_ifStat = 7;
SmackParser.RULE_elseIfStat = 8;
SmackParser.RULE_elseStat = 9;
SmackParser.RULE_loop = 10;
SmackParser.RULE_expression = 11;
SmackParser.RULE_resolvable = 12;
SmackParser.RULE_codeBlock = 13;
SmackParser.RULE_centence = 14;
SmackParser.RULE_statement = 15;
SmackParser.RULE_json = 16;
SmackParser.RULE_object = 17;
SmackParser.RULE_pair = 18;
SmackParser.RULE_array = 19;
SmackParser.RULE_value = 20;
SmackParser.RULE_jsonPath = 21;
SmackParser.RULE_keyRef = 22;

function SmkFileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_smkFile;
    return this;
}

SmkFileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SmkFileContext.prototype.constructor = SmkFileContext;

SmkFileContext.prototype.packageDecl = function() {
    return this.getTypedRuleContext(PackageDeclContext,0);
};

SmkFileContext.prototype.funcDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FuncDeclContext);
    } else {
        return this.getTypedRuleContext(FuncDeclContext,i);
    }
};

SmkFileContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterSmkFile(this);
	}
};

SmkFileContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitSmkFile(this);
	}
};

SmkFileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitSmkFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.SmkFileContext = SmkFileContext;

SmackParser.prototype.smkFile = function() {

    var localctx = new SmkFileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SmackParser.RULE_smkFile);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.packageDecl();
        this.state = 50;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__13) {
            this.state = 47;
            this.funcDecl();
            this.state = 52;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PackageDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_packageDecl;
    return this;
}

PackageDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PackageDeclContext.prototype.constructor = PackageDeclContext;

PackageDeclContext.prototype.DottedId = function() {
    return this.getToken(SmackParser.DottedId, 0);
};

PackageDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterPackageDecl(this);
	}
};

PackageDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitPackageDecl(this);
	}
};

PackageDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitPackageDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.PackageDeclContext = PackageDeclContext;

SmackParser.prototype.packageDecl = function() {

    var localctx = new PackageDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SmackParser.RULE_packageDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(SmackParser.T__0);
        this.state = 54;
        this.match(SmackParser.DottedId);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_op;
    return this;
}

OpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OpContext.prototype.constructor = OpContext;


 
OpContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DivContext(parser, ctx) {
	OpContext.call(this, parser);
    OpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivContext.prototype = Object.create(OpContext.prototype);
DivContext.prototype.constructor = DivContext;

SmackParser.DivContext = DivContext;

DivContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterDiv(this);
	}
};

DivContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitDiv(this);
	}
};

DivContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitDiv(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MinusContext(parser, ctx) {
	OpContext.call(this, parser);
    OpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MinusContext.prototype = Object.create(OpContext.prototype);
MinusContext.prototype.constructor = MinusContext;

SmackParser.MinusContext = MinusContext;

MinusContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterMinus(this);
	}
};

MinusContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitMinus(this);
	}
};

MinusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitMinus(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ModContext(parser, ctx) {
	OpContext.call(this, parser);
    OpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ModContext.prototype = Object.create(OpContext.prototype);
ModContext.prototype.constructor = ModContext;

SmackParser.ModContext = ModContext;

ModContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterMod(this);
	}
};

ModContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitMod(this);
	}
};

ModContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitMod(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MulContext(parser, ctx) {
	OpContext.call(this, parser);
    OpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulContext.prototype = Object.create(OpContext.prototype);
MulContext.prototype.constructor = MulContext;

SmackParser.MulContext = MulContext;

MulContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterMul(this);
	}
};

MulContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitMul(this);
	}
};

MulContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitMul(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LtContext(parser, ctx) {
	OpContext.call(this, parser);
    OpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LtContext.prototype = Object.create(OpContext.prototype);
LtContext.prototype.constructor = LtContext;

SmackParser.LtContext = LtContext;

LtContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterLt(this);
	}
};

LtContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitLt(this);
	}
};

LtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitLt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LeContext(parser, ctx) {
	OpContext.call(this, parser);
    OpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LeContext.prototype = Object.create(OpContext.prototype);
LeContext.prototype.constructor = LeContext;

SmackParser.LeContext = LeContext;

LeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterLe(this);
	}
};

LeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitLe(this);
	}
};

LeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitLe(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NeqContext(parser, ctx) {
	OpContext.call(this, parser);
    OpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NeqContext.prototype = Object.create(OpContext.prototype);
NeqContext.prototype.constructor = NeqContext;

SmackParser.NeqContext = NeqContext;

NeqContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterNeq(this);
	}
};

NeqContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitNeq(this);
	}
};

NeqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitNeq(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqContext(parser, ctx) {
	OpContext.call(this, parser);
    OpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqContext.prototype = Object.create(OpContext.prototype);
EqContext.prototype.constructor = EqContext;

SmackParser.EqContext = EqContext;

EqContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterEq(this);
	}
};

EqContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitEq(this);
	}
};

EqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitEq(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GtContext(parser, ctx) {
	OpContext.call(this, parser);
    OpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GtContext.prototype = Object.create(OpContext.prototype);
GtContext.prototype.constructor = GtContext;

SmackParser.GtContext = GtContext;

GtContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterGt(this);
	}
};

GtContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitGt(this);
	}
};

GtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitGt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PlusContext(parser, ctx) {
	OpContext.call(this, parser);
    OpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PlusContext.prototype = Object.create(OpContext.prototype);
PlusContext.prototype.constructor = PlusContext;

SmackParser.PlusContext = PlusContext;

PlusContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterPlus(this);
	}
};

PlusContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitPlus(this);
	}
};

PlusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitPlus(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GeContext(parser, ctx) {
	OpContext.call(this, parser);
    OpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GeContext.prototype = Object.create(OpContext.prototype);
GeContext.prototype.constructor = GeContext;

SmackParser.GeContext = GeContext;

GeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterGe(this);
	}
};

GeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitGe(this);
	}
};

GeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitGe(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SmackParser.OpContext = OpContext;

SmackParser.prototype.op = function() {

    var localctx = new OpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SmackParser.RULE_op);
    try {
        this.state = 67;
        switch(this._input.LA(1)) {
        case SmackParser.T__1:
            localctx = new PlusContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 56;
            this.match(SmackParser.T__1);
            break;
        case SmackParser.T__2:
            localctx = new MinusContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 57;
            this.match(SmackParser.T__2);
            break;
        case SmackParser.T__3:
            localctx = new MulContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 58;
            this.match(SmackParser.T__3);
            break;
        case SmackParser.T__4:
            localctx = new DivContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 59;
            this.match(SmackParser.T__4);
            break;
        case SmackParser.T__5:
            localctx = new ModContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 60;
            this.match(SmackParser.T__5);
            break;
        case SmackParser.T__6:
            localctx = new EqContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 61;
            this.match(SmackParser.T__6);
            break;
        case SmackParser.T__7:
            localctx = new NeqContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 62;
            this.match(SmackParser.T__7);
            break;
        case SmackParser.T__8:
            localctx = new LtContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 63;
            this.match(SmackParser.T__8);
            break;
        case SmackParser.T__9:
            localctx = new LeContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 64;
            this.match(SmackParser.T__9);
            break;
        case SmackParser.T__10:
            localctx = new GtContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 65;
            this.match(SmackParser.T__10);
            break;
        case SmackParser.T__11:
            localctx = new GeContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 66;
            this.match(SmackParser.T__11);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarAssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_varAssign;
    return this;
}

VarAssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarAssignContext.prototype.constructor = VarAssignContext;

VarAssignContext.prototype.jsonPath = function() {
    return this.getTypedRuleContext(JsonPathContext,0);
};

VarAssignContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

VarAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterVarAssign(this);
	}
};

VarAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitVarAssign(this);
	}
};

VarAssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitVarAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.VarAssignContext = VarAssignContext;

SmackParser.prototype.varAssign = function() {

    var localctx = new VarAssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SmackParser.RULE_varAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this.jsonPath();
        this.state = 70;
        this.match(SmackParser.T__12);
        this.state = 71;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FuncDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_funcDecl;
    return this;
}

FuncDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncDeclContext.prototype.constructor = FuncDeclContext;


 
FuncDeclContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function FuncDeclNoParamsContext(parser, ctx) {
	FuncDeclContext.call(this, parser);
    FuncDeclContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncDeclNoParamsContext.prototype = Object.create(FuncDeclContext.prototype);
FuncDeclNoParamsContext.prototype.constructor = FuncDeclNoParamsContext;

SmackParser.FuncDeclNoParamsContext = FuncDeclNoParamsContext;

FuncDeclNoParamsContext.prototype.Id = function() {
    return this.getToken(SmackParser.Id, 0);
};

FuncDeclNoParamsContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};
FuncDeclNoParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterFuncDeclNoParams(this);
	}
};

FuncDeclNoParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitFuncDeclNoParams(this);
	}
};

FuncDeclNoParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitFuncDeclNoParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FuncDeclParamsContext(parser, ctx) {
	FuncDeclContext.call(this, parser);
    FuncDeclContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncDeclParamsContext.prototype = Object.create(FuncDeclContext.prototype);
FuncDeclParamsContext.prototype.constructor = FuncDeclParamsContext;

SmackParser.FuncDeclParamsContext = FuncDeclParamsContext;

FuncDeclParamsContext.prototype.Id = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmackParser.Id);
    } else {
        return this.getToken(SmackParser.Id, i);
    }
};


FuncDeclParamsContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};
FuncDeclParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterFuncDeclParams(this);
	}
};

FuncDeclParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitFuncDeclParams(this);
	}
};

FuncDeclParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitFuncDeclParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SmackParser.FuncDeclContext = FuncDeclContext;

SmackParser.prototype.funcDecl = function() {

    var localctx = new FuncDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SmackParser.RULE_funcDecl);
    var _la = 0; // Token type
    try {
        this.state = 91;
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FuncDeclParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 73;
            this.match(SmackParser.T__13);
            this.state = 74;
            this.match(SmackParser.Id);
            this.state = 75;
            this.match(SmackParser.T__14);
            this.state = 76;
            this.match(SmackParser.Id);
            this.state = 81;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__15) {
                this.state = 77;
                this.match(SmackParser.T__15);
                this.state = 78;
                this.match(SmackParser.Id);
                this.state = 83;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 84;
            this.match(SmackParser.T__16);
            this.state = 85;
            this.codeBlock();
            break;

        case 2:
            localctx = new FuncDeclNoParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 86;
            this.match(SmackParser.T__13);
            this.state = 87;
            this.match(SmackParser.Id);
            this.state = 88;
            this.match(SmackParser.T__14);
            this.state = 89;
            this.match(SmackParser.T__16);
            this.state = 90;
            this.codeBlock();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FuncInvokeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_funcInvoke;
    return this;
}

FuncInvokeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncInvokeContext.prototype.constructor = FuncInvokeContext;


 
FuncInvokeContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function FuncInvokeNoParamsContext(parser, ctx) {
	FuncInvokeContext.call(this, parser);
    FuncInvokeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncInvokeNoParamsContext.prototype = Object.create(FuncInvokeContext.prototype);
FuncInvokeNoParamsContext.prototype.constructor = FuncInvokeNoParamsContext;

SmackParser.FuncInvokeNoParamsContext = FuncInvokeNoParamsContext;

FuncInvokeNoParamsContext.prototype.DottedId = function() {
    return this.getToken(SmackParser.DottedId, 0);
};
FuncInvokeNoParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterFuncInvokeNoParams(this);
	}
};

FuncInvokeNoParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitFuncInvokeNoParams(this);
	}
};

FuncInvokeNoParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitFuncInvokeNoParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FuncInvokeParamsContext(parser, ctx) {
	FuncInvokeContext.call(this, parser);
    FuncInvokeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncInvokeParamsContext.prototype = Object.create(FuncInvokeContext.prototype);
FuncInvokeParamsContext.prototype.constructor = FuncInvokeParamsContext;

SmackParser.FuncInvokeParamsContext = FuncInvokeParamsContext;

FuncInvokeParamsContext.prototype.DottedId = function() {
    return this.getToken(SmackParser.DottedId, 0);
};

FuncInvokeParamsContext.prototype.resolvable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ResolvableContext);
    } else {
        return this.getTypedRuleContext(ResolvableContext,i);
    }
};
FuncInvokeParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterFuncInvokeParams(this);
	}
};

FuncInvokeParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitFuncInvokeParams(this);
	}
};

FuncInvokeParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitFuncInvokeParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SmackParser.FuncInvokeContext = FuncInvokeContext;

SmackParser.prototype.funcInvoke = function() {

    var localctx = new FuncInvokeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SmackParser.RULE_funcInvoke);
    var _la = 0; // Token type
    try {
        this.state = 108;
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FuncInvokeParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 93;
            this.match(SmackParser.DottedId);
            this.state = 94;
            this.match(SmackParser.T__14);
            this.state = 95;
            this.resolvable();
            this.state = 100;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__15) {
                this.state = 96;
                this.match(SmackParser.T__15);
                this.state = 97;
                this.resolvable();
                this.state = 102;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 103;
            this.match(SmackParser.T__16);
            break;

        case 2:
            localctx = new FuncInvokeNoParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 105;
            this.match(SmackParser.DottedId);
            this.state = 106;
            this.match(SmackParser.T__14);
            this.state = 107;
            this.match(SmackParser.T__16);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RetStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_retStatement;
    return this;
}

RetStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RetStatementContext.prototype.constructor = RetStatementContext;

RetStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RetStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterRetStatement(this);
	}
};

RetStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitRetStatement(this);
	}
};

RetStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitRetStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.RetStatementContext = RetStatementContext;

SmackParser.prototype.retStatement = function() {

    var localctx = new RetStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SmackParser.RULE_retStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.match(SmackParser.T__17);
        this.state = 111;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_ifStat;
    return this;
}

IfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatContext.prototype.constructor = IfStatContext;

IfStatContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfStatContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};

IfStatContext.prototype.elseIfStat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElseIfStatContext);
    } else {
        return this.getTypedRuleContext(ElseIfStatContext,i);
    }
};

IfStatContext.prototype.elseStat = function() {
    return this.getTypedRuleContext(ElseStatContext,0);
};

IfStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterIfStat(this);
	}
};

IfStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitIfStat(this);
	}
};

IfStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitIfStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.IfStatContext = IfStatContext;

SmackParser.prototype.ifStat = function() {

    var localctx = new IfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SmackParser.RULE_ifStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(SmackParser.T__18);
        this.state = 114;
        this.match(SmackParser.T__14);
        this.state = 115;
        this.expression(0);
        this.state = 116;
        this.match(SmackParser.T__16);
        this.state = 117;
        this.codeBlock();
        this.state = 121;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 118;
                this.elseIfStat(); 
            }
            this.state = 123;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

        this.state = 125;
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        if(la_===1) {
            this.state = 124;
            this.elseStat();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseIfStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_elseIfStat;
    return this;
}

ElseIfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseIfStatContext.prototype.constructor = ElseIfStatContext;

ElseIfStatContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};

ElseIfStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterElseIfStat(this);
	}
};

ElseIfStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitElseIfStat(this);
	}
};

ElseIfStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitElseIfStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.ElseIfStatContext = ElseIfStatContext;

SmackParser.prototype.elseIfStat = function() {

    var localctx = new ElseIfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SmackParser.RULE_elseIfStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.match(SmackParser.T__19);
        this.state = 128;
        this.match(SmackParser.T__18);
        this.state = 129;
        this.codeBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_elseStat;
    return this;
}

ElseStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseStatContext.prototype.constructor = ElseStatContext;

ElseStatContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};

ElseStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterElseStat(this);
	}
};

ElseStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitElseStat(this);
	}
};

ElseStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitElseStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.ElseStatContext = ElseStatContext;

SmackParser.prototype.elseStat = function() {

    var localctx = new ElseStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SmackParser.RULE_elseStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.match(SmackParser.T__19);
        this.state = 132;
        this.codeBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

LoopContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitLoop(this);
	}
};

LoopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitLoop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.LoopContext = LoopContext;

SmackParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SmackParser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(SmackParser.T__20);
        this.state = 135;
        this.match(SmackParser.T__14);
        this.state = 136;
        this.expression(0);
        this.state = 137;
        this.match(SmackParser.T__16);
        this.state = 138;
        this.codeBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function NonParenExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NonParenExprContext.prototype = Object.create(ExpressionContext.prototype);
NonParenExprContext.prototype.constructor = NonParenExprContext;

SmackParser.NonParenExprContext = NonParenExprContext;

NonParenExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

NonParenExprContext.prototype.op = function() {
    return this.getTypedRuleContext(OpContext,0);
};
NonParenExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterNonParenExpr(this);
	}
};

NonParenExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitNonParenExpr(this);
	}
};

NonParenExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitNonParenExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AtomExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomExprContext.prototype = Object.create(ExpressionContext.prototype);
AtomExprContext.prototype.constructor = AtomExprContext;

SmackParser.AtomExprContext = AtomExprContext;

AtomExprContext.prototype.resolvable = function() {
    return this.getTypedRuleContext(ResolvableContext,0);
};
AtomExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterAtomExpr(this);
	}
};

AtomExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitAtomExpr(this);
	}
};

AtomExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitAtomExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenExprContext.prototype = Object.create(ExpressionContext.prototype);
ParenExprContext.prototype.constructor = ParenExprContext;

SmackParser.ParenExprContext = ParenExprContext;

ParenExprContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ParenExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterParenExpr(this);
	}
};

ParenExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitParenExpr(this);
	}
};

ParenExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitParenExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SmackParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 22;
    this.enterRecursionRule(localctx, 22, SmackParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        switch(this._input.LA(1)) {
        case SmackParser.T__22:
        case SmackParser.T__25:
        case SmackParser.T__27:
        case SmackParser.T__28:
        case SmackParser.T__29:
        case SmackParser.DottedId:
        case SmackParser.STRING:
        case SmackParser.NUMBER:
        case SmackParser.Id:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 141;
            this.resolvable();
            break;
        case SmackParser.T__14:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 142;
            this.match(SmackParser.T__14);
            this.state = 143;
            this.expression(0);
            this.state = 144;
            this.match(SmackParser.T__16);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 154;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new NonParenExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                this.state = 148;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 149;
                this.op();
                this.state = 150;
                this.expression(3); 
            }
            this.state = 156;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ResolvableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_resolvable;
    return this;
}

ResolvableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResolvableContext.prototype.constructor = ResolvableContext;


 
ResolvableContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ValResolvContext(parser, ctx) {
	ResolvableContext.call(this, parser);
    ResolvableContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValResolvContext.prototype = Object.create(ResolvableContext.prototype);
ValResolvContext.prototype.constructor = ValResolvContext;

SmackParser.ValResolvContext = ValResolvContext;

ValResolvContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
ValResolvContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterValResolv(this);
	}
};

ValResolvContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitValResolv(this);
	}
};

ValResolvContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitValResolv(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function JpathResolvContext(parser, ctx) {
	ResolvableContext.call(this, parser);
    ResolvableContext.prototype.copyFrom.call(this, ctx);
    return this;
}

JpathResolvContext.prototype = Object.create(ResolvableContext.prototype);
JpathResolvContext.prototype.constructor = JpathResolvContext;

SmackParser.JpathResolvContext = JpathResolvContext;

JpathResolvContext.prototype.jsonPath = function() {
    return this.getTypedRuleContext(JsonPathContext,0);
};
JpathResolvContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterJpathResolv(this);
	}
};

JpathResolvContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitJpathResolv(this);
	}
};

JpathResolvContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitJpathResolv(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InvokeResolvContext(parser, ctx) {
	ResolvableContext.call(this, parser);
    ResolvableContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InvokeResolvContext.prototype = Object.create(ResolvableContext.prototype);
InvokeResolvContext.prototype.constructor = InvokeResolvContext;

SmackParser.InvokeResolvContext = InvokeResolvContext;

InvokeResolvContext.prototype.funcInvoke = function() {
    return this.getTypedRuleContext(FuncInvokeContext,0);
};
InvokeResolvContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterInvokeResolv(this);
	}
};

InvokeResolvContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitInvokeResolv(this);
	}
};

InvokeResolvContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitInvokeResolv(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SmackParser.ResolvableContext = ResolvableContext;

SmackParser.prototype.resolvable = function() {

    var localctx = new ResolvableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SmackParser.RULE_resolvable);
    try {
        this.state = 160;
        switch(this._input.LA(1)) {
        case SmackParser.T__22:
        case SmackParser.T__25:
        case SmackParser.T__27:
        case SmackParser.T__28:
        case SmackParser.T__29:
        case SmackParser.STRING:
        case SmackParser.NUMBER:
            localctx = new ValResolvContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 157;
            this.value();
            break;
        case SmackParser.Id:
            localctx = new JpathResolvContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 158;
            this.jsonPath();
            break;
        case SmackParser.DottedId:
            localctx = new InvokeResolvContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 159;
            this.funcInvoke();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CodeBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_codeBlock;
    return this;
}

CodeBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeBlockContext.prototype.constructor = CodeBlockContext;

CodeBlockContext.prototype.centence = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CentenceContext);
    } else {
        return this.getTypedRuleContext(CentenceContext,i);
    }
};

CodeBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterCodeBlock(this);
	}
};

CodeBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitCodeBlock(this);
	}
};

CodeBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitCodeBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.CodeBlockContext = CodeBlockContext;

SmackParser.prototype.codeBlock = function() {

    var localctx = new CodeBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SmackParser.RULE_codeBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 162;
                this.centence(); 
            }
            this.state = 167;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CentenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_centence;
    return this;
}

CentenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CentenceContext.prototype.constructor = CentenceContext;

CentenceContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

CentenceContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

CentenceContext.prototype.ifStat = function() {
    return this.getTypedRuleContext(IfStatContext,0);
};

CentenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterCentence(this);
	}
};

CentenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitCentence(this);
	}
};

CentenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitCentence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.CentenceContext = CentenceContext;

SmackParser.prototype.centence = function() {

    var localctx = new CentenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SmackParser.RULE_centence);
    try {
        this.state = 173;
        switch(this._input.LA(1)) {
        case SmackParser.T__17:
        case SmackParser.DottedId:
        case SmackParser.Id:
            this.enterOuterAlt(localctx, 1);
            this.state = 168;
            this.statement();
            this.state = 169;
            this.match(SmackParser.T__21);
            break;
        case SmackParser.T__20:
            this.enterOuterAlt(localctx, 2);
            this.state = 171;
            this.loop();
            break;
        case SmackParser.T__18:
            this.enterOuterAlt(localctx, 3);
            this.state = 172;
            this.ifStat();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.varAssign = function() {
    return this.getTypedRuleContext(VarAssignContext,0);
};

StatementContext.prototype.funcInvoke = function() {
    return this.getTypedRuleContext(FuncInvokeContext,0);
};

StatementContext.prototype.retStatement = function() {
    return this.getTypedRuleContext(RetStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.StatementContext = StatementContext;

SmackParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SmackParser.RULE_statement);
    try {
        this.state = 178;
        switch(this._input.LA(1)) {
        case SmackParser.Id:
            this.enterOuterAlt(localctx, 1);
            this.state = 175;
            this.varAssign();
            break;
        case SmackParser.DottedId:
            this.enterOuterAlt(localctx, 2);
            this.state = 176;
            this.funcInvoke();
            break;
        case SmackParser.T__17:
            this.enterOuterAlt(localctx, 3);
            this.state = 177;
            this.retStatement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function JsonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_json;
    return this;
}

JsonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JsonContext.prototype.constructor = JsonContext;

JsonContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};

JsonContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

JsonContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterJson(this);
	}
};

JsonContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitJson(this);
	}
};

JsonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitJson(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.JsonContext = JsonContext;

SmackParser.prototype.json = function() {

    var localctx = new JsonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SmackParser.RULE_json);
    try {
        this.state = 182;
        switch(this._input.LA(1)) {
        case SmackParser.T__22:
            this.enterOuterAlt(localctx, 1);
            this.state = 180;
            this.object();
            break;
        case SmackParser.T__25:
            this.enterOuterAlt(localctx, 2);
            this.state = 181;
            this.array();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_object;
    return this;
}

ObjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectContext.prototype.constructor = ObjectContext;

ObjectContext.prototype.pair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PairContext);
    } else {
        return this.getTypedRuleContext(PairContext,i);
    }
};

ObjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterObject(this);
	}
};

ObjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitObject(this);
	}
};

ObjectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitObject(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.ObjectContext = ObjectContext;

SmackParser.prototype.object = function() {

    var localctx = new ObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SmackParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.state = 197;
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 184;
            this.match(SmackParser.T__22);
            this.state = 185;
            this.pair();
            this.state = 190;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__15) {
                this.state = 186;
                this.match(SmackParser.T__15);
                this.state = 187;
                this.pair();
                this.state = 192;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 193;
            this.match(SmackParser.T__23);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 195;
            this.match(SmackParser.T__22);
            this.state = 196;
            this.match(SmackParser.T__23);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_pair;
    return this;
}

PairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PairContext.prototype.constructor = PairContext;

PairContext.prototype.STRING = function() {
    return this.getToken(SmackParser.STRING, 0);
};

PairContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

PairContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterPair(this);
	}
};

PairContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitPair(this);
	}
};

PairContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitPair(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.PairContext = PairContext;

SmackParser.prototype.pair = function() {

    var localctx = new PairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SmackParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(SmackParser.STRING);
        this.state = 200;
        this.match(SmackParser.T__24);
        this.state = 201;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitArray(this);
	}
};

ArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.ArrayContext = ArrayContext;

SmackParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SmackParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.state = 216;
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 203;
            this.match(SmackParser.T__25);
            this.state = 204;
            this.value();
            this.state = 209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__15) {
                this.state = 205;
                this.match(SmackParser.T__15);
                this.state = 206;
                this.value();
                this.state = 211;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 212;
            this.match(SmackParser.T__26);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 214;
            this.match(SmackParser.T__25);
            this.state = 215;
            this.match(SmackParser.T__26);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.STRING = function() {
    return this.getToken(SmackParser.STRING, 0);
};

ValueContext.prototype.NUMBER = function() {
    return this.getToken(SmackParser.NUMBER, 0);
};

ValueContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};

ValueContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.ValueContext = ValueContext;

SmackParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SmackParser.RULE_value);
    try {
        this.state = 225;
        switch(this._input.LA(1)) {
        case SmackParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 218;
            this.match(SmackParser.STRING);
            break;
        case SmackParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 219;
            this.match(SmackParser.NUMBER);
            break;
        case SmackParser.T__22:
            this.enterOuterAlt(localctx, 3);
            this.state = 220;
            this.object();
            break;
        case SmackParser.T__25:
            this.enterOuterAlt(localctx, 4);
            this.state = 221;
            this.array();
            break;
        case SmackParser.T__27:
            this.enterOuterAlt(localctx, 5);
            this.state = 222;
            this.match(SmackParser.T__27);
            break;
        case SmackParser.T__28:
            this.enterOuterAlt(localctx, 6);
            this.state = 223;
            this.match(SmackParser.T__28);
            break;
        case SmackParser.T__29:
            this.enterOuterAlt(localctx, 7);
            this.state = 224;
            this.match(SmackParser.T__29);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function JsonPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_jsonPath;
    return this;
}

JsonPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JsonPathContext.prototype.constructor = JsonPathContext;

JsonPathContext.prototype.Id = function() {
    return this.getToken(SmackParser.Id, 0);
};

JsonPathContext.prototype.keyRef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(KeyRefContext);
    } else {
        return this.getTypedRuleContext(KeyRefContext,i);
    }
};

JsonPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterJsonPath(this);
	}
};

JsonPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitJsonPath(this);
	}
};

JsonPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitJsonPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.JsonPathContext = JsonPathContext;

SmackParser.prototype.jsonPath = function() {

    var localctx = new JsonPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SmackParser.RULE_jsonPath);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.match(SmackParser.Id);
        this.state = 231;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 228;
                this.keyRef(); 
            }
            this.state = 233;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function KeyRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_keyRef;
    return this;
}

KeyRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyRefContext.prototype.constructor = KeyRefContext;

KeyRefContext.prototype.STRING = function() {
    return this.getToken(SmackParser.STRING, 0);
};

KeyRefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterKeyRef(this);
	}
};

KeyRefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitKeyRef(this);
	}
};

KeyRefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitKeyRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.KeyRefContext = KeyRefContext;

SmackParser.prototype.keyRef = function() {

    var localctx = new KeyRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SmackParser.RULE_keyRef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        this.match(SmackParser.T__25);
        this.state = 235;
        this.match(SmackParser.STRING);
        this.state = 236;
        this.match(SmackParser.T__26);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


SmackParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 11:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

SmackParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.SmackParser = SmackParser;
