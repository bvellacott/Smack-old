// Generated from ./Smack.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('../../index');
var SmackListener = require('./SmackListener').SmackListener;
var SmackVisitor = require('./SmackVisitor').SmackVisitor;

var grammarFileName = "Smack.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3)\u0115\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\3\2\3\2\7\2\63\n\2\f\2\16\2\66\13\2\3\3\3\3\3\3\3\3",
    "\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\5\5D\n\5\3\5\3\5\7\5H\n\5\f\5\16\5",
    "K\13\5\3\5\3\5\3\5\3\6\3\6\3\6\5\6S\n\6\3\6\3\6\7\6W\n\6\f\6\16\6Z\13",
    "\6\3\6\3\6\3\7\3\7\7\7`\n\7\f\7\16\7c\13\7\3\b\3\b\3\b\7\bh\n\b\f\b",
    "\16\bk\13\b\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13",
    "\7\13z\n\13\f\13\16\13}\13\13\3\13\5\13\u0080\n\13\3\f\3\f\3\f\3\f\3",
    "\f\3\f\3\f\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17",
    "\3\17\3\17\3\17\3\17\3\17\5\17\u009a\n\17\3\17\3\17\3\17\3\17\3\17\3",
    "\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\6\17\u00aa\n\17\r\17\16",
    "\17\u00ab\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17",
    "\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\7",
    "\17\u00c7\n\17\f\17\16\17\u00ca\13\17\3\20\3\20\3\20\5\20\u00cf\n\20",
    "\3\21\3\21\7\21\u00d3\n\21\f\21\16\21\u00d6\13\21\3\21\3\21\3\22\3\22",
    "\3\22\3\22\3\22\5\22\u00df\n\22\3\23\3\23\3\23\5\23\u00e4\n\23\3\24",
    "\3\24\5\24\u00e8\n\24\3\25\3\25\3\25\3\25\7\25\u00ee\n\25\f\25\16\25",
    "\u00f1\13\25\3\25\3\25\3\25\3\25\5\25\u00f7\n\25\3\26\3\26\3\26\3\26",
    "\3\27\3\27\3\27\3\27\7\27\u0101\n\27\f\27\16\27\u0104\13\27\3\27\3\27",
    "\3\27\3\27\5\27\u010a\n\27\3\30\3\30\3\30\3\30\3\30\3\30\3\30\5\30\u0113",
    "\n\30\3\30\2\3\34\31\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,",
    ".\2\3\3\2\27\30\u0128\2\60\3\2\2\2\4\67\3\2\2\2\6;\3\2\2\2\b?\3\2\2",
    "\2\nO\3\2\2\2\f]\3\2\2\2\16d\3\2\2\2\20l\3\2\2\2\22p\3\2\2\2\24s\3\2",
    "\2\2\26\u0081\3\2\2\2\30\u0088\3\2\2\2\32\u008b\3\2\2\2\34\u0099\3\2",
    "\2\2\36\u00ce\3\2\2\2 \u00d0\3\2\2\2\"\u00de\3\2\2\2$\u00e3\3\2\2\2",
    "&\u00e7\3\2\2\2(\u00f6\3\2\2\2*\u00f8\3\2\2\2,\u0109\3\2\2\2.\u0112",
    "\3\2\2\2\60\64\5\4\3\2\61\63\5\b\5\2\62\61\3\2\2\2\63\66\3\2\2\2\64",
    "\62\3\2\2\2\64\65\3\2\2\2\65\3\3\2\2\2\66\64\3\2\2\2\678\7\3\2\289\5",
    "\16\b\29:\7\4\2\2:\5\3\2\2\2;<\5\f\7\2<=\7\5\2\2=>\5\34\17\2>\7\3\2",
    "\2\2?@\7\6\2\2@A\7%\2\2AC\7\7\2\2BD\7%\2\2CB\3\2\2\2CD\3\2\2\2DI\3\2",
    "\2\2EF\7\b\2\2FH\7%\2\2GE\3\2\2\2HK\3\2\2\2IG\3\2\2\2IJ\3\2\2\2JL\3",
    "\2\2\2KI\3\2\2\2LM\7\t\2\2MN\5 \21\2N\t\3\2\2\2OP\5\16\b\2PR\7\7\2\2",
    "QS\5\36\20\2RQ\3\2\2\2RS\3\2\2\2SX\3\2\2\2TU\7\b\2\2UW\5\36\20\2VT\3",
    "\2\2\2WZ\3\2\2\2XV\3\2\2\2XY\3\2\2\2Y[\3\2\2\2ZX\3\2\2\2[\\\7\t\2\2",
    "\\\13\3\2\2\2]a\7%\2\2^`\5\20\t\2_^\3\2\2\2`c\3\2\2\2a_\3\2\2\2ab\3",
    "\2\2\2b\r\3\2\2\2ca\3\2\2\2di\7%\2\2ef\7\n\2\2fh\7%\2\2ge\3\2\2\2hk",
    "\3\2\2\2ig\3\2\2\2ij\3\2\2\2j\17\3\2\2\2ki\3\2\2\2lm\7\13\2\2mn\5\36",
    "\20\2no\7\f\2\2o\21\3\2\2\2pq\7\r\2\2qr\5\34\17\2r\23\3\2\2\2st\7\16",
    "\2\2tu\7\7\2\2uv\5\34\17\2vw\7\t\2\2w{\5 \21\2xz\5\26\f\2yx\3\2\2\2",
    "z}\3\2\2\2{y\3\2\2\2{|\3\2\2\2|\177\3\2\2\2}{\3\2\2\2~\u0080\5\30\r",
    "\2\177~\3\2\2\2\177\u0080\3\2\2\2\u0080\25\3\2\2\2\u0081\u0082\7\17",
    "\2\2\u0082\u0083\7\16\2\2\u0083\u0084\7\7\2\2\u0084\u0085\5\34\17\2",
    "\u0085\u0086\7\t\2\2\u0086\u0087\5 \21\2\u0087\27\3\2\2\2\u0088\u0089",
    "\7\17\2\2\u0089\u008a\5 \21\2\u008a\31\3\2\2\2\u008b\u008c\7\20\2\2",
    "\u008c\u008d\7\7\2\2\u008d\u008e\5\34\17\2\u008e\u008f\7\t\2\2\u008f",
    "\u0090\5 \21\2\u0090\33\3\2\2\2\u0091\u0092\b\17\1\2\u0092\u0093\7\30",
    "\2\2\u0093\u009a\5\34\17\f\u0094\u0095\7\7\2\2\u0095\u0096\5\34\17\2",
    "\u0096\u0097\7\t\2\2\u0097\u009a\3\2\2\2\u0098\u009a\5\36\20\2\u0099",
    "\u0091\3\2\2\2\u0099\u0094\3\2\2\2\u0099\u0098\3\2\2\2\u009a\u00c8\3",
    "\2\2\2\u009b\u009c\f\21\2\2\u009c\u009d\7\34\2\2\u009d\u00c7\5\34\17",
    "\21\u009e\u009f\f\20\2\2\u009f\u00a0\7\31\2\2\u00a0\u00c7\5\34\17\21",
    "\u00a1\u00a2\f\17\2\2\u00a2\u00a3\7\32\2\2\u00a3\u00c7\5\34\17\20\u00a4",
    "\u00a5\f\16\2\2\u00a5\u00a6\7\33\2\2\u00a6\u00c7\5\34\17\17\u00a7\u00a9",
    "\f\r\2\2\u00a8\u00aa\t\2\2\2\u00a9\u00a8\3\2\2\2\u00aa\u00ab\3\2\2\2",
    "\u00ab\u00a9\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad\u00c7",
    "\5\34\17\16\u00ae\u00af\f\13\2\2\u00af\u00b0\7\35\2\2\u00b0\u00c7\5",
    "\34\17\f\u00b1\u00b2\f\n\2\2\u00b2\u00b3\7\36\2\2\u00b3\u00c7\5\34\17",
    "\13\u00b4\u00b5\f\t\2\2\u00b5\u00b6\7\37\2\2\u00b6\u00c7\5\34\17\n\u00b7",
    "\u00b8\f\b\2\2\u00b8\u00b9\7 \2\2\u00b9\u00c7\5\34\17\t\u00ba\u00bb",
    "\f\7\2\2\u00bb\u00bc\7!\2\2\u00bc\u00c7\5\34\17\b\u00bd\u00be\f\6\2",
    "\2\u00be\u00bf\7\"\2\2\u00bf\u00c7\5\34\17\7\u00c0\u00c1\f\5\2\2\u00c1",
    "\u00c2\7#\2\2\u00c2\u00c7\5\34\17\6\u00c3\u00c4\f\4\2\2\u00c4\u00c5",
    "\7$\2\2\u00c5\u00c7\5\34\17\5\u00c6\u009b\3\2\2\2\u00c6\u009e\3\2\2",
    "\2\u00c6\u00a1\3\2\2\2\u00c6\u00a4\3\2\2\2\u00c6\u00a7\3\2\2\2\u00c6",
    "\u00ae\3\2\2\2\u00c6\u00b1\3\2\2\2\u00c6\u00b4\3\2\2\2\u00c6\u00b7\3",
    "\2\2\2\u00c6\u00ba\3\2\2\2\u00c6\u00bd\3\2\2\2\u00c6\u00c0\3\2\2\2\u00c6",
    "\u00c3\3\2\2\2\u00c7\u00ca\3\2\2\2\u00c8\u00c6\3\2\2\2\u00c8\u00c9\3",
    "\2\2\2\u00c9\35\3\2\2\2\u00ca\u00c8\3\2\2\2\u00cb\u00cf\5.\30\2\u00cc",
    "\u00cf\5\f\7\2\u00cd\u00cf\5\n\6\2\u00ce\u00cb\3\2\2\2\u00ce\u00cc\3",
    "\2\2\2\u00ce\u00cd\3\2\2\2\u00cf\37\3\2\2\2\u00d0\u00d4\7\21\2\2\u00d1",
    "\u00d3\5\"\22\2\u00d2\u00d1\3\2\2\2\u00d3\u00d6\3\2\2\2\u00d4\u00d2",
    "\3\2\2\2\u00d4\u00d5\3\2\2\2\u00d5\u00d7\3\2\2\2\u00d6\u00d4\3\2\2\2",
    "\u00d7\u00d8\7\22\2\2\u00d8!\3\2\2\2\u00d9\u00da\5$\23\2\u00da\u00db",
    "\7\4\2\2\u00db\u00df\3\2\2\2\u00dc\u00df\5\32\16\2\u00dd\u00df\5\24",
    "\13\2\u00de\u00d9\3\2\2\2\u00de\u00dc\3\2\2\2\u00de\u00dd\3\2\2\2\u00df",
    "#\3\2\2\2\u00e0\u00e4\5\6\4\2\u00e1\u00e4\5\n\6\2\u00e2\u00e4\5\22\n",
    "\2\u00e3\u00e0\3\2\2\2\u00e3\u00e1\3\2\2\2\u00e3\u00e2\3\2\2\2\u00e4",
    "%\3\2\2\2\u00e5\u00e8\5(\25\2\u00e6\u00e8\5,\27\2\u00e7\u00e5\3\2\2",
    "\2\u00e7\u00e6\3\2\2\2\u00e8\'\3\2\2\2\u00e9\u00ea\7\21\2\2\u00ea\u00ef",
    "\5*\26\2\u00eb\u00ec\7\b\2\2\u00ec\u00ee\5*\26\2\u00ed\u00eb\3\2\2\2",
    "\u00ee\u00f1\3\2\2\2\u00ef\u00ed\3\2\2\2\u00ef\u00f0\3\2\2\2\u00f0\u00f2",
    "\3\2\2\2\u00f1\u00ef\3\2\2\2\u00f2\u00f3\7\22\2\2\u00f3\u00f7\3\2\2",
    "\2\u00f4\u00f5\7\21\2\2\u00f5\u00f7\7\22\2\2\u00f6\u00e9\3\2\2\2\u00f6",
    "\u00f4\3\2\2\2\u00f7)\3\2\2\2\u00f8\u00f9\7(\2\2\u00f9\u00fa\7\23\2",
    "\2\u00fa\u00fb\5.\30\2\u00fb+\3\2\2\2\u00fc\u00fd\7\13\2\2\u00fd\u0102",
    "\5.\30\2\u00fe\u00ff\7\b\2\2\u00ff\u0101\5.\30\2\u0100\u00fe\3\2\2\2",
    "\u0101\u0104\3\2\2\2\u0102\u0100\3\2\2\2\u0102\u0103\3\2\2\2\u0103\u0105",
    "\3\2\2\2\u0104\u0102\3\2\2\2\u0105\u0106\7\f\2\2\u0106\u010a\3\2\2\2",
    "\u0107\u0108\7\13\2\2\u0108\u010a\7\f\2\2\u0109\u00fc\3\2\2\2\u0109",
    "\u0107\3\2\2\2\u010a-\3\2\2\2\u010b\u0113\7(\2\2\u010c\u0113\7)\2\2",
    "\u010d\u0113\5(\25\2\u010e\u0113\5,\27\2\u010f\u0113\7\24\2\2\u0110",
    "\u0113\7\25\2\2\u0111\u0113\7\26\2\2\u0112\u010b\3\2\2\2\u0112\u010c",
    "\3\2\2\2\u0112\u010d\3\2\2\2\u0112\u010e\3\2\2\2\u0112\u010f\3\2\2\2",
    "\u0112\u0110\3\2\2\2\u0112\u0111\3\2\2\2\u0113/\3\2\2\2\31\64CIRXai",
    "{\177\u0099\u00ab\u00c6\u00c8\u00ce\u00d4\u00de\u00e3\u00e7\u00ef\u00f6",
    "\u0102\u0109\u0112"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'pack'", "';'", "'='", "'func'", "'('", "','", 
                     "')'", "'.'", "'['", "']'", "'ret'", "'if'", "'else'", 
                     "'while'", "'{'", "'}'", "':'", "'true'", "'false'", 
                     "'null'", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", 
                     "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'&&'", 
                     "'||'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      "Plus", "Minus", "Mul", "Div", "Mod", "Pow", "Eq", 
                      "Neq", "Lt", "Le", "Gt", "Ge", "And", "Or", "Id", 
                      "Comment", "WS", "STRING", "NUMBER" ];

var ruleNames =  [ "smkFile", "packageDecl", "varAssign", "funcDecl", "funcInvoke", 
                   "jsonPath", "dottedId", "keyRef", "retStatement", "ifStat", 
                   "elseIfStat", "elseStat", "loop", "expression", "resolvable", 
                   "codeBlock", "sentence", "statement", "json", "object", 
                   "pair", "array", "value" ];

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
SmackParser.Plus = 21;
SmackParser.Minus = 22;
SmackParser.Mul = 23;
SmackParser.Div = 24;
SmackParser.Mod = 25;
SmackParser.Pow = 26;
SmackParser.Eq = 27;
SmackParser.Neq = 28;
SmackParser.Lt = 29;
SmackParser.Le = 30;
SmackParser.Gt = 31;
SmackParser.Ge = 32;
SmackParser.And = 33;
SmackParser.Or = 34;
SmackParser.Id = 35;
SmackParser.Comment = 36;
SmackParser.WS = 37;
SmackParser.STRING = 38;
SmackParser.NUMBER = 39;

SmackParser.RULE_smkFile = 0;
SmackParser.RULE_packageDecl = 1;
SmackParser.RULE_varAssign = 2;
SmackParser.RULE_funcDecl = 3;
SmackParser.RULE_funcInvoke = 4;
SmackParser.RULE_jsonPath = 5;
SmackParser.RULE_dottedId = 6;
SmackParser.RULE_keyRef = 7;
SmackParser.RULE_retStatement = 8;
SmackParser.RULE_ifStat = 9;
SmackParser.RULE_elseIfStat = 10;
SmackParser.RULE_elseStat = 11;
SmackParser.RULE_loop = 12;
SmackParser.RULE_expression = 13;
SmackParser.RULE_resolvable = 14;
SmackParser.RULE_codeBlock = 15;
SmackParser.RULE_sentence = 16;
SmackParser.RULE_statement = 17;
SmackParser.RULE_json = 18;
SmackParser.RULE_object = 19;
SmackParser.RULE_pair = 20;
SmackParser.RULE_array = 21;
SmackParser.RULE_value = 22;

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
        while(_la===SmackParser.T__3) {
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
    this.enterRule(localctx, 2, SmackParser.RULE_packageDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(SmackParser.T__0);
        this.state = 54;
        this.dottedId();
        this.state = 55;
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
    this.enterRule(localctx, 4, SmackParser.RULE_varAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.jsonPath();
        this.state = 58;
        this.match(SmackParser.T__2);
        this.state = 59;
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

FuncDeclContext.prototype.Id = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmackParser.Id);
    } else {
        return this.getToken(SmackParser.Id, i);
    }
};


FuncDeclContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};

FuncDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterFuncDecl(this);
	}
};

FuncDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitFuncDecl(this);
	}
};

FuncDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitFuncDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.FuncDeclContext = FuncDeclContext;

SmackParser.prototype.funcDecl = function() {

    var localctx = new FuncDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SmackParser.RULE_funcDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.match(SmackParser.T__3);
        this.state = 62;
        this.match(SmackParser.Id);
        this.state = 63;
        this.match(SmackParser.T__4);
        this.state = 65;
        _la = this._input.LA(1);
        if(_la===SmackParser.Id) {
            this.state = 64;
            this.match(SmackParser.Id);
        }

        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__5) {
            this.state = 67;
            this.match(SmackParser.T__5);
            this.state = 68;
            this.match(SmackParser.Id);
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 74;
        this.match(SmackParser.T__6);
        this.state = 75;
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

FuncInvokeContext.prototype.dottedId = function() {
    return this.getTypedRuleContext(DottedIdContext,0);
};

FuncInvokeContext.prototype.resolvable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ResolvableContext);
    } else {
        return this.getTypedRuleContext(ResolvableContext,i);
    }
};

FuncInvokeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterFuncInvoke(this);
	}
};

FuncInvokeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitFuncInvoke(this);
	}
};

FuncInvokeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitFuncInvoke(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.FuncInvokeContext = FuncInvokeContext;

SmackParser.prototype.funcInvoke = function() {

    var localctx = new FuncInvokeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SmackParser.RULE_funcInvoke);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.dottedId();
        this.state = 78;
        this.match(SmackParser.T__4);
        this.state = 80;
        _la = this._input.LA(1);
        if(((((_la - 9)) & ~0x1f) == 0 && ((1 << (_la - 9)) & ((1 << (SmackParser.T__8 - 9)) | (1 << (SmackParser.T__14 - 9)) | (1 << (SmackParser.T__17 - 9)) | (1 << (SmackParser.T__18 - 9)) | (1 << (SmackParser.T__19 - 9)) | (1 << (SmackParser.Id - 9)) | (1 << (SmackParser.STRING - 9)) | (1 << (SmackParser.NUMBER - 9)))) !== 0)) {
            this.state = 79;
            this.resolvable();
        }

        this.state = 86;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__5) {
            this.state = 82;
            this.match(SmackParser.T__5);
            this.state = 83;
            this.resolvable();
            this.state = 88;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 89;
        this.match(SmackParser.T__6);
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
    this.enterRule(localctx, 10, SmackParser.RULE_jsonPath);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.match(SmackParser.Id);
        this.state = 95;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 92;
                this.keyRef(); 
            }
            this.state = 97;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
    this.enterRule(localctx, 12, SmackParser.RULE_dottedId);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98;
        this.match(SmackParser.Id);
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__7) {
            this.state = 99;
            this.match(SmackParser.T__7);
            this.state = 100;
            this.match(SmackParser.Id);
            this.state = 105;
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

KeyRefContext.prototype.resolvable = function() {
    return this.getTypedRuleContext(ResolvableContext,0);
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
    this.enterRule(localctx, 14, SmackParser.RULE_keyRef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.match(SmackParser.T__8);
        this.state = 107;
        this.resolvable();
        this.state = 108;
        this.match(SmackParser.T__9);
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
    this.enterRule(localctx, 16, SmackParser.RULE_retStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.match(SmackParser.T__10);
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
    this.enterRule(localctx, 18, SmackParser.RULE_ifStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(SmackParser.T__11);
        this.state = 114;
        this.match(SmackParser.T__4);
        this.state = 115;
        this.expression(0);
        this.state = 116;
        this.match(SmackParser.T__6);
        this.state = 117;
        this.codeBlock();
        this.state = 121;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 118;
                this.elseIfStat(); 
            }
            this.state = 123;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

        this.state = 125;
        _la = this._input.LA(1);
        if(_la===SmackParser.T__12) {
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

ElseIfStatContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

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
    this.enterRule(localctx, 20, SmackParser.RULE_elseIfStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.match(SmackParser.T__12);
        this.state = 128;
        this.match(SmackParser.T__11);
        this.state = 129;
        this.match(SmackParser.T__4);
        this.state = 130;
        this.expression(0);
        this.state = 131;
        this.match(SmackParser.T__6);
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
    this.enterRule(localctx, 22, SmackParser.RULE_elseStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(SmackParser.T__12);
        this.state = 135;
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
    this.enterRule(localctx, 24, SmackParser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(SmackParser.T__13);
        this.state = 138;
        this.match(SmackParser.T__4);
        this.state = 139;
        this.expression(0);
        this.state = 140;
        this.match(SmackParser.T__6);
        this.state = 141;
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

function AndExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExprContext.prototype = Object.create(ExpressionContext.prototype);
AndExprContext.prototype.constructor = AndExprContext;

SmackParser.AndExprContext = AndExprContext;

AndExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

AndExprContext.prototype.And = function() {
    return this.getToken(SmackParser.And, 0);
};
AndExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterAndExpr(this);
	}
};

AndExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitAndExpr(this);
	}
};

AndExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitAndExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SignedExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SignedExprContext.prototype = Object.create(ExpressionContext.prototype);
SignedExprContext.prototype.constructor = SignedExprContext;

SmackParser.SignedExprContext = SignedExprContext;

SignedExprContext.prototype.Minus = function() {
    return this.getToken(SmackParser.Minus, 0);
};

SignedExprContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SignedExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterSignedExpr(this);
	}
};

SignedExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitSignedExpr(this);
	}
};

SignedExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitSignedExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ModExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ModExprContext.prototype = Object.create(ExpressionContext.prototype);
ModExprContext.prototype.constructor = ModExprContext;

SmackParser.ModExprContext = ModExprContext;

ModExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ModExprContext.prototype.Mod = function() {
    return this.getToken(SmackParser.Mod, 0);
};
ModExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterModExpr(this);
	}
};

ModExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitModExpr(this);
	}
};

ModExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitModExpr(this);
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


function MulExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulExprContext.prototype = Object.create(ExpressionContext.prototype);
MulExprContext.prototype.constructor = MulExprContext;

SmackParser.MulExprContext = MulExprContext;

MulExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MulExprContext.prototype.Mul = function() {
    return this.getToken(SmackParser.Mul, 0);
};
MulExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterMulExpr(this);
	}
};

MulExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitMulExpr(this);
	}
};

MulExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitMulExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GeExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GeExprContext.prototype = Object.create(ExpressionContext.prototype);
GeExprContext.prototype.constructor = GeExprContext;

SmackParser.GeExprContext = GeExprContext;

GeExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

GeExprContext.prototype.Ge = function() {
    return this.getToken(SmackParser.Ge, 0);
};
GeExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterGeExpr(this);
	}
};

GeExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitGeExpr(this);
	}
};

GeExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitGeExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LtExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LtExprContext.prototype = Object.create(ExpressionContext.prototype);
LtExprContext.prototype.constructor = LtExprContext;

SmackParser.LtExprContext = LtExprContext;

LtExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LtExprContext.prototype.Lt = function() {
    return this.getToken(SmackParser.Lt, 0);
};
LtExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterLtExpr(this);
	}
};

LtExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitLtExpr(this);
	}
};

LtExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitLtExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OrExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExprContext.prototype = Object.create(ExpressionContext.prototype);
OrExprContext.prototype.constructor = OrExprContext;

SmackParser.OrExprContext = OrExprContext;

OrExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

OrExprContext.prototype.Or = function() {
    return this.getToken(SmackParser.Or, 0);
};
OrExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterOrExpr(this);
	}
};

OrExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitOrExpr(this);
	}
};

OrExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitOrExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PowExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowExprContext.prototype = Object.create(ExpressionContext.prototype);
PowExprContext.prototype.constructor = PowExprContext;

SmackParser.PowExprContext = PowExprContext;

PowExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

PowExprContext.prototype.Pow = function() {
    return this.getToken(SmackParser.Pow, 0);
};
PowExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterPowExpr(this);
	}
};

PowExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitPowExpr(this);
	}
};

PowExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitPowExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GtExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GtExprContext.prototype = Object.create(ExpressionContext.prototype);
GtExprContext.prototype.constructor = GtExprContext;

SmackParser.GtExprContext = GtExprContext;

GtExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

GtExprContext.prototype.Gt = function() {
    return this.getToken(SmackParser.Gt, 0);
};
GtExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterGtExpr(this);
	}
};

GtExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitGtExpr(this);
	}
};

GtExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitGtExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NeqExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NeqExprContext.prototype = Object.create(ExpressionContext.prototype);
NeqExprContext.prototype.constructor = NeqExprContext;

SmackParser.NeqExprContext = NeqExprContext;

NeqExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

NeqExprContext.prototype.Neq = function() {
    return this.getToken(SmackParser.Neq, 0);
};
NeqExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterNeqExpr(this);
	}
};

NeqExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitNeqExpr(this);
	}
};

NeqExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitNeqExpr(this);
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


function LeExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LeExprContext.prototype = Object.create(ExpressionContext.prototype);
LeExprContext.prototype.constructor = LeExprContext;

SmackParser.LeExprContext = LeExprContext;

LeExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LeExprContext.prototype.Le = function() {
    return this.getToken(SmackParser.Le, 0);
};
LeExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterLeExpr(this);
	}
};

LeExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitLeExpr(this);
	}
};

LeExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitLeExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SumExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SumExprContext.prototype = Object.create(ExpressionContext.prototype);
SumExprContext.prototype.constructor = SumExprContext;

SmackParser.SumExprContext = SumExprContext;

SumExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

SumExprContext.prototype.Plus = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmackParser.Plus);
    } else {
        return this.getToken(SmackParser.Plus, i);
    }
};


SumExprContext.prototype.Minus = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmackParser.Minus);
    } else {
        return this.getToken(SmackParser.Minus, i);
    }
};

SumExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterSumExpr(this);
	}
};

SumExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitSumExpr(this);
	}
};

SumExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitSumExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqExprContext.prototype = Object.create(ExpressionContext.prototype);
EqExprContext.prototype.constructor = EqExprContext;

SmackParser.EqExprContext = EqExprContext;

EqExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

EqExprContext.prototype.Eq = function() {
    return this.getToken(SmackParser.Eq, 0);
};
EqExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterEqExpr(this);
	}
};

EqExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitEqExpr(this);
	}
};

EqExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitEqExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DivExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivExprContext.prototype = Object.create(ExpressionContext.prototype);
DivExprContext.prototype.constructor = DivExprContext;

SmackParser.DivExprContext = DivExprContext;

DivExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

DivExprContext.prototype.Div = function() {
    return this.getToken(SmackParser.Div, 0);
};
DivExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterDivExpr(this);
	}
};

DivExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitDivExpr(this);
	}
};

DivExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitDivExpr(this);
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
    var _startState = 26;
    this.enterRecursionRule(localctx, 26, SmackParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        switch(this._input.LA(1)) {
        case SmackParser.Minus:
            localctx = new SignedExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 144;
            this.match(SmackParser.Minus);
            this.state = 145;
            this.expression(10);
            break;
        case SmackParser.T__4:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 146;
            this.match(SmackParser.T__4);
            this.state = 147;
            this.expression(0);
            this.state = 148;
            this.match(SmackParser.T__6);
            break;
        case SmackParser.T__8:
        case SmackParser.T__14:
        case SmackParser.T__17:
        case SmackParser.T__18:
        case SmackParser.T__19:
        case SmackParser.Id:
        case SmackParser.STRING:
        case SmackParser.NUMBER:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 150;
            this.resolvable();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 198;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 196;
                var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 153;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 154;
                    this.match(SmackParser.Pow);
                    this.state = 155;
                    this.expression(15);
                    break;

                case 2:
                    localctx = new MulExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 156;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 157;
                    this.match(SmackParser.Mul);
                    this.state = 158;
                    this.expression(15);
                    break;

                case 3:
                    localctx = new DivExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 159;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 160;
                    this.match(SmackParser.Div);
                    this.state = 161;
                    this.expression(14);
                    break;

                case 4:
                    localctx = new ModExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 162;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 163;
                    this.match(SmackParser.Mod);
                    this.state = 164;
                    this.expression(13);
                    break;

                case 5:
                    localctx = new SumExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 165;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 167; 
                    this._errHandler.sync(this);
                    var _alt = 1;
                    do {
                    	switch (_alt) {
                    	case 1:
                    		this.state = 166;
                    		_la = this._input.LA(1);
                    		if(!(_la===SmackParser.Plus || _la===SmackParser.Minus)) {
                    		this._errHandler.recoverInline(this);
                    		}
                    		else {
                    		    this.consume();
                    		}
                    		break;
                    	default:
                    		throw new antlr4.error.NoViableAltException(this);
                    	}
                    	this.state = 169; 
                    	this._errHandler.sync(this);
                    	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
                    } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
                    this.state = 171;
                    this.expression(12);
                    break;

                case 6:
                    localctx = new EqExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 172;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 173;
                    this.match(SmackParser.Eq);
                    this.state = 174;
                    this.expression(10);
                    break;

                case 7:
                    localctx = new NeqExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 175;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 176;
                    this.match(SmackParser.Neq);
                    this.state = 177;
                    this.expression(9);
                    break;

                case 8:
                    localctx = new LtExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 178;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 179;
                    this.match(SmackParser.Lt);
                    this.state = 180;
                    this.expression(8);
                    break;

                case 9:
                    localctx = new LeExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 181;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 182;
                    this.match(SmackParser.Le);
                    this.state = 183;
                    this.expression(7);
                    break;

                case 10:
                    localctx = new GtExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 184;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 185;
                    this.match(SmackParser.Gt);
                    this.state = 186;
                    this.expression(6);
                    break;

                case 11:
                    localctx = new GeExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 187;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 188;
                    this.match(SmackParser.Ge);
                    this.state = 189;
                    this.expression(5);
                    break;

                case 12:
                    localctx = new AndExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 190;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 191;
                    this.match(SmackParser.And);
                    this.state = 192;
                    this.expression(4);
                    break;

                case 13:
                    localctx = new OrExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 193;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 194;
                    this.match(SmackParser.Or);
                    this.state = 195;
                    this.expression(3);
                    break;

                } 
            }
            this.state = 200;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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

ResolvableContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

ResolvableContext.prototype.jsonPath = function() {
    return this.getTypedRuleContext(JsonPathContext,0);
};

ResolvableContext.prototype.funcInvoke = function() {
    return this.getTypedRuleContext(FuncInvokeContext,0);
};

ResolvableContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterResolvable(this);
	}
};

ResolvableContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitResolvable(this);
	}
};

ResolvableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitResolvable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.ResolvableContext = ResolvableContext;

SmackParser.prototype.resolvable = function() {

    var localctx = new ResolvableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SmackParser.RULE_resolvable);
    try {
        this.state = 204;
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 201;
            this.value();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 202;
            this.jsonPath();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 203;
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
    this.enterRule(localctx, 30, SmackParser.RULE_codeBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.match(SmackParser.T__14);
        this.state = 210;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (SmackParser.T__10 - 11)) | (1 << (SmackParser.T__11 - 11)) | (1 << (SmackParser.T__13 - 11)) | (1 << (SmackParser.Id - 11)))) !== 0)) {
            this.state = 207;
            this.sentence();
            this.state = 212;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 213;
        this.match(SmackParser.T__15);
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
    this.enterRule(localctx, 32, SmackParser.RULE_sentence);
    try {
        this.state = 220;
        switch(this._input.LA(1)) {
        case SmackParser.T__10:
        case SmackParser.Id:
            this.enterOuterAlt(localctx, 1);
            this.state = 215;
            this.statement();
            this.state = 216;
            this.match(SmackParser.T__1);
            break;
        case SmackParser.T__13:
            this.enterOuterAlt(localctx, 2);
            this.state = 218;
            this.loop();
            break;
        case SmackParser.T__11:
            this.enterOuterAlt(localctx, 3);
            this.state = 219;
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
    this.enterRule(localctx, 34, SmackParser.RULE_statement);
    try {
        this.state = 225;
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 222;
            this.varAssign();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 223;
            this.funcInvoke();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 224;
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
    this.enterRule(localctx, 36, SmackParser.RULE_json);
    try {
        this.state = 229;
        switch(this._input.LA(1)) {
        case SmackParser.T__14:
            this.enterOuterAlt(localctx, 1);
            this.state = 227;
            this.object();
            break;
        case SmackParser.T__8:
            this.enterOuterAlt(localctx, 2);
            this.state = 228;
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
    this.enterRule(localctx, 38, SmackParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.state = 244;
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 231;
            this.match(SmackParser.T__14);
            this.state = 232;
            this.pair();
            this.state = 237;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__5) {
                this.state = 233;
                this.match(SmackParser.T__5);
                this.state = 234;
                this.pair();
                this.state = 239;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 240;
            this.match(SmackParser.T__15);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 242;
            this.match(SmackParser.T__14);
            this.state = 243;
            this.match(SmackParser.T__15);
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
    this.enterRule(localctx, 40, SmackParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this.match(SmackParser.STRING);
        this.state = 247;
        this.match(SmackParser.T__16);
        this.state = 248;
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
    this.enterRule(localctx, 42, SmackParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.state = 263;
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 250;
            this.match(SmackParser.T__8);
            this.state = 251;
            this.value();
            this.state = 256;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__5) {
                this.state = 252;
                this.match(SmackParser.T__5);
                this.state = 253;
                this.value();
                this.state = 258;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 259;
            this.match(SmackParser.T__9);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 261;
            this.match(SmackParser.T__8);
            this.state = 262;
            this.match(SmackParser.T__9);
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
    this.enterRule(localctx, 44, SmackParser.RULE_value);
    try {
        this.state = 272;
        switch(this._input.LA(1)) {
        case SmackParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 265;
            this.match(SmackParser.STRING);
            break;
        case SmackParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 266;
            this.match(SmackParser.NUMBER);
            break;
        case SmackParser.T__14:
            this.enterOuterAlt(localctx, 3);
            this.state = 267;
            this.object();
            break;
        case SmackParser.T__8:
            this.enterOuterAlt(localctx, 4);
            this.state = 268;
            this.array();
            break;
        case SmackParser.T__17:
            this.enterOuterAlt(localctx, 5);
            this.state = 269;
            this.match(SmackParser.T__17);
            break;
        case SmackParser.T__18:
            this.enterOuterAlt(localctx, 6);
            this.state = 270;
            this.match(SmackParser.T__18);
            break;
        case SmackParser.T__19:
            this.enterOuterAlt(localctx, 7);
            this.state = 271;
            this.match(SmackParser.T__19);
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
	case 13:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

SmackParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 15);
		case 1:
			return this.precpred(this._ctx, 14);
		case 2:
			return this.precpred(this._ctx, 13);
		case 3:
			return this.precpred(this._ctx, 12);
		case 4:
			return this.precpred(this._ctx, 11);
		case 5:
			return this.precpred(this._ctx, 9);
		case 6:
			return this.precpred(this._ctx, 8);
		case 7:
			return this.precpred(this._ctx, 7);
		case 8:
			return this.precpred(this._ctx, 6);
		case 9:
			return this.precpred(this._ctx, 5);
		case 10:
			return this.precpred(this._ctx, 4);
		case 11:
			return this.precpred(this._ctx, 3);
		case 12:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.SmackParser = SmackParser;
