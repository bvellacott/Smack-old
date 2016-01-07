// Generated from ./Smack.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('../../index');
var SmackListener = require('./SmackListener').SmackListener;
var SmackVisitor = require('./SmackVisitor').SmackVisitor;

var grammarFileName = "Smack.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3*\u014f\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\3\2\7\2\64\n\2\f\2\16\2\67\13\2\3\2\3\2\7",
    "\2;\n\2\f\2\16\2>\13\2\3\2\6\2A\n\2\r\2\16\2B\7\2E\n\2\f\2\16\2H\13",
    "\2\3\2\6\2K\n\2\r\2\16\2L\3\2\7\2P\n\2\f\2\16\2S\13\2\7\2U\n\2\f\2\16",
    "\2X\13\2\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\5\5f\n\5\3",
    "\5\3\5\7\5j\n\5\f\5\16\5m\13\5\3\5\3\5\3\5\3\6\3\6\3\6\5\6u\n\6\3\6",
    "\3\6\7\6y\n\6\f\6\16\6|\13\6\3\6\3\6\3\7\3\7\7\7\u0082\n\7\f\7\16\7",
    "\u0085\13\7\3\b\3\b\3\b\7\b\u008a\n\b\f\b\16\b\u008d\13\b\3\t\3\t\3",
    "\t\3\t\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\7\13\u009c\n\13\f\13",
    "\16\13\u009f\13\13\3\13\5\13\u00a2\n\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f",
    "\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17",
    "\3\17\5\17\u00ba\n\17\3\17\3\17\6\17\u00be\n\17\r\17\16\17\u00bf\3\17",
    "\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3",
    "\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17",
    "\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\7\17\u00e7\n\17\f\17\16",
    "\17\u00ea\13\17\3\20\3\20\3\20\5\20\u00ef\n\20\3\21\3\21\7\21\u00f3",
    "\n\21\f\21\16\21\u00f6\13\21\3\21\6\21\u00f9\n\21\r\21\16\21\u00fa\3",
    "\21\7\21\u00fe\n\21\f\21\16\21\u0101\13\21\7\21\u0103\n\21\f\21\16\21",
    "\u0106\13\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\5\22\u0110\n\22",
    "\3\23\3\23\3\23\5\23\u0115\n\23\3\24\3\24\7\24\u0119\n\24\f\24\16\24",
    "\u011c\13\24\3\24\3\24\3\25\3\25\5\25\u0122\n\25\3\26\3\26\3\26\3\26",
    "\7\26\u0128\n\26\f\26\16\26\u012b\13\26\3\26\3\26\3\26\3\26\5\26\u0131",
    "\n\26\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\7\30\u013b\n\30\f\30\16",
    "\30\u013e\13\30\3\30\3\30\3\30\3\30\5\30\u0144\n\30\3\31\3\31\3\31\3",
    "\31\3\31\3\31\3\31\5\31\u014d\n\31\3\31\2\3\34\32\2\4\6\b\n\f\16\20",
    "\22\24\26\30\32\34\36 \"$&(*,.\60\2\4\3\2\31\32\3\2\22\22\u016b\2\65",
    "\3\2\2\2\4Y\3\2\2\2\6]\3\2\2\2\ba\3\2\2\2\nq\3\2\2\2\f\177\3\2\2\2\16",
    "\u0086\3\2\2\2\20\u008e\3\2\2\2\22\u0092\3\2\2\2\24\u0095\3\2\2\2\26",
    "\u00a3\3\2\2\2\30\u00aa\3\2\2\2\32\u00ad\3\2\2\2\34\u00b9\3\2\2\2\36",
    "\u00ee\3\2\2\2 \u00f0\3\2\2\2\"\u010f\3\2\2\2$\u0114\3\2\2\2&\u0116",
    "\3\2\2\2(\u0121\3\2\2\2*\u0130\3\2\2\2,\u0132\3\2\2\2.\u0143\3\2\2\2",
    "\60\u014c\3\2\2\2\62\64\5&\24\2\63\62\3\2\2\2\64\67\3\2\2\2\65\63\3",
    "\2\2\2\65\66\3\2\2\2\668\3\2\2\2\67\65\3\2\2\28F\5\4\3\29;\5&\24\2:",
    "9\3\2\2\2;>\3\2\2\2<:\3\2\2\2<=\3\2\2\2=@\3\2\2\2><\3\2\2\2?A\5\b\5",
    "\2@?\3\2\2\2AB\3\2\2\2B@\3\2\2\2BC\3\2\2\2CE\3\2\2\2D<\3\2\2\2EH\3\2",
    "\2\2FD\3\2\2\2FG\3\2\2\2GV\3\2\2\2HF\3\2\2\2IK\5&\24\2JI\3\2\2\2KL\3",
    "\2\2\2LJ\3\2\2\2LM\3\2\2\2MQ\3\2\2\2NP\5\b\5\2ON\3\2\2\2PS\3\2\2\2Q",
    "O\3\2\2\2QR\3\2\2\2RU\3\2\2\2SQ\3\2\2\2TJ\3\2\2\2UX\3\2\2\2VT\3\2\2",
    "\2VW\3\2\2\2W\3\3\2\2\2XV\3\2\2\2YZ\7\3\2\2Z[\5\16\b\2[\\\7\4\2\2\\",
    "\5\3\2\2\2]^\5\f\7\2^_\7\5\2\2_`\5\34\17\2`\7\3\2\2\2ab\7\6\2\2bc\7",
    "\'\2\2ce\7\7\2\2df\7\'\2\2ed\3\2\2\2ef\3\2\2\2fk\3\2\2\2gh\7\b\2\2h",
    "j\7\'\2\2ig\3\2\2\2jm\3\2\2\2ki\3\2\2\2kl\3\2\2\2ln\3\2\2\2mk\3\2\2",
    "\2no\7\t\2\2op\5 \21\2p\t\3\2\2\2qr\5\16\b\2rt\7\7\2\2su\5\36\20\2t",
    "s\3\2\2\2tu\3\2\2\2uz\3\2\2\2vw\7\b\2\2wy\5\36\20\2xv\3\2\2\2y|\3\2",
    "\2\2zx\3\2\2\2z{\3\2\2\2{}\3\2\2\2|z\3\2\2\2}~\7\t\2\2~\13\3\2\2\2\177",
    "\u0083\7\'\2\2\u0080\u0082\5\20\t\2\u0081\u0080\3\2\2\2\u0082\u0085",
    "\3\2\2\2\u0083\u0081\3\2\2\2\u0083\u0084\3\2\2\2\u0084\r\3\2\2\2\u0085",
    "\u0083\3\2\2\2\u0086\u008b\7\'\2\2\u0087\u0088\7\n\2\2\u0088\u008a\7",
    "\'\2\2\u0089\u0087\3\2\2\2\u008a\u008d\3\2\2\2\u008b\u0089\3\2\2\2\u008b",
    "\u008c\3\2\2\2\u008c\17\3\2\2\2\u008d\u008b\3\2\2\2\u008e\u008f\7\13",
    "\2\2\u008f\u0090\5\36\20\2\u0090\u0091\7\f\2\2\u0091\21\3\2\2\2\u0092",
    "\u0093\7\r\2\2\u0093\u0094\5\34\17\2\u0094\23\3\2\2\2\u0095\u0096\7",
    "\16\2\2\u0096\u0097\7\7\2\2\u0097\u0098\5\34\17\2\u0098\u0099\7\t\2",
    "\2\u0099\u009d\5 \21\2\u009a\u009c\5\26\f\2\u009b\u009a\3\2\2\2\u009c",
    "\u009f\3\2\2\2\u009d\u009b\3\2\2\2\u009d\u009e\3\2\2\2\u009e\u00a1\3",
    "\2\2\2\u009f\u009d\3\2\2\2\u00a0\u00a2\5\30\r\2\u00a1\u00a0\3\2\2\2",
    "\u00a1\u00a2\3\2\2\2\u00a2\25\3\2\2\2\u00a3\u00a4\7\17\2\2\u00a4\u00a5",
    "\7\16\2\2\u00a5\u00a6\7\7\2\2\u00a6\u00a7\5\34\17\2\u00a7\u00a8\7\t",
    "\2\2\u00a8\u00a9\5 \21\2\u00a9\27\3\2\2\2\u00aa\u00ab\7\17\2\2\u00ab",
    "\u00ac\5 \21\2\u00ac\31\3\2\2\2\u00ad\u00ae\7\20\2\2\u00ae\u00af\7\7",
    "\2\2\u00af\u00b0\5\34\17\2\u00b0\u00b1\7\t\2\2\u00b1\u00b2\5 \21\2\u00b2",
    "\33\3\2\2\2\u00b3\u00b4\b\17\1\2\u00b4\u00ba\5\36\20\2\u00b5\u00b6\7",
    "\7\2\2\u00b6\u00b7\5\34\17\2\u00b7\u00b8\7\t\2\2\u00b8\u00ba\3\2\2\2",
    "\u00b9\u00b3\3\2\2\2\u00b9\u00b5\3\2\2\2\u00ba\u00e8\3\2\2\2\u00bb\u00bd",
    "\f\17\2\2\u00bc\u00be\t\2\2\2\u00bd\u00bc\3\2\2\2\u00be\u00bf\3\2\2",
    "\2\u00bf\u00bd\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0\u00c1\3\2\2\2\u00c1",
    "\u00e7\5\34\17\20\u00c2\u00c3\f\16\2\2\u00c3\u00c4\7\33\2\2\u00c4\u00e7",
    "\5\34\17\17\u00c5\u00c6\f\r\2\2\u00c6\u00c7\7\34\2\2\u00c7\u00e7\5\34",
    "\17\16\u00c8\u00c9\f\f\2\2\u00c9\u00ca\7\35\2\2\u00ca\u00e7\5\34\17",
    "\r\u00cb\u00cc\f\13\2\2\u00cc\u00cd\7\36\2\2\u00cd\u00e7\5\34\17\f\u00ce",
    "\u00cf\f\n\2\2\u00cf\u00d0\7\37\2\2\u00d0\u00e7\5\34\17\13\u00d1\u00d2",
    "\f\t\2\2\u00d2\u00d3\7 \2\2\u00d3\u00e7\5\34\17\n\u00d4\u00d5\f\b\2",
    "\2\u00d5\u00d6\7!\2\2\u00d6\u00e7\5\34\17\t\u00d7\u00d8\f\7\2\2\u00d8",
    "\u00d9\7\"\2\2\u00d9\u00e7\5\34\17\b\u00da\u00db\f\6\2\2\u00db\u00dc",
    "\7#\2\2\u00dc\u00e7\5\34\17\7\u00dd\u00de\f\5\2\2\u00de\u00df\7$\2\2",
    "\u00df\u00e7\5\34\17\6\u00e0\u00e1\f\4\2\2\u00e1\u00e2\7%\2\2\u00e2",
    "\u00e7\5\34\17\5\u00e3\u00e4\f\3\2\2\u00e4\u00e5\7&\2\2\u00e5\u00e7",
    "\5\34\17\4\u00e6\u00bb\3\2\2\2\u00e6\u00c2\3\2\2\2\u00e6\u00c5\3\2\2",
    "\2\u00e6\u00c8\3\2\2\2\u00e6\u00cb\3\2\2\2\u00e6\u00ce\3\2\2\2\u00e6",
    "\u00d1\3\2\2\2\u00e6\u00d4\3\2\2\2\u00e6\u00d7\3\2\2\2\u00e6\u00da\3",
    "\2\2\2\u00e6\u00dd\3\2\2\2\u00e6\u00e0\3\2\2\2\u00e6\u00e3\3\2\2\2\u00e7",
    "\u00ea\3\2\2\2\u00e8\u00e6\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9\35\3\2",
    "\2\2\u00ea\u00e8\3\2\2\2\u00eb\u00ef\5\60\31\2\u00ec\u00ef\5\f\7\2\u00ed",
    "\u00ef\5\n\6\2\u00ee\u00eb\3\2\2\2\u00ee\u00ec\3\2\2\2\u00ee\u00ed\3",
    "\2\2\2\u00ef\37\3\2\2\2\u00f0\u0104\7\21\2\2\u00f1\u00f3\7\22\2\2\u00f2",
    "\u00f1\3\2\2\2\u00f3\u00f6\3\2\2\2\u00f4\u00f2\3\2\2\2\u00f4\u00f5\3",
    "\2\2\2\u00f5\u00f8\3\2\2\2\u00f6\u00f4\3\2\2\2\u00f7\u00f9\5\"\22\2",
    "\u00f8\u00f7\3\2\2\2\u00f9\u00fa\3\2\2\2\u00fa\u00f8\3\2\2\2\u00fa\u00fb",
    "\3\2\2\2\u00fb\u00ff\3\2\2\2\u00fc\u00fe\7\22\2\2\u00fd\u00fc\3\2\2",
    "\2\u00fe\u0101\3\2\2\2\u00ff\u00fd\3\2\2\2\u00ff\u0100\3\2\2\2\u0100",
    "\u0103\3\2\2\2\u0101\u00ff\3\2\2\2\u0102\u00f4\3\2\2\2\u0103\u0106\3",
    "\2\2\2\u0104\u0102\3\2\2\2\u0104\u0105\3\2\2\2\u0105\u0107\3\2\2\2\u0106",
    "\u0104\3\2\2\2\u0107\u0108\7\23\2\2\u0108!\3\2\2\2\u0109\u010a\5$\23",
    "\2\u010a\u010b\7\4\2\2\u010b\u0110\3\2\2\2\u010c\u0110\5\32\16\2\u010d",
    "\u0110\5\24\13\2\u010e\u0110\5&\24\2\u010f\u0109\3\2\2\2\u010f\u010c",
    "\3\2\2\2\u010f\u010d\3\2\2\2\u010f\u010e\3\2\2\2\u0110#\3\2\2\2\u0111",
    "\u0115\5\6\4\2\u0112\u0115\5\n\6\2\u0113\u0115\5\22\n\2\u0114\u0111",
    "\3\2\2\2\u0114\u0112\3\2\2\2\u0114\u0113\3\2\2\2\u0115%\3\2\2\2\u0116",
    "\u011a\7\24\2\2\u0117\u0119\n\3\2\2\u0118\u0117\3\2\2\2\u0119\u011c",
    "\3\2\2\2\u011a\u0118\3\2\2\2\u011a\u011b\3\2\2\2\u011b\u011d\3\2\2\2",
    "\u011c\u011a\3\2\2\2\u011d\u011e\7\22\2\2\u011e\'\3\2\2\2\u011f\u0122",
    "\5*\26\2\u0120\u0122\5.\30\2\u0121\u011f\3\2\2\2\u0121\u0120\3\2\2\2",
    "\u0122)\3\2\2\2\u0123\u0124\7\21\2\2\u0124\u0129\5,\27\2\u0125\u0126",
    "\7\b\2\2\u0126\u0128\5,\27\2\u0127\u0125\3\2\2\2\u0128\u012b\3\2\2\2",
    "\u0129\u0127\3\2\2\2\u0129\u012a\3\2\2\2\u012a\u012c\3\2\2\2\u012b\u0129",
    "\3\2\2\2\u012c\u012d\7\23\2\2\u012d\u0131\3\2\2\2\u012e\u012f\7\21\2",
    "\2\u012f\u0131\7\23\2\2\u0130\u0123\3\2\2\2\u0130\u012e\3\2\2\2\u0131",
    "+\3\2\2\2\u0132\u0133\7)\2\2\u0133\u0134\7\25\2\2\u0134\u0135\5\60\31",
    "\2\u0135-\3\2\2\2\u0136\u0137\7\13\2\2\u0137\u013c\5\60\31\2\u0138\u0139",
    "\7\b\2\2\u0139\u013b\5\60\31\2\u013a\u0138\3\2\2\2\u013b\u013e\3\2\2",
    "\2\u013c\u013a\3\2\2\2\u013c\u013d\3\2\2\2\u013d\u013f\3\2\2\2\u013e",
    "\u013c\3\2\2\2\u013f\u0140\7\f\2\2\u0140\u0144\3\2\2\2\u0141\u0142\7",
    "\13\2\2\u0142\u0144\7\f\2\2\u0143\u0136\3\2\2\2\u0143\u0141\3\2\2\2",
    "\u0144/\3\2\2\2\u0145\u014d\7)\2\2\u0146\u014d\7*\2\2\u0147\u014d\5",
    "*\26\2\u0148\u014d\5.\30\2\u0149\u014d\7\26\2\2\u014a\u014d\7\27\2\2",
    "\u014b\u014d\7\30\2\2\u014c\u0145\3\2\2\2\u014c\u0146\3\2\2\2\u014c",
    "\u0147\3\2\2\2\u014c\u0148\3\2\2\2\u014c\u0149\3\2\2\2\u014c\u014a\3",
    "\2\2\2\u014c\u014b\3\2\2\2\u014d\61\3\2\2\2#\65<BFLQVektz\u0083\u008b",
    "\u009d\u00a1\u00b9\u00bf\u00e6\u00e8\u00ee\u00f4\u00fa\u00ff\u0104\u010f",
    "\u0114\u011a\u0121\u0129\u0130\u013c\u0143\u014c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'pack'", "';'", "'='", "'func'", "'('", "','", 
                     "')'", "'.'", "'['", "']'", "'ret'", "'if'", "'else'", 
                     "'while'", "'{'", "'\n'", "'}'", "'//'", "':'", "'true'", 
                     "'false'", "'null'", "'+'", "'-'", "'*'", "'/'", "'%'", 
                     "'^'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", 
                     "'&&'", "'||'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', "Plus", "Minus", "Mul", "Div", "Mod", 
                      "Pow", "Eq", "Neq", "Lt", "Le", "Gt", "Ge", "And", 
                      "Or", "Id", "WS", "STRING", "NUMBER" ];

var ruleNames =  [ "smkFile", "packageDecl", "varAssign", "funcDecl", "funcInvoke", 
                   "jsonPath", "dottedId", "keyRef", "retStatement", "ifStat", 
                   "elseIfStat", "elseStat", "loop", "expression", "resolvable", 
                   "codeBlock", "sentence", "statement", "comment", "json", 
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
SmackParser.Plus = 23;
SmackParser.Minus = 24;
SmackParser.Mul = 25;
SmackParser.Div = 26;
SmackParser.Mod = 27;
SmackParser.Pow = 28;
SmackParser.Eq = 29;
SmackParser.Neq = 30;
SmackParser.Lt = 31;
SmackParser.Le = 32;
SmackParser.Gt = 33;
SmackParser.Ge = 34;
SmackParser.And = 35;
SmackParser.Or = 36;
SmackParser.Id = 37;
SmackParser.WS = 38;
SmackParser.STRING = 39;
SmackParser.NUMBER = 40;

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
SmackParser.RULE_comment = 18;
SmackParser.RULE_json = 19;
SmackParser.RULE_object = 20;
SmackParser.RULE_pair = 21;
SmackParser.RULE_array = 22;
SmackParser.RULE_value = 23;

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

SmkFileContext.prototype.comment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CommentContext);
    } else {
        return this.getTypedRuleContext(CommentContext,i);
    }
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
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__17) {
            this.state = 48;
            this.comment();
            this.state = 53;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 54;
        this.packageDecl();
        this.state = 68;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 58;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===SmackParser.T__17) {
                    this.state = 55;
                    this.comment();
                    this.state = 60;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 62; 
                this._errHandler.sync(this);
                var _alt = 1;
                do {
                	switch (_alt) {
                	case 1:
                		this.state = 61;
                		this.funcDecl();
                		break;
                	default:
                		throw new antlr4.error.NoViableAltException(this);
                	}
                	this.state = 64; 
                	this._errHandler.sync(this);
                	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER ); 
            }
            this.state = 70;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

        this.state = 84;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__17) {
            this.state = 72; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 71;
            		this.comment();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 74; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 79;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__3) {
                this.state = 76;
                this.funcDecl();
                this.state = 81;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 86;
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
        this.state = 87;
        this.match(SmackParser.T__0);
        this.state = 88;
        this.dottedId();
        this.state = 89;
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
        this.state = 91;
        this.jsonPath();
        this.state = 92;
        this.match(SmackParser.T__2);
        this.state = 93;
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
        this.state = 95;
        this.match(SmackParser.T__3);
        this.state = 96;
        this.match(SmackParser.Id);
        this.state = 97;
        this.match(SmackParser.T__4);
        this.state = 99;
        _la = this._input.LA(1);
        if(_la===SmackParser.Id) {
            this.state = 98;
            this.match(SmackParser.Id);
        }

        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__5) {
            this.state = 101;
            this.match(SmackParser.T__5);
            this.state = 102;
            this.match(SmackParser.Id);
            this.state = 107;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 108;
        this.match(SmackParser.T__6);
        this.state = 109;
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
        this.state = 111;
        this.dottedId();
        this.state = 112;
        this.match(SmackParser.T__4);
        this.state = 114;
        _la = this._input.LA(1);
        if(((((_la - 9)) & ~0x1f) == 0 && ((1 << (_la - 9)) & ((1 << (SmackParser.T__8 - 9)) | (1 << (SmackParser.T__14 - 9)) | (1 << (SmackParser.T__19 - 9)) | (1 << (SmackParser.T__20 - 9)) | (1 << (SmackParser.T__21 - 9)) | (1 << (SmackParser.Id - 9)) | (1 << (SmackParser.STRING - 9)) | (1 << (SmackParser.NUMBER - 9)))) !== 0)) {
            this.state = 113;
            this.resolvable();
        }

        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__5) {
            this.state = 116;
            this.match(SmackParser.T__5);
            this.state = 117;
            this.resolvable();
            this.state = 122;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 123;
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
        this.state = 125;
        this.match(SmackParser.Id);
        this.state = 129;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 126;
                this.keyRef(); 
            }
            this.state = 131;
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
        this.state = 132;
        this.match(SmackParser.Id);
        this.state = 137;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__7) {
            this.state = 133;
            this.match(SmackParser.T__7);
            this.state = 134;
            this.match(SmackParser.Id);
            this.state = 139;
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
        this.state = 140;
        this.match(SmackParser.T__8);
        this.state = 141;
        this.resolvable();
        this.state = 142;
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
        this.state = 144;
        this.match(SmackParser.T__10);
        this.state = 145;
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
        this.state = 147;
        this.match(SmackParser.T__11);
        this.state = 148;
        this.match(SmackParser.T__4);
        this.state = 149;
        this.expression(0);
        this.state = 150;
        this.match(SmackParser.T__6);
        this.state = 151;
        this.codeBlock();
        this.state = 155;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 152;
                this.elseIfStat(); 
            }
            this.state = 157;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

        this.state = 159;
        _la = this._input.LA(1);
        if(_la===SmackParser.T__12) {
            this.state = 158;
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
        this.state = 161;
        this.match(SmackParser.T__12);
        this.state = 162;
        this.match(SmackParser.T__11);
        this.state = 163;
        this.match(SmackParser.T__4);
        this.state = 164;
        this.expression(0);
        this.state = 165;
        this.match(SmackParser.T__6);
        this.state = 166;
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
        this.state = 168;
        this.match(SmackParser.T__12);
        this.state = 169;
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
        this.state = 171;
        this.match(SmackParser.T__13);
        this.state = 172;
        this.match(SmackParser.T__4);
        this.state = 173;
        this.expression(0);
        this.state = 174;
        this.match(SmackParser.T__6);
        this.state = 175;
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
        this.state = 183;
        switch(this._input.LA(1)) {
        case SmackParser.T__8:
        case SmackParser.T__14:
        case SmackParser.T__19:
        case SmackParser.T__20:
        case SmackParser.T__21:
        case SmackParser.Id:
        case SmackParser.STRING:
        case SmackParser.NUMBER:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 178;
            this.resolvable();
            break;
        case SmackParser.T__4:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 179;
            this.match(SmackParser.T__4);
            this.state = 180;
            this.expression(0);
            this.state = 181;
            this.match(SmackParser.T__6);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 230;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 228;
                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new SumExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 185;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 187; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        this.state = 186;
                        _la = this._input.LA(1);
                        if(!(_la===SmackParser.Plus || _la===SmackParser.Minus)) {
                        this._errHandler.recoverInline(this);
                        }
                        else {
                            this.consume();
                        }
                        this.state = 189; 
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while(_la===SmackParser.Plus || _la===SmackParser.Minus);
                    this.state = 191;
                    this.expression(14);
                    break;

                case 2:
                    localctx = new MulExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 192;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 193;
                    this.match(SmackParser.Mul);
                    this.state = 194;
                    this.expression(13);
                    break;

                case 3:
                    localctx = new DivExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 195;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 196;
                    this.match(SmackParser.Div);
                    this.state = 197;
                    this.expression(12);
                    break;

                case 4:
                    localctx = new ModExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 198;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 199;
                    this.match(SmackParser.Mod);
                    this.state = 200;
                    this.expression(11);
                    break;

                case 5:
                    localctx = new PowExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 201;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 202;
                    this.match(SmackParser.Pow);
                    this.state = 203;
                    this.expression(10);
                    break;

                case 6:
                    localctx = new EqExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 204;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 205;
                    this.match(SmackParser.Eq);
                    this.state = 206;
                    this.expression(9);
                    break;

                case 7:
                    localctx = new NeqExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 207;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 208;
                    this.match(SmackParser.Neq);
                    this.state = 209;
                    this.expression(8);
                    break;

                case 8:
                    localctx = new LtExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 210;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 211;
                    this.match(SmackParser.Lt);
                    this.state = 212;
                    this.expression(7);
                    break;

                case 9:
                    localctx = new LeExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 213;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 214;
                    this.match(SmackParser.Le);
                    this.state = 215;
                    this.expression(6);
                    break;

                case 10:
                    localctx = new GtExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 216;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 217;
                    this.match(SmackParser.Gt);
                    this.state = 218;
                    this.expression(5);
                    break;

                case 11:
                    localctx = new GeExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 219;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 220;
                    this.match(SmackParser.Ge);
                    this.state = 221;
                    this.expression(4);
                    break;

                case 12:
                    localctx = new AndExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 222;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 223;
                    this.match(SmackParser.And);
                    this.state = 224;
                    this.expression(3);
                    break;

                case 13:
                    localctx = new OrExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 225;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 226;
                    this.match(SmackParser.Or);
                    this.state = 227;
                    this.expression(2);
                    break;

                } 
            }
            this.state = 232;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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
        this.state = 236;
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 233;
            this.value();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 234;
            this.jsonPath();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 235;
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
        this.state = 238;
        this.match(SmackParser.T__14);
        this.state = 258;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (SmackParser.T__10 - 11)) | (1 << (SmackParser.T__11 - 11)) | (1 << (SmackParser.T__13 - 11)) | (1 << (SmackParser.T__15 - 11)) | (1 << (SmackParser.T__17 - 11)) | (1 << (SmackParser.Id - 11)))) !== 0)) {
            this.state = 242;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__15) {
                this.state = 239;
                this.match(SmackParser.T__15);
                this.state = 244;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 246; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 245;
            		this.sentence();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 248; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,21, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 253;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 250;
                    this.match(SmackParser.T__15); 
                }
                this.state = 255;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
            }

            this.state = 260;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 261;
        this.match(SmackParser.T__16);
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

SentenceContext.prototype.comment = function() {
    return this.getTypedRuleContext(CommentContext,0);
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
        this.state = 269;
        switch(this._input.LA(1)) {
        case SmackParser.T__10:
        case SmackParser.Id:
            this.enterOuterAlt(localctx, 1);
            this.state = 263;
            this.statement();
            this.state = 264;
            this.match(SmackParser.T__1);
            break;
        case SmackParser.T__13:
            this.enterOuterAlt(localctx, 2);
            this.state = 266;
            this.loop();
            break;
        case SmackParser.T__11:
            this.enterOuterAlt(localctx, 3);
            this.state = 267;
            this.ifStat();
            break;
        case SmackParser.T__17:
            this.enterOuterAlt(localctx, 4);
            this.state = 268;
            this.comment();
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
        this.state = 274;
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 271;
            this.varAssign();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 272;
            this.funcInvoke();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 273;
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

function CommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_comment;
    return this;
}

CommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentContext.prototype.constructor = CommentContext;


CommentContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterComment(this);
	}
};

CommentContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitComment(this);
	}
};

CommentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitComment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.CommentContext = CommentContext;

SmackParser.prototype.comment = function() {

    var localctx = new CommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SmackParser.RULE_comment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
        this.match(SmackParser.T__17);
        this.state = 280;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SmackParser.T__0) | (1 << SmackParser.T__1) | (1 << SmackParser.T__2) | (1 << SmackParser.T__3) | (1 << SmackParser.T__4) | (1 << SmackParser.T__5) | (1 << SmackParser.T__6) | (1 << SmackParser.T__7) | (1 << SmackParser.T__8) | (1 << SmackParser.T__9) | (1 << SmackParser.T__10) | (1 << SmackParser.T__11) | (1 << SmackParser.T__12) | (1 << SmackParser.T__13) | (1 << SmackParser.T__14) | (1 << SmackParser.T__16) | (1 << SmackParser.T__17) | (1 << SmackParser.T__18) | (1 << SmackParser.T__19) | (1 << SmackParser.T__20) | (1 << SmackParser.T__21) | (1 << SmackParser.Plus) | (1 << SmackParser.Minus) | (1 << SmackParser.Mul) | (1 << SmackParser.Div) | (1 << SmackParser.Mod) | (1 << SmackParser.Pow) | (1 << SmackParser.Eq) | (1 << SmackParser.Neq) | (1 << SmackParser.Lt))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (SmackParser.Le - 32)) | (1 << (SmackParser.Gt - 32)) | (1 << (SmackParser.Ge - 32)) | (1 << (SmackParser.And - 32)) | (1 << (SmackParser.Or - 32)) | (1 << (SmackParser.Id - 32)) | (1 << (SmackParser.WS - 32)) | (1 << (SmackParser.STRING - 32)) | (1 << (SmackParser.NUMBER - 32)))) !== 0)) {
            this.state = 277;
            _la = this._input.LA(1);
            if(_la<=0 || _la===SmackParser.T__15) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 282;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 283;
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
        this.state = 287;
        switch(this._input.LA(1)) {
        case SmackParser.T__14:
            this.enterOuterAlt(localctx, 1);
            this.state = 285;
            this.object();
            break;
        case SmackParser.T__8:
            this.enterOuterAlt(localctx, 2);
            this.state = 286;
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
        this.state = 302;
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 289;
            this.match(SmackParser.T__14);
            this.state = 290;
            this.pair();
            this.state = 295;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__5) {
                this.state = 291;
                this.match(SmackParser.T__5);
                this.state = 292;
                this.pair();
                this.state = 297;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 298;
            this.match(SmackParser.T__16);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 300;
            this.match(SmackParser.T__14);
            this.state = 301;
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
        this.state = 304;
        this.match(SmackParser.STRING);
        this.state = 305;
        this.match(SmackParser.T__18);
        this.state = 306;
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
        this.state = 321;
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 308;
            this.match(SmackParser.T__8);
            this.state = 309;
            this.value();
            this.state = 314;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__5) {
                this.state = 310;
                this.match(SmackParser.T__5);
                this.state = 311;
                this.value();
                this.state = 316;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 317;
            this.match(SmackParser.T__9);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 319;
            this.match(SmackParser.T__8);
            this.state = 320;
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
    this.enterRule(localctx, 46, SmackParser.RULE_value);
    try {
        this.state = 330;
        switch(this._input.LA(1)) {
        case SmackParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 323;
            this.match(SmackParser.STRING);
            break;
        case SmackParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 324;
            this.match(SmackParser.NUMBER);
            break;
        case SmackParser.T__14:
            this.enterOuterAlt(localctx, 3);
            this.state = 325;
            this.object();
            break;
        case SmackParser.T__8:
            this.enterOuterAlt(localctx, 4);
            this.state = 326;
            this.array();
            break;
        case SmackParser.T__19:
            this.enterOuterAlt(localctx, 5);
            this.state = 327;
            this.match(SmackParser.T__19);
            break;
        case SmackParser.T__20:
            this.enterOuterAlt(localctx, 6);
            this.state = 328;
            this.match(SmackParser.T__20);
            break;
        case SmackParser.T__21:
            this.enterOuterAlt(localctx, 7);
            this.state = 329;
            this.match(SmackParser.T__21);
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
			return this.precpred(this._ctx, 13);
		case 1:
			return this.precpred(this._ctx, 12);
		case 2:
			return this.precpred(this._ctx, 11);
		case 3:
			return this.precpred(this._ctx, 10);
		case 4:
			return this.precpred(this._ctx, 9);
		case 5:
			return this.precpred(this._ctx, 8);
		case 6:
			return this.precpred(this._ctx, 7);
		case 7:
			return this.precpred(this._ctx, 6);
		case 8:
			return this.precpred(this._ctx, 5);
		case 9:
			return this.precpred(this._ctx, 4);
		case 10:
			return this.precpred(this._ctx, 3);
		case 11:
			return this.precpred(this._ctx, 2);
		case 12:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.SmackParser = SmackParser;
