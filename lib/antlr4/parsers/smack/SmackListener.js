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

// Enter a parse tree produced by SmackParser#jsonPath.
SmackListener.prototype.enterJsonPath = function(ctx) {
};

// Exit a parse tree produced by SmackParser#jsonPath.
SmackListener.prototype.exitJsonPath = function(ctx) {
};


// Enter a parse tree produced by SmackParser#keyRef.
SmackListener.prototype.enterKeyRef = function(ctx) {
};

// Exit a parse tree produced by SmackParser#keyRef.
SmackListener.prototype.exitKeyRef = function(ctx) {
};


// Enter a parse tree produced by SmackParser#smkFile.
SmackListener.prototype.enterSmkFile = function(ctx) {
};

// Exit a parse tree produced by SmackParser#smkFile.
SmackListener.prototype.exitSmkFile = function(ctx) {
};


// Enter a parse tree produced by SmackParser#dottedId.
SmackListener.prototype.enterDottedId = function(ctx) {
};

// Exit a parse tree produced by SmackParser#dottedId.
SmackListener.prototype.exitDottedId = function(ctx) {
};


// Enter a parse tree produced by SmackParser#packageDecl.
SmackListener.prototype.enterPackageDecl = function(ctx) {
};

// Exit a parse tree produced by SmackParser#packageDecl.
SmackListener.prototype.exitPackageDecl = function(ctx) {
};


// Enter a parse tree produced by SmackParser#plus.
SmackListener.prototype.enterPlus = function(ctx) {
};

// Exit a parse tree produced by SmackParser#plus.
SmackListener.prototype.exitPlus = function(ctx) {
};


// Enter a parse tree produced by SmackParser#minus.
SmackListener.prototype.enterMinus = function(ctx) {
};

// Exit a parse tree produced by SmackParser#minus.
SmackListener.prototype.exitMinus = function(ctx) {
};


// Enter a parse tree produced by SmackParser#powOp.
SmackListener.prototype.enterPowOp = function(ctx) {
};

// Exit a parse tree produced by SmackParser#powOp.
SmackListener.prototype.exitPowOp = function(ctx) {
};


// Enter a parse tree produced by SmackParser#sum.
SmackListener.prototype.enterSum = function(ctx) {
};

// Exit a parse tree produced by SmackParser#sum.
SmackListener.prototype.exitSum = function(ctx) {
};


// Enter a parse tree produced by SmackParser#mul.
SmackListener.prototype.enterMul = function(ctx) {
};

// Exit a parse tree produced by SmackParser#mul.
SmackListener.prototype.exitMul = function(ctx) {
};


// Enter a parse tree produced by SmackParser#div.
SmackListener.prototype.enterDiv = function(ctx) {
};

// Exit a parse tree produced by SmackParser#div.
SmackListener.prototype.exitDiv = function(ctx) {
};


// Enter a parse tree produced by SmackParser#mod.
SmackListener.prototype.enterMod = function(ctx) {
};

// Exit a parse tree produced by SmackParser#mod.
SmackListener.prototype.exitMod = function(ctx) {
};


// Enter a parse tree produced by SmackParser#pow.
SmackListener.prototype.enterPow = function(ctx) {
};

// Exit a parse tree produced by SmackParser#pow.
SmackListener.prototype.exitPow = function(ctx) {
};


// Enter a parse tree produced by SmackParser#eq.
SmackListener.prototype.enterEq = function(ctx) {
};

// Exit a parse tree produced by SmackParser#eq.
SmackListener.prototype.exitEq = function(ctx) {
};


// Enter a parse tree produced by SmackParser#neq.
SmackListener.prototype.enterNeq = function(ctx) {
};

// Exit a parse tree produced by SmackParser#neq.
SmackListener.prototype.exitNeq = function(ctx) {
};


// Enter a parse tree produced by SmackParser#lt.
SmackListener.prototype.enterLt = function(ctx) {
};

// Exit a parse tree produced by SmackParser#lt.
SmackListener.prototype.exitLt = function(ctx) {
};


// Enter a parse tree produced by SmackParser#le.
SmackListener.prototype.enterLe = function(ctx) {
};

// Exit a parse tree produced by SmackParser#le.
SmackListener.prototype.exitLe = function(ctx) {
};


// Enter a parse tree produced by SmackParser#gt.
SmackListener.prototype.enterGt = function(ctx) {
};

// Exit a parse tree produced by SmackParser#gt.
SmackListener.prototype.exitGt = function(ctx) {
};


// Enter a parse tree produced by SmackParser#ge.
SmackListener.prototype.enterGe = function(ctx) {
};

// Exit a parse tree produced by SmackParser#ge.
SmackListener.prototype.exitGe = function(ctx) {
};


// Enter a parse tree produced by SmackParser#lp.
SmackListener.prototype.enterLp = function(ctx) {
};

// Exit a parse tree produced by SmackParser#lp.
SmackListener.prototype.exitLp = function(ctx) {
};


// Enter a parse tree produced by SmackParser#rp.
SmackListener.prototype.enterRp = function(ctx) {
};

// Exit a parse tree produced by SmackParser#rp.
SmackListener.prototype.exitRp = function(ctx) {
};


// Enter a parse tree produced by SmackParser#assign.
SmackListener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by SmackParser#assign.
SmackListener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by SmackParser#varAssign.
SmackListener.prototype.enterVarAssign = function(ctx) {
};

// Exit a parse tree produced by SmackParser#varAssign.
SmackListener.prototype.exitVarAssign = function(ctx) {
};


// Enter a parse tree produced by SmackParser#funcDeclParams.
SmackListener.prototype.enterFuncDeclParams = function(ctx) {
};

// Exit a parse tree produced by SmackParser#funcDeclParams.
SmackListener.prototype.exitFuncDeclParams = function(ctx) {
};


// Enter a parse tree produced by SmackParser#funcDeclNoParams.
SmackListener.prototype.enterFuncDeclNoParams = function(ctx) {
};

// Exit a parse tree produced by SmackParser#funcDeclNoParams.
SmackListener.prototype.exitFuncDeclNoParams = function(ctx) {
};


// Enter a parse tree produced by SmackParser#funcInvokeParams.
SmackListener.prototype.enterFuncInvokeParams = function(ctx) {
};

// Exit a parse tree produced by SmackParser#funcInvokeParams.
SmackListener.prototype.exitFuncInvokeParams = function(ctx) {
};


// Enter a parse tree produced by SmackParser#funcInvokeNoParams.
SmackListener.prototype.enterFuncInvokeNoParams = function(ctx) {
};

// Exit a parse tree produced by SmackParser#funcInvokeNoParams.
SmackListener.prototype.exitFuncInvokeNoParams = function(ctx) {
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


// Enter a parse tree produced by SmackParser#nonParenExpr.
SmackListener.prototype.enterNonParenExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#nonParenExpr.
SmackListener.prototype.exitNonParenExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#atomExpr.
SmackListener.prototype.enterAtomExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#atomExpr.
SmackListener.prototype.exitAtomExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#nonParenPowExpr.
SmackListener.prototype.enterNonParenPowExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#nonParenPowExpr.
SmackListener.prototype.exitNonParenPowExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#parenExpr.
SmackListener.prototype.enterParenExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#parenExpr.
SmackListener.prototype.exitParenExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#nonParenSumExpr.
SmackListener.prototype.enterNonParenSumExpr = function(ctx) {
};

// Exit a parse tree produced by SmackParser#nonParenSumExpr.
SmackListener.prototype.exitNonParenSumExpr = function(ctx) {
};


// Enter a parse tree produced by SmackParser#valResolv.
SmackListener.prototype.enterValResolv = function(ctx) {
};

// Exit a parse tree produced by SmackParser#valResolv.
SmackListener.prototype.exitValResolv = function(ctx) {
};


// Enter a parse tree produced by SmackParser#jpathResolv.
SmackListener.prototype.enterJpathResolv = function(ctx) {
};

// Exit a parse tree produced by SmackParser#jpathResolv.
SmackListener.prototype.exitJpathResolv = function(ctx) {
};


// Enter a parse tree produced by SmackParser#invokeResolv.
SmackListener.prototype.enterInvokeResolv = function(ctx) {
};

// Exit a parse tree produced by SmackParser#invokeResolv.
SmackListener.prototype.exitInvokeResolv = function(ctx) {
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


// Enter a parse tree produced by SmackParser#comment.
SmackListener.prototype.enterComment = function(ctx) {
};

// Exit a parse tree produced by SmackParser#comment.
SmackListener.prototype.exitComment = function(ctx) {
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