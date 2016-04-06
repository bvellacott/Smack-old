//Copyright (c) 2015 Benjamin Vellacott
//
//Permission is hereby granted, free of charge, to any person obtaining a copy of
//this software and associated documentation files (the "Software"), to deal in
//the Software without restriction, including without limitation the rights to
//use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
//of the Software, and to permit persons to whom the Software is furnished to do
//so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.

// This is the grammar used to generate the select lexer and parser using the 
// antlr4 tool

grammar Smack;
import Json;

smkFile
	:	packageDecl funcDecl*
	;

packageDecl
	:	'pack' dottedId ';'
	;
	
varAssign
	:	jsonPath '=' expression
	;
	
funcDecl
	:	'func' Id '(' Id? (',' Id)* ')' codeBlock
	;
	
funcInvoke
	:	dottedId '(' resolvable? (',' resolvable)* ')'
	;
	
jsonPath
	:	Id (keyRef)*
	;
	
dottedId
	:	Id ('.' Id)*
	;

keyRef
	:	'[' resolvable ']'
	;

retStatement
	:	'ret' expression
	;
	
ifStat
	:	'if' '(' expression ')' codeBlock elseIfStat* elseStat?
	;
	
elseIfStat
	:	'else' 'if' '(' expression ')' codeBlock
	;
	
elseStat
	:	'else' codeBlock
	;
	
loop
	:	'while' '(' expression ')' codeBlock
	;
	
expression 
	:	'(' expression ')'						# parenExpr
	|	<assoc=right> expression Pow expression	# powExpr
	|	expression Mul expression				# mulExpr
	|	expression Div expression				# divExpr
	|	expression Mod expression				# modExpr
	|	expression (Plus | Minus)+ expression	# sumExpr
	|	Minus expression						# signedExpr
	|	Not expression							# notExpr
	|	expression Eq expression				# eqExpr
	|	expression Neq expression				# neqExpr
	|	expression Lt expression				# ltExpr
	|	expression Le expression				# leExpr
	|	expression Gt expression				# gtExpr
	|	expression Ge expression				# geExpr
	|	expression And expression				# andExpr
	|	expression Or expression				# orExpr
	|	resolvable								# atomExpr
	;
	
resolvable
	:	value		
	|	jsonPath	
	|	funcInvoke
	;
	
codeBlock
	:	'{' sentence* '}' 
	;
	
sentence
	:	statement ';'
	|	loop
	| 	ifStat
//	|	comment
	;
	
statement
	:	varAssign
	|	funcInvoke
	|	retStatement
	;

Pow		:	'^'		;
Mul		:	'*'		;
Div		:	'/'		;
Mod		:	'%'		;
Plus	:	'+'		;
Minus	:	'-'		;
Not		:	'!'		;
Eq		:	'=='	;
Neq		:	'!='	;
Lt		:	'<'		;
Le		:	'<='	;
Gt		:	'>'		;
Ge		:	'>='	;
And		:	'&&'	;
Or		:	'||'	;

Id
	:	[$a-zA-Z_]+[$a-zA-Z_0-9]*
	;
	
// Whitespace and comments are ignored
Comment
	:	'//' ~('\n')* '\n' -> skip
	;

WS 
	: [ \t\r\n]+ -> skip 
	; 
	 