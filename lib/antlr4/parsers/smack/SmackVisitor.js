// Generated from ./Smack.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('../../index');

// This class defines a complete generic visitor for a parse tree produced by SmackParser.

function SmackVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SmackVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SmackVisitor.prototype.constructor = SmackVisitor;

// Visit a parse tree produced by SmackParser#jsonPath.
SmackVisitor.prototype.visitJsonPath = function(ctx) {
};


// Visit a parse tree produced by SmackParser#keyRef.
SmackVisitor.prototype.visitKeyRef = function(ctx) {
};


// Visit a parse tree produced by SmackParser#smkFile.
SmackVisitor.prototype.visitSmkFile = function(ctx) {
};


// Visit a parse tree produced by SmackParser#dottedId.
SmackVisitor.prototype.visitDottedId = function(ctx) {
};


// Visit a parse tree produced by SmackParser#packageDecl.
SmackVisitor.prototype.visitPackageDecl = function(ctx) {
};


// Visit a parse tree produced by SmackParser#plus.
SmackVisitor.prototype.visitPlus = function(ctx) {
};


// Visit a parse tree produced by SmackParser#minus.
SmackVisitor.prototype.visitMinus = function(ctx) {
};


// Visit a parse tree produced by SmackParser#powOp.
SmackVisitor.prototype.visitPowOp = function(ctx) {
};


// Visit a parse tree produced by SmackParser#sum.
SmackVisitor.prototype.visitSum = function(ctx) {
};


// Visit a parse tree produced by SmackParser#mul.
SmackVisitor.prototype.visitMul = function(ctx) {
};


// Visit a parse tree produced by SmackParser#div.
SmackVisitor.prototype.visitDiv = function(ctx) {
};


// Visit a parse tree produced by SmackParser#mod.
SmackVisitor.prototype.visitMod = function(ctx) {
};


// Visit a parse tree produced by SmackParser#pow.
SmackVisitor.prototype.visitPow = function(ctx) {
};


// Visit a parse tree produced by SmackParser#eq.
SmackVisitor.prototype.visitEq = function(ctx) {
};


// Visit a parse tree produced by SmackParser#neq.
SmackVisitor.prototype.visitNeq = function(ctx) {
};


// Visit a parse tree produced by SmackParser#lt.
SmackVisitor.prototype.visitLt = function(ctx) {
};


// Visit a parse tree produced by SmackParser#le.
SmackVisitor.prototype.visitLe = function(ctx) {
};


// Visit a parse tree produced by SmackParser#gt.
SmackVisitor.prototype.visitGt = function(ctx) {
};


// Visit a parse tree produced by SmackParser#ge.
SmackVisitor.prototype.visitGe = function(ctx) {
};


// Visit a parse tree produced by SmackParser#lp.
SmackVisitor.prototype.visitLp = function(ctx) {
};


// Visit a parse tree produced by SmackParser#rp.
SmackVisitor.prototype.visitRp = function(ctx) {
};


// Visit a parse tree produced by SmackParser#assign.
SmackVisitor.prototype.visitAssign = function(ctx) {
};


// Visit a parse tree produced by SmackParser#varAssign.
SmackVisitor.prototype.visitVarAssign = function(ctx) {
};


// Visit a parse tree produced by SmackParser#funcDeclParams.
SmackVisitor.prototype.visitFuncDeclParams = function(ctx) {
};


// Visit a parse tree produced by SmackParser#funcDeclNoParams.
SmackVisitor.prototype.visitFuncDeclNoParams = function(ctx) {
};


// Visit a parse tree produced by SmackParser#funcInvokeParams.
SmackVisitor.prototype.visitFuncInvokeParams = function(ctx) {
};


// Visit a parse tree produced by SmackParser#funcInvokeNoParams.
SmackVisitor.prototype.visitFuncInvokeNoParams = function(ctx) {
};


// Visit a parse tree produced by SmackParser#retStatement.
SmackVisitor.prototype.visitRetStatement = function(ctx) {
};


// Visit a parse tree produced by SmackParser#ifStat.
SmackVisitor.prototype.visitIfStat = function(ctx) {
};


// Visit a parse tree produced by SmackParser#elseIfStat.
SmackVisitor.prototype.visitElseIfStat = function(ctx) {
};


// Visit a parse tree produced by SmackParser#elseStat.
SmackVisitor.prototype.visitElseStat = function(ctx) {
};


// Visit a parse tree produced by SmackParser#loop.
SmackVisitor.prototype.visitLoop = function(ctx) {
};


// Visit a parse tree produced by SmackParser#nonParenExpr.
SmackVisitor.prototype.visitNonParenExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#atomExpr.
SmackVisitor.prototype.visitAtomExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#nonParenPowExpr.
SmackVisitor.prototype.visitNonParenPowExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#parenExpr.
SmackVisitor.prototype.visitParenExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#nonParenSumExpr.
SmackVisitor.prototype.visitNonParenSumExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#valResolv.
SmackVisitor.prototype.visitValResolv = function(ctx) {
};


// Visit a parse tree produced by SmackParser#jpathResolv.
SmackVisitor.prototype.visitJpathResolv = function(ctx) {
};


// Visit a parse tree produced by SmackParser#invokeResolv.
SmackVisitor.prototype.visitInvokeResolv = function(ctx) {
};


// Visit a parse tree produced by SmackParser#codeBlock.
SmackVisitor.prototype.visitCodeBlock = function(ctx) {
};


// Visit a parse tree produced by SmackParser#sentence.
SmackVisitor.prototype.visitSentence = function(ctx) {
};


// Visit a parse tree produced by SmackParser#statement.
SmackVisitor.prototype.visitStatement = function(ctx) {
};


// Visit a parse tree produced by SmackParser#comment.
SmackVisitor.prototype.visitComment = function(ctx) {
};


// Visit a parse tree produced by SmackParser#json.
SmackVisitor.prototype.visitJson = function(ctx) {
};


// Visit a parse tree produced by SmackParser#object.
SmackVisitor.prototype.visitObject = function(ctx) {
};


// Visit a parse tree produced by SmackParser#pair.
SmackVisitor.prototype.visitPair = function(ctx) {
};


// Visit a parse tree produced by SmackParser#array.
SmackVisitor.prototype.visitArray = function(ctx) {
};


// Visit a parse tree produced by SmackParser#value.
SmackVisitor.prototype.visitValue = function(ctx) {
};



exports.SmackVisitor = SmackVisitor;