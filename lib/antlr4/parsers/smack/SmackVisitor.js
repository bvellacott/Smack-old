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

// Visit a parse tree produced by SmackParser#smkFile.
SmackVisitor.prototype.visitSmkFile = function(ctx) {
};


// Visit a parse tree produced by SmackParser#packageDecl.
SmackVisitor.prototype.visitPackageDecl = function(ctx) {
};


// Visit a parse tree produced by SmackParser#varAssign.
SmackVisitor.prototype.visitVarAssign = function(ctx) {
};


// Visit a parse tree produced by SmackParser#funcDecl.
SmackVisitor.prototype.visitFuncDecl = function(ctx) {
};


// Visit a parse tree produced by SmackParser#funcInvoke.
SmackVisitor.prototype.visitFuncInvoke = function(ctx) {
};


// Visit a parse tree produced by SmackParser#jsonPath.
SmackVisitor.prototype.visitJsonPath = function(ctx) {
};


// Visit a parse tree produced by SmackParser#dottedId.
SmackVisitor.prototype.visitDottedId = function(ctx) {
};


// Visit a parse tree produced by SmackParser#keyRef.
SmackVisitor.prototype.visitKeyRef = function(ctx) {
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


// Visit a parse tree produced by SmackParser#andExpr.
SmackVisitor.prototype.visitAndExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#modExpr.
SmackVisitor.prototype.visitModExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#atomExpr.
SmackVisitor.prototype.visitAtomExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#mulExpr.
SmackVisitor.prototype.visitMulExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#ltExpr.
SmackVisitor.prototype.visitLtExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#geExpr.
SmackVisitor.prototype.visitGeExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#orExpr.
SmackVisitor.prototype.visitOrExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#powExpr.
SmackVisitor.prototype.visitPowExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#gtExpr.
SmackVisitor.prototype.visitGtExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#neqExpr.
SmackVisitor.prototype.visitNeqExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#parenExpr.
SmackVisitor.prototype.visitParenExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#leExpr.
SmackVisitor.prototype.visitLeExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#sumExpr.
SmackVisitor.prototype.visitSumExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#eqExpr.
SmackVisitor.prototype.visitEqExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#divExpr.
SmackVisitor.prototype.visitDivExpr = function(ctx) {
};


// Visit a parse tree produced by SmackParser#resolvable.
SmackVisitor.prototype.visitResolvable = function(ctx) {
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