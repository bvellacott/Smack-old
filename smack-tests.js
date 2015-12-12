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

});
