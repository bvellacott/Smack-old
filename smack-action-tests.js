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

if(!QUnit)
	throw 'QUnit 1.19.0 or above is required';
if(!Smack)
	throw 'Smack is required';
Smack.tests = {};

Smack.tests.testActions = function(tstCb) {
	QUnit.test( "Undo/Redo", function( assert ) {
		var $textArea = $('#smack-editor');
		$textArea.focus();
		document.execCommand('insertText', false, 'added content');
		assert.equal($textArea.val(), 'added content', 'The text area content wasn\'t set');
		$textArea.get(0).setSelectionRange(6, 6);
		document.execCommand('insertText', false, 'more ');
		assert.equal($textArea.val(), 'added more content', 'Adding content at caret position failed');
		Smack.actions.undo();
		assert.equal($textArea.val(), 'added content', 'undo failed');
		Smack.actions.undo();
		assert.equal($textArea.val(), '', 'second undo failed');
		Smack.actions.redo();
		assert.equal($textArea.val(), 'added content', 'redo failed');
		Smack.actions.redo();
		assert.equal($textArea.val(), 'added more content', 'second redo failed');
	});
}