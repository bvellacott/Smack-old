// Generated from ./Smack.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('../../index');
var SmackListener = require('./SmackListener').SmackListener;
var SmackVisitor = require('./SmackVisitor').SmackVisitor;

var grammarFileName = "Smack.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3(\u014c\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\3\2\3\2\7\29\n\2\f\2\16",
    "\2<\13\2\3\3\3\3\3\3\3\3\3\4\7\4C\n\4\f\4\16\4F\13\4\3\4\3\4\7\4J\n",
    "\4\f\4\16\4M\13\4\3\4\6\4P\n\4\r\4\16\4Q\7\4T\n\4\f\4\16\4W\13\4\3\4",
    "\6\4Z\n\4\r\4\16\4[\3\4\7\4_\n\4\f\4\16\4b\13\4\7\4d\n\4\f\4\16\4g\13",
    "\4\3\5\3\5\3\5\7\5l\n\5\f\5\16\5o\13\5\3\6\3\6\3\6\3\6\3\7\3\7\5\7w",
    "\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u0084\n\b\3\t\3",
    "\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\7\n\u0090\n\n\f\n\16\n\u0093\13\n",
    "\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n\u009c\n\n\3\13\3\13\3\13\3\13\3\13",
    "\7\13\u00a3\n\13\f\13\16\13\u00a6\13\13\3\13\3\13\3\13\3\13\3\13\3\13",
    "\5\13\u00ae\n\13\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\7\r\u00b9\n\r\f",
    "\r\16\r\u00bc\13\r\3\r\5\r\u00bf\n\r\3\16\3\16\3\16\3\16\3\16\3\16\3",
    "\16\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21",
    "\3\21\3\21\5\21\u00d7\n\21\3\21\3\21\3\21\3\21\3\21\3\21\6\21\u00df",
    "\n\21\r\21\16\21\u00e0\3\21\3\21\7\21\u00e5\n\21\f\21\16\21\u00e8\13",
    "\21\3\22\3\22\3\22\5\22\u00ed\n\22\3\23\3\23\7\23\u00f1\n\23\f\23\16",
    "\23\u00f4\13\23\3\23\6\23\u00f7\n\23\r\23\16\23\u00f8\3\23\7\23\u00fc",
    "\n\23\f\23\16\23\u00ff\13\23\7\23\u0101\n\23\f\23\16\23\u0104\13\23",
    "\3\23\3\23\3\24\3\24\3\24\3\24\3\24\5\24\u010d\n\24\3\25\3\25\3\25\5",
    "\25\u0112\n\25\3\26\3\26\7\26\u0116\n\26\f\26\16\26\u0119\13\26\3\26",
    "\3\26\3\27\3\27\5\27\u011f\n\27\3\30\3\30\3\30\3\30\7\30\u0125\n\30",
    "\f\30\16\30\u0128\13\30\3\30\3\30\3\30\3\30\5\30\u012e\n\30\3\31\3\31",
    "\3\31\3\31\3\32\3\32\3\32\3\32\7\32\u0138\n\32\f\32\16\32\u013b\13\32",
    "\3\32\3\32\3\32\3\32\5\32\u0141\n\32\3\33\3\33\3\33\3\33\3\33\3\33\3",
    "\33\5\33\u014a\n\33\3\33\2\3 \34\2\4\6\b\n\f\16\20\22\24\26\30\32\34",
    "\36 \"$&(*,.\60\62\64\2\3\3\2\36\36\u0165\2\66\3\2\2\2\4=\3\2\2\2\6",
    "D\3\2\2\2\bh\3\2\2\2\np\3\2\2\2\fv\3\2\2\2\16\u0083\3\2\2\2\20\u0085",
    "\3\2\2\2\22\u009b\3\2\2\2\24\u00ad\3\2\2\2\26\u00af\3\2\2\2\30\u00b2",
    "\3\2\2\2\32\u00c0\3\2\2\2\34\u00c7\3\2\2\2\36\u00ca\3\2\2\2 \u00d6\3",
    "\2\2\2\"\u00ec\3\2\2\2$\u00ee\3\2\2\2&\u010c\3\2\2\2(\u0111\3\2\2\2",
    "*\u0113\3\2\2\2,\u011e\3\2\2\2.\u012d\3\2\2\2\60\u012f\3\2\2\2\62\u0140",
    "\3\2\2\2\64\u0149\3\2\2\2\66:\7%\2\2\679\5\4\3\28\67\3\2\2\29<\3\2\2",
    "\2:8\3\2\2\2:;\3\2\2\2;\3\3\2\2\2<:\3\2\2\2=>\7\3\2\2>?\7\'\2\2?@\7",
    "\4\2\2@\5\3\2\2\2AC\5*\26\2BA\3\2\2\2CF\3\2\2\2DB\3\2\2\2DE\3\2\2\2",
    "EG\3\2\2\2FD\3\2\2\2GU\5\n\6\2HJ\5*\26\2IH\3\2\2\2JM\3\2\2\2KI\3\2\2",
    "\2KL\3\2\2\2LO\3\2\2\2MK\3\2\2\2NP\5\22\n\2ON\3\2\2\2PQ\3\2\2\2QO\3",
    "\2\2\2QR\3\2\2\2RT\3\2\2\2SK\3\2\2\2TW\3\2\2\2US\3\2\2\2UV\3\2\2\2V",
    "e\3\2\2\2WU\3\2\2\2XZ\5*\26\2YX\3\2\2\2Z[\3\2\2\2[Y\3\2\2\2[\\\3\2\2",
    "\2\\`\3\2\2\2]_\5\22\n\2^]\3\2\2\2_b\3\2\2\2`^\3\2\2\2`a\3\2\2\2ad\3",
    "\2\2\2b`\3\2\2\2cY\3\2\2\2dg\3\2\2\2ec\3\2\2\2ef\3\2\2\2f\7\3\2\2\2",
    "ge\3\2\2\2hm\7%\2\2ij\7\5\2\2jl\7%\2\2ki\3\2\2\2lo\3\2\2\2mk\3\2\2\2",
    "mn\3\2\2\2n\t\3\2\2\2om\3\2\2\2pq\7\6\2\2qr\5\b\5\2rs\7\7\2\2s\13\3",
    "\2\2\2tw\7\b\2\2uw\7\t\2\2vt\3\2\2\2vu\3\2\2\2w\r\3\2\2\2x\u0084\5\f",
    "\7\2y\u0084\7\n\2\2z\u0084\7\13\2\2{\u0084\7\f\2\2|\u0084\7\r\2\2}\u0084",
    "\7\16\2\2~\u0084\7\17\2\2\177\u0084\7\20\2\2\u0080\u0084\7\21\2\2\u0081",
    "\u0084\7\22\2\2\u0082\u0084\7\23\2\2\u0083x\3\2\2\2\u0083y\3\2\2\2\u0083",
    "z\3\2\2\2\u0083{\3\2\2\2\u0083|\3\2\2\2\u0083}\3\2\2\2\u0083~\3\2\2",
    "\2\u0083\177\3\2\2\2\u0083\u0080\3\2\2\2\u0083\u0081\3\2\2\2\u0083\u0082",
    "\3\2\2\2\u0084\17\3\2\2\2\u0085\u0086\5\2\2\2\u0086\u0087\7\24\2\2\u0087",
    "\u0088\5 \21\2\u0088\21\3\2\2\2\u0089\u008a\7\25\2\2\u008a\u008b\7%",
    "\2\2\u008b\u008c\7\26\2\2\u008c\u0091\7%\2\2\u008d\u008e\7\27\2\2\u008e",
    "\u0090\7%\2\2\u008f\u008d\3\2\2\2\u0090\u0093\3\2\2\2\u0091\u008f\3",
    "\2\2\2\u0091\u0092\3\2\2\2\u0092\u0094\3\2\2\2\u0093\u0091\3\2\2\2\u0094",
    "\u0095\7\30\2\2\u0095\u009c\5$\23\2\u0096\u0097\7\25\2\2\u0097\u0098",
    "\7%\2\2\u0098\u0099\7\26\2\2\u0099\u009a\7\30\2\2\u009a\u009c\5$\23",
    "\2\u009b\u0089\3\2\2\2\u009b\u0096\3\2\2\2\u009c\23\3\2\2\2\u009d\u009e",
    "\5\b\5\2\u009e\u009f\7\26\2\2\u009f\u00a4\5\"\22\2\u00a0\u00a1\7\27",
    "\2\2\u00a1\u00a3\5\"\22\2\u00a2\u00a0\3\2\2\2\u00a3\u00a6\3\2\2\2\u00a4",
    "\u00a2\3\2\2\2\u00a4\u00a5\3\2\2\2\u00a5\u00a7\3\2\2\2\u00a6\u00a4\3",
    "\2\2\2\u00a7\u00a8\7\30\2\2\u00a8\u00ae\3\2\2\2\u00a9\u00aa\5\b\5\2",
    "\u00aa\u00ab\7\26\2\2\u00ab\u00ac\7\30\2\2\u00ac\u00ae\3\2\2\2\u00ad",
    "\u009d\3\2\2\2\u00ad\u00a9\3\2\2\2\u00ae\25\3\2\2\2\u00af\u00b0\7\31",
    "\2\2\u00b0\u00b1\5 \21\2\u00b1\27\3\2\2\2\u00b2\u00b3\7\32\2\2\u00b3",
    "\u00b4\7\26\2\2\u00b4\u00b5\5 \21\2\u00b5\u00b6\7\30\2\2\u00b6\u00ba",
    "\5$\23\2\u00b7\u00b9\5\32\16\2\u00b8\u00b7\3\2\2\2\u00b9\u00bc\3\2\2",
    "\2\u00ba\u00b8\3\2\2\2\u00ba\u00bb\3\2\2\2\u00bb\u00be\3\2\2\2\u00bc",
    "\u00ba\3\2\2\2\u00bd\u00bf\5\34\17\2\u00be\u00bd\3\2\2\2\u00be\u00bf",
    "\3\2\2\2\u00bf\31\3\2\2\2\u00c0\u00c1\7\33\2\2\u00c1\u00c2\7\32\2\2",
    "\u00c2\u00c3\7\26\2\2\u00c3\u00c4\5 \21\2\u00c4\u00c5\7\30\2\2\u00c5",
    "\u00c6\5$\23\2\u00c6\33\3\2\2\2\u00c7\u00c8\7\33\2\2\u00c8\u00c9\5$",
    "\23\2\u00c9\35\3\2\2\2\u00ca\u00cb\7\34\2\2\u00cb\u00cc\7\26\2\2\u00cc",
    "\u00cd\5 \21\2\u00cd\u00ce\7\30\2\2\u00ce\u00cf\5$\23\2\u00cf\37\3\2",
    "\2\2\u00d0\u00d1\b\21\1\2\u00d1\u00d7\5\"\22\2\u00d2\u00d3\7\26\2\2",
    "\u00d3\u00d4\5 \21\2\u00d4\u00d5\7\30\2\2\u00d5\u00d7\3\2\2\2\u00d6",
    "\u00d0\3\2\2\2\u00d6\u00d2\3\2\2\2\u00d7\u00e6\3\2\2\2\u00d8\u00d9\f",
    "\5\2\2\u00d9\u00da\5\16\b\2\u00da\u00db\5 \21\6\u00db\u00e5\3\2\2\2",
    "\u00dc\u00de\f\4\2\2\u00dd\u00df\5\f\7\2\u00de\u00dd\3\2\2\2\u00df\u00e0",
    "\3\2\2\2\u00e0\u00de\3\2\2\2\u00e0\u00e1\3\2\2\2\u00e1\u00e2\3\2\2\2",
    "\u00e2\u00e3\5 \21\5\u00e3\u00e5\3\2\2\2\u00e4\u00d8\3\2\2\2\u00e4\u00dc",
    "\3\2\2\2\u00e5\u00e8\3\2\2\2\u00e6\u00e4\3\2\2\2\u00e6\u00e7\3\2\2\2",
    "\u00e7!\3\2\2\2\u00e8\u00e6\3\2\2\2\u00e9\u00ed\5\64\33\2\u00ea\u00ed",
    "\5\2\2\2\u00eb\u00ed\5\24\13\2\u00ec\u00e9\3\2\2\2\u00ec\u00ea\3\2\2",
    "\2\u00ec\u00eb\3\2\2\2\u00ed#\3\2\2\2\u00ee\u0102\7\35\2\2\u00ef\u00f1",
    "\7\36\2\2\u00f0\u00ef\3\2\2\2\u00f1\u00f4\3\2\2\2\u00f2\u00f0\3\2\2",
    "\2\u00f2\u00f3\3\2\2\2\u00f3\u00f6\3\2\2\2\u00f4\u00f2\3\2\2\2\u00f5",
    "\u00f7\5&\24\2\u00f6\u00f5\3\2\2\2\u00f7\u00f8\3\2\2\2\u00f8\u00f6\3",
    "\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\u00fd\3\2\2\2\u00fa\u00fc\7\36\2\2",
    "\u00fb\u00fa\3\2\2\2\u00fc\u00ff\3\2\2\2\u00fd\u00fb\3\2\2\2\u00fd\u00fe",
    "\3\2\2\2\u00fe\u0101\3\2\2\2\u00ff\u00fd\3\2\2\2\u0100\u00f2\3\2\2\2",
    "\u0101\u0104\3\2\2\2\u0102\u0100\3\2\2\2\u0102\u0103\3\2\2\2\u0103\u0105",
    "\3\2\2\2\u0104\u0102\3\2\2\2\u0105\u0106\7\37\2\2\u0106%\3\2\2\2\u0107",
    "\u0108\5(\25\2\u0108\u0109\7\7\2\2\u0109\u010d\3\2\2\2\u010a\u010d\5",
    "\36\20\2\u010b\u010d\5\30\r\2\u010c\u0107\3\2\2\2\u010c\u010a\3\2\2",
    "\2\u010c\u010b\3\2\2\2\u010d\'\3\2\2\2\u010e\u0112\5\20\t\2\u010f\u0112",
    "\5\24\13\2\u0110\u0112\5\26\f\2\u0111\u010e\3\2\2\2\u0111\u010f\3\2",
    "\2\2\u0111\u0110\3\2\2\2\u0112)\3\2\2\2\u0113\u0117\7 \2\2\u0114\u0116",
    "\n\2\2\2\u0115\u0114\3\2\2\2\u0116\u0119\3\2\2\2\u0117\u0115\3\2\2\2",
    "\u0117\u0118\3\2\2\2\u0118\u011a\3\2\2\2\u0119\u0117\3\2\2\2\u011a\u011b",
    "\7\36\2\2\u011b+\3\2\2\2\u011c\u011f\5.\30\2\u011d\u011f\5\62\32\2\u011e",
    "\u011c\3\2\2\2\u011e\u011d\3\2\2\2\u011f-\3\2\2\2\u0120\u0121\7\35\2",
    "\2\u0121\u0126\5\60\31\2\u0122\u0123\7\27\2\2\u0123\u0125\5\60\31\2",
    "\u0124\u0122\3\2\2\2\u0125\u0128\3\2\2\2\u0126\u0124\3\2\2\2\u0126\u0127",
    "\3\2\2\2\u0127\u0129\3\2\2\2\u0128\u0126\3\2\2\2\u0129\u012a\7\37\2",
    "\2\u012a\u012e\3\2\2\2\u012b\u012c\7\35\2\2\u012c\u012e\7\37\2\2\u012d",
    "\u0120\3\2\2\2\u012d\u012b\3\2\2\2\u012e/\3\2\2\2\u012f\u0130\7\'\2",
    "\2\u0130\u0131\7!\2\2\u0131\u0132\5\64\33\2\u0132\61\3\2\2\2\u0133\u0134",
    "\7\3\2\2\u0134\u0139\5\64\33\2\u0135\u0136\7\27\2\2\u0136\u0138\5\64",
    "\33\2\u0137\u0135\3\2\2\2\u0138\u013b\3\2\2\2\u0139\u0137\3\2\2\2\u0139",
    "\u013a\3\2\2\2\u013a\u013c\3\2\2\2\u013b\u0139\3\2\2\2\u013c\u013d\7",
    "\4\2\2\u013d\u0141\3\2\2\2\u013e\u013f\7\3\2\2\u013f\u0141\7\4\2\2\u0140",
    "\u0133\3\2\2\2\u0140\u013e\3\2\2\2\u0141\63\3\2\2\2\u0142\u014a\7\'",
    "\2\2\u0143\u014a\7(\2\2\u0144\u014a\5.\30\2\u0145\u014a\5\62\32\2\u0146",
    "\u014a\7\"\2\2\u0147\u014a\7#\2\2\u0148\u014a\7$\2\2\u0149\u0142\3\2",
    "\2\2\u0149\u0143\3\2\2\2\u0149\u0144\3\2\2\2\u0149\u0145\3\2\2\2\u0149",
    "\u0146\3\2\2\2\u0149\u0147\3\2\2\2\u0149\u0148\3\2\2\2\u014a\65\3\2",
    "\2\2%:DKQU[`emv\u0083\u0091\u009b\u00a4\u00ad\u00ba\u00be\u00d6\u00e0",
    "\u00e4\u00e6\u00ec\u00f2\u00f8\u00fd\u0102\u010c\u0111\u0117\u011e\u0126",
    "\u012d\u0139\u0140\u0149"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'['", "']'", "'.'", "'pack'", "';'", "'+'", 
                     "'-'", "'*'", "'/'", "'%'", "'^'", "'=='", "'!='", 
                     "'<'", "'<='", "'>'", "'>='", "'='", "'func'", "'('", 
                     "','", "')'", "'ret'", "'if'", "'else'", "'while'", 
                     "'{'", "'\n'", "'}'", "'//'", "':'", "'true'", "'false'", 
                     "'null'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      "Id", "WS", "STRING", "NUMBER" ];

var ruleNames =  [ "jsonPath", "keyRef", "smkFile", "dottedId", "packageDecl", 
                   "sumOp", "op", "varAssign", "funcDecl", "funcInvoke", 
                   "retStatement", "ifStat", "elseIfStat", "elseStat", "loop", 
                   "expression", "resolvable", "codeBlock", "sentence", 
                   "statement", "comment", "json", "object", "pair", "array", 
                   "value" ];

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
SmackParser.T__32 = 33;
SmackParser.T__33 = 34;
SmackParser.Id = 35;
SmackParser.WS = 36;
SmackParser.STRING = 37;
SmackParser.NUMBER = 38;

SmackParser.RULE_jsonPath = 0;
SmackParser.RULE_keyRef = 1;
SmackParser.RULE_smkFile = 2;
SmackParser.RULE_dottedId = 3;
SmackParser.RULE_packageDecl = 4;
SmackParser.RULE_sumOp = 5;
SmackParser.RULE_op = 6;
SmackParser.RULE_varAssign = 7;
SmackParser.RULE_funcDecl = 8;
SmackParser.RULE_funcInvoke = 9;
SmackParser.RULE_retStatement = 10;
SmackParser.RULE_ifStat = 11;
SmackParser.RULE_elseIfStat = 12;
SmackParser.RULE_elseStat = 13;
SmackParser.RULE_loop = 14;
SmackParser.RULE_expression = 15;
SmackParser.RULE_resolvable = 16;
SmackParser.RULE_codeBlock = 17;
SmackParser.RULE_sentence = 18;
SmackParser.RULE_statement = 19;
SmackParser.RULE_comment = 20;
SmackParser.RULE_json = 21;
SmackParser.RULE_object = 22;
SmackParser.RULE_pair = 23;
SmackParser.RULE_array = 24;
SmackParser.RULE_value = 25;

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
        this.state = 52;
        this.match(SmackParser.Id);
        this.state = 56;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 53;
                this.keyRef(); 
            }
            this.state = 58;
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
        this.state = 59;
        this.match(SmackParser.T__0);
        this.state = 60;
        this.match(SmackParser.STRING);
        this.state = 61;
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
    this.enterRule(localctx, 4, SmackParser.RULE_smkFile);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__29) {
            this.state = 63;
            this.comment();
            this.state = 68;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 69;
        this.packageDecl();
        this.state = 83;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 73;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===SmackParser.T__29) {
                    this.state = 70;
                    this.comment();
                    this.state = 75;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 77; 
                this._errHandler.sync(this);
                var _alt = 1;
                do {
                	switch (_alt) {
                	case 1:
                		this.state = 76;
                		this.funcDecl();
                		break;
                	default:
                		throw new antlr4.error.NoViableAltException(this);
                	}
                	this.state = 79; 
                	this._errHandler.sync(this);
                	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER ); 
            }
            this.state = 85;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

        this.state = 99;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__29) {
            this.state = 87; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 86;
            		this.comment();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 89; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 94;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__18) {
                this.state = 91;
                this.funcDecl();
                this.state = 96;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 101;
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
    this.enterRule(localctx, 6, SmackParser.RULE_dottedId);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.match(SmackParser.Id);
        this.state = 107;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__2) {
            this.state = 103;
            this.match(SmackParser.T__2);
            this.state = 104;
            this.match(SmackParser.Id);
            this.state = 109;
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
        this.state = 110;
        this.match(SmackParser.T__3);
        this.state = 111;
        this.dottedId();
        this.state = 112;
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

function SumOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_sumOp;
    return this;
}

SumOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SumOpContext.prototype.constructor = SumOpContext;


 
SumOpContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function MinusContext(parser, ctx) {
	SumOpContext.call(this, parser);
    SumOpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MinusContext.prototype = Object.create(SumOpContext.prototype);
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


function PlusContext(parser, ctx) {
	SumOpContext.call(this, parser);
    SumOpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PlusContext.prototype = Object.create(SumOpContext.prototype);
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



SmackParser.SumOpContext = SumOpContext;

SmackParser.prototype.sumOp = function() {

    var localctx = new SumOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SmackParser.RULE_sumOp);
    try {
        this.state = 116;
        switch(this._input.LA(1)) {
        case SmackParser.T__5:
            localctx = new PlusContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 114;
            this.match(SmackParser.T__5);
            break;
        case SmackParser.T__6:
            localctx = new MinusContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 115;
            this.match(SmackParser.T__6);
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


function SumContext(parser, ctx) {
	OpContext.call(this, parser);
    OpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SumContext.prototype = Object.create(OpContext.prototype);
SumContext.prototype.constructor = SumContext;

SmackParser.SumContext = SumContext;

SumContext.prototype.sumOp = function() {
    return this.getTypedRuleContext(SumOpContext,0);
};
SumContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterSum(this);
	}
};

SumContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitSum(this);
	}
};

SumContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitSum(this);
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
    this.enterRule(localctx, 12, SmackParser.RULE_op);
    try {
        this.state = 129;
        switch(this._input.LA(1)) {
        case SmackParser.T__5:
        case SmackParser.T__6:
            localctx = new SumContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 118;
            this.sumOp();
            break;
        case SmackParser.T__7:
            localctx = new MulContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 119;
            this.match(SmackParser.T__7);
            break;
        case SmackParser.T__8:
            localctx = new DivContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 120;
            this.match(SmackParser.T__8);
            break;
        case SmackParser.T__9:
            localctx = new ModContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 121;
            this.match(SmackParser.T__9);
            break;
        case SmackParser.T__10:
            localctx = new PowContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 122;
            this.match(SmackParser.T__10);
            break;
        case SmackParser.T__11:
            localctx = new EqContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 123;
            this.match(SmackParser.T__11);
            break;
        case SmackParser.T__12:
            localctx = new NeqContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 124;
            this.match(SmackParser.T__12);
            break;
        case SmackParser.T__13:
            localctx = new LtContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 125;
            this.match(SmackParser.T__13);
            break;
        case SmackParser.T__14:
            localctx = new LeContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 126;
            this.match(SmackParser.T__14);
            break;
        case SmackParser.T__15:
            localctx = new GtContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 127;
            this.match(SmackParser.T__15);
            break;
        case SmackParser.T__16:
            localctx = new GeContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 128;
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
    this.enterRule(localctx, 14, SmackParser.RULE_varAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.jsonPath();
        this.state = 132;
        this.match(SmackParser.T__17);
        this.state = 133;
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
    this.enterRule(localctx, 16, SmackParser.RULE_funcDecl);
    var _la = 0; // Token type
    try {
        this.state = 153;
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FuncDeclParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 135;
            this.match(SmackParser.T__18);
            this.state = 136;
            this.match(SmackParser.Id);
            this.state = 137;
            this.match(SmackParser.T__19);
            this.state = 138;
            this.match(SmackParser.Id);
            this.state = 143;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__20) {
                this.state = 139;
                this.match(SmackParser.T__20);
                this.state = 140;
                this.match(SmackParser.Id);
                this.state = 145;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 146;
            this.match(SmackParser.T__21);
            this.state = 147;
            this.codeBlock();
            break;

        case 2:
            localctx = new FuncDeclNoParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 148;
            this.match(SmackParser.T__18);
            this.state = 149;
            this.match(SmackParser.Id);
            this.state = 150;
            this.match(SmackParser.T__19);
            this.state = 151;
            this.match(SmackParser.T__21);
            this.state = 152;
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
    this.enterRule(localctx, 18, SmackParser.RULE_funcInvoke);
    var _la = 0; // Token type
    try {
        this.state = 171;
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FuncInvokeParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 155;
            this.dottedId();
            this.state = 156;
            this.match(SmackParser.T__19);
            this.state = 157;
            this.resolvable();
            this.state = 162;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__20) {
                this.state = 158;
                this.match(SmackParser.T__20);
                this.state = 159;
                this.resolvable();
                this.state = 164;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 165;
            this.match(SmackParser.T__21);
            break;

        case 2:
            localctx = new FuncInvokeNoParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 167;
            this.dottedId();
            this.state = 168;
            this.match(SmackParser.T__19);
            this.state = 169;
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
    this.enterRule(localctx, 20, SmackParser.RULE_retStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(SmackParser.T__22);
        this.state = 174;
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
    this.enterRule(localctx, 22, SmackParser.RULE_ifStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.match(SmackParser.T__23);
        this.state = 177;
        this.match(SmackParser.T__19);
        this.state = 178;
        this.expression(0);
        this.state = 179;
        this.match(SmackParser.T__21);
        this.state = 180;
        this.codeBlock();
        this.state = 184;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 181;
                this.elseIfStat(); 
            }
            this.state = 186;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

        this.state = 188;
        _la = this._input.LA(1);
        if(_la===SmackParser.T__24) {
            this.state = 187;
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
    this.enterRule(localctx, 24, SmackParser.RULE_elseIfStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(SmackParser.T__24);
        this.state = 191;
        this.match(SmackParser.T__23);
        this.state = 192;
        this.match(SmackParser.T__19);
        this.state = 193;
        this.expression(0);
        this.state = 194;
        this.match(SmackParser.T__21);
        this.state = 195;
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
    this.enterRule(localctx, 26, SmackParser.RULE_elseStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.match(SmackParser.T__24);
        this.state = 198;
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
    this.enterRule(localctx, 28, SmackParser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.match(SmackParser.T__25);
        this.state = 201;
        this.match(SmackParser.T__19);
        this.state = 202;
        this.expression(0);
        this.state = 203;
        this.match(SmackParser.T__21);
        this.state = 204;
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


function NonParenSumExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NonParenSumExprContext.prototype = Object.create(ExpressionContext.prototype);
NonParenSumExprContext.prototype.constructor = NonParenSumExprContext;

SmackParser.NonParenSumExprContext = NonParenSumExprContext;

NonParenSumExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

NonParenSumExprContext.prototype.sumOp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SumOpContext);
    } else {
        return this.getTypedRuleContext(SumOpContext,i);
    }
};
NonParenSumExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterNonParenSumExpr(this);
	}
};

NonParenSumExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitNonParenSumExpr(this);
	}
};

NonParenSumExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitNonParenSumExpr(this);
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
    var _startState = 30;
    this.enterRecursionRule(localctx, 30, SmackParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        switch(this._input.LA(1)) {
        case SmackParser.T__0:
        case SmackParser.T__26:
        case SmackParser.T__31:
        case SmackParser.T__32:
        case SmackParser.T__33:
        case SmackParser.Id:
        case SmackParser.STRING:
        case SmackParser.NUMBER:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 207;
            this.resolvable();
            break;
        case SmackParser.T__19:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 208;
            this.match(SmackParser.T__19);
            this.state = 209;
            this.expression(0);
            this.state = 210;
            this.match(SmackParser.T__21);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 228;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 226;
                var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new NonParenExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 214;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 215;
                    this.op();
                    this.state = 216;
                    this.expression(4);
                    break;

                case 2:
                    localctx = new NonParenSumExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 218;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 220; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        this.state = 219;
                        this.sumOp();
                        this.state = 222; 
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while(_la===SmackParser.T__5 || _la===SmackParser.T__6);
                    this.state = 224;
                    this.expression(3);
                    break;

                } 
            }
            this.state = 230;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
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
    this.enterRule(localctx, 32, SmackParser.RULE_resolvable);
    try {
        this.state = 234;
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ValResolvContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 231;
            this.value();
            break;

        case 2:
            localctx = new JpathResolvContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 232;
            this.jsonPath();
            break;

        case 3:
            localctx = new InvokeResolvContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 233;
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
    this.enterRule(localctx, 34, SmackParser.RULE_codeBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this.match(SmackParser.T__26);
        this.state = 256;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SmackParser.T__22 - 23)) | (1 << (SmackParser.T__23 - 23)) | (1 << (SmackParser.T__25 - 23)) | (1 << (SmackParser.T__27 - 23)) | (1 << (SmackParser.Id - 23)))) !== 0)) {
            this.state = 240;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__27) {
                this.state = 237;
                this.match(SmackParser.T__27);
                this.state = 242;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 244; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 243;
            		this.sentence();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 246; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,23, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 251;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 248;
                    this.match(SmackParser.T__27); 
                }
                this.state = 253;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
            }

            this.state = 258;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 259;
        this.match(SmackParser.T__28);
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
    this.enterRule(localctx, 36, SmackParser.RULE_sentence);
    try {
        this.state = 266;
        switch(this._input.LA(1)) {
        case SmackParser.T__22:
        case SmackParser.Id:
            this.enterOuterAlt(localctx, 1);
            this.state = 261;
            this.statement();
            this.state = 262;
            this.match(SmackParser.T__4);
            break;
        case SmackParser.T__25:
            this.enterOuterAlt(localctx, 2);
            this.state = 264;
            this.loop();
            break;
        case SmackParser.T__23:
            this.enterOuterAlt(localctx, 3);
            this.state = 265;
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
    this.enterRule(localctx, 38, SmackParser.RULE_statement);
    try {
        this.state = 271;
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 268;
            this.varAssign();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 269;
            this.funcInvoke();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 270;
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
    this.enterRule(localctx, 40, SmackParser.RULE_comment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.match(SmackParser.T__29);
        this.state = 277;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SmackParser.T__0) | (1 << SmackParser.T__1) | (1 << SmackParser.T__2) | (1 << SmackParser.T__3) | (1 << SmackParser.T__4) | (1 << SmackParser.T__5) | (1 << SmackParser.T__6) | (1 << SmackParser.T__7) | (1 << SmackParser.T__8) | (1 << SmackParser.T__9) | (1 << SmackParser.T__10) | (1 << SmackParser.T__11) | (1 << SmackParser.T__12) | (1 << SmackParser.T__13) | (1 << SmackParser.T__14) | (1 << SmackParser.T__15) | (1 << SmackParser.T__16) | (1 << SmackParser.T__17) | (1 << SmackParser.T__18) | (1 << SmackParser.T__19) | (1 << SmackParser.T__20) | (1 << SmackParser.T__21) | (1 << SmackParser.T__22) | (1 << SmackParser.T__23) | (1 << SmackParser.T__24) | (1 << SmackParser.T__25) | (1 << SmackParser.T__26) | (1 << SmackParser.T__28) | (1 << SmackParser.T__29) | (1 << SmackParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (SmackParser.T__31 - 32)) | (1 << (SmackParser.T__32 - 32)) | (1 << (SmackParser.T__33 - 32)) | (1 << (SmackParser.Id - 32)) | (1 << (SmackParser.WS - 32)) | (1 << (SmackParser.STRING - 32)) | (1 << (SmackParser.NUMBER - 32)))) !== 0)) {
            this.state = 274;
            _la = this._input.LA(1);
            if(_la<=0 || _la===SmackParser.T__27) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 279;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 280;
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
    this.enterRule(localctx, 42, SmackParser.RULE_json);
    try {
        this.state = 284;
        switch(this._input.LA(1)) {
        case SmackParser.T__26:
            this.enterOuterAlt(localctx, 1);
            this.state = 282;
            this.object();
            break;
        case SmackParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 283;
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
    this.enterRule(localctx, 44, SmackParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.state = 299;
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 286;
            this.match(SmackParser.T__26);
            this.state = 287;
            this.pair();
            this.state = 292;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__20) {
                this.state = 288;
                this.match(SmackParser.T__20);
                this.state = 289;
                this.pair();
                this.state = 294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 295;
            this.match(SmackParser.T__28);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 297;
            this.match(SmackParser.T__26);
            this.state = 298;
            this.match(SmackParser.T__28);
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
    this.enterRule(localctx, 46, SmackParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.match(SmackParser.STRING);
        this.state = 302;
        this.match(SmackParser.T__30);
        this.state = 303;
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
    this.enterRule(localctx, 48, SmackParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.state = 318;
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 305;
            this.match(SmackParser.T__0);
            this.state = 306;
            this.value();
            this.state = 311;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__20) {
                this.state = 307;
                this.match(SmackParser.T__20);
                this.state = 308;
                this.value();
                this.state = 313;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 314;
            this.match(SmackParser.T__1);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 316;
            this.match(SmackParser.T__0);
            this.state = 317;
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
    this.enterRule(localctx, 50, SmackParser.RULE_value);
    try {
        this.state = 327;
        switch(this._input.LA(1)) {
        case SmackParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 320;
            this.match(SmackParser.STRING);
            break;
        case SmackParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 321;
            this.match(SmackParser.NUMBER);
            break;
        case SmackParser.T__26:
            this.enterOuterAlt(localctx, 3);
            this.state = 322;
            this.object();
            break;
        case SmackParser.T__0:
            this.enterOuterAlt(localctx, 4);
            this.state = 323;
            this.array();
            break;
        case SmackParser.T__31:
            this.enterOuterAlt(localctx, 5);
            this.state = 324;
            this.match(SmackParser.T__31);
            break;
        case SmackParser.T__32:
            this.enterOuterAlt(localctx, 6);
            this.state = 325;
            this.match(SmackParser.T__32);
            break;
        case SmackParser.T__33:
            this.enterOuterAlt(localctx, 7);
            this.state = 326;
            this.match(SmackParser.T__33);
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
	case 15:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

SmackParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.SmackParser = SmackParser;
