// Generated from ./Smack.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('../../index');
var SmackListener = require('./SmackListener').SmackListener;
var SmackVisitor = require('./SmackVisitor').SmackVisitor;

var grammarFileName = "Smack.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3&\u0101\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\3\2\3\2\7\2\65\n\2\f\2\16\28\13\2\3\3\3\3",
    "\3\3\3\3\3\4\3\4\3\4\7\4A\n\4\f\4\16\4D\13\4\3\5\3\5\7\5H\n\5\f\5\16",
    "\5K\13\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7",
    "\3\7\5\7]\n\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\7\ti\n\t\f\t\16",
    "\tl\13\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\tu\n\t\3\n\3\n\3\n\3\n\3\n\7",
    "\n|\n\n\f\n\16\n\177\13\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n\u0087\n\n\3\13",
    "\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\7\f\u0092\n\f\f\f\16\f\u0095\13\f",
    "\3\f\5\f\u0098\n\f\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\17\3\17\3\17\3\17",
    "\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\5\20\u00ad\n\20\3\20\3\20\3",
    "\20\3\20\7\20\u00b3\n\20\f\20\16\20\u00b6\13\20\3\21\3\21\3\21\5\21",
    "\u00bb\n\21\3\22\3\22\7\22\u00bf\n\22\f\22\16\22\u00c2\13\22\3\22\3",
    "\22\3\23\3\23\3\23\3\23\3\23\5\23\u00cb\n\23\3\24\3\24\3\24\5\24\u00d0",
    "\n\24\3\25\3\25\5\25\u00d4\n\25\3\26\3\26\3\26\3\26\7\26\u00da\n\26",
    "\f\26\16\26\u00dd\13\26\3\26\3\26\3\26\3\26\5\26\u00e3\n\26\3\27\3\27",
    "\3\27\3\27\3\30\3\30\3\30\3\30\7\30\u00ed\n\30\f\30\16\30\u00f0\13\30",
    "\3\30\3\30\3\30\3\30\5\30\u00f6\n\30\3\31\3\31\3\31\3\31\3\31\3\31\3",
    "\31\5\31\u00ff\n\31\3\31\2\3\36\32\2\4\6\b\n\f\16\20\22\24\26\30\32",
    "\34\36 \"$&(*,.\60\2\2\u0110\2\62\3\2\2\2\49\3\2\2\2\6=\3\2\2\2\bE\3",
    "\2\2\2\nL\3\2\2\2\f\\\3\2\2\2\16^\3\2\2\2\20t\3\2\2\2\22\u0086\3\2\2",
    "\2\24\u0088\3\2\2\2\26\u008b\3\2\2\2\30\u0099\3\2\2\2\32\u009d\3\2\2",
    "\2\34\u00a0\3\2\2\2\36\u00ac\3\2\2\2 \u00ba\3\2\2\2\"\u00bc\3\2\2\2",
    "$\u00ca\3\2\2\2&\u00cf\3\2\2\2(\u00d3\3\2\2\2*\u00e2\3\2\2\2,\u00e4",
    "\3\2\2\2.\u00f5\3\2\2\2\60\u00fe\3\2\2\2\62\66\7#\2\2\63\65\5\4\3\2",
    "\64\63\3\2\2\2\658\3\2\2\2\66\64\3\2\2\2\66\67\3\2\2\2\67\3\3\2\2\2",
    "8\66\3\2\2\29:\7\3\2\2:;\7%\2\2;<\7\4\2\2<\5\3\2\2\2=B\7#\2\2>?\7\5",
    "\2\2?A\7#\2\2@>\3\2\2\2AD\3\2\2\2B@\3\2\2\2BC\3\2\2\2C\7\3\2\2\2DB\3",
    "\2\2\2EI\5\n\6\2FH\5\20\t\2GF\3\2\2\2HK\3\2\2\2IG\3\2\2\2IJ\3\2\2\2",
    "J\t\3\2\2\2KI\3\2\2\2LM\7\6\2\2MN\5\6\4\2NO\7\7\2\2O\13\3\2\2\2P]\7",
    "\b\2\2Q]\7\t\2\2R]\7\n\2\2S]\7\13\2\2T]\7\f\2\2U]\7\r\2\2V]\7\16\2\2",
    "W]\7\17\2\2X]\7\20\2\2Y]\7\21\2\2Z]\7\22\2\2[]\7\23\2\2\\P\3\2\2\2\\",
    "Q\3\2\2\2\\R\3\2\2\2\\S\3\2\2\2\\T\3\2\2\2\\U\3\2\2\2\\V\3\2\2\2\\W",
    "\3\2\2\2\\X\3\2\2\2\\Y\3\2\2\2\\Z\3\2\2\2\\[\3\2\2\2]\r\3\2\2\2^_\5",
    "\2\2\2_`\7\24\2\2`a\5\36\20\2a\17\3\2\2\2bc\7\25\2\2cd\7#\2\2de\7\26",
    "\2\2ej\7#\2\2fg\7\27\2\2gi\7#\2\2hf\3\2\2\2il\3\2\2\2jh\3\2\2\2jk\3",
    "\2\2\2km\3\2\2\2lj\3\2\2\2mn\7\30\2\2nu\5\"\22\2op\7\25\2\2pq\7#\2\2",
    "qr\7\26\2\2rs\7\30\2\2su\5\"\22\2tb\3\2\2\2to\3\2\2\2u\21\3\2\2\2vw",
    "\5\6\4\2wx\7\26\2\2x}\5 \21\2yz\7\27\2\2z|\5 \21\2{y\3\2\2\2|\177\3",
    "\2\2\2}{\3\2\2\2}~\3\2\2\2~\u0080\3\2\2\2\177}\3\2\2\2\u0080\u0081\7",
    "\30\2\2\u0081\u0087\3\2\2\2\u0082\u0083\5\6\4\2\u0083\u0084\7\26\2\2",
    "\u0084\u0085\7\30\2\2\u0085\u0087\3\2\2\2\u0086v\3\2\2\2\u0086\u0082",
    "\3\2\2\2\u0087\23\3\2\2\2\u0088\u0089\7\31\2\2\u0089\u008a\5\36\20\2",
    "\u008a\25\3\2\2\2\u008b\u008c\7\32\2\2\u008c\u008d\7\26\2\2\u008d\u008e",
    "\5\36\20\2\u008e\u008f\7\30\2\2\u008f\u0093\5\"\22\2\u0090\u0092\5\30",
    "\r\2\u0091\u0090\3\2\2\2\u0092\u0095\3\2\2\2\u0093\u0091\3\2\2\2\u0093",
    "\u0094\3\2\2\2\u0094\u0097\3\2\2\2\u0095\u0093\3\2\2\2\u0096\u0098\5",
    "\32\16\2\u0097\u0096\3\2\2\2\u0097\u0098\3\2\2\2\u0098\27\3\2\2\2\u0099",
    "\u009a\7\33\2\2\u009a\u009b\7\32\2\2\u009b\u009c\5\"\22\2\u009c\31\3",
    "\2\2\2\u009d\u009e\7\33\2\2\u009e\u009f\5\"\22\2\u009f\33\3\2\2\2\u00a0",
    "\u00a1\7\34\2\2\u00a1\u00a2\7\26\2\2\u00a2\u00a3\5\36\20\2\u00a3\u00a4",
    "\7\30\2\2\u00a4\u00a5\5\"\22\2\u00a5\35\3\2\2\2\u00a6\u00a7\b\20\1\2",
    "\u00a7\u00ad\5 \21\2\u00a8\u00a9\7\26\2\2\u00a9\u00aa\5\36\20\2\u00aa",
    "\u00ab\7\30\2\2\u00ab\u00ad\3\2\2\2\u00ac\u00a6\3\2\2\2\u00ac\u00a8",
    "\3\2\2\2\u00ad\u00b4\3\2\2\2\u00ae\u00af\f\4\2\2\u00af\u00b0\5\f\7\2",
    "\u00b0\u00b1\5\36\20\5\u00b1\u00b3\3\2\2\2\u00b2\u00ae\3\2\2\2\u00b3",
    "\u00b6\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\37\3\2",
    "\2\2\u00b6\u00b4\3\2\2\2\u00b7\u00bb\5\60\31\2\u00b8\u00bb\5\2\2\2\u00b9",
    "\u00bb\5\22\n\2\u00ba\u00b7\3\2\2\2\u00ba\u00b8\3\2\2\2\u00ba\u00b9",
    "\3\2\2\2\u00bb!\3\2\2\2\u00bc\u00c0\7\35\2\2\u00bd\u00bf\5$\23\2\u00be",
    "\u00bd\3\2\2\2\u00bf\u00c2\3\2\2\2\u00c0\u00be\3\2\2\2\u00c0\u00c1\3",
    "\2\2\2\u00c1\u00c3\3\2\2\2\u00c2\u00c0\3\2\2\2\u00c3\u00c4\7\36\2\2",
    "\u00c4#\3\2\2\2\u00c5\u00c6\5&\24\2\u00c6\u00c7\7\7\2\2\u00c7\u00cb",
    "\3\2\2\2\u00c8\u00cb\5\34\17\2\u00c9\u00cb\5\26\f\2\u00ca\u00c5\3\2",
    "\2\2\u00ca\u00c8\3\2\2\2\u00ca\u00c9\3\2\2\2\u00cb%\3\2\2\2\u00cc\u00d0",
    "\5\16\b\2\u00cd\u00d0\5\22\n\2\u00ce\u00d0\5\24\13\2\u00cf\u00cc\3\2",
    "\2\2\u00cf\u00cd\3\2\2\2\u00cf\u00ce\3\2\2\2\u00d0\'\3\2\2\2\u00d1\u00d4",
    "\5*\26\2\u00d2\u00d4\5.\30\2\u00d3\u00d1\3\2\2\2\u00d3\u00d2\3\2\2\2",
    "\u00d4)\3\2\2\2\u00d5\u00d6\7\35\2\2\u00d6\u00db\5,\27\2\u00d7\u00d8",
    "\7\27\2\2\u00d8\u00da\5,\27\2\u00d9\u00d7\3\2\2\2\u00da\u00dd\3\2\2",
    "\2\u00db\u00d9\3\2\2\2\u00db\u00dc\3\2\2\2\u00dc\u00de\3\2\2\2\u00dd",
    "\u00db\3\2\2\2\u00de\u00df\7\36\2\2\u00df\u00e3\3\2\2\2\u00e0\u00e1",
    "\7\35\2\2\u00e1\u00e3\7\36\2\2\u00e2\u00d5\3\2\2\2\u00e2\u00e0\3\2\2",
    "\2\u00e3+\3\2\2\2\u00e4\u00e5\7%\2\2\u00e5\u00e6\7\37\2\2\u00e6\u00e7",
    "\5\60\31\2\u00e7-\3\2\2\2\u00e8\u00e9\7\3\2\2\u00e9\u00ee\5\60\31\2",
    "\u00ea\u00eb\7\27\2\2\u00eb\u00ed\5\60\31\2\u00ec\u00ea\3\2\2\2\u00ed",
    "\u00f0\3\2\2\2\u00ee\u00ec\3\2\2\2\u00ee\u00ef\3\2\2\2\u00ef\u00f1\3",
    "\2\2\2\u00f0\u00ee\3\2\2\2\u00f1\u00f2\7\4\2\2\u00f2\u00f6\3\2\2\2\u00f3",
    "\u00f4\7\3\2\2\u00f4\u00f6\7\4\2\2\u00f5\u00e8\3\2\2\2\u00f5\u00f3\3",
    "\2\2\2\u00f6/\3\2\2\2\u00f7\u00ff\7%\2\2\u00f8\u00ff\7&\2\2\u00f9\u00ff",
    "\5*\26\2\u00fa\u00ff\5.\30\2\u00fb\u00ff\7 \2\2\u00fc\u00ff\7!\2\2\u00fd",
    "\u00ff\7\"\2\2\u00fe\u00f7\3\2\2\2\u00fe\u00f8\3\2\2\2\u00fe\u00f9\3",
    "\2\2\2\u00fe\u00fa\3\2\2\2\u00fe\u00fb\3\2\2\2\u00fe\u00fc\3\2\2\2\u00fe",
    "\u00fd\3\2\2\2\u00ff\61\3\2\2\2\30\66BI\\jt}\u0086\u0093\u0097\u00ac",
    "\u00b4\u00ba\u00c0\u00ca\u00cf\u00d3\u00db\u00e2\u00ee\u00f5\u00fe"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'['", "']'", "'.'", "'pack'", "';'", "'+'", 
                     "'-'", "'*'", "'/'", "'%'", "'^'", "'=='", "'!='", 
                     "'<'", "'<='", "'>'", "'>='", "'='", "'func'", "'('", 
                     "','", "')'", "'ret'", "'if'", "'else'", "'while'", 
                     "'{'", "'}'", "':'", "'true'", "'false'", "'null'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', "Id", "WS", 
                      "STRING", "NUMBER" ];

var ruleNames =  [ "jsonPath", "keyRef", "dottedId", "smkFile", "packageDecl", 
                   "op", "varAssign", "funcDecl", "funcInvoke", "retStatement", 
                   "ifStat", "elseIfStat", "elseStat", "loop", "expression", 
                   "resolvable", "codeBlock", "sentence", "statement", "json", 
                   "object", "pair", "array", "value" ];

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
SmackParser.T__30 = 31;
SmackParser.T__31 = 32;
SmackParser.Id = 33;
SmackParser.WS = 34;
SmackParser.STRING = 35;
SmackParser.NUMBER = 36;

SmackParser.RULE_jsonPath = 0;
SmackParser.RULE_keyRef = 1;
SmackParser.RULE_dottedId = 2;
SmackParser.RULE_smkFile = 3;
SmackParser.RULE_packageDecl = 4;
SmackParser.RULE_op = 5;
SmackParser.RULE_varAssign = 6;
SmackParser.RULE_funcDecl = 7;
SmackParser.RULE_funcInvoke = 8;
SmackParser.RULE_retStatement = 9;
SmackParser.RULE_ifStat = 10;
SmackParser.RULE_elseIfStat = 11;
SmackParser.RULE_elseStat = 12;
SmackParser.RULE_loop = 13;
SmackParser.RULE_expression = 14;
SmackParser.RULE_resolvable = 15;
SmackParser.RULE_codeBlock = 16;
SmackParser.RULE_sentence = 17;
SmackParser.RULE_statement = 18;
SmackParser.RULE_json = 19;
SmackParser.RULE_object = 20;
SmackParser.RULE_pair = 21;
SmackParser.RULE_array = 22;
SmackParser.RULE_value = 23;

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
    this.enterRule(localctx, 0, SmackParser.RULE_jsonPath);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.match(SmackParser.Id);
        this.state = 52;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 49;
                this.keyRef(); 
            }
            this.state = 54;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
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
    this.enterRule(localctx, 2, SmackParser.RULE_keyRef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.match(SmackParser.T__0);
        this.state = 56;
        this.match(SmackParser.STRING);
        this.state = 57;
        this.match(SmackParser.T__1);
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

function DottedIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_dottedId;
    return this;
}

DottedIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DottedIdContext.prototype.constructor = DottedIdContext;

DottedIdContext.prototype.Id = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmackParser.Id);
    } else {
        return this.getToken(SmackParser.Id, i);
    }
};


DottedIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterDottedId(this);
	}
};

DottedIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitDottedId(this);
	}
};

DottedIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitDottedId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.DottedIdContext = DottedIdContext;

SmackParser.prototype.dottedId = function() {

    var localctx = new DottedIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SmackParser.RULE_dottedId);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(SmackParser.Id);
        this.state = 64;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__2) {
            this.state = 60;
            this.match(SmackParser.T__2);
            this.state = 61;
            this.match(SmackParser.Id);
            this.state = 66;
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
    this.enterRule(localctx, 6, SmackParser.RULE_smkFile);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.packageDecl();
        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__18) {
            this.state = 68;
            this.funcDecl();
            this.state = 73;
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

PackageDeclContext.prototype.dottedId = function() {
    return this.getTypedRuleContext(DottedIdContext,0);
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
    this.enterRule(localctx, 8, SmackParser.RULE_packageDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(SmackParser.T__3);
        this.state = 75;
        this.dottedId();
        this.state = 76;
        this.match(SmackParser.T__4);
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


function PowContext(parser, ctx) {
	OpContext.call(this, parser);
    OpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowContext.prototype = Object.create(OpContext.prototype);
PowContext.prototype.constructor = PowContext;

SmackParser.PowContext = PowContext;

PowContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterPow(this);
	}
};

PowContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitPow(this);
	}
};

PowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitPow(this);
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
    this.enterRule(localctx, 10, SmackParser.RULE_op);
    try {
        this.state = 90;
        switch(this._input.LA(1)) {
        case SmackParser.T__5:
            localctx = new PlusContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 78;
            this.match(SmackParser.T__5);
            break;
        case SmackParser.T__6:
            localctx = new MinusContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 79;
            this.match(SmackParser.T__6);
            break;
        case SmackParser.T__7:
            localctx = new MulContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 80;
            this.match(SmackParser.T__7);
            break;
        case SmackParser.T__8:
            localctx = new DivContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 81;
            this.match(SmackParser.T__8);
            break;
        case SmackParser.T__9:
            localctx = new ModContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 82;
            this.match(SmackParser.T__9);
            break;
        case SmackParser.T__10:
            localctx = new PowContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 83;
            this.match(SmackParser.T__10);
            break;
        case SmackParser.T__11:
            localctx = new EqContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 84;
            this.match(SmackParser.T__11);
            break;
        case SmackParser.T__12:
            localctx = new NeqContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 85;
            this.match(SmackParser.T__12);
            break;
        case SmackParser.T__13:
            localctx = new LtContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 86;
            this.match(SmackParser.T__13);
            break;
        case SmackParser.T__14:
            localctx = new LeContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 87;
            this.match(SmackParser.T__14);
            break;
        case SmackParser.T__15:
            localctx = new GtContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 88;
            this.match(SmackParser.T__15);
            break;
        case SmackParser.T__16:
            localctx = new GeContext(this, localctx);
            this.enterOuterAlt(localctx, 12);
            this.state = 89;
            this.match(SmackParser.T__16);
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
    this.enterRule(localctx, 12, SmackParser.RULE_varAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.jsonPath();
        this.state = 93;
        this.match(SmackParser.T__17);
        this.state = 94;
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
    this.enterRule(localctx, 14, SmackParser.RULE_funcDecl);
    var _la = 0; // Token type
    try {
        this.state = 114;
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FuncDeclParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 96;
            this.match(SmackParser.T__18);
            this.state = 97;
            this.match(SmackParser.Id);
            this.state = 98;
            this.match(SmackParser.T__19);
            this.state = 99;
            this.match(SmackParser.Id);
            this.state = 104;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__20) {
                this.state = 100;
                this.match(SmackParser.T__20);
                this.state = 101;
                this.match(SmackParser.Id);
                this.state = 106;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 107;
            this.match(SmackParser.T__21);
            this.state = 108;
            this.codeBlock();
            break;

        case 2:
            localctx = new FuncDeclNoParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 109;
            this.match(SmackParser.T__18);
            this.state = 110;
            this.match(SmackParser.Id);
            this.state = 111;
            this.match(SmackParser.T__19);
            this.state = 112;
            this.match(SmackParser.T__21);
            this.state = 113;
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

FuncInvokeNoParamsContext.prototype.dottedId = function() {
    return this.getTypedRuleContext(DottedIdContext,0);
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

FuncInvokeParamsContext.prototype.dottedId = function() {
    return this.getTypedRuleContext(DottedIdContext,0);
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
    this.enterRule(localctx, 16, SmackParser.RULE_funcInvoke);
    var _la = 0; // Token type
    try {
        this.state = 132;
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FuncInvokeParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 116;
            this.dottedId();
            this.state = 117;
            this.match(SmackParser.T__19);
            this.state = 118;
            this.resolvable();
            this.state = 123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__20) {
                this.state = 119;
                this.match(SmackParser.T__20);
                this.state = 120;
                this.resolvable();
                this.state = 125;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 126;
            this.match(SmackParser.T__21);
            break;

        case 2:
            localctx = new FuncInvokeNoParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 128;
            this.dottedId();
            this.state = 129;
            this.match(SmackParser.T__19);
            this.state = 130;
            this.match(SmackParser.T__21);
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
    this.enterRule(localctx, 18, SmackParser.RULE_retStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(SmackParser.T__22);
        this.state = 135;
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
    this.enterRule(localctx, 20, SmackParser.RULE_ifStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(SmackParser.T__23);
        this.state = 138;
        this.match(SmackParser.T__19);
        this.state = 139;
        this.expression(0);
        this.state = 140;
        this.match(SmackParser.T__21);
        this.state = 141;
        this.codeBlock();
        this.state = 145;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 142;
                this.elseIfStat(); 
            }
            this.state = 147;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

        this.state = 149;
        _la = this._input.LA(1);
        if(_la===SmackParser.T__24) {
            this.state = 148;
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
    this.enterRule(localctx, 22, SmackParser.RULE_elseIfStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(SmackParser.T__24);
        this.state = 152;
        this.match(SmackParser.T__23);
        this.state = 153;
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
    this.enterRule(localctx, 24, SmackParser.RULE_elseStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.match(SmackParser.T__24);
        this.state = 156;
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
    this.enterRule(localctx, 26, SmackParser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.match(SmackParser.T__25);
        this.state = 159;
        this.match(SmackParser.T__19);
        this.state = 160;
        this.expression(0);
        this.state = 161;
        this.match(SmackParser.T__21);
        this.state = 162;
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
    var _startState = 28;
    this.enterRecursionRule(localctx, 28, SmackParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        switch(this._input.LA(1)) {
        case SmackParser.T__0:
        case SmackParser.T__26:
        case SmackParser.T__29:
        case SmackParser.T__30:
        case SmackParser.T__31:
        case SmackParser.Id:
        case SmackParser.STRING:
        case SmackParser.NUMBER:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 165;
            this.resolvable();
            break;
        case SmackParser.T__19:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 166;
            this.match(SmackParser.T__19);
            this.state = 167;
            this.expression(0);
            this.state = 168;
            this.match(SmackParser.T__21);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 178;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new NonParenExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                this.state = 172;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 173;
                this.op();
                this.state = 174;
                this.expression(3); 
            }
            this.state = 180;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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
    this.enterRule(localctx, 30, SmackParser.RULE_resolvable);
    try {
        this.state = 184;
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ValResolvContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 181;
            this.value();
            break;

        case 2:
            localctx = new JpathResolvContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 182;
            this.jsonPath();
            break;

        case 3:
            localctx = new InvokeResolvContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 183;
            this.funcInvoke();
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

CodeBlockContext.prototype.sentence = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SentenceContext);
    } else {
        return this.getTypedRuleContext(SentenceContext,i);
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
    this.enterRule(localctx, 32, SmackParser.RULE_codeBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(SmackParser.T__26);
        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SmackParser.T__22 - 23)) | (1 << (SmackParser.T__23 - 23)) | (1 << (SmackParser.T__25 - 23)) | (1 << (SmackParser.Id - 23)))) !== 0)) {
            this.state = 187;
            this.sentence();
            this.state = 192;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 193;
        this.match(SmackParser.T__27);
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

function SentenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_sentence;
    return this;
}

SentenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SentenceContext.prototype.constructor = SentenceContext;

SentenceContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

SentenceContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

SentenceContext.prototype.ifStat = function() {
    return this.getTypedRuleContext(IfStatContext,0);
};

SentenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterSentence(this);
	}
};

SentenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitSentence(this);
	}
};

SentenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitSentence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.SentenceContext = SentenceContext;

SmackParser.prototype.sentence = function() {

    var localctx = new SentenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SmackParser.RULE_sentence);
    try {
        this.state = 200;
        switch(this._input.LA(1)) {
        case SmackParser.T__22:
        case SmackParser.Id:
            this.enterOuterAlt(localctx, 1);
            this.state = 195;
            this.statement();
            this.state = 196;
            this.match(SmackParser.T__4);
            break;
        case SmackParser.T__25:
            this.enterOuterAlt(localctx, 2);
            this.state = 198;
            this.loop();
            break;
        case SmackParser.T__23:
            this.enterOuterAlt(localctx, 3);
            this.state = 199;
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
    this.enterRule(localctx, 36, SmackParser.RULE_statement);
    try {
        this.state = 205;
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 202;
            this.varAssign();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 203;
            this.funcInvoke();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 204;
            this.retStatement();
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
    this.enterRule(localctx, 38, SmackParser.RULE_json);
    try {
        this.state = 209;
        switch(this._input.LA(1)) {
        case SmackParser.T__26:
            this.enterOuterAlt(localctx, 1);
            this.state = 207;
            this.object();
            break;
        case SmackParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 208;
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
    this.enterRule(localctx, 40, SmackParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.state = 224;
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 211;
            this.match(SmackParser.T__26);
            this.state = 212;
            this.pair();
            this.state = 217;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__20) {
                this.state = 213;
                this.match(SmackParser.T__20);
                this.state = 214;
                this.pair();
                this.state = 219;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 220;
            this.match(SmackParser.T__27);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 222;
            this.match(SmackParser.T__26);
            this.state = 223;
            this.match(SmackParser.T__27);
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
    this.enterRule(localctx, 42, SmackParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 226;
        this.match(SmackParser.STRING);
        this.state = 227;
        this.match(SmackParser.T__28);
        this.state = 228;
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
    this.enterRule(localctx, 44, SmackParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.state = 243;
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 230;
            this.match(SmackParser.T__0);
            this.state = 231;
            this.value();
            this.state = 236;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__20) {
                this.state = 232;
                this.match(SmackParser.T__20);
                this.state = 233;
                this.value();
                this.state = 238;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 239;
            this.match(SmackParser.T__1);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 241;
            this.match(SmackParser.T__0);
            this.state = 242;
            this.match(SmackParser.T__1);
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
    this.enterRule(localctx, 46, SmackParser.RULE_value);
    try {
        this.state = 252;
        switch(this._input.LA(1)) {
        case SmackParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 245;
            this.match(SmackParser.STRING);
            break;
        case SmackParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 246;
            this.match(SmackParser.NUMBER);
            break;
        case SmackParser.T__26:
            this.enterOuterAlt(localctx, 3);
            this.state = 247;
            this.object();
            break;
        case SmackParser.T__0:
            this.enterOuterAlt(localctx, 4);
            this.state = 248;
            this.array();
            break;
        case SmackParser.T__29:
            this.enterOuterAlt(localctx, 5);
            this.state = 249;
            this.match(SmackParser.T__29);
            break;
        case SmackParser.T__30:
            this.enterOuterAlt(localctx, 6);
            this.state = 250;
            this.match(SmackParser.T__30);
            break;
        case SmackParser.T__31:
            this.enterOuterAlt(localctx, 7);
            this.state = 251;
            this.match(SmackParser.T__31);
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


SmackParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 14:
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
