// Generated from ./Smack.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('../../index');

// This class defines a complete listener for a parse tree produced by SmackParser.
function SmackListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SmackListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SmackListener.prototype.constructor = SmackListener;

// Enter a parse tree produced by SmackParser#smkFile.
SmackListener.prototype.enterSmkFile = function(ctx) {
};

// Exit a parse tree produced by SmackParser#smkFile.
SmackListener.prototype.exitSmkFile = function(ctx) {
};


// Enter a parse tree produced by SmackParser#packageDecl.
SmackListener.prototype.enterPackageDecl = function(ctx) {
};

// Exit a parse tree produced by SmackParser#packageDecl.
SmackListener.prototype.exitPackageDecl = function(ctx) {
};


// Enter a parse tree produced by SmackParser#varAssign.
SmackListener.prototype.enterVarAssign = function(ctx) {
};

// Exit a parse tree produced by SmackParser#varAssign.
SmackListener.prototype.exitVarAssign = function(ctx) {
};


// Enter a parse tree produced by SmackParser#funcDecl.
SmackListener.prototype.enterFuncDecl = function(ctx) {
};

// Exit a parse tree produced by SmackParser#funcDecl.
SmackListener.prototype.exitFuncDecl = function(ctx) {
};


// Enter a parse tree produced by SmackParser#funcInvoke.
SmackListener.prototype.enterFuncInvoke = function(ctx) {
};

// Exit a parse tree produced by SmackParser#funcInvoke.
SmackListener.prototype.exitFuncInvoke = function(ctx) {
};


// Enter a parse tree produced by SmackParser#jsonPath.
SmackListener.prototype.enterJsonPath = function(ctx) {
};

// Exit a parse tree produced by SmackParser#jsonPath.
SmackListener.prototype.exitJsonPath = function(ctx) {
};


// Enter a parse tree produced by SmackParser#dottedId.
SmackListener.prototype.enterDottedId = function(ctx) {
};

// Exit a parse tree produced by SmackParser#dottedId.
SmackListener.prototype.exitDottedId = function(ctx) {
};


// Enter a parse tree produced by SmackParser#keyRef.
SmackListener.prototype.enterKeyRef = function(ctx) {
};

// Exit a parse tree produced by SmackParser#keyRef.
SmackListener.prototype.exitKeyRef = function(ctx) {
};


// Enter a parse tree produced by SmackParser#retStatement.
SmackListener.prototype.enterRetStatement = function(ctx) {
};

// Exit a parse tree produced by SmackParser#retStatement.
SmackListener.prototype.exitRetStatement = function(ctx) {
};


// Enter a parse tree produced by SmackParser#ifStat.
SmackListener.prototype.enterIfStat = function(ctx) {
};

// Exit a parse tree produced by SmackParser#ifStat.
SmackListener.prototype.exitIfStat = function(ctx) {
};


// Enter a parse tree produced by SmackParser#elseIfStat.
SmackListener.prototype.enterElseIfStat = function(ctx) {
};

// Exit a parse tree produced by SmackParser#elseIfStat.
SmackListener.prototype.exitElseIfStat = function(ctx) {
};


// Enter a parse tree produced by SmackParser#elseStat.
SmackListener.prototype.enterElseStat = function(ctx) {
};

// Exit a parse tree produced by SmackParser#elseStat.
SmackListener.prototype.exitElseStat = function(ctx) {
};


// Enter a parse tree produced by SmackParser#loop.
SmackListener.prototype.enterLoop = function(ctx) {
};

// Exit a parse tree produced by SmackParser#loop.
SmackListener.prototype.exitLoop = function(ctx) {
};


// Enter a parse tree produced by SmackParser#andExpr.
SmackListener.prototype.enterAndExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#andExpr.
SmackListener.prototype.exitAndExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#signedExpr.
SmackListener.prototype.enterSignedExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#signedExpr.
SmackListener.prototype.exitSignedExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#modExpr.
SmackListener.prototype.enterModExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#modExpr.
SmackListener.prototype.exitModExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#atomExpr.
SmackListener.prototype.enterAtomExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#atomExpr.
SmackListener.prototype.exitAtomExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#mulExpr.
SmackListener.prototype.enterMulExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#mulExpr.
SmackListener.prototype.exitMulExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#geExpr.
SmackListener.prototype.enterGeExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#geExpr.
SmackListener.prototype.exitGeExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#ltExpr.
SmackListener.prototype.enterLtExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#ltExpr.
SmackListener.prototype.exitLtExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#orExpr.
SmackListener.prototype.enterOrExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#orExpr.
SmackListener.prototype.exitOrExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#powExpr.
SmackListener.prototype.enterPowExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#powExpr.
SmackListener.prototype.exitPowExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#gtExpr.
SmackListener.prototype.enterGtExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#gtExpr.
SmackListener.prototype.exitGtExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#neqExpr.
SmackListener.prototype.enterNeqExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#neqExpr.
SmackListener.prototype.exitNeqExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#parenExpr.
SmackListener.prototype.enterParenExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#parenExpr.
SmackListener.prototype.exitParenExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#leExpr.
SmackListener.prototype.enterLeExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#leExpr.
SmackListener.prototype.exitLeExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#sumExpr.
SmackListener.prototype.enterSumExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#sumExpr.
SmackListener.prototype.exitSumExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#eqExpr.
SmackListener.prototype.enterEqExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#eqExpr.
SmackListener.prototype.exitEqExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#notExpr.
SmackListener.prototype.enterNotExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#notExpr.
SmackListener.prototype.exitNotExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#divExpr.
SmackListener.prototype.enterDivExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#divExpr.
SmackListener.prototype.exitDivExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#resolvable.
SmackListener.prototype.enterResolvable = function(ctx) {
};

// Exit a parse tree produced by SmackParser#resolvable.
SmackListener.prototype.exitResolvable = function(ctx) {
};


// Enter a parse tree produced by SmackParser#codeBlock.
SmackListener.prototype.enterCodeBlock = function(ctx) {
};

// Exit a parse tree produced by SmackParser#codeBlock.
SmackListener.prototype.exitCodeBlock = function(ctx) {
};


// Enter a parse tree produced by SmackParser#sentence.
SmackListener.prototype.enterSentence = function(ctx) {
};

// Exit a parse tree produced by SmackParser#sentence.
SmackListener.prototype.exitSentence = function(ctx) {
};


// Enter a parse tree produced by SmackParser#statement.
SmackListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by SmackParser#statement.
SmackListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by SmackParser#json.
SmackListener.prototype.enterJson = function(ctx) {
};

// Exit a parse tree produced by SmackParser#json.
SmackListener.prototype.exitJson = function(ctx) {
};


// Enter a parse tree produced by SmackParser#object.
SmackListener.prototype.enterObject = function(ctx) {
};

// Exit a parse tree produced by SmackParser#object.
SmackListener.prototype.exitObject = function(ctx) {
};


// Enter a parse tree produced by SmackParser#pair.
SmackListener.prototype.enterPair = function(ctx) {
};

// Exit a parse tree produced by SmackParser#pair.
SmackListener.prototype.exitPair = function(ctx) {
};


// Enter a parse tree produced by SmackParser#array.
SmackListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by SmackParser#array.
SmackListener.prototype.exitArray = function(ctx) {
};


// Enter a parse tree produced by SmackParser#value.
SmackListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by SmackParser#value.
SmackListener.prototype.exitValue = function(ctx) {
};



exports.SmackListener = SmackListener;