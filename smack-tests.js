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

	Smack.api.execute('tst.add', [1.1,1.1], function(res){ assert.equal(res, 2.2, '1.1 + 1.1 calculation failed'); });

	Smack.api.execute('tst.add', [-1.1,1.1], function(res){ assert.equal(res, 0, '-1.1 + 1.1 calculation failed'); });

	Smack.api.execute('tst.add', [1.1,-1.1], function(res){ assert.equal(res, 0, '1.1 + -1.1 calculation failed'); });

	Smack.api.execute('tst.add', [-1.1,-1.1], function(res){ assert.equal(res, -2.2, '-1.1 + -1.1 calculation failed'); });

	Smack.api.execute('tst.add', [0,-1.1], function(res){ assert.equal(res, -1.1, '0 + -1.1 calculation failed'); });

	Smack.api.execute('tst.add', [1.1,0], function(res){ assert.equal(res, 1.1, '1.1 + 0 calculation failed'); });


	Smack.api.execute('tst.sub', [1.1,1.1], function(res){ assert.equal(res, 0, '1.1 - 1.1 calculation failed'); });

	Smack.api.execute('tst.sub', [-1.1,1.1], function(res){ assert.equal(res, -2.2, '-1.1 - 1.1 calculation failed'); });

	Smack.api.execute('tst.sub', [1.1,-1.1], function(res){ assert.equal(res, 2.2, '1.1 - -1.1 calculation failed'); });

	Smack.api.execute('tst.sub', [-1.1,-1.1], function(res){ assert.equal(res, 0, '-1.1 - -1.1 calculation failed'); });

	Smack.api.execute('tst.sub', [0,1.1], function(res){ assert.equal(res, -1.1, '0 - 1.1 calculation failed'); });

	Smack.api.execute('tst.sub', [-1.1,0], function(res){ assert.equal(res, -1.1, '-1.1 - 0 calculation failed'); });


	Smack.api.execute('tst.mul', [1,1], function(res){ assert.equal(res, 1, '1 * 1 calculation failed'); });

	Smack.api.execute('tst.mul', [-1,1], function(res){ assert.equal(res, -1, '-1 * 1 calculation failed'); });

	Smack.api.execute('tst.mul', [1,-1], function(res){ assert.equal(res, -1, '1 * -1 calculation failed'); });

	Smack.api.execute('tst.mul', [-1,-1], function(res){ assert.equal(res, 1, '-1 * -1 calculation failed'); });

	Smack.api.execute('tst.mul', [2,0.1], function(res){ assert.equal(res, 0.2, '2 * 0.1 calculation failed'); });

	Smack.api.execute('tst.mul', [1,0], function(res){ assert.equal(res, 0, '1 * 0 calculation failed'); });

	Smack.api.execute('tst.mul', [0,-1], function(res){ assert.equal(res, 0, '0 * -1 calculation failed'); });


	Smack.api.execute('tst.div', [1,1], function(res){ assert.equal(res, 1, '1 / 1 calculation failed'); });

	Smack.api.execute('tst.div', [-1,1], function(res){ assert.equal(res, -1, '-1 / 1 calculation failed'); });

	Smack.api.execute('tst.div', [1,-1], function(res){ assert.equal(res, -1, '1 / -1 calculation failed'); });

	Smack.api.execute('tst.div', [-1,-1], function(res){ assert.equal(res, 1, '-1 / -1 calculation failed'); });

	Smack.api.execute('tst.div', [2,0.1], function(res){ assert.equal(res, 20, '2 / 0.1 calculation failed'); });

	Smack.api.execute('tst.div', [1,0], function(res){ assert.equal(res, Infinity, '1 / 0 calculation failed'); });

	Smack.api.execute('tst.div', [-1,0], function(res){ assert.equal(res, -Infinity, '-1 / 0 calculation failed'); });

	Smack.api.execute('tst.div', [0,-1], function(res){ assert.equal(res, 0, '0 / -1 calculation failed'); });


	Smack.api.execute('tst.mod', [1,1], function(res){ assert.equal(res, 0, '1 % 1 calculation failed'); });

	Smack.api.execute('tst.mod', [-1,1], function(res){ assert.equal(res, 0, '-1 % 1 calculation failed'); });

	Smack.api.execute('tst.mod', [3,5], function(res){ assert.equal(res, 3, '3 % 5 calculation failed'); });

	Smack.api.execute('tst.mod', [-3,5], function(res){ assert.equal(res, -3, '-3 % 5 calculation failed'); });

	Smack.api.execute('tst.mod', [22,-5], function(res){ assert.equal(res, 2, '22 % -5 calculation failed'); });

	Smack.api.execute('tst.mod', [-22,-5], function(res){ assert.equal(res, -2, '-22 % -5 calculation failed'); });

	Smack.api.execute('tst.mod', [1,0.2], function(res){ assert.equal(res, 0, '1 % 0.2 calculation failed'); });

	Smack.api.execute('tst.mod', [1,0], function(res){ assert.ok(isNaN(res), '1 % 0 calculation failed'); });

	Smack.api.execute('tst.mod', [0,-1], function(res){ assert.equal(res, 0, '0 % -1 calculation failed'); });


	Smack.api.execute('tst.pow', [1,1], function(res){ assert.equal(res, 1, '1^1 calculation failed'); });

	Smack.api.execute('tst.pow', [-1,2], function(res){ assert.equal(res, -1, '-1^2 calculation failed'); });

	Smack.api.execute('tst.pow', [2,2], function(res){ assert.equal(res, 4, '2^2 calculation failed'); });

	Smack.api.execute('tst.pow', [1.5,2], function(res){ assert.equal(res, 2.25, '1.5^2 calculation failed'); });

	Smack.api.execute('tst.pow', [4,0.5], function(res){ assert.equal(res, 2, '4^0.5 calculation failed'); });

	Smack.api.execute('tst.pow', [2,-1], function(res){ assert.equal(res, 0.5, '2^-1 calculation failed'); });

	Smack.api.execute('tst.pow', [1,0], function(res){ assert.equal(res, 1, '1^0 calculation failed'); });

	Smack.api.execute('tst.pow', [0,1], function(res){ assert.equal(res, 0, '0^1 calculation failed'); });

	Smack.api.execute('tst.pow', [0,-1], function(res){ assert.equal(res, Infinity, '0^-1 calculation failed'); });

	Smack.api.execute('tst.pow', [-0,-1], function(res){ assert.equal(res, -Infinity, '-0^-1 calculation failed'); });


	Smack.api.execute('tst.eq', [1.1,1.1], function(res){ assert.equal(res, true, '1.1 == 1.1 calculation failed'); });

	Smack.api.execute('tst.eq', [1,-1], function(res){ assert.equal(res, false, '1 == -1 calculation failed'); });


	Smack.api.execute('tst.neq', [1.1,1.1], function(res){ assert.equal(res, false, '1.1 != 1.1 calculation failed'); });

	Smack.api.execute('tst.neq', [1,-1], function(res){ assert.equal(res, true, '1 != -1 calculation failed'); });


	Smack.api.execute('tst.lt', [-2,1], function(res){ assert.equal(res, true, '-2 < 1 calculation failed'); });

	Smack.api.execute('tst.lt', [0, 0], function(res){ assert.equal(res, false, '0 < 0 calculation failed'); });

	Smack.api.execute('tst.lt', [1,-2], function(res){ assert.equal(res, false, '1 < -2 calculation failed'); });


	Smack.api.execute('tst.le', [-2,1], function(res){ assert.equal(res, true, '-2 <= 1 calculation failed'); });

	Smack.api.execute('tst.le', [0, 0], function(res){ assert.equal(res, true, '0 <= 0 calculation failed'); });

	Smack.api.execute('tst.le', [1,-2], function(res){ assert.equal(res, false, '1 <= -2 calculation failed'); });


	Smack.api.execute('tst.gt', [-2,1], function(res){ assert.equal(res, false, '-2 > 1 calculation failed'); });

	Smack.api.execute('tst.gt', [0, 0], function(res){ assert.equal(res, false, '0 > 0 calculation failed'); });

	Smack.api.execute('tst.gt', [1,-2], function(res){ assert.equal(res, true, '1 > -2 calculation failed'); });


	Smack.api.execute('tst.ge', [-2,1], function(res){ assert.equal(res, false, '-2 >= 1 calculation failed'); });

	Smack.api.execute('tst.ge', [0, 0], function(res){ assert.equal(res, false, '0 >= 0 calculation failed'); });

	Smack.api.execute('tst.ge', [1,-2], function(res){ assert.equal(res, true, '1 >= -2 calculation failed'); });


	Smack.api.execute('tst.plusMinusPlus', [3,2], function(res){ assert.equal(res, 1, '3 + - + 2 calculation failed'); });

	Smack.api.execute('tst.minusPlusMinus', [3,2], function(res){ assert.equal(res, 5, '3 - + - 2 calculation failed'); });

	Smack.api.execute('tst.plusThenMinus', [3,2,1], function(res){ assert.equal(res, 4, '3 + 2 - 1 calculation failed'); });

	Smack.api.execute('tst.minusThenPlus', [3,2,1], function(res){ assert.equal(res, 2, '3 - 2 + 1 calculation failed'); });


	Smack.api.execute('tst.addThenAdd', [5,3,2], function(res){ assert.equal(res, 10, '5 + 3 + 2 calculation failed'); });

	Smack.api.execute('tst.addThenSub', [5,3,2], function(res){ assert.equal(res, 6, '5 + 3 - 2 calculation failed'); });

	Smack.api.execute('tst.addThenMul', [5,3,2], function(res){ assert.equal(res, 11, '5 + 3 * 2 calculation failed'); });

	Smack.api.execute('tst.addThenDiv', [5,3,2], function(res){ assert.equal(res, 6.5, '5 + 3 / 2 calculation failed'); });

	Smack.api.execute('tst.addThenMod', [5,3,2], function(res){ assert.equal(res, 6, '5 + 3 % 2 calculation failed'); });

	Smack.api.execute('tst.addThenPow', [5,3,2], function(res){ assert.equal(res, 14, '5 + 3^2 calculation failed'); });


	Smack.api.execute('tst.subThenAdd', [5,3,2], function(res){ assert.equal(res, 4, '5 - 3 + 2 calculation failed'); });

	Smack.api.execute('tst.subThenSub', [5,3,2], function(res){ assert.equal(res, 0, '5 - 3 - 2 calculation failed'); });

	Smack.api.execute('tst.subThenMul', [5,3,2], function(res){ assert.equal(res, -1, '5 - 3 * 2 calculation failed'); });

	Smack.api.execute('tst.subThenDiv', [5,3,2], function(res){ assert.equal(res, 3.5, '5 - 3 / 2 calculation failed'); });

	Smack.api.execute('tst.subThenMod', [5,3,2], function(res){ assert.equal(res, 4, '5 - 3 % 2 calculation failed'); });

	Smack.api.execute('tst.subThenPow', [5,3,2], function(res){ assert.equal(res, -4, '5 - 3^2 calculation failed'); });


	Smack.api.execute('tst.mulThenAdd', [5,3,2], function(res){ assert.equal(res, 17, '5 * 3 + 2 calculation failed'); });

	Smack.api.execute('tst.mulThenSub', [5,3,2], function(res){ assert.equal(res, 13, '5 * 3 - 2 calculation failed'); });

	Smack.api.execute('tst.mulThenMul', [5,3,2], function(res){ assert.equal(res, 30, '5 * 3 * 2 calculation failed'); });

	Smack.api.execute('tst.mulThenDiv', [5,3,2], function(res){ assert.equal(res, 7.5, '5 * 3 / 2 calculation failed'); });

	Smack.api.execute('tst.mulThenMod', [5,3,2], function(res){ assert.equal(res, 1, '5 * 3 % 2 calculation failed'); });

	Smack.api.execute('tst.mulThenPow', [5,3,2], function(res){ assert.equal(res, 45, '5 * 3^2 calculation failed'); });


	Smack.api.execute('tst.divThenAdd', [6,3,2], function(res){ assert.equal(res, 4, '6 / 3 + 2 calculation failed'); });

	Smack.api.execute('tst.divThenSub', [6,3,2], function(res){ assert.equal(res, 0, '6 / 3 - 2 calculation failed'); });

	Smack.api.execute('tst.divThenMul', [6,3,2], function(res){ assert.equal(res, 4, '6 / 3 * 2 calculation failed'); });

	Smack.api.execute('tst.divThenDiv', [6,3,2], function(res){ assert.equal(res, 1, '6 / 3 / 2 calculation failed'); });

	Smack.api.execute('tst.divThenMod', [6,3,2], function(res){ assert.equal(res, 0, '6 / 3 % 2 calculation failed'); });

	Smack.api.execute('tst.divThenPow', [18,3,2], function(res){ assert.equal(res, 2, '18 / 3^2 calculation failed'); });


	Smack.api.execute('tst.modThenAdd', [5,3,2], function(res){ assert.equal(res, 4, '5 % 3 + 2 calculation failed'); });

	Smack.api.execute('tst.modThenSub', [5,3,2], function(res){ assert.equal(res, 0, '5 % 3 - 2 calculation failed'); });

	Smack.api.execute('tst.modThenMul', [5,3,2], function(res){ assert.equal(res, 4, '5 % 3 * 2 calculation failed'); });

	Smack.api.execute('tst.modThenDiv', [5,3,2], function(res){ assert.equal(res, 1, '5 % 3 / 2 calculation failed'); });

	Smack.api.execute('tst.modThenMod', [5,3,2], function(res){ assert.equal(res, 0, '5 % 3 % 2 calculation failed'); });

	Smack.api.execute('tst.modThenPow', [18,3,2], function(res){ assert.equal(res, 5, '5 % 3^2 calculation failed'); });


	Smack.api.execute('tst.powThenAdd', [2,3,4], function(res){ assert.equal(res, 12, '2^3 + 4 calculation failed'); });

	Smack.api.execute('tst.powThenSub', [2,3,4], function(res){ assert.equal(res, 4, '2^3 - 4 calculation failed'); });

	Smack.api.execute('tst.powThenMul', [2,3,4], function(res){ assert.equal(res, 32, '2^3 * 4 calculation failed'); });

	Smack.api.execute('tst.powThenDiv', [2,3,4], function(res){ assert.equal(res, 2, '2^3 / 4 calculation failed'); });

	Smack.api.execute('tst.powThenMod', [2,3,4], function(res){ assert.equal(res, 0, '2^3 % 4 calculation failed'); });

	Smack.api.execute('tst.powThenPow', [3,3,2], function(res){ assert.equal(res, 19683, '3^3^2 calculation failed'); });


	Smack.api.execute('tst.parenAddThenMul', [2,3,4], function(res){ assert.equal(res, 20, '(2 + 3) * 4 calculation failed'); });

	Smack.api.execute('tst.parenAddThenDiv', [2,2,4], function(res){ assert.equal(res, 1, '(2 + 2) / 4 calculation failed'); });

	Smack.api.execute('tst.parenAddThenMod', [2,3,4], function(res){ assert.equal(res, 1, '(2 + 3) % 4 calculation failed'); });

	Smack.api.execute('tst.parenAddThenPow', [1,2,3], function(res){ assert.equal(res, 27, '(1 + 2)^3 calculation failed'); });


	Smack.api.execute('tst.parenSubThenMul', [2,3,4], function(res){ assert.equal(res, -4, '(2 - 3) * 4 calculation failed'); });

	Smack.api.execute('tst.parenSubThenDiv', [2,2,4], function(res){ assert.equal(res, -0.25, '(2 - 3) / 4 calculation failed'); });

	Smack.api.execute('tst.parenSubThenMod', [2,3,4], function(res){ assert.equal(res, -1, '(2 - 3) % 4 calculation failed'); });

	Smack.api.execute('tst.parenSubThenPow', [1,3,3], function(res){ assert.equal(res, -8, '(1 - 3)^3 calculation failed'); });


	Smack.api.execute('tst.parenMulThenPow', [2,3,4], function(res){ assert.equal(res, 1296, '(2 * 3)^4 calculation failed'); });

	Smack.api.execute('tst.parenDivThenPow', [1,2,3], function(res){ assert.equal(res, 0.0625, '(1 / 2)^4 calculation failed'); });

	Smack.api.execute('tst.parenModThenPow', [2,3,4], function(res){ assert.equal(res, 16, '(2 % 3)^4 calculation failed'); });
	

	Smack.api.execute('tst.parenPowThenPow', [2,1,3], function(res){ assert.equal(res, 8, '(2^1)^3 calculation failed'); });


	Smack.api.execute('tst.addEqAdd', [1,1,2,0], function(res){ assert.equal(res, true, '1 + 1 == 2 + 0 calculation failed'); });

	Smack.api.execute('tst.addEqAdd', [1,1,1,2], function(res){ assert.equal(res, false, '1 + 1 == 1 + 2 calculation failed'); });


	Smack.api.execute('tst.addNeqAdd', [1,1,2,0], function(res){ assert.equal(res, false, '1 + 1 != 2 + 0 calculation failed'); });

	Smack.api.execute('tst.addNeqAdd', [1,1,1,2], function(res){ assert.equal(res, true, '1 + 1 != 1 + 2 calculation failed'); });


	Smack.api.execute('tst.addLtAdd', [1,1,2,1], function(res){ assert.equal(res, true, '1 + 1 < 2 + 1 calculation failed'); });

	Smack.api.execute('tst.addLtAdd', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 + -1 < 1 + 0 calculation failed'); });

	Smack.api.execute('tst.addLtAdd', [1,1,2,0], function(res){ assert.equal(res, false, '1 + 1 < 2 + 0 calculation failed'); });

	Smack.api.execute('tst.addLtAdd', [1,1,1,0], function(res){ assert.equal(res, false, '1 + 1 < 1 + 0 calculation failed'); });

	Smack.api.execute('tst.addLtAdd', [1,1,-1,-2], function(res){ assert.equal(res, false, '1 + 1 < -1 + -2 calculation failed'); });


	Smack.api.execute('tst.addLeAdd', [1,1,2,1], function(res){ assert.equal(res, true, '1 + 1 <= 2 + 1 calculation failed'); });

	Smack.api.execute('tst.addLeAdd', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 + -1 <= 1 + 0 calculation failed'); });

	Smack.api.execute('tst.addLeAdd', [1,1,2,0], function(res){ assert.equal(res, true, '1 + 1 <= 2 + 0 calculation failed'); });

	Smack.api.execute('tst.addLeAdd', [1,1,1,0], function(res){ assert.equal(res, false, '1 + 1 <= 1 + 0 calculation failed'); });

	Smack.api.execute('tst.addLeAdd', [1,1,-1,-2], function(res){ assert.equal(res, false, '1 + 1 <= -1 + -2 calculation failed'); });


	Smack.api.execute('tst.addGtAdd', [1,1,2,1], function(res){ assert.equal(res, false, '1 + 1 > 2 + 1 calculation failed'); });

	Smack.api.execute('tst.addGtAdd', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 + -1 > 1 + 0 calculation failed'); });

	Smack.api.execute('tst.addGtAdd', [1,1,2,0], function(res){ assert.equal(res, false, '1 + 1 > 2 + 0 calculation failed'); });

	Smack.api.execute('tst.addGtAdd', [1,1,1,0], function(res){ assert.equal(res, true, '1 + 1 > 1 + 0 calculation failed'); });

	Smack.api.execute('tst.addGtAdd', [1,1,-1,-2], function(res){ assert.equal(res, true, '1 + 1 > -1 + -2 calculation failed'); });


	Smack.api.execute('tst.addGeAdd', [1,1,2,1], function(res){ assert.equal(res, false, '1 + 1 >= 2 + 1 calculation failed'); });

	Smack.api.execute('tst.addGeAdd', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 + -1 >= 1 + 0 calculation failed'); });

	Smack.api.execute('tst.addGeAdd', [1,1,2,0], function(res){ assert.equal(res, true, '1 + 1 >= 2 + 0 calculation failed'); });

	Smack.api.execute('tst.addGeAdd', [1,1,1,0], function(res){ assert.equal(res, true, '1 + 1 >= 1 + 0 calculation failed'); });

	Smack.api.execute('tst.addGeAdd', [1,1,-1,-2], function(res){ assert.equal(res, true, '1 + 1 >= -1 + -2 calculation failed'); });


	Smack.api.execute('tst.subEqSub', [1,1,2,0], function(res){ assert.equal(res, true, '1 - 1 == 2 - 0 calculation failed'); });

	Smack.api.execute('tst.subEqSub', [1,1,1,2], function(res){ assert.equal(res, false, '1 - 1 == 1 - 2 calculation failed'); });


	Smack.api.execute('tst.subNeqSub', [1,1,2,0], function(res){ assert.equal(res, false, '1 - 1 != 2 - 0 calculation failed'); });

	Smack.api.execute('tst.subNeqSub', [1,1,1,2], function(res){ assert.equal(res, true, '1 - 1 != 1 - 2 calculation failed'); });


	Smack.api.execute('tst.subLtSub', [1,1,2,1], function(res){ assert.equal(res, true, '1 - 1 < 2 - 1 calculation failed'); });

	Smack.api.execute('tst.subLtSub', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 - -1 < 1 - 0 calculation failed'); });

	Smack.api.execute('tst.subLtSub', [1,1,2,0], function(res){ assert.equal(res, false, '1 - 1 < 2 - 0 calculation failed'); });

	Smack.api.execute('tst.subLtSub', [1,1,1,0], function(res){ assert.equal(res, false, '1 - 1 < 1 - 0 calculation failed'); });

	Smack.api.execute('tst.subLtSub', [1,1,-1,-2], function(res){ assert.equal(res, false, '1 - 1 < -1 - -2 calculation failed'); });


	Smack.api.execute('tst.subLeSub', [1,1,2,1], function(res){ assert.equal(res, true, '1 - 1 <= 2 - 1 calculation failed'); });

	Smack.api.execute('tst.subLeSub', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 - -1 <= 1 - 0 calculation failed'); });

	Smack.api.execute('tst.subLeSub', [1,1,2,0], function(res){ assert.equal(res, true, '1 - 1 <= 2 - 0 calculation failed'); });

	Smack.api.execute('tst.subLeSub', [1,1,1,0], function(res){ assert.equal(res, false, '1 - 1 <= 1 - 0 calculation failed'); });

	Smack.api.execute('tst.subLeSub', [1,1,-1,-2], function(res){ assert.equal(res, false, '1 - 1 <= -1 - -2 calculation failed'); });


	Smack.api.execute('tst.subGtSub', [1,1,2,1], function(res){ assert.equal(res, false, '1 - 1 > 2 - 1 calculation failed'); });

	Smack.api.execute('tst.subGtSub', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 - -1 > 1 - 0 calculation failed'); });

	Smack.api.execute('tst.subGtSub', [1,1,2,0], function(res){ assert.equal(res, false, '1 - 1 > 2 - 0 calculation failed'); });

	Smack.api.execute('tst.subGtSub', [1,1,1,0], function(res){ assert.equal(res, true, '1 - 1 > 1 - 0 calculation failed'); });

	Smack.api.execute('tst.subGtSub', [1,1,-1,-2], function(res){ assert.equal(res, true, '1 - 1 > -1 - -2 calculation failed'); });


	Smack.api.execute('tst.subGeSub', [1,1,2,1], function(res){ assert.equal(res, false, '1 - 1 >= 2 - 1 calculation failed'); });

	Smack.api.execute('tst.subGeSub', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 - -1 >= 1 - 0 calculation failed'); });

	Smack.api.execute('tst.subGeSub', [1,1,2,0], function(res){ assert.equal(res, true, '1 - 1 >= 2 - 0 calculation failed'); });

	Smack.api.execute('tst.subGeSub', [1,1,1,0], function(res){ assert.equal(res, true, '1 - 1 >= 1 - 0 calculation failed'); });

	Smack.api.execute('tst.subGeSub', [1,1,-1,-2], function(res){ assert.equal(res, true, '1 - 1 >= -1 - -2 calculation failed'); });


	Smack.api.execute('tst.mulEqMul', [1,1,1,1], function(res){ assert.equal(res, true, '1 * 1 == 1 * 1 calculation failed'); });

	Smack.api.execute('tst.mulEqMul', [1,1,1,2], function(res){ assert.equal(res, false, '1 * 1 == 1 * 2 calculation failed'); });


	Smack.api.execute('tst.mulNeqMul', [1,1,1,1], function(res){ assert.equal(res, false, '1 * 1 != 1 * 1 calculation failed'); });

	Smack.api.execute('tst.mulNeqMul', [1,1,1,2], function(res){ assert.equal(res, true, '1 * 1 != 1 * 2 calculation failed'); });


	Smack.api.execute('tst.mulLtMul', [1,1,2,1], function(res){ assert.equal(res, true, '1 * 1 < 2 * 1 calculation failed'); });

	Smack.api.execute('tst.mulLtMul', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 * 1 < 1 * 0 calculation failed'); });

	Smack.api.execute('tst.mulLtMul', [1,1,1,1], function(res){ assert.equal(res, false, '1 * 1 < 1 * 1 calculation failed'); });

	Smack.api.execute('tst.mulLtMul', [1,1,-1,2], function(res){ assert.equal(res, false, '1 * 1 < -1 * 2 calculation failed'); });

	Smack.api.execute('tst.mulLtMul', [1,2,1,1], function(res){ assert.equal(res, false, '1 * 1 < -1 * -2 calculation failed'); });


	Smack.api.execute('tst.mulLeMul', [1,1,2,1], function(res){ assert.equal(res, true, '1 * 1 <= 2 * 1 calculation failed'); });

	Smack.api.execute('tst.mulLeMul', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 * 1 <= 1 * 0 calculation failed'); });

	Smack.api.execute('tst.mulLeMul', [1,1,1,1], function(res){ assert.equal(res, true, '1 * 1 <= 1 * 1 calculation failed'); });

	Smack.api.execute('tst.mulLeMul', [1,1,-1,2], function(res){ assert.equal(res, false, '1 * 1 <= -1 * 2 calculation failed'); });

	Smack.api.execute('tst.mulLeMul', [1,2,1,1], function(res){ assert.equal(res, false, '1 * 2 <= 1 * 1 calculation failed'); });


	Smack.api.execute('tst.mulGtMul', [1,1,2,1], function(res){ assert.equal(res, false, '1 * 1 > 2 * 1 calculation failed'); });

	Smack.api.execute('tst.mulGtMul', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 * 1 > 1 * 0 calculation failed'); });

	Smack.api.execute('tst.mulGtMul', [1,1,1,1], function(res){ assert.equal(res, false, '1 * 1 > 1 * 1 calculation failed'); });

	Smack.api.execute('tst.mulGtMul', [1,1,-1,2], function(res){ assert.equal(res, true, '1 * 1 > -1 * 2 calculation failed'); });

	Smack.api.execute('tst.mulGtMul', [1,2,1,1], function(res){ assert.equal(res, true, '1 * 2 > 1 * 1 calculation failed'); });


	Smack.api.execute('tst.mulGeMul', [1,1,2,1], function(res){ assert.equal(res, false, '1 * 1 >= 2 * 1 calculation failed'); });

	Smack.api.execute('tst.mulGeMul', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 * 1 >= 1 * 0 calculation failed'); });

	Smack.api.execute('tst.mulGeMul', [1,1,1,1], function(res){ assert.equal(res, true, '1 * 1 >= 1 * 1 calculation failed'); });

	Smack.api.execute('tst.mulGeMul', [1,1,-1,2], function(res){ assert.equal(res, true, '1 * 1 >= -1 * 2 calculation failed'); });

	Smack.api.execute('tst.mulGeMul', [1,2,1,1], function(res){ assert.equal(res, true, '1 * 2 >= 1 * 1 calculation failed'); });


	Smack.api.execute('tst.divEqDiv', [1,1,1,1], function(res){ assert.equal(res, true, '1 / 1 == 1 / 1 calculation failed'); });

	Smack.api.execute('tst.divEqDiv', [1,1,1,2], function(res){ assert.equal(res, false, '1 / 1 == 1 / 2 calculation failed'); });


	Smack.api.execute('tst.divNeqDiv', [1,1,1,1], function(res){ assert.equal(res, false, '1 / 1 != 1 / 1 calculation failed'); });

	Smack.api.execute('tst.divNeqDiv', [1,1,1,2], function(res){ assert.equal(res, true, '1 / 1 != 1 / 2 calculation failed'); });


	Smack.api.execute('tst.divLtDiv', [1,1,2,1], function(res){ assert.equal(res, true, '1 / 1 < 2 / 1 calculation failed'); });

	Smack.api.execute('tst.divLtDiv', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 / 1 < 1 / 0 calculation failed'); });

	Smack.api.execute('tst.divLtDiv', [1,1,1,1], function(res){ assert.equal(res, false, '1 / 1 < 1 / 1 calculation failed'); });

	Smack.api.execute('tst.divLtDiv', [1,1,-1,2], function(res){ assert.equal(res, false, '1 / 1 < -1 / 2 calculation failed'); });

	Smack.api.execute('tst.divLtDiv', [1,2,1,1], function(res){ assert.equal(res, false, '1 / 1 < -1 / -2 calculation failed'); });


	Smack.api.execute('tst.divLeDiv', [1,1,2,1], function(res){ assert.equal(res, true, '1 / 1 <= 2 / 1 calculation failed'); });

	Smack.api.execute('tst.divLeDiv', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 / 1 <= 1 / 0 calculation failed'); });

	Smack.api.execute('tst.divLeDiv', [1,1,1,1], function(res){ assert.equal(res, true, '1 / 1 <= 1 / 1 calculation failed'); });

	Smack.api.execute('tst.divLeDiv', [1,1,-1,2], function(res){ assert.equal(res, false, '1 / 1 <= -1 / 2 calculation failed'); });

	Smack.api.execute('tst.divLeDiv', [1,2,1,1], function(res){ assert.equal(res, false, '1 / 2 <= 1 / 1 calculation failed'); });


	Smack.api.execute('tst.divGtDiv', [1,1,2,1], function(res){ assert.equal(res, false, '1 / 1 > 2 / 1 calculation failed'); });

	Smack.api.execute('tst.divGtDiv', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 / 1 > 1 / 0 calculation failed'); });

	Smack.api.execute('tst.divGtDiv', [1,1,1,1], function(res){ assert.equal(res, false, '1 / 1 > 1 / 1 calculation failed'); });

	Smack.api.execute('tst.divGtDiv', [1,1,-1,2], function(res){ assert.equal(res, true, '1 / 1 > -1 / 2 calculation failed'); });

	Smack.api.execute('tst.divGtDiv', [1,2,1,1], function(res){ assert.equal(res, true, '1 / 2 > 1 / 1 calculation failed'); });


	Smack.api.execute('tst.divGeDiv', [1,1,2,1], function(res){ assert.equal(res, false, '1 / 1 >= 2 / 1 calculation failed'); });

	Smack.api.execute('tst.divGeDiv', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 / 1 >= 1 / 0 calculation failed'); });

	Smack.api.execute('tst.divGeDiv', [1,1,1,1], function(res){ assert.equal(res, true, '1 / 1 >= 1 / 1 calculation failed'); });

	Smack.api.execute('tst.divGeDiv', [1,1,-1,2], function(res){ assert.equal(res, true, '1 / 1 >= -1 / 2 calculation failed'); });

	Smack.api.execute('tst.divGeDiv', [1,2,1,1], function(res){ assert.equal(res, true, '1 / 2 >= 1 / 1 calculation failed'); });


	Smack.api.execute('tst.modEqMod', [1,1,1,1], function(res){ assert.equal(res, true, '1 % 1 == 1 % 1 calculation failed'); });

	Smack.api.execute('tst.modEqMod', [1,1,1,2], function(res){ assert.equal(res, false, '1 % 1 == 1 % 2 calculation failed'); });


	Smack.api.execute('tst.modNeqMod', [1,1,1,1], function(res){ assert.equal(res, false, '1 % 1 != 1 % 1 calculation failed'); });

	Smack.api.execute('tst.modNeqMod', [1,1,1,2], function(res){ assert.equal(res, true, '1 % 1 != 1 % 2 calculation failed'); });


	Smack.api.execute('tst.modLtMod', [1,1,1,2], function(res){ assert.equal(res, true, '1 % 1 < 1 % 2 calculation failed'); });

	Smack.api.execute('tst.modLtMod', [-1,1,1,2], function(res){ assert.equal(res, true, '-1 % 1 < 1 % 2 calculation failed'); });

	Smack.api.execute('tst.modLtMod', [1,1,1,1], function(res){ assert.equal(res, false, '1 % 1 < 1 % 1 calculation failed'); });

	Smack.api.execute('tst.modLtMod', [1,1,-1,2], function(res){ assert.equal(res, false, '1 % 1 < -1 % 2 calculation failed'); });

	Smack.api.execute('tst.modLtMod', [1,2,1,1], function(res){ assert.equal(res, false, '1 % 2 < 1 % 1 calculation failed'); });


	Smack.api.execute('tst.modLeMod', [1,1,1,2], function(res){ assert.equal(res, true, '1 % 1 <= 1 % 2 calculation failed'); });

	Smack.api.execute('tst.modLeMod', [-1,1,1,2], function(res){ assert.equal(res, true, '-1 % 1 <= 1 % 2 calculation failed'); });

	Smack.api.execute('tst.modLeMod', [1,1,1,1], function(res){ assert.equal(res, true, '1 % 1 <= 1 % 1 calculation failed'); });

	Smack.api.execute('tst.modLeMod', [1,1,-1,2], function(res){ assert.equal(res, false, '1 % 1 <= -1 % 2 calculation failed'); });

	Smack.api.execute('tst.modLeMod', [1,2,1,1], function(res){ assert.equal(res, false, '1 % 2 <= 1 % 1 calculation failed'); });


	Smack.api.execute('tst.modGtMod', [1,1,1,2], function(res){ assert.equal(res, false, '1 % 1 > 1 % 2 calculation failed'); });

	Smack.api.execute('tst.modGtMod', [-1,1,1,2], function(res){ assert.equal(res, false, '-1 % 1 > 1 % 2 calculation failed'); });

	Smack.api.execute('tst.modGtMod', [1,1,1,1], function(res){ assert.equal(res, false, '1 % 1 > 1 % 1 calculation failed'); });

	Smack.api.execute('tst.modGtMod', [1,1,-1,2], function(res){ assert.equal(res, true, '1 % 1 > -1 % 2 calculation failed'); });

	Smack.api.execute('tst.modGtMod', [1,2,1,1], function(res){ assert.equal(res, true, '1 % 2 > 1 % 1 calculation failed'); });


	Smack.api.execute('tst.modGeMod', [1,1,1,2], function(res){ assert.equal(res, false, '1 % 1 <= 1 % 2 calculation failed'); });

	Smack.api.execute('tst.modGeMod', [-1,1,1,2], function(res){ assert.equal(res, false, '-1 % 1 <= 1 % 2 calculation failed'); });

	Smack.api.execute('tst.modGeMod', [1,1,1,1], function(res){ assert.equal(res, true, '1 % 1 >= 1 % 1 calculation failed'); });

	Smack.api.execute('tst.modGeMod', [1,1,-1,2], function(res){ assert.equal(res, true, '1 % 1 >= -1 % 2 calculation failed'); });

	Smack.api.execute('tst.modGeMod', [1,2,1,1], function(res){ assert.equal(res, true, '1 % 2 >= 1 % 1 calculation failed'); });


	Smack.api.execute('tst.powEqPow', [1,1,1,1], function(res){ assert.equal(res, true, '1^1 == 1^1 calculation failed'); });

	Smack.api.execute('tst.powEqPow', [1,1,2,1], function(res){ assert.equal(res, false, '1^1 == 1^2 calculation failed'); });


	Smack.api.execute('tst.powNeqPow', [1,1,1,1], function(res){ assert.equal(res, false, '1^1 != 1^1 calculation failed'); });

	Smack.api.execute('tst.powNeqPow', [1,1,2,1], function(res){ assert.equal(res, true, '1^1 != 1^2 calculation failed'); });


	Smack.api.execute('tst.powLtPow', [1,1,2,1], function(res){ assert.equal(res, true, '1^1 < 1^2 calculation failed'); });

	Smack.api.execute('tst.powLtPow', [-1,1,1,2], function(res){ assert.equal(res, true, '-1^1 < 1^2 calculation failed'); });

	Smack.api.execute('tst.powLtPow', [1,1,1,1], function(res){ assert.equal(res, false, '1^1 < 1^1 calculation failed'); });

	Smack.api.execute('tst.powLtPow', [1,1,-2,2], function(res){ assert.equal(res, false, '1^1 < -2^2 calculation failed'); });

	Smack.api.execute('tst.powLtPow', [2,1,1,1], function(res){ assert.equal(res, false, '2^1 < 1^1 calculation failed'); });


	Smack.api.execute('tst.powLePow', [1,1,2,1], function(res){ assert.equal(res, true, '1^1 <= 1^2 calculation failed'); });

	Smack.api.execute('tst.powLePow', [-1,1,1,2], function(res){ assert.equal(res, true, '-1^1 <= 1^2 calculation failed'); });

	Smack.api.execute('tst.powLePow', [1,1,1,1], function(res){ assert.equal(res, true, '1^1 <= 1^1 calculation failed'); });

	Smack.api.execute('tst.powLePow', [1,1,-2,2], function(res){ assert.equal(res, false, '1^1 <= -2^2 calculation failed'); });

	Smack.api.execute('tst.powLePow', [2,1,1,1], function(res){ assert.equal(res, false, '2^1 <= 1^1 calculation failed'); });


	Smack.api.execute('tst.powGtPow', [1,1,2,1], function(res){ assert.equal(res, false, '1^1 > 1^2 calculation failed'); });

	Smack.api.execute('tst.powGtPow', [-1,1,1,2], function(res){ assert.equal(res, false, '-1^1 > 1^2 calculation failed'); });

	Smack.api.execute('tst.powGtPow', [1,1,1,1], function(res){ assert.equal(res, false, '1^1 > 1^1 calculation failed'); });

	Smack.api.execute('tst.powGtPow', [1,1,-2,2], function(res){ assert.equal(res, true, '1^1 > -2^2 calculation failed'); });

	Smack.api.execute('tst.powGtPow', [2,1,1,1], function(res){ assert.equal(res, true, '2^1 > 1^1 calculation failed'); });


	Smack.api.execute('tst.powGePow', [1,1,2,1], function(res){ assert.equal(res, false, '1^1 <= 1^2 calculation failed'); });

	Smack.api.execute('tst.powGePow', [-1,1,1,2], function(res){ assert.equal(res, false, '-1^1 <= 1^2 calculation failed'); });

	Smack.api.execute('tst.powGePow', [1,1,1,1], function(res){ assert.equal(res, true, '1^1 >= 1^1 calculation failed'); });

	Smack.api.execute('tst.powGePow', [1,1,-2,2], function(res){ assert.equal(res, true, '1^1 >= -2^2 calculation failed'); });

	Smack.api.execute('tst.powGePow', [2,1,1,1], function(res){ assert.equal(res, true, '2^1 >= 1^1 calculation failed'); });

});

QUnit.test( "Assign", function( assert ) {
	var source = Papu.getFileContents('lib/testCode/varAssign.smk');
	console.log(source);
	Smack.api.compile(source);

	Smack.api.execute('tst.assingAndCompare', [1.1, 2.2], function(res){ assert.equal(res, true, 'Variable assign calculation failed'); });
});

QUnit.test( "If Else", function( assert ) {
	var source = Papu.getFileContents('lib/testCode/ifElse.smk');
	console.log(source);
	Smack.api.compile(source);

	Smack.api.execute('tst.ifOneElseIfTwoElse', [1], function(res){ assert.equal(res, 1, 'If part of if else if else failed'); });

	Smack.api.execute('tst.ifOneElseIfTwoElse', [2], function(res){ assert.equal(res, 2, 'Else if part of if else if else failed'); });

	Smack.api.execute('tst.ifOneElseIfTwoElse', [3], function(res){ assert.equal(res, false, 'Else part of if else if else failed'); });

	Smack.api.execute('tst.ifOneElse', [1], function(res){ assert.equal(res, 1, 'If part of if else failed'); });

	Smack.api.execute('tst.ifOneElse', [2], function(res){ assert.equal(res, false, 'Else part of if else failed'); });

});

QUnit.test( "While and exec()", function( assert ) {
	var source = Papu.getFileContents('lib/testCode/while.smk');
	console.log(source);
	Smack.api.compile(source);

	Smack.api.execute('tst.addOneWhileLessThan', [10000], function(res){ assert.equal(res, 10000, 'While loop test failed'); });

	Smack.api.execute('tst.callWithInput', ['addOneWhileLessThan', [10000]], function(res){ assert.equal(res, 10000, 'Exec test failed'); });

});
