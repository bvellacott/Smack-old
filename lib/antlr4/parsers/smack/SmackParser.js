// Generated from ./Smack.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('../../index');
var SmackListener = require('./SmackListener').SmackListener;
var SmackVisitor = require('./SmackVisitor').SmackVisitor;

var grammarFileName = "Smack.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3(\u0160\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4",
    "\36\t\36\4\37\t\37\3\2\3\2\7\2A\n\2\f\2\16\2D\13\2\3\3\3\3\3\3\3\3\3",
    "\4\7\4K\n\4\f\4\16\4N\13\4\3\4\3\4\7\4R\n\4\f\4\16\4U\13\4\3\4\6\4X",
    "\n\4\r\4\16\4Y\7\4\\\n\4\f\4\16\4_\13\4\3\4\6\4b\n\4\r\4\16\4c\3\4\7",
    "\4g\n\4\f\4\16\4j\13\4\7\4l\n\4\f\4\16\4o\13\4\3\5\3\5\3\5\7\5t\n\5",
    "\f\5\16\5w\13\5\3\6\3\6\3\6\3\6\3\7\3\7\5\7\177\n\7\3\b\3\b\3\t\3\t",
    "\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u008e\n\t\3\n\3\n\3\13\3\13",
    "\3\f\3\f\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\7\16\u00a0\n",
    "\16\f\16\16\16\u00a3\13\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\5\16\u00ac",
    "\n\16\3\17\3\17\3\17\3\17\3\17\7\17\u00b3\n\17\f\17\16\17\u00b6\13\17",
    "\3\17\3\17\3\17\3\17\3\17\3\17\5\17\u00be\n\17\3\20\3\20\3\20\3\21\3",
    "\21\3\21\3\21\3\21\3\21\7\21\u00c9\n\21\f\21\16\21\u00cc\13\21\3\21",
    "\5\21\u00cf\n\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3",
    "\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\5\25\u00e7",
    "\n\25\3\25\3\25\6\25\u00eb\n\25\r\25\16\25\u00ec\3\25\3\25\3\25\3\25",
    "\3\25\3\25\3\25\3\25\3\25\3\25\7\25\u00f9\n\25\f\25\16\25\u00fc\13\25",
    "\3\26\3\26\3\26\5\26\u0101\n\26\3\27\3\27\7\27\u0105\n\27\f\27\16\27",
    "\u0108\13\27\3\27\6\27\u010b\n\27\r\27\16\27\u010c\3\27\7\27\u0110\n",
    "\27\f\27\16\27\u0113\13\27\7\27\u0115\n\27\f\27\16\27\u0118\13\27\3",
    "\27\3\27\3\30\3\30\3\30\3\30\3\30\5\30\u0121\n\30\3\31\3\31\3\31\5\31",
    "\u0126\n\31\3\32\3\32\7\32\u012a\n\32\f\32\16\32\u012d\13\32\3\32\3",
    "\32\3\33\3\33\5\33\u0133\n\33\3\34\3\34\3\34\3\34\7\34\u0139\n\34\f",
    "\34\16\34\u013c\13\34\3\34\3\34\3\34\3\34\5\34\u0142\n\34\3\35\3\35",
    "\3\35\3\35\3\36\3\36\3\36\3\36\7\36\u014c\n\36\f\36\16\36\u014f\13\36",
    "\3\36\3\36\3\36\3\36\5\36\u0155\n\36\3\37\3\37\3\37\3\37\3\37\3\37\3",
    "\37\5\37\u015e\n\37\3\37\2\3( \2\4\6\b\n\f\16\20\22\24\26\30\32\34\36",
    " \"$&(*,.\60\62\64\668:<\2\3\3\2\36\36\u0176\2>\3\2\2\2\4E\3\2\2\2\6",
    "L\3\2\2\2\bp\3\2\2\2\nx\3\2\2\2\f~\3\2\2\2\16\u0080\3\2\2\2\20\u008d",
    "\3\2\2\2\22\u008f\3\2\2\2\24\u0091\3\2\2\2\26\u0093\3\2\2\2\30\u0095",
    "\3\2\2\2\32\u00ab\3\2\2\2\34\u00bd\3\2\2\2\36\u00bf\3\2\2\2 \u00c2\3",
    "\2\2\2\"\u00d0\3\2\2\2$\u00d7\3\2\2\2&\u00da\3\2\2\2(\u00e6\3\2\2\2",
    "*\u0100\3\2\2\2,\u0102\3\2\2\2.\u0120\3\2\2\2\60\u0125\3\2\2\2\62\u0127",
    "\3\2\2\2\64\u0132\3\2\2\2\66\u0141\3\2\2\28\u0143\3\2\2\2:\u0154\3\2",
    "\2\2<\u015d\3\2\2\2>B\7%\2\2?A\5\4\3\2@?\3\2\2\2AD\3\2\2\2B@\3\2\2\2",
    "BC\3\2\2\2C\3\3\2\2\2DB\3\2\2\2EF\7\3\2\2FG\7\'\2\2GH\7\4\2\2H\5\3\2",
    "\2\2IK\5\62\32\2JI\3\2\2\2KN\3\2\2\2LJ\3\2\2\2LM\3\2\2\2MO\3\2\2\2N",
    "L\3\2\2\2O]\5\n\6\2PR\5\62\32\2QP\3\2\2\2RU\3\2\2\2SQ\3\2\2\2ST\3\2",
    "\2\2TW\3\2\2\2US\3\2\2\2VX\5\32\16\2WV\3\2\2\2XY\3\2\2\2YW\3\2\2\2Y",
    "Z\3\2\2\2Z\\\3\2\2\2[S\3\2\2\2\\_\3\2\2\2][\3\2\2\2]^\3\2\2\2^m\3\2",
    "\2\2_]\3\2\2\2`b\5\62\32\2a`\3\2\2\2bc\3\2\2\2ca\3\2\2\2cd\3\2\2\2d",
    "h\3\2\2\2eg\5\32\16\2fe\3\2\2\2gj\3\2\2\2hf\3\2\2\2hi\3\2\2\2il\3\2",
    "\2\2jh\3\2\2\2ka\3\2\2\2lo\3\2\2\2mk\3\2\2\2mn\3\2\2\2n\7\3\2\2\2om",
    "\3\2\2\2pu\7%\2\2qr\7\5\2\2rt\7%\2\2sq\3\2\2\2tw\3\2\2\2us\3\2\2\2u",
    "v\3\2\2\2v\t\3\2\2\2wu\3\2\2\2xy\7\6\2\2yz\5\b\5\2z{\7\7\2\2{\13\3\2",
    "\2\2|\177\7\b\2\2}\177\7\t\2\2~|\3\2\2\2~}\3\2\2\2\177\r\3\2\2\2\u0080",
    "\u0081\7\n\2\2\u0081\17\3\2\2\2\u0082\u008e\5\f\7\2\u0083\u008e\7\13",
    "\2\2\u0084\u008e\7\f\2\2\u0085\u008e\7\r\2\2\u0086\u008e\5\16\b\2\u0087",
    "\u008e\7\16\2\2\u0088\u008e\7\17\2\2\u0089\u008e\7\20\2\2\u008a\u008e",
    "\7\21\2\2\u008b\u008e\7\22\2\2\u008c\u008e\7\23\2\2\u008d\u0082\3\2",
    "\2\2\u008d\u0083\3\2\2\2\u008d\u0084\3\2\2\2\u008d\u0085\3\2\2\2\u008d",
    "\u0086\3\2\2\2\u008d\u0087\3\2\2\2\u008d\u0088\3\2\2\2\u008d\u0089\3",
    "\2\2\2\u008d\u008a\3\2\2\2\u008d\u008b\3\2\2\2\u008d\u008c\3\2\2\2\u008e",
    "\21\3\2\2\2\u008f\u0090\7\24\2\2\u0090\23\3\2\2\2\u0091\u0092\7\25\2",
    "\2\u0092\25\3\2\2\2\u0093\u0094\7\26\2\2\u0094\27\3\2\2\2\u0095\u0096",
    "\5\2\2\2\u0096\u0097\5\26\f\2\u0097\u0098\5(\25\2\u0098\31\3\2\2\2\u0099",
    "\u009a\7\27\2\2\u009a\u009b\7%\2\2\u009b\u009c\7\24\2\2\u009c\u00a1",
    "\7%\2\2\u009d\u009e\7\30\2\2\u009e\u00a0\7%\2\2\u009f\u009d\3\2\2\2",
    "\u00a0\u00a3\3\2\2\2\u00a1\u009f\3\2\2\2\u00a1\u00a2\3\2\2\2\u00a2\u00a4",
    "\3\2\2\2\u00a3\u00a1\3\2\2\2\u00a4\u00a5\7\25\2\2\u00a5\u00ac\5,\27",
    "\2\u00a6\u00a7\7\27\2\2\u00a7\u00a8\7%\2\2\u00a8\u00a9\7\24\2\2\u00a9",
    "\u00aa\7\25\2\2\u00aa\u00ac\5,\27\2\u00ab\u0099\3\2\2\2\u00ab\u00a6",
    "\3\2\2\2\u00ac\33\3\2\2\2\u00ad\u00ae\5\b\5\2\u00ae\u00af\7\24\2\2\u00af",
    "\u00b4\5*\26\2\u00b0\u00b1\7\30\2\2\u00b1\u00b3\5*\26\2\u00b2\u00b0",
    "\3\2\2\2\u00b3\u00b6\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2",
    "\u00b5\u00b7\3\2\2\2\u00b6\u00b4\3\2\2\2\u00b7\u00b8\7\25\2\2\u00b8",
    "\u00be\3\2\2\2\u00b9\u00ba\5\b\5\2\u00ba\u00bb\7\24\2\2\u00bb\u00bc",
    "\7\25\2\2\u00bc\u00be\3\2\2\2\u00bd\u00ad\3\2\2\2\u00bd\u00b9\3\2\2",
    "\2\u00be\35\3\2\2\2\u00bf\u00c0\7\31\2\2\u00c0\u00c1\5(\25\2\u00c1\37",
    "\3\2\2\2\u00c2\u00c3\7\32\2\2\u00c3\u00c4\5\22\n\2\u00c4\u00c5\5(\25",
    "\2\u00c5\u00c6\5\24\13\2\u00c6\u00ca\5,\27\2\u00c7\u00c9\5\"\22\2\u00c8",
    "\u00c7\3\2\2\2\u00c9\u00cc\3\2\2\2\u00ca\u00c8\3\2\2\2\u00ca\u00cb\3",
    "\2\2\2\u00cb\u00ce\3\2\2\2\u00cc\u00ca\3\2\2\2\u00cd\u00cf\5$\23\2\u00ce",
    "\u00cd\3\2\2\2\u00ce\u00cf\3\2\2\2\u00cf!\3\2\2\2\u00d0\u00d1\7\33\2",
    "\2\u00d1\u00d2\7\32\2\2\u00d2\u00d3\7\24\2\2\u00d3\u00d4\5(\25\2\u00d4",
    "\u00d5\7\25\2\2\u00d5\u00d6\5,\27\2\u00d6#\3\2\2\2\u00d7\u00d8\7\33",
    "\2\2\u00d8\u00d9\5,\27\2\u00d9%\3\2\2\2\u00da\u00db\7\34\2\2\u00db\u00dc",
    "\7\24\2\2\u00dc\u00dd\5(\25\2\u00dd\u00de\7\25\2\2\u00de\u00df\5,\27",
    "\2\u00df\'\3\2\2\2\u00e0\u00e1\b\25\1\2\u00e1\u00e7\5*\26\2\u00e2\u00e3",
    "\7\24\2\2\u00e3\u00e4\5(\25\2\u00e4\u00e5\7\25\2\2\u00e5\u00e7\3\2\2",
    "\2\u00e6\u00e0\3\2\2\2\u00e6\u00e2\3\2\2\2\u00e7\u00fa\3\2\2\2\u00e8",
    "\u00ea\f\6\2\2\u00e9\u00eb\5\f\7\2\u00ea\u00e9\3\2\2\2\u00eb\u00ec\3",
    "\2\2\2\u00ec\u00ea\3\2\2\2\u00ec\u00ed\3\2\2\2\u00ed\u00ee\3\2\2\2\u00ee",
    "\u00ef\5(\25\7\u00ef\u00f9\3\2\2\2\u00f0\u00f1\f\5\2\2\u00f1\u00f2\5",
    "\16\b\2\u00f2\u00f3\5(\25\6\u00f3\u00f9\3\2\2\2\u00f4\u00f5\f\4\2\2",
    "\u00f5\u00f6\5\20\t\2\u00f6\u00f7\5(\25\5\u00f7\u00f9\3\2\2\2\u00f8",
    "\u00e8\3\2\2\2\u00f8\u00f0\3\2\2\2\u00f8\u00f4\3\2\2\2\u00f9\u00fc\3",
    "\2\2\2\u00fa\u00f8\3\2\2\2\u00fa\u00fb\3\2\2\2\u00fb)\3\2\2\2\u00fc",
    "\u00fa\3\2\2\2\u00fd\u0101\5<\37\2\u00fe\u0101\5\2\2\2\u00ff\u0101\5",
    "\34\17\2\u0100\u00fd\3\2\2\2\u0100\u00fe\3\2\2\2\u0100\u00ff\3\2\2\2",
    "\u0101+\3\2\2\2\u0102\u0116\7\35\2\2\u0103\u0105\7\36\2\2\u0104\u0103",
    "\3\2\2\2\u0105\u0108\3\2\2\2\u0106\u0104\3\2\2\2\u0106\u0107\3\2\2\2",
    "\u0107\u010a\3\2\2\2\u0108\u0106\3\2\2\2\u0109\u010b\5.\30\2\u010a\u0109",
    "\3\2\2\2\u010b\u010c\3\2\2\2\u010c\u010a\3\2\2\2\u010c\u010d\3\2\2\2",
    "\u010d\u0111\3\2\2\2\u010e\u0110\7\36\2\2\u010f\u010e\3\2\2\2\u0110",
    "\u0113\3\2\2\2\u0111\u010f\3\2\2\2\u0111\u0112\3\2\2\2\u0112\u0115\3",
    "\2\2\2\u0113\u0111\3\2\2\2\u0114\u0106\3\2\2\2\u0115\u0118\3\2\2\2\u0116",
    "\u0114\3\2\2\2\u0116\u0117\3\2\2\2\u0117\u0119\3\2\2\2\u0118\u0116\3",
    "\2\2\2\u0119\u011a\7\37\2\2\u011a-\3\2\2\2\u011b\u011c\5\60\31\2\u011c",
    "\u011d\7\7\2\2\u011d\u0121\3\2\2\2\u011e\u0121\5&\24\2\u011f\u0121\5",
    " \21\2\u0120\u011b\3\2\2\2\u0120\u011e\3\2\2\2\u0120\u011f\3\2\2\2\u0121",
    "/\3\2\2\2\u0122\u0126\5\30\r\2\u0123\u0126\5\34\17\2\u0124\u0126\5\36",
    "\20\2\u0125\u0122\3\2\2\2\u0125\u0123\3\2\2\2\u0125\u0124\3\2\2\2\u0126",
    "\61\3\2\2\2\u0127\u012b\7 \2\2\u0128\u012a\n\2\2\2\u0129\u0128\3\2\2",
    "\2\u012a\u012d\3\2\2\2\u012b\u0129\3\2\2\2\u012b\u012c\3\2\2\2\u012c",
    "\u012e\3\2\2\2\u012d\u012b\3\2\2\2\u012e\u012f\7\36\2\2\u012f\63\3\2",
    "\2\2\u0130\u0133\5\66\34\2\u0131\u0133\5:\36\2\u0132\u0130\3\2\2\2\u0132",
    "\u0131\3\2\2\2\u0133\65\3\2\2\2\u0134\u0135\7\35\2\2\u0135\u013a\58",
    "\35\2\u0136\u0137\7\30\2\2\u0137\u0139\58\35\2\u0138\u0136\3\2\2\2\u0139",
    "\u013c\3\2\2\2\u013a\u0138\3\2\2\2\u013a\u013b\3\2\2\2\u013b\u013d\3",
    "\2\2\2\u013c\u013a\3\2\2\2\u013d\u013e\7\37\2\2\u013e\u0142\3\2\2\2",
    "\u013f\u0140\7\35\2\2\u0140\u0142\7\37\2\2\u0141\u0134\3\2\2\2\u0141",
    "\u013f\3\2\2\2\u0142\67\3\2\2\2\u0143\u0144\7\'\2\2\u0144\u0145\7!\2",
    "\2\u0145\u0146\5<\37\2\u01469\3\2\2\2\u0147\u0148\7\3\2\2\u0148\u014d",
    "\5<\37\2\u0149\u014a\7\30\2\2\u014a\u014c\5<\37\2\u014b\u0149\3\2\2",
    "\2\u014c\u014f\3\2\2\2\u014d\u014b\3\2\2\2\u014d\u014e\3\2\2\2\u014e",
    "\u0150\3\2\2\2\u014f\u014d\3\2\2\2\u0150\u0151\7\4\2\2\u0151\u0155\3",
    "\2\2\2\u0152\u0153\7\3\2\2\u0153\u0155\7\4\2\2\u0154\u0147\3\2\2\2\u0154",
    "\u0152\3\2\2\2\u0155;\3\2\2\2\u0156\u015e\7\'\2\2\u0157\u015e\7(\2\2",
    "\u0158\u015e\5\66\34\2\u0159\u015e\5:\36\2\u015a\u015e\7\"\2\2\u015b",
    "\u015e\7#\2\2\u015c\u015e\7$\2\2\u015d\u0156\3\2\2\2\u015d\u0157\3\2",
    "\2\2\u015d\u0158\3\2\2\2\u015d\u0159\3\2\2\2\u015d\u015a\3\2\2\2\u015d",
    "\u015b\3\2\2\2\u015d\u015c\3\2\2\2\u015e=\3\2\2\2%BLSY]chmu~\u008d\u00a1",
    "\u00ab\u00b4\u00bd\u00ca\u00ce\u00e6\u00ec\u00f8\u00fa\u0100\u0106\u010c",
    "\u0111\u0116\u0120\u0125\u012b\u0132\u013a\u0141\u014d\u0154\u015d"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'['", "']'", "'.'", "'pack'", "';'", "'+'", 
                     "'-'", "'^'", "'*'", "'/'", "'%'", "'=='", "'!='", 
                     "'<'", "'<='", "'>'", "'>='", "'('", "')'", "'='", 
                     "'func'", "','", "'ret'", "'if'", "'else'", "'while'", 
                     "'{'", "'\n'", "'}'", "'//'", "':'", "'true'", "'false'", 
                     "'null'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      "Id", "WS", "STRING", "NUMBER" ];

var ruleNames =  [ "jsonPath", "keyRef", "smkFile", "dottedId", "packageDecl", 
                   "sumOp", "powOp", "op", "lp", "rp", "assign", "varAssign", 
                   "funcDecl", "funcInvoke", "retStatement", "ifStat", "elseIfStat", 
                   "elseStat", "loop", "expression", "resolvable", "codeBlock", 
                   "sentence", "statement", "comment", "json", "object", 
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
SmackParser.RULE_powOp = 6;
SmackParser.RULE_op = 7;
SmackParser.RULE_lp = 8;
SmackParser.RULE_rp = 9;
SmackParser.RULE_assign = 10;
SmackParser.RULE_varAssign = 11;
SmackParser.RULE_funcDecl = 12;
SmackParser.RULE_funcInvoke = 13;
SmackParser.RULE_retStatement = 14;
SmackParser.RULE_ifStat = 15;
SmackParser.RULE_elseIfStat = 16;
SmackParser.RULE_elseStat = 17;
SmackParser.RULE_loop = 18;
SmackParser.RULE_expression = 19;
SmackParser.RULE_resolvable = 20;
SmackParser.RULE_codeBlock = 21;
SmackParser.RULE_sentence = 22;
SmackParser.RULE_statement = 23;
SmackParser.RULE_comment = 24;
SmackParser.RULE_json = 25;
SmackParser.RULE_object = 26;
SmackParser.RULE_pair = 27;
SmackParser.RULE_array = 28;
SmackParser.RULE_value = 29;

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
        this.state = 60;
        this.match(SmackParser.Id);
        this.state = 64;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 61;
                this.keyRef(); 
            }
            this.state = 66;
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
        this.state = 67;
        this.match(SmackParser.T__0);
        this.state = 68;
        this.match(SmackParser.STRING);
        this.state = 69;
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
        this.state = 74;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__29) {
            this.state = 71;
            this.comment();
            this.state = 76;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 77;
        this.packageDecl();
        this.state = 91;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 81;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===SmackParser.T__29) {
                    this.state = 78;
                    this.comment();
                    this.state = 83;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 85; 
                this._errHandler.sync(this);
                var _alt = 1;
                do {
                	switch (_alt) {
                	case 1:
                		this.state = 84;
                		this.funcDecl();
                		break;
                	default:
                		throw new antlr4.error.NoViableAltException(this);
                	}
                	this.state = 87; 
                	this._errHandler.sync(this);
                	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER ); 
            }
            this.state = 93;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

        this.state = 107;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__29) {
            this.state = 95; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 94;
            		this.comment();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 97; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 102;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__20) {
                this.state = 99;
                this.funcDecl();
                this.state = 104;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
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
        this.state = 110;
        this.match(SmackParser.Id);
        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SmackParser.T__2) {
            this.state = 111;
            this.match(SmackParser.T__2);
            this.state = 112;
            this.match(SmackParser.Id);
            this.state = 117;
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
        this.state = 118;
        this.match(SmackParser.T__3);
        this.state = 119;
        this.dottedId();
        this.state = 120;
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
        this.state = 124;
        switch(this._input.LA(1)) {
        case SmackParser.T__5:
            localctx = new PlusContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 122;
            this.match(SmackParser.T__5);
            break;
        case SmackParser.T__6:
            localctx = new MinusContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 123;
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

function PowOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_powOp;
    return this;
}

PowOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PowOpContext.prototype.constructor = PowOpContext;


PowOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterPowOp(this);
	}
};

PowOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitPowOp(this);
	}
};

PowOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitPowOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.PowOpContext = PowOpContext;

SmackParser.prototype.powOp = function() {

    var localctx = new PowOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SmackParser.RULE_powOp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        this.match(SmackParser.T__7);
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

PowContext.prototype.powOp = function() {
    return this.getTypedRuleContext(PowOpContext,0);
};
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
    this.enterRule(localctx, 14, SmackParser.RULE_op);
    try {
        this.state = 139;
        switch(this._input.LA(1)) {
        case SmackParser.T__5:
        case SmackParser.T__6:
            localctx = new SumContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 128;
            this.sumOp();
            break;
        case SmackParser.T__8:
            localctx = new MulContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 129;
            this.match(SmackParser.T__8);
            break;
        case SmackParser.T__9:
            localctx = new DivContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 130;
            this.match(SmackParser.T__9);
            break;
        case SmackParser.T__10:
            localctx = new ModContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 131;
            this.match(SmackParser.T__10);
            break;
        case SmackParser.T__7:
            localctx = new PowContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 132;
            this.powOp();
            break;
        case SmackParser.T__11:
            localctx = new EqContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 133;
            this.match(SmackParser.T__11);
            break;
        case SmackParser.T__12:
            localctx = new NeqContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 134;
            this.match(SmackParser.T__12);
            break;
        case SmackParser.T__13:
            localctx = new LtContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 135;
            this.match(SmackParser.T__13);
            break;
        case SmackParser.T__14:
            localctx = new LeContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 136;
            this.match(SmackParser.T__14);
            break;
        case SmackParser.T__15:
            localctx = new GtContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 137;
            this.match(SmackParser.T__15);
            break;
        case SmackParser.T__16:
            localctx = new GeContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 138;
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

function LpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_lp;
    return this;
}

LpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LpContext.prototype.constructor = LpContext;


LpContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterLp(this);
	}
};

LpContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitLp(this);
	}
};

LpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitLp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.LpContext = LpContext;

SmackParser.prototype.lp = function() {

    var localctx = new LpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SmackParser.RULE_lp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.match(SmackParser.T__17);
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

function RpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_rp;
    return this;
}

RpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RpContext.prototype.constructor = RpContext;


RpContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterRp(this);
	}
};

RpContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitRp(this);
	}
};

RpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitRp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.RpContext = RpContext;

SmackParser.prototype.rp = function() {

    var localctx = new RpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SmackParser.RULE_rp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(SmackParser.T__18);
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

function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmackParser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;


AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitAssign(this);
	}
};

AssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SmackParser.AssignContext = AssignContext;

SmackParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SmackParser.RULE_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.match(SmackParser.T__19);
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

VarAssignContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
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
    this.enterRule(localctx, 22, SmackParser.RULE_varAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.jsonPath();
        this.state = 148;
        this.assign();
        this.state = 149;
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
    this.enterRule(localctx, 24, SmackParser.RULE_funcDecl);
    var _la = 0; // Token type
    try {
        this.state = 169;
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FuncDeclParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 151;
            this.match(SmackParser.T__20);
            this.state = 152;
            this.match(SmackParser.Id);
            this.state = 153;
            this.match(SmackParser.T__17);
            this.state = 154;
            this.match(SmackParser.Id);
            this.state = 159;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__21) {
                this.state = 155;
                this.match(SmackParser.T__21);
                this.state = 156;
                this.match(SmackParser.Id);
                this.state = 161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 162;
            this.match(SmackParser.T__18);
            this.state = 163;
            this.codeBlock();
            break;

        case 2:
            localctx = new FuncDeclNoParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 164;
            this.match(SmackParser.T__20);
            this.state = 165;
            this.match(SmackParser.Id);
            this.state = 166;
            this.match(SmackParser.T__17);
            this.state = 167;
            this.match(SmackParser.T__18);
            this.state = 168;
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
    this.enterRule(localctx, 26, SmackParser.RULE_funcInvoke);
    var _la = 0; // Token type
    try {
        this.state = 187;
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FuncInvokeParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 171;
            this.dottedId();
            this.state = 172;
            this.match(SmackParser.T__17);
            this.state = 173;
            this.resolvable();
            this.state = 178;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__21) {
                this.state = 174;
                this.match(SmackParser.T__21);
                this.state = 175;
                this.resolvable();
                this.state = 180;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 181;
            this.match(SmackParser.T__18);
            break;

        case 2:
            localctx = new FuncInvokeNoParamsContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 183;
            this.dottedId();
            this.state = 184;
            this.match(SmackParser.T__17);
            this.state = 185;
            this.match(SmackParser.T__18);
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
    this.enterRule(localctx, 28, SmackParser.RULE_retStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.match(SmackParser.T__22);
        this.state = 190;
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

IfStatContext.prototype.lp = function() {
    return this.getTypedRuleContext(LpContext,0);
};

IfStatContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfStatContext.prototype.rp = function() {
    return this.getTypedRuleContext(RpContext,0);
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
    this.enterRule(localctx, 30, SmackParser.RULE_ifStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this.match(SmackParser.T__23);
        this.state = 193;
        this.lp();
        this.state = 194;
        this.expression(0);
        this.state = 195;
        this.rp();
        this.state = 196;
        this.codeBlock();
        this.state = 200;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 197;
                this.elseIfStat(); 
            }
            this.state = 202;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

        this.state = 204;
        _la = this._input.LA(1);
        if(_la===SmackParser.T__24) {
            this.state = 203;
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
    this.enterRule(localctx, 32, SmackParser.RULE_elseIfStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.match(SmackParser.T__24);
        this.state = 207;
        this.match(SmackParser.T__23);
        this.state = 208;
        this.match(SmackParser.T__17);
        this.state = 209;
        this.expression(0);
        this.state = 210;
        this.match(SmackParser.T__18);
        this.state = 211;
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
    this.enterRule(localctx, 34, SmackParser.RULE_elseStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.match(SmackParser.T__24);
        this.state = 214;
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
    this.enterRule(localctx, 36, SmackParser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this.match(SmackParser.T__25);
        this.state = 217;
        this.match(SmackParser.T__17);
        this.state = 218;
        this.expression(0);
        this.state = 219;
        this.match(SmackParser.T__18);
        this.state = 220;
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


function NonParenPowExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NonParenPowExprContext.prototype = Object.create(ExpressionContext.prototype);
NonParenPowExprContext.prototype.constructor = NonParenPowExprContext;

SmackParser.NonParenPowExprContext = NonParenPowExprContext;

NonParenPowExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

NonParenPowExprContext.prototype.powOp = function() {
    return this.getTypedRuleContext(PowOpContext,0);
};
NonParenPowExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.enterNonParenPowExpr(this);
	}
};

NonParenPowExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmackListener ) {
        listener.exitNonParenPowExpr(this);
	}
};

NonParenPowExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SmackVisitor ) {
        return visitor.visitNonParenPowExpr(this);
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
    var _startState = 38;
    this.enterRecursionRule(localctx, 38, SmackParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 228;
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

            this.state = 223;
            this.resolvable();
            break;
        case SmackParser.T__17:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 224;
            this.match(SmackParser.T__17);
            this.state = 225;
            this.expression(0);
            this.state = 226;
            this.match(SmackParser.T__18);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 248;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 246;
                var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new NonParenSumExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 230;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 232; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        this.state = 231;
                        this.sumOp();
                        this.state = 234; 
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while(_la===SmackParser.T__5 || _la===SmackParser.T__6);
                    this.state = 236;
                    this.expression(5);
                    break;

                case 2:
                    localctx = new NonParenPowExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 238;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 239;
                    this.powOp();
                    this.state = 240;
                    this.expression(4);
                    break;

                case 3:
                    localctx = new NonParenExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SmackParser.RULE_expression);
                    this.state = 242;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 243;
                    this.op();
                    this.state = 244;
                    this.expression(3);
                    break;

                } 
            }
            this.state = 250;
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
    this.enterRule(localctx, 40, SmackParser.RULE_resolvable);
    try {
        this.state = 254;
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ValResolvContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 251;
            this.value();
            break;

        case 2:
            localctx = new JpathResolvContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 252;
            this.jsonPath();
            break;

        case 3:
            localctx = new InvokeResolvContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 253;
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
    this.enterRule(localctx, 42, SmackParser.RULE_codeBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 256;
        this.match(SmackParser.T__26);
        this.state = 276;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SmackParser.T__22 - 23)) | (1 << (SmackParser.T__23 - 23)) | (1 << (SmackParser.T__25 - 23)) | (1 << (SmackParser.T__27 - 23)) | (1 << (SmackParser.Id - 23)))) !== 0)) {
            this.state = 260;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__27) {
                this.state = 257;
                this.match(SmackParser.T__27);
                this.state = 262;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 264; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 263;
            		this.sentence();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 266; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,23, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 271;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 268;
                    this.match(SmackParser.T__27); 
                }
                this.state = 273;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
            }

            this.state = 278;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 279;
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
    this.enterRule(localctx, 44, SmackParser.RULE_sentence);
    try {
        this.state = 286;
        switch(this._input.LA(1)) {
        case SmackParser.T__22:
        case SmackParser.Id:
            this.enterOuterAlt(localctx, 1);
            this.state = 281;
            this.statement();
            this.state = 282;
            this.match(SmackParser.T__4);
            break;
        case SmackParser.T__25:
            this.enterOuterAlt(localctx, 2);
            this.state = 284;
            this.loop();
            break;
        case SmackParser.T__23:
            this.enterOuterAlt(localctx, 3);
            this.state = 285;
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
    this.enterRule(localctx, 46, SmackParser.RULE_statement);
    try {
        this.state = 291;
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 288;
            this.varAssign();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 289;
            this.funcInvoke();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 290;
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
    this.enterRule(localctx, 48, SmackParser.RULE_comment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        this.match(SmackParser.T__29);
        this.state = 297;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SmackParser.T__0) | (1 << SmackParser.T__1) | (1 << SmackParser.T__2) | (1 << SmackParser.T__3) | (1 << SmackParser.T__4) | (1 << SmackParser.T__5) | (1 << SmackParser.T__6) | (1 << SmackParser.T__7) | (1 << SmackParser.T__8) | (1 << SmackParser.T__9) | (1 << SmackParser.T__10) | (1 << SmackParser.T__11) | (1 << SmackParser.T__12) | (1 << SmackParser.T__13) | (1 << SmackParser.T__14) | (1 << SmackParser.T__15) | (1 << SmackParser.T__16) | (1 << SmackParser.T__17) | (1 << SmackParser.T__18) | (1 << SmackParser.T__19) | (1 << SmackParser.T__20) | (1 << SmackParser.T__21) | (1 << SmackParser.T__22) | (1 << SmackParser.T__23) | (1 << SmackParser.T__24) | (1 << SmackParser.T__25) | (1 << SmackParser.T__26) | (1 << SmackParser.T__28) | (1 << SmackParser.T__29) | (1 << SmackParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (SmackParser.T__31 - 32)) | (1 << (SmackParser.T__32 - 32)) | (1 << (SmackParser.T__33 - 32)) | (1 << (SmackParser.Id - 32)) | (1 << (SmackParser.WS - 32)) | (1 << (SmackParser.STRING - 32)) | (1 << (SmackParser.NUMBER - 32)))) !== 0)) {
            this.state = 294;
            _la = this._input.LA(1);
            if(_la<=0 || _la===SmackParser.T__27) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 299;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 300;
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
    this.enterRule(localctx, 50, SmackParser.RULE_json);
    try {
        this.state = 304;
        switch(this._input.LA(1)) {
        case SmackParser.T__26:
            this.enterOuterAlt(localctx, 1);
            this.state = 302;
            this.object();
            break;
        case SmackParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 303;
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
    this.enterRule(localctx, 52, SmackParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.state = 319;
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 306;
            this.match(SmackParser.T__26);
            this.state = 307;
            this.pair();
            this.state = 312;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__21) {
                this.state = 308;
                this.match(SmackParser.T__21);
                this.state = 309;
                this.pair();
                this.state = 314;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 315;
            this.match(SmackParser.T__28);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 317;
            this.match(SmackParser.T__26);
            this.state = 318;
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
    this.enterRule(localctx, 54, SmackParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 321;
        this.match(SmackParser.STRING);
        this.state = 322;
        this.match(SmackParser.T__30);
        this.state = 323;
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
    this.enterRule(localctx, 56, SmackParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.state = 338;
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 325;
            this.match(SmackParser.T__0);
            this.state = 326;
            this.value();
            this.state = 331;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SmackParser.T__21) {
                this.state = 327;
                this.match(SmackParser.T__21);
                this.state = 328;
                this.value();
                this.state = 333;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 334;
            this.match(SmackParser.T__1);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 336;
            this.match(SmackParser.T__0);
            this.state = 337;
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
    this.enterRule(localctx, 58, SmackParser.RULE_value);
    try {
        this.state = 347;
        switch(this._input.LA(1)) {
        case SmackParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 340;
            this.match(SmackParser.STRING);
            break;
        case SmackParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 341;
            this.match(SmackParser.NUMBER);
            break;
        case SmackParser.T__26:
            this.enterOuterAlt(localctx, 3);
            this.state = 342;
            this.object();
            break;
        case SmackParser.T__0:
            this.enterOuterAlt(localctx, 4);
            this.state = 343;
            this.array();
            break;
        case SmackParser.T__31:
            this.enterOuterAlt(localctx, 5);
            this.state = 344;
            this.match(SmackParser.T__31);
            break;
        case SmackParser.T__32:
            this.enterOuterAlt(localctx, 6);
            this.state = 345;
            this.match(SmackParser.T__32);
            break;
        case SmackParser.T__33:
            this.enterOuterAlt(localctx, 7);
            this.state = 346;
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
	case 19:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

SmackParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		case 2:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.SmackParser = SmackParser;
