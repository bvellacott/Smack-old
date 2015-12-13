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

Ember.run.backburner.DEBUG = true;

QUnit.test( "Arithmetics", function( assert ) {
	var source = Papu.getFileContents('lib/testCode/arithmetics.smk');
	console.log(source);
	Smack.api.compile(source);

	Smack.api.execute('add', [1.1,1.1], function(res){ assert.equal(res, 2.2, '1.1 + 1.1 calculation failed'); });

	Smack.api.execute('add', [-1.1,1.1], function(res){ assert.equal(res, 0, '-1.1 + 1.1 calculation failed'); });

	Smack.api.execute('add', [1.1,-1.1], function(res){ assert.equal(res, 0, '1.1 + -1.1 calculation failed'); });

	Smack.api.execute('add', [-1.1,-1.1], function(res){ assert.equal(res, -2.2, '-1.1 + -1.1 calculation failed'); });

	Smack.api.execute('add', [0,-1.1], function(res){ assert.equal(res, -1.1, '0 + -1.1 calculation failed'); });

	Smack.api.execute('add', [1.1,0], function(res){ assert.equal(res, 1.1, '1.1 + 0 calculation failed'); });


	Smack.api.execute('sub', [1.1,1.1], function(res){ assert.equal(res, 0, '1.1 - 1.1 calculation failed'); });

	Smack.api.execute('sub', [-1.1,1.1], function(res){ assert.equal(res, -2.2, '-1.1 - 1.1 calculation failed'); });

	Smack.api.execute('sub', [1.1,-1.1], function(res){ assert.equal(res, 2.2, '1.1 - -1.1 calculation failed'); });

	Smack.api.execute('sub', [-1.1,-1.1], function(res){ assert.equal(res, 0, '-1.1 - -1.1 calculation failed'); });

	Smack.api.execute('sub', [0,1.1], function(res){ assert.equal(res, -1.1, '0 - 1.1 calculation failed'); });

	Smack.api.execute('sub', [-1.1,0], function(res){ assert.equal(res, -1.1, '-1.1 - 0 calculation failed'); });


	Smack.api.execute('mul', [1,1], function(res){ assert.equal(res, 1, '1 * 1 calculation failed'); });

	Smack.api.execute('mul', [-1,1], function(res){ assert.equal(res, -1, '-1 * 1 calculation failed'); });

	Smack.api.execute('mul', [1,-1], function(res){ assert.equal(res, -1, '1 * -1 calculation failed'); });

	Smack.api.execute('mul', [-1,-1], function(res){ assert.equal(res, 1, '-1 * -1 calculation failed'); });

	Smack.api.execute('mul', [2,0.1], function(res){ assert.equal(res, 0.2, '2 * 0.1 calculation failed'); });

	Smack.api.execute('mul', [1,0], function(res){ assert.equal(res, 0, '1 * 0 calculation failed'); });

	Smack.api.execute('mul', [0,-1], function(res){ assert.equal(res, 0, '0 * -1 calculation failed'); });


	Smack.api.execute('div', [1,1], function(res){ assert.equal(res, 1, '1 / 1 calculation failed'); });

	Smack.api.execute('div', [-1,1], function(res){ assert.equal(res, -1, '-1 / 1 calculation failed'); });

	Smack.api.execute('div', [1,-1], function(res){ assert.equal(res, -1, '1 / -1 calculation failed'); });

	Smack.api.execute('div', [-1,-1], function(res){ assert.equal(res, 1, '-1 / -1 calculation failed'); });

	Smack.api.execute('div', [2,0.1], function(res){ assert.equal(res, 20, '2 / 0.1 calculation failed'); });

	Smack.api.execute('div', [1,0], function(res){ assert.equal(res, Infinity, '1 / 0 calculation failed'); });

	Smack.api.execute('div', [-1,0], function(res){ assert.equal(res, -Infinity, '-1 / 0 calculation failed'); });

	Smack.api.execute('div', [0,-1], function(res){ assert.equal(res, 0, '0 / -1 calculation failed'); });


	Smack.api.execute('mod', [1,1], function(res){ assert.equal(res, 0, '1 % 1 calculation failed'); });

	Smack.api.execute('mod', [-1,1], function(res){ assert.equal(res, 0, '-1 % 1 calculation failed'); });

	Smack.api.execute('mod', [3,5], function(res){ assert.equal(res, 3, '3 % 5 calculation failed'); });

	Smack.api.execute('mod', [-3,5], function(res){ assert.equal(res, -3, '-3 % 5 calculation failed'); });

	Smack.api.execute('mod', [22,-5], function(res){ assert.equal(res, 2, '22 % -5 calculation failed'); });

	Smack.api.execute('mod', [-22,-5], function(res){ assert.equal(res, -2, '-22 % -5 calculation failed'); });

	Smack.api.execute('mod', [1,0.2], function(res){ assert.equal(res, 0, '1 % 0.2 calculation failed'); });

	Smack.api.execute('mod', [1,0], function(res){ assert.ok(isNaN(res), '1 % 0 calculation failed'); });

	Smack.api.execute('mod', [0,-1], function(res){ assert.equal(res, 0, '0 % -1 calculation failed'); });


	Smack.api.execute('pow', [1,1], function(res){ assert.equal(res, 1, '1^1 calculation failed'); });

	Smack.api.execute('pow', [-1,2], function(res){ assert.equal(res, -1, '-1^2 calculation failed'); });

	Smack.api.execute('pow', [2,2], function(res){ assert.equal(res, 4, '2^2 calculation failed'); });

	Smack.api.execute('pow', [1.5,2], function(res){ assert.equal(res, 2.25, '1.5^2 calculation failed'); });

	Smack.api.execute('pow', [4,0.5], function(res){ assert.equal(res, 2, '4^0.5 calculation failed'); });

	Smack.api.execute('pow', [2,-1], function(res){ assert.equal(res, 0.5, '2^-1 calculation failed'); });

	Smack.api.execute('pow', [1,0], function(res){ assert.equal(res, 1, '1^0 calculation failed'); });

	Smack.api.execute('pow', [0,1], function(res){ assert.equal(res, 0, '0^1 calculation failed'); });

	Smack.api.execute('pow', [0,-1], function(res){ assert.equal(res, Infinity, '0^-1 calculation failed'); });

	Smack.api.execute('pow', [-0,-1], function(res){ assert.equal(res, -Infinity, '-0^-1 calculation failed'); });


	Smack.api.execute('eq', [1.1,1.1], function(res){ assert.equal(res, true, '1.1 == 1.1 calculation failed'); });

	Smack.api.execute('eq', [1,-1], function(res){ assert.equal(res, false, '1 == -1 calculation failed'); });


	Smack.api.execute('neq', [1.1,1.1], function(res){ assert.equal(res, false, '1.1 != 1.1 calculation failed'); });

	Smack.api.execute('neq', [1,-1], function(res){ assert.equal(res, true, '1 != -1 calculation failed'); });


	Smack.api.execute('lt', [-2,1], function(res){ assert.equal(res, true, '-2 < 1 calculation failed'); });

	Smack.api.execute('lt', [0, 0], function(res){ assert.equal(res, false, '0 < 0 calculation failed'); });

	Smack.api.execute('lt', [1,-2], function(res){ assert.equal(res, false, '1 < -2 calculation failed'); });


	Smack.api.execute('le', [-2,1], function(res){ assert.equal(res, true, '-2 <= 1 calculation failed'); });

	Smack.api.execute('le', [0, 0], function(res){ assert.equal(res, true, '0 <= 0 calculation failed'); });

	Smack.api.execute('le', [1,-2], function(res){ assert.equal(res, false, '1 <= -2 calculation failed'); });


	Smack.api.execute('gt', [-2,1], function(res){ assert.equal(res, false, '-2 > 1 calculation failed'); });

	Smack.api.execute('gt', [0, 0], function(res){ assert.equal(res, false, '0 > 0 calculation failed'); });

	Smack.api.execute('gt', [1,-2], function(res){ assert.equal(res, true, '1 > -2 calculation failed'); });


	Smack.api.execute('ge', [-2,1], function(res){ assert.equal(res, false, '-2 >= 1 calculation failed'); });

	Smack.api.execute('ge', [0, 0], function(res){ assert.equal(res, false, '0 >= 0 calculation failed'); });

	Smack.api.execute('ge', [1,-2], function(res){ assert.equal(res, true, '1 >= -2 calculation failed'); });


	Smack.api.execute('plusMinusPlus', [3,2], function(res){ assert.equal(res, 1, '3 + - + 2 calculation failed'); });

	Smack.api.execute('minusPlusMinus', [3,2], function(res){ assert.equal(res, 5, '3 - + - 2 calculation failed'); });

	Smack.api.execute('plusThenMinus', [3,2,1], function(res){ assert.equal(res, 4, '3 + 2 - 1 calculation failed'); });

	Smack.api.execute('minusThenPlus', [3,2,1], function(res){ assert.equal(res, 2, '3 - 2 + 1 calculation failed'); });


	Smack.api.execute('addThenAdd', [5,3,2], function(res){ assert.equal(res, 10, '5 + 3 + 2 calculation failed'); });

	Smack.api.execute('addThenSub', [5,3,2], function(res){ assert.equal(res, 6, '5 + 3 - 2 calculation failed'); });

	Smack.api.execute('addThenMul', [5,3,2], function(res){ assert.equal(res, 11, '5 + 3 * 2 calculation failed'); });

	Smack.api.execute('addThenDiv', [5,3,2], function(res){ assert.equal(res, 6.5, '5 + 3 / 2 calculation failed'); });

	Smack.api.execute('addThenMod', [5,3,2], function(res){ assert.equal(res, 6, '5 + 3 % 2 calculation failed'); });

	Smack.api.execute('addThenPow', [5,3,2], function(res){ assert.equal(res, 14, '5 + 3^2 calculation failed'); });


	Smack.api.execute('subThenAdd', [5,3,2], function(res){ assert.equal(res, 4, '5 - 3 + 2 calculation failed'); });

	Smack.api.execute('subThenSub', [5,3,2], function(res){ assert.equal(res, 0, '5 - 3 - 2 calculation failed'); });

	Smack.api.execute('subThenMul', [5,3,2], function(res){ assert.equal(res, -1, '5 - 3 * 2 calculation failed'); });

	Smack.api.execute('subThenDiv', [5,3,2], function(res){ assert.equal(res, 3.5, '5 - 3 / 2 calculation failed'); });

	Smack.api.execute('subThenMod', [5,3,2], function(res){ assert.equal(res, 4, '5 - 3 % 2 calculation failed'); });

	Smack.api.execute('subThenPow', [5,3,2], function(res){ assert.equal(res, -4, '5 - 3^2 calculation failed'); });


	Smack.api.execute('mulThenAdd', [5,3,2], function(res){ assert.equal(res, 17, '5 * 3 + 2 calculation failed'); });

	Smack.api.execute('mulThenSub', [5,3,2], function(res){ assert.equal(res, 13, '5 * 3 - 2 calculation failed'); });

	Smack.api.execute('mulThenMul', [5,3,2], function(res){ assert.equal(res, 30, '5 * 3 * 2 calculation failed'); });

	Smack.api.execute('mulThenDiv', [5,3,2], function(res){ assert.equal(res, 7.5, '5 * 3 / 2 calculation failed'); });

	Smack.api.execute('mulThenMod', [5,3,2], function(res){ assert.equal(res, 1, '5 * 3 % 2 calculation failed'); });

	Smack.api.execute('mulThenPow', [5,3,2], function(res){ assert.equal(res, 45, '5 * 3^2 calculation failed'); });


	Smack.api.execute('divThenAdd', [6,3,2], function(res){ assert.equal(res, 4, '6 / 3 + 2 calculation failed'); });

	Smack.api.execute('divThenSub', [6,3,2], function(res){ assert.equal(res, 0, '6 / 3 - 2 calculation failed'); });

	Smack.api.execute('divThenMul', [6,3,2], function(res){ assert.equal(res, 4, '6 / 3 * 2 calculation failed'); });

	Smack.api.execute('divThenDiv', [6,3,2], function(res){ assert.equal(res, 1, '6 / 3 / 2 calculation failed'); });

	Smack.api.execute('divThenMod', [6,3,2], function(res){ assert.equal(res, 0, '6 / 3 % 2 calculation failed'); });

	Smack.api.execute('divThenPow', [18,3,2], function(res){ assert.equal(res, 2, '18 / 3^2 calculation failed'); });


	Smack.api.execute('modThenAdd', [5,3,2], function(res){ assert.equal(res, 4, '5 % 3 + 2 calculation failed'); });

	Smack.api.execute('modThenSub', [5,3,2], function(res){ assert.equal(res, 0, '5 % 3 - 2 calculation failed'); });

	Smack.api.execute('modThenMul', [5,3,2], function(res){ assert.equal(res, 4, '5 % 3 * 2 calculation failed'); });

	Smack.api.execute('modThenDiv', [5,3,2], function(res){ assert.equal(res, 1, '5 % 3 / 2 calculation failed'); });

	Smack.api.execute('modThenMod', [5,3,2], function(res){ assert.equal(res, 0, '5 % 3 % 2 calculation failed'); });

	Smack.api.execute('modThenPow', [18,3,2], function(res){ assert.equal(res, 5, '5 % 3^2 calculation failed'); });


	Smack.api.execute('powThenAdd', [2,3,4], function(res){ assert.equal(res, 12, '2^3 + 4 calculation failed'); });

	Smack.api.execute('powThenSub', [2,3,4], function(res){ assert.equal(res, 4, '2^3 - 4 calculation failed'); });

	Smack.api.execute('powThenMul', [2,3,4], function(res){ assert.equal(res, 32, '2^3 * 4 calculation failed'); });

	Smack.api.execute('powThenDiv', [2,3,4], function(res){ assert.equal(res, 2, '2^3 / 4 calculation failed'); });

	Smack.api.execute('powThenMod', [2,3,4], function(res){ assert.equal(res, 0, '2^3 % 4 calculation failed'); });

	Smack.api.execute('powThenPow', [3,3,2], function(res){ assert.equal(res, 19683, '3^3^2 calculation failed'); });


	Smack.api.execute('parenAddThenMul', [2,3,4], function(res){ assert.equal(res, 20, '(2 + 3) * 4 calculation failed'); });

	Smack.api.execute('parenAddThenDiv', [2,2,4], function(res){ assert.equal(res, 1, '(2 + 2) / 4 calculation failed'); });

	Smack.api.execute('parenAddThenMod', [2,3,4], function(res){ assert.equal(res, 1, '(2 + 3) % 4 calculation failed'); });

	Smack.api.execute('parenAddThenPow', [1,2,3], function(res){ assert.equal(res, 27, '(1 + 2)^3 calculation failed'); });


	Smack.api.execute('parenSubThenMul', [2,3,4], function(res){ assert.equal(res, -4, '(2 - 3) * 4 calculation failed'); });

	Smack.api.execute('parenSubThenDiv', [2,2,4], function(res){ assert.equal(res, -0.25, '(2 - 3) / 4 calculation failed'); });

	Smack.api.execute('parenSubThenMod', [2,3,4], function(res){ assert.equal(res, -1, '(2 - 3) % 4 calculation failed'); });

	Smack.api.execute('parenSubThenPow', [1,3,3], function(res){ assert.equal(res, -8, '(1 - 3)^3 calculation failed'); });


	Smack.api.execute('parenMulThenPow', [2,3,4], function(res){ assert.equal(res, 1296, '(2 * 3)^4 calculation failed'); });

	Smack.api.execute('parenDivThenPow', [1,2,3], function(res){ assert.equal(res, 0.0625, '(1 / 2)^4 calculation failed'); });

	Smack.api.execute('parenModThenPow', [2,3,4], function(res){ assert.equal(res, 16, '(2 % 3)^4 calculation failed'); });
	

	Smack.api.execute('parenPowThenPow', [2,1,3], function(res){ assert.equal(res, 8, '(2^1)^3 calculation failed'); });


	Smack.api.execute('addEqAdd', [1,1,2,0], function(res){ assert.equal(res, true, '1 + 1 == 2 + 0 calculation failed'); });

	Smack.api.execute('addEqAdd', [1,1,1,2], function(res){ assert.equal(res, false, '1 + 1 == 1 + 2 calculation failed'); });


	Smack.api.execute('addNeqAdd', [1,1,2,0], function(res){ assert.equal(res, false, '1 + 1 != 2 + 0 calculation failed'); });

	Smack.api.execute('addNeqAdd', [1,1,1,2], function(res){ assert.equal(res, true, '1 + 1 != 1 + 2 calculation failed'); });


	Smack.api.execute('addLtAdd', [1,1,2,1], function(res){ assert.equal(res, true, '1 + 1 < 2 + 1 calculation failed'); });

	Smack.api.execute('addLtAdd', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 + -1 < 1 + 0 calculation failed'); });

	Smack.api.execute('addLtAdd', [1,1,2,0], function(res){ assert.equal(res, false, '1 + 1 < 2 + 0 calculation failed'); });

	Smack.api.execute('addLtAdd', [1,1,1,0], function(res){ assert.equal(res, false, '1 + 1 < 1 + 0 calculation failed'); });

	Smack.api.execute('addLtAdd', [1,1,-1,-2], function(res){ assert.equal(res, false, '1 + 1 < -1 + -2 calculation failed'); });


	Smack.api.execute('addLeAdd', [1,1,2,1], function(res){ assert.equal(res, true, '1 + 1 <= 2 + 1 calculation failed'); });

	Smack.api.execute('addLeAdd', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 + -1 <= 1 + 0 calculation failed'); });

	Smack.api.execute('addLeAdd', [1,1,2,0], function(res){ assert.equal(res, true, '1 + 1 <= 2 + 0 calculation failed'); });

	Smack.api.execute('addLeAdd', [1,1,1,0], function(res){ assert.equal(res, false, '1 + 1 <= 1 + 0 calculation failed'); });

	Smack.api.execute('addLeAdd', [1,1,-1,-2], function(res){ assert.equal(res, false, '1 + 1 <= -1 + -2 calculation failed'); });


	Smack.api.execute('addGtAdd', [1,1,2,1], function(res){ assert.equal(res, false, '1 + 1 > 2 + 1 calculation failed'); });

	Smack.api.execute('addGtAdd', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 + -1 > 1 + 0 calculation failed'); });

	Smack.api.execute('addGtAdd', [1,1,2,0], function(res){ assert.equal(res, false, '1 + 1 > 2 + 0 calculation failed'); });

	Smack.api.execute('addGtAdd', [1,1,1,0], function(res){ assert.equal(res, true, '1 + 1 > 1 + 0 calculation failed'); });

	Smack.api.execute('addGtAdd', [1,1,-1,-2], function(res){ assert.equal(res, true, '1 + 1 > -1 + -2 calculation failed'); });


	Smack.api.execute('addGeAdd', [1,1,2,1], function(res){ assert.equal(res, false, '1 + 1 >= 2 + 1 calculation failed'); });

	Smack.api.execute('addGeAdd', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 + -1 >= 1 + 0 calculation failed'); });

	Smack.api.execute('addGeAdd', [1,1,2,0], function(res){ assert.equal(res, true, '1 + 1 >= 2 + 0 calculation failed'); });

	Smack.api.execute('addGeAdd', [1,1,1,0], function(res){ assert.equal(res, true, '1 + 1 >= 1 + 0 calculation failed'); });

	Smack.api.execute('addGeAdd', [1,1,-1,-2], function(res){ assert.equal(res, true, '1 + 1 >= -1 + -2 calculation failed'); });


	Smack.api.execute('subEqSub', [1,1,2,0], function(res){ assert.equal(res, true, '1 - 1 == 2 - 0 calculation failed'); });

	Smack.api.execute('subEqSub', [1,1,1,2], function(res){ assert.equal(res, false, '1 - 1 == 1 - 2 calculation failed'); });


	Smack.api.execute('subNeqSub', [1,1,2,0], function(res){ assert.equal(res, false, '1 - 1 != 2 - 0 calculation failed'); });

	Smack.api.execute('subNeqSub', [1,1,1,2], function(res){ assert.equal(res, true, '1 - 1 != 1 - 2 calculation failed'); });


	Smack.api.execute('subLtSub', [1,1,2,1], function(res){ assert.equal(res, true, '1 - 1 < 2 - 1 calculation failed'); });

	Smack.api.execute('subLtSub', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 - -1 < 1 - 0 calculation failed'); });

	Smack.api.execute('subLtSub', [1,1,2,0], function(res){ assert.equal(res, false, '1 - 1 < 2 - 0 calculation failed'); });

	Smack.api.execute('subLtSub', [1,1,1,0], function(res){ assert.equal(res, false, '1 - 1 < 1 - 0 calculation failed'); });

	Smack.api.execute('subLtSub', [1,1,-1,-2], function(res){ assert.equal(res, false, '1 - 1 < -1 - -2 calculation failed'); });


	Smack.api.execute('subLeSub', [1,1,2,1], function(res){ assert.equal(res, true, '1 - 1 <= 2 - 1 calculation failed'); });

	Smack.api.execute('subLeSub', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 - -1 <= 1 - 0 calculation failed'); });

	Smack.api.execute('subLeSub', [1,1,2,0], function(res){ assert.equal(res, true, '1 - 1 <= 2 - 0 calculation failed'); });

	Smack.api.execute('subLeSub', [1,1,1,0], function(res){ assert.equal(res, false, '1 - 1 <= 1 - 0 calculation failed'); });

	Smack.api.execute('subLeSub', [1,1,-1,-2], function(res){ assert.equal(res, false, '1 - 1 <= -1 - -2 calculation failed'); });


	Smack.api.execute('subGtSub', [1,1,2,1], function(res){ assert.equal(res, false, '1 - 1 > 2 - 1 calculation failed'); });

	Smack.api.execute('subGtSub', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 - -1 > 1 - 0 calculation failed'); });

	Smack.api.execute('subGtSub', [1,1,2,0], function(res){ assert.equal(res, false, '1 - 1 > 2 - 0 calculation failed'); });

	Smack.api.execute('subGtSub', [1,1,1,0], function(res){ assert.equal(res, true, '1 - 1 > 1 - 0 calculation failed'); });

	Smack.api.execute('subGtSub', [1,1,-1,-2], function(res){ assert.equal(res, true, '1 - 1 > -1 - -2 calculation failed'); });


	Smack.api.execute('subGeSub', [1,1,2,1], function(res){ assert.equal(res, false, '1 - 1 >= 2 - 1 calculation failed'); });

	Smack.api.execute('subGeSub', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 - -1 >= 1 - 0 calculation failed'); });

	Smack.api.execute('subGeSub', [1,1,2,0], function(res){ assert.equal(res, true, '1 - 1 >= 2 - 0 calculation failed'); });

	Smack.api.execute('subGeSub', [1,1,1,0], function(res){ assert.equal(res, true, '1 - 1 >= 1 - 0 calculation failed'); });

	Smack.api.execute('subGeSub', [1,1,-1,-2], function(res){ assert.equal(res, true, '1 - 1 >= -1 - -2 calculation failed'); });


	Smack.api.execute('mulEqMul', [1,1,1,1], function(res){ assert.equal(res, true, '1 * 1 == 1 * 1 calculation failed'); });

	Smack.api.execute('mulEqMul', [1,1,1,2], function(res){ assert.equal(res, false, '1 * 1 == 1 * 2 calculation failed'); });


	Smack.api.execute('mulNeqMul', [1,1,1,1], function(res){ assert.equal(res, false, '1 * 1 != 1 * 1 calculation failed'); });

	Smack.api.execute('mulNeqMul', [1,1,1,2], function(res){ assert.equal(res, true, '1 * 1 != 1 * 2 calculation failed'); });


	Smack.api.execute('mulLtMul', [1,1,2,1], function(res){ assert.equal(res, true, '1 * 1 < 2 * 1 calculation failed'); });

	Smack.api.execute('mulLtMul', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 * 1 < 1 * 0 calculation failed'); });

	Smack.api.execute('mulLtMul', [1,1,1,1], function(res){ assert.equal(res, false, '1 * 1 < 1 * 1 calculation failed'); });

	Smack.api.execute('mulLtMul', [1,1,-1,2], function(res){ assert.equal(res, false, '1 * 1 < -1 * 2 calculation failed'); });

	Smack.api.execute('mulLtMul', [1,2,1,1], function(res){ assert.equal(res, false, '1 * 1 < -1 * -2 calculation failed'); });


	Smack.api.execute('mulLeMul', [1,1,2,1], function(res){ assert.equal(res, true, '1 * 1 <= 2 * 1 calculation failed'); });

	Smack.api.execute('mulLeMul', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 * 1 <= 1 * 0 calculation failed'); });

	Smack.api.execute('mulLeMul', [1,1,1,1], function(res){ assert.equal(res, true, '1 * 1 <= 1 * 1 calculation failed'); });

	Smack.api.execute('mulLeMul', [1,1,-1,2], function(res){ assert.equal(res, false, '1 * 1 <= -1 * 2 calculation failed'); });

	Smack.api.execute('mulLeMul', [1,2,1,1], function(res){ assert.equal(res, false, '1 * 2 <= 1 * 1 calculation failed'); });


	Smack.api.execute('mulGtMul', [1,1,2,1], function(res){ assert.equal(res, false, '1 * 1 > 2 * 1 calculation failed'); });

	Smack.api.execute('mulGtMul', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 * 1 > 1 * 0 calculation failed'); });

	Smack.api.execute('mulGtMul', [1,1,1,1], function(res){ assert.equal(res, false, '1 * 1 > 1 * 1 calculation failed'); });

	Smack.api.execute('mulGtMul', [1,1,-1,2], function(res){ assert.equal(res, true, '1 * 1 > -1 * 2 calculation failed'); });

	Smack.api.execute('mulGtMul', [1,2,1,1], function(res){ assert.equal(res, true, '1 * 2 > 1 * 1 calculation failed'); });


	Smack.api.execute('mulGeMul', [1,1,2,1], function(res){ assert.equal(res, false, '1 * 1 >= 2 * 1 calculation failed'); });

	Smack.api.execute('mulGeMul', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 * 1 >= 1 * 0 calculation failed'); });

	Smack.api.execute('mulGeMul', [1,1,1,1], function(res){ assert.equal(res, true, '1 * 1 >= 1 * 1 calculation failed'); });

	Smack.api.execute('mulGeMul', [1,1,-1,2], function(res){ assert.equal(res, true, '1 * 1 >= -1 * 2 calculation failed'); });

	Smack.api.execute('mulGeMul', [1,2,1,1], function(res){ assert.equal(res, true, '1 * 2 >= 1 * 1 calculation failed'); });


	Smack.api.execute('divEqDiv', [1,1,1,1], function(res){ assert.equal(res, true, '1 / 1 == 1 / 1 calculation failed'); });

	Smack.api.execute('divEqDiv', [1,1,1,2], function(res){ assert.equal(res, false, '1 / 1 == 1 / 2 calculation failed'); });


	Smack.api.execute('divNeqDiv', [1,1,1,1], function(res){ assert.equal(res, false, '1 / 1 != 1 / 1 calculation failed'); });

	Smack.api.execute('divNeqDiv', [1,1,1,2], function(res){ assert.equal(res, true, '1 / 1 != 1 / 2 calculation failed'); });


	Smack.api.execute('divLtDiv', [1,1,2,1], function(res){ assert.equal(res, true, '1 / 1 < 2 / 1 calculation failed'); });

	Smack.api.execute('divLtDiv', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 / 1 < 1 / 0 calculation failed'); });

	Smack.api.execute('divLtDiv', [1,1,1,1], function(res){ assert.equal(res, false, '1 / 1 < 1 / 1 calculation failed'); });

	Smack.api.execute('divLtDiv', [1,1,-1,2], function(res){ assert.equal(res, false, '1 / 1 < -1 / 2 calculation failed'); });

	Smack.api.execute('divLtDiv', [1,2,1,1], function(res){ assert.equal(res, false, '1 / 1 < -1 / -2 calculation failed'); });


	Smack.api.execute('divLeDiv', [1,1,2,1], function(res){ assert.equal(res, true, '1 / 1 <= 2 / 1 calculation failed'); });

	Smack.api.execute('divLeDiv', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 / 1 <= 1 / 0 calculation failed'); });

	Smack.api.execute('divLeDiv', [1,1,1,1], function(res){ assert.equal(res, true, '1 / 1 <= 1 / 1 calculation failed'); });

	Smack.api.execute('divLeDiv', [1,1,-1,2], function(res){ assert.equal(res, false, '1 / 1 <= -1 / 2 calculation failed'); });

	Smack.api.execute('divLeDiv', [1,2,1,1], function(res){ assert.equal(res, false, '1 / 2 <= 1 / 1 calculation failed'); });


	Smack.api.execute('divGtDiv', [1,1,2,1], function(res){ assert.equal(res, false, '1 / 1 > 2 / 1 calculation failed'); });

	Smack.api.execute('divGtDiv', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 / 1 > 1 / 0 calculation failed'); });

	Smack.api.execute('divGtDiv', [1,1,1,1], function(res){ assert.equal(res, false, '1 / 1 > 1 / 1 calculation failed'); });

	Smack.api.execute('divGtDiv', [1,1,-1,2], function(res){ assert.equal(res, true, '1 / 1 > -1 / 2 calculation failed'); });

	Smack.api.execute('divGtDiv', [1,2,1,1], function(res){ assert.equal(res, true, '1 / 2 > 1 / 1 calculation failed'); });


	Smack.api.execute('divGeDiv', [1,1,2,1], function(res){ assert.equal(res, false, '1 / 1 >= 2 / 1 calculation failed'); });

	Smack.api.execute('divGeDiv', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 / 1 >= 1 / 0 calculation failed'); });

	Smack.api.execute('divGeDiv', [1,1,1,1], function(res){ assert.equal(res, true, '1 / 1 >= 1 / 1 calculation failed'); });

	Smack.api.execute('divGeDiv', [1,1,-1,2], function(res){ assert.equal(res, true, '1 / 1 >= -1 / 2 calculation failed'); });

	Smack.api.execute('divGeDiv', [1,2,1,1], function(res){ assert.equal(res, true, '1 / 2 >= 1 / 1 calculation failed'); });


	Smack.api.execute('modEqMod', [1,1,1,1], function(res){ assert.equal(res, true, '1 % 1 == 1 % 1 calculation failed'); });

	Smack.api.execute('modEqMod', [1,1,1,2], function(res){ assert.equal(res, false, '1 % 1 == 1 % 2 calculation failed'); });


	Smack.api.execute('modNeqMod', [1,1,1,1], function(res){ assert.equal(res, false, '1 % 1 != 1 % 1 calculation failed'); });

	Smack.api.execute('modNeqMod', [1,1,1,2], function(res){ assert.equal(res, true, '1 % 1 != 1 % 2 calculation failed'); });


	Smack.api.execute('modLtMod', [1,1,1,2], function(res){ assert.equal(res, true, '1 % 1 < 1 % 2 calculation failed'); });

	Smack.api.execute('modLtMod', [-1,1,1,2], function(res){ assert.equal(res, true, '-1 % 1 < 1 % 2 calculation failed'); });

	Smack.api.execute('modLtMod', [1,1,1,1], function(res){ assert.equal(res, false, '1 % 1 < 1 % 1 calculation failed'); });

	Smack.api.execute('modLtMod', [1,1,-1,2], function(res){ assert.equal(res, false, '1 % 1 < -1 % 2 calculation failed'); });

	Smack.api.execute('modLtMod', [1,2,1,1], function(res){ assert.equal(res, false, '1 % 2 < 1 % 1 calculation failed'); });


	Smack.api.execute('modLeMod', [1,1,1,2], function(res){ assert.equal(res, true, '1 % 1 <= 1 % 2 calculation failed'); });

	Smack.api.execute('modLeMod', [-1,1,1,2], function(res){ assert.equal(res, true, '-1 % 1 <= 1 % 2 calculation failed'); });

	Smack.api.execute('modLeMod', [1,1,1,1], function(res){ assert.equal(res, true, '1 % 1 <= 1 % 1 calculation failed'); });

	Smack.api.execute('modLeMod', [1,1,-1,2], function(res){ assert.equal(res, false, '1 % 1 <= -1 % 2 calculation failed'); });

	Smack.api.execute('modLeMod', [1,2,1,1], function(res){ assert.equal(res, false, '1 % 2 <= 1 % 1 calculation failed'); });


	Smack.api.execute('modGtMod', [1,1,1,2], function(res){ assert.equal(res, false, '1 % 1 > 1 % 2 calculation failed'); });

	Smack.api.execute('modGtMod', [-1,1,1,2], function(res){ assert.equal(res, false, '-1 % 1 > 1 % 2 calculation failed'); });

	Smack.api.execute('modGtMod', [1,1,1,1], function(res){ assert.equal(res, false, '1 % 1 > 1 % 1 calculation failed'); });

	Smack.api.execute('modGtMod', [1,1,-1,2], function(res){ assert.equal(res, true, '1 % 1 > -1 % 2 calculation failed'); });

	Smack.api.execute('modGtMod', [1,2,1,1], function(res){ assert.equal(res, true, '1 % 2 > 1 % 1 calculation failed'); });


	Smack.api.execute('modGeMod', [1,1,1,2], function(res){ assert.equal(res, false, '1 % 1 <= 1 % 2 calculation failed'); });

	Smack.api.execute('modGeMod', [-1,1,1,2], function(res){ assert.equal(res, false, '-1 % 1 <= 1 % 2 calculation failed'); });

	Smack.api.execute('modGeMod', [1,1,1,1], function(res){ assert.equal(res, true, '1 % 1 >= 1 % 1 calculation failed'); });

	Smack.api.execute('modGeMod', [1,1,-1,2], function(res){ assert.equal(res, true, '1 % 1 >= -1 % 2 calculation failed'); });

	Smack.api.execute('modGeMod', [1,2,1,1], function(res){ assert.equal(res, true, '1 % 2 >= 1 % 1 calculation failed'); });


	Smack.api.execute('powEqPow', [1,1,1,1], function(res){ assert.equal(res, true, '1^1 == 1^1 calculation failed'); });

	Smack.api.execute('powEqPow', [1,1,2,1], function(res){ assert.equal(res, false, '1^1 == 1^2 calculation failed'); });


	Smack.api.execute('powNeqPow', [1,1,1,1], function(res){ assert.equal(res, false, '1^1 != 1^1 calculation failed'); });

	Smack.api.execute('powNeqPow', [1,1,2,1], function(res){ assert.equal(res, true, '1^1 != 1^2 calculation failed'); });


	Smack.api.execute('powLtPow', [1,1,2,1], function(res){ assert.equal(res, true, '1^1 < 1^2 calculation failed'); });

	Smack.api.execute('powLtPow', [-1,1,1,2], function(res){ assert.equal(res, true, '-1^1 < 1^2 calculation failed'); });

	Smack.api.execute('powLtPow', [1,1,1,1], function(res){ assert.equal(res, false, '1^1 < 1^1 calculation failed'); });

	Smack.api.execute('powLtPow', [1,1,-2,2], function(res){ assert.equal(res, false, '1^1 < -2^2 calculation failed'); });

	Smack.api.execute('powLtPow', [2,1,1,1], function(res){ assert.equal(res, false, '2^1 < 1^1 calculation failed'); });


	Smack.api.execute('powLePow', [1,1,2,1], function(res){ assert.equal(res, true, '1^1 <= 1^2 calculation failed'); });

	Smack.api.execute('powLePow', [-1,1,1,2], function(res){ assert.equal(res, true, '-1^1 <= 1^2 calculation failed'); });

	Smack.api.execute('powLePow', [1,1,1,1], function(res){ assert.equal(res, true, '1^1 <= 1^1 calculation failed'); });

	Smack.api.execute('powLePow', [1,1,-2,2], function(res){ assert.equal(res, false, '1^1 <= -2^2 calculation failed'); });

	Smack.api.execute('powLePow', [2,1,1,1], function(res){ assert.equal(res, false, '2^1 <= 1^1 calculation failed'); });


	Smack.api.execute('powGtPow', [1,1,2,1], function(res){ assert.equal(res, false, '1^1 > 1^2 calculation failed'); });

	Smack.api.execute('powGtPow', [-1,1,1,2], function(res){ assert.equal(res, false, '-1^1 > 1^2 calculation failed'); });

	Smack.api.execute('powGtPow', [1,1,1,1], function(res){ assert.equal(res, false, '1^1 > 1^1 calculation failed'); });

	Smack.api.execute('powGtPow', [1,1,-2,2], function(res){ assert.equal(res, true, '1^1 > -2^2 calculation failed'); });

	Smack.api.execute('powGtPow', [2,1,1,1], function(res){ assert.equal(res, true, '2^1 > 1^1 calculation failed'); });


	Smack.api.execute('powGePow', [1,1,2,1], function(res){ assert.equal(res, false, '1^1 <= 1^2 calculation failed'); });

	Smack.api.execute('powGePow', [-1,1,1,2], function(res){ assert.equal(res, false, '-1^1 <= 1^2 calculation failed'); });

	Smack.api.execute('powGePow', [1,1,1,1], function(res){ assert.equal(res, true, '1^1 >= 1^1 calculation failed'); });

	Smack.api.execute('powGePow', [1,1,-2,2], function(res){ assert.equal(res, true, '1^1 >= -2^2 calculation failed'); });

	Smack.api.execute('powGePow', [2,1,1,1], function(res){ assert.equal(res, true, '2^1 >= 1^1 calculation failed'); });

});
