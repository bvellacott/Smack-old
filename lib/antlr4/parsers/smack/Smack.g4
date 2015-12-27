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
import Json, JsonPath;

jsonPath
	:	Id (keyRef)*
	;
	
keyRef
	:	'[' STRING ']'
	;

smkFile
	:	comment* packageDecl (comment* funcDecl+)* (comment+ funcDecl*)*
	;

Id
	:	[$a-zA-Z_]+[a-zA-Z_0-9]*
	;

dottedId
	:	Id ('.' Id)*
	;

packageDecl
	:	'pack' dottedId ';'
	;

sumOp
	:	'+'		# plus
	|	'-'		# minus
	;

op
	:	sumOp	# sum
	|	'*'		# mul
	|	'/'		# div
	|	'%'		# mod
	|	'^'		# pow
	|	'=='	# eq
	|	'!='	# neq
	|	'<'		# lt
	|	'<='	# le
	|	'>'		# gt
	|	'>='	# ge
	;

varAssign
	:	jsonPath '=' expression
	;
	
funcDecl
	:	'func' Id '(' Id (',' Id)* ')' codeBlock			# funcDeclParams
	|	'func' Id '(' ')' codeBlock							# funcDeclNoParams
	;
	
funcInvoke
	:	dottedId '(' resolvable (',' resolvable)* ')'		# funcInvokeParams
	|	dottedId '(' ')'									# funcInvokeNoParams
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
	: 'while' '(' expression ')' codeBlock
	;
	
expression 
	:	resolvable								# atomExpr
	|	expression op expression				# nonParenExpr
	|	expression sumOp+ expression			# nonParenSumExpr
	|	'(' expression ')'						# parenExpr
	;
	
resolvable
	:	value		# valResolv
	|	jsonPath	# jpathResolv
	|	funcInvoke	# invokeResolv
	;
	
codeBlock
	:	'{' (('\n')* sentence+ ('\n')*)* '}'
	;
	
sentence
	:	statement ';'
	|	loop
	| 	ifStat
	;
	
statement
	:	varAssign
	|	funcInvoke
	|	retStatement
	;

comment
	:	'//' ~('\n')* '\n'
	;

// Whitespace is ignored 
WS 
	: [ \t\r\n]+ -> skip 
	; 
	 