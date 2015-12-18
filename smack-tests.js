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

QUnit.test( "Requests", function( assert ) {
	var cbCalled = false;
	var cb = function() { cbCalled = true; };
	
	var con = Smack.api.getConnection('test');
	con.host = 'tst.com';
	con.sessionId = 'tst123';
	
	Smack.api.compile('test', {cUnit1 : 'source 1', cUnit2 : 'source 2'}, cb);
	assert.ok(cbCalled, "Callback didn't get called"); 
	cbCalled = false;
	assert.deepEqual(con.getLatestRequest(), {
		url : 'tst.com/compile',
		headers : {
			'content-type' : 'application/json', 'session' : 'tst123'
		},
		body : {cUnit1 : 'source 1', cUnit2 : 'source 2'}
	}, 'The api produced invalid request data for compilation');
	
	Smack.api.del('test', ['cUnit1', 'cUnit2'], cb);
	assert.ok(cbCalled, "Callback didn't get called"); 
	cbCalled = false;
	assert.deepEqual(con.getLatestRequest(), {
		url : 'tst.com/delete',
		headers : {
			'content-type' : 'application/json', 'session' : 'tst123'
		},
		body : ['cUnit1', 'cUnit2']
	}, 'The api produced invalid request data for deletion');
	
	Smack.api.delAll('test', cb);
	assert.ok(cbCalled, "Callback didn't get called"); 
	cbCalled = false;
	assert.deepEqual(con.getLatestRequest(), {
		url : 'tst.com/deleteall',
		headers : {
			'content-type' : 'application/json', 'session' : 'tst123'
		},
		body : undefined
	}, 'The api produced invalid request data for all delete');
	
	Smack.api.get('test', ['cUnit1', 'cUnit2'], cb);
	assert.ok(cbCalled, "Callback didn't get called"); 
	cbCalled = false;
	assert.deepEqual(con.getLatestRequest(), {
		url : 'tst.com/get',
		headers : {
			'content-type' : 'application/json', 'session' : 'tst123'
		},
		body : ['cUnit1', 'cUnit2']
	}, 'The api produced invalid request data for get');
	
	Smack.api.getNames('test', 'java regex', cb);
	assert.ok(cbCalled, "Callback didn't get called"); 
	cbCalled = false;
	assert.deepEqual(con.getLatestRequest(), {
		url : 'tst.com/getnames',
		headers : {
			'content-type' : 'application/json', 'session' : 'tst123'
		},
		body : 'java regex'
	}, 'The api produced invalid request data for get names');
	
	Smack.api.execute('test', 'cUnit', ['arg1', 'arg2'], cb);
	assert.ok(cbCalled, "Callback didn't get called"); 
	cbCalled = false;
	assert.deepEqual(con.getLatestRequest(), {
		url : 'tst.com/execute',
		headers : {
			'content-type' : 'application/json', 'session' : 'tst123'
		},
		body : { name : 'cUnit', args : ['arg1', 'arg2']}
	}, 'The api produced invalid request data for execute');
});

QUnit.test( "Arithmetics", function( assert ) {
	var source;
	Papu.getFileContents('testCode/arithmetics.smk', function(res){ source = res; });
	console.log(source);
	Smack.api.compile('browser', source);

	Smack.api.execute('browser', 'tst.add', [1.1,1.1], function(res){ assert.equal(res, 2.2, '1.1 + 1.1 calculation failed'); });

	Smack.api.execute('browser', 'tst.add', [-1.1,1.1], function(res){ assert.equal(res, 0, '-1.1 + 1.1 calculation failed'); });

	Smack.api.execute('browser', 'tst.add', [1.1,-1.1], function(res){ assert.equal(res, 0, '1.1 + -1.1 calculation failed'); });

	Smack.api.execute('browser', 'tst.add', [-1.1,-1.1], function(res){ assert.equal(res, -2.2, '-1.1 + -1.1 calculation failed'); });

	Smack.api.execute('browser', 'tst.add', [0,-1.1], function(res){ assert.equal(res, -1.1, '0 + -1.1 calculation failed'); });

	Smack.api.execute('browser', 'tst.add', [1.1,0], function(res){ assert.equal(res, 1.1, '1.1 + 0 calculation failed'); });


	Smack.api.execute('browser', 'tst.sub', [1.1,1.1], function(res){ assert.equal(res, 0, '1.1 - 1.1 calculation failed'); });

	Smack.api.execute('browser', 'tst.sub', [-1.1,1.1], function(res){ assert.equal(res, -2.2, '-1.1 - 1.1 calculation failed'); });

	Smack.api.execute('browser', 'tst.sub', [1.1,-1.1], function(res){ assert.equal(res, 2.2, '1.1 - -1.1 calculation failed'); });

	Smack.api.execute('browser', 'tst.sub', [-1.1,-1.1], function(res){ assert.equal(res, 0, '-1.1 - -1.1 calculation failed'); });

	Smack.api.execute('browser', 'tst.sub', [0,1.1], function(res){ assert.equal(res, -1.1, '0 - 1.1 calculation failed'); });

	Smack.api.execute('browser', 'tst.sub', [-1.1,0], function(res){ assert.equal(res, -1.1, '-1.1 - 0 calculation failed'); });


	Smack.api.execute('browser', 'tst.mul', [1,1], function(res){ assert.equal(res, 1, '1 * 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mul', [-1,1], function(res){ assert.equal(res, -1, '-1 * 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mul', [1,-1], function(res){ assert.equal(res, -1, '1 * -1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mul', [-1,-1], function(res){ assert.equal(res, 1, '-1 * -1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mul', [2,0.1], function(res){ assert.equal(res, 0.2, '2 * 0.1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mul', [1,0], function(res){ assert.equal(res, 0, '1 * 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.mul', [0,-1], function(res){ assert.equal(res, 0, '0 * -1 calculation failed'); });


	Smack.api.execute('browser', 'tst.div', [1,1], function(res){ assert.equal(res, 1, '1 / 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.div', [-1,1], function(res){ assert.equal(res, -1, '-1 / 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.div', [1,-1], function(res){ assert.equal(res, -1, '1 / -1 calculation failed'); });

	Smack.api.execute('browser', 'tst.div', [-1,-1], function(res){ assert.equal(res, 1, '-1 / -1 calculation failed'); });

	Smack.api.execute('browser', 'tst.div', [2,0.1], function(res){ assert.equal(res, 20, '2 / 0.1 calculation failed'); });

	Smack.api.execute('browser', 'tst.div', [1,0], function(res){ assert.equal(res, Infinity, '1 / 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.div', [-1,0], function(res){ assert.equal(res, -Infinity, '-1 / 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.div', [0,-1], function(res){ assert.equal(res, 0, '0 / -1 calculation failed'); });


	Smack.api.execute('browser', 'tst.mod', [1,1], function(res){ assert.equal(res, 0, '1 % 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mod', [-1,1], function(res){ assert.equal(res, 0, '-1 % 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mod', [3,5], function(res){ assert.equal(res, 3, '3 % 5 calculation failed'); });

	Smack.api.execute('browser', 'tst.mod', [-3,5], function(res){ assert.equal(res, -3, '-3 % 5 calculation failed'); });

	Smack.api.execute('browser', 'tst.mod', [22,-5], function(res){ assert.equal(res, 2, '22 % -5 calculation failed'); });

	Smack.api.execute('browser', 'tst.mod', [-22,-5], function(res){ assert.equal(res, -2, '-22 % -5 calculation failed'); });

	Smack.api.execute('browser', 'tst.mod', [1,0.2], function(res){ assert.equal(res, 0, '1 % 0.2 calculation failed'); });

	Smack.api.execute('browser', 'tst.mod', [1,0], function(res){ assert.ok(isNaN(res), '1 % 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.mod', [0,-1], function(res){ assert.equal(res, 0, '0 % -1 calculation failed'); });


	Smack.api.execute('browser', 'tst.pow', [1,1], function(res){ assert.equal(res, 1, '1^1 calculation failed'); });

	Smack.api.execute('browser', 'tst.pow', [-1,2], function(res){ assert.equal(res, -1, '-1^2 calculation failed'); });

	Smack.api.execute('browser', 'tst.pow', [2,2], function(res){ assert.equal(res, 4, '2^2 calculation failed'); });

	Smack.api.execute('browser', 'tst.pow', [1.5,2], function(res){ assert.equal(res, 2.25, '1.5^2 calculation failed'); });

	Smack.api.execute('browser', 'tst.pow', [4,0.5], function(res){ assert.equal(res, 2, '4^0.5 calculation failed'); });

	Smack.api.execute('browser', 'tst.pow', [2,-1], function(res){ assert.equal(res, 0.5, '2^-1 calculation failed'); });

	Smack.api.execute('browser', 'tst.pow', [1,0], function(res){ assert.equal(res, 1, '1^0 calculation failed'); });

	Smack.api.execute('browser', 'tst.pow', [0,1], function(res){ assert.equal(res, 0, '0^1 calculation failed'); });

	Smack.api.execute('browser', 'tst.pow', [0,-1], function(res){ assert.equal(res, Infinity, '0^-1 calculation failed'); });

	Smack.api.execute('browser', 'tst.pow', [-0,-1], function(res){ assert.equal(res, -Infinity, '-0^-1 calculation failed'); });


	Smack.api.execute('browser', 'tst.eq', [1.1,1.1], function(res){ assert.equal(res, true, '1.1 == 1.1 calculation failed'); });

	Smack.api.execute('browser', 'tst.eq', [1,-1], function(res){ assert.equal(res, false, '1 == -1 calculation failed'); });


	Smack.api.execute('browser', 'tst.neq', [1.1,1.1], function(res){ assert.equal(res, false, '1.1 != 1.1 calculation failed'); });

	Smack.api.execute('browser', 'tst.neq', [1,-1], function(res){ assert.equal(res, true, '1 != -1 calculation failed'); });


	Smack.api.execute('browser', 'tst.lt', [-2,1], function(res){ assert.equal(res, true, '-2 < 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.lt', [0, 0], function(res){ assert.equal(res, false, '0 < 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.lt', [1,-2], function(res){ assert.equal(res, false, '1 < -2 calculation failed'); });


	Smack.api.execute('browser', 'tst.le', [-2,1], function(res){ assert.equal(res, true, '-2 <= 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.le', [0, 0], function(res){ assert.equal(res, true, '0 <= 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.le', [1,-2], function(res){ assert.equal(res, false, '1 <= -2 calculation failed'); });


	Smack.api.execute('browser', 'tst.gt', [-2,1], function(res){ assert.equal(res, false, '-2 > 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.gt', [0, 0], function(res){ assert.equal(res, false, '0 > 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.gt', [1,-2], function(res){ assert.equal(res, true, '1 > -2 calculation failed'); });


	Smack.api.execute('browser', 'tst.ge', [-2,1], function(res){ assert.equal(res, false, '-2 >= 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.ge', [0, 0], function(res){ assert.equal(res, false, '0 >= 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.ge', [1,-2], function(res){ assert.equal(res, true, '1 >= -2 calculation failed'); });


	Smack.api.execute('browser', 'tst.plusMinusPlus', [3,2], function(res){ assert.equal(res, 1, '3 + - + 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.minusPlusMinus', [3,2], function(res){ assert.equal(res, 5, '3 - + - 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.plusThenMinus', [3,2,1], function(res){ assert.equal(res, 4, '3 + 2 - 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.minusThenPlus', [3,2,1], function(res){ assert.equal(res, 2, '3 - 2 + 1 calculation failed'); });


	Smack.api.execute('browser', 'tst.addThenAdd', [5,3,2], function(res){ assert.equal(res, 10, '5 + 3 + 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.addThenSub', [5,3,2], function(res){ assert.equal(res, 6, '5 + 3 - 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.addThenMul', [5,3,2], function(res){ assert.equal(res, 11, '5 + 3 * 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.addThenDiv', [5,3,2], function(res){ assert.equal(res, 6.5, '5 + 3 / 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.addThenMod', [5,3,2], function(res){ assert.equal(res, 6, '5 + 3 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.addThenPow', [5,3,2], function(res){ assert.equal(res, 14, '5 + 3^2 calculation failed'); });


	Smack.api.execute('browser', 'tst.subThenAdd', [5,3,2], function(res){ assert.equal(res, 4, '5 - 3 + 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.subThenSub', [5,3,2], function(res){ assert.equal(res, 0, '5 - 3 - 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.subThenMul', [5,3,2], function(res){ assert.equal(res, -1, '5 - 3 * 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.subThenDiv', [5,3,2], function(res){ assert.equal(res, 3.5, '5 - 3 / 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.subThenMod', [5,3,2], function(res){ assert.equal(res, 4, '5 - 3 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.subThenPow', [5,3,2], function(res){ assert.equal(res, -4, '5 - 3^2 calculation failed'); });


	Smack.api.execute('browser', 'tst.mulThenAdd', [5,3,2], function(res){ assert.equal(res, 17, '5 * 3 + 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulThenSub', [5,3,2], function(res){ assert.equal(res, 13, '5 * 3 - 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulThenMul', [5,3,2], function(res){ assert.equal(res, 30, '5 * 3 * 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulThenDiv', [5,3,2], function(res){ assert.equal(res, 7.5, '5 * 3 / 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulThenMod', [5,3,2], function(res){ assert.equal(res, 1, '5 * 3 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulThenPow', [5,3,2], function(res){ assert.equal(res, 45, '5 * 3^2 calculation failed'); });


	Smack.api.execute('browser', 'tst.divThenAdd', [6,3,2], function(res){ assert.equal(res, 4, '6 / 3 + 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.divThenSub', [6,3,2], function(res){ assert.equal(res, 0, '6 / 3 - 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.divThenMul', [6,3,2], function(res){ assert.equal(res, 4, '6 / 3 * 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.divThenDiv', [6,3,2], function(res){ assert.equal(res, 1, '6 / 3 / 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.divThenMod', [6,3,2], function(res){ assert.equal(res, 0, '6 / 3 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.divThenPow', [18,3,2], function(res){ assert.equal(res, 2, '18 / 3^2 calculation failed'); });


	Smack.api.execute('browser', 'tst.modThenAdd', [5,3,2], function(res){ assert.equal(res, 4, '5 % 3 + 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modThenSub', [5,3,2], function(res){ assert.equal(res, 0, '5 % 3 - 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modThenMul', [5,3,2], function(res){ assert.equal(res, 4, '5 % 3 * 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modThenDiv', [5,3,2], function(res){ assert.equal(res, 1, '5 % 3 / 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modThenMod', [5,3,2], function(res){ assert.equal(res, 0, '5 % 3 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modThenPow', [18,3,2], function(res){ assert.equal(res, 5, '5 % 3^2 calculation failed'); });


	Smack.api.execute('browser', 'tst.powThenAdd', [2,3,4], function(res){ assert.equal(res, 12, '2^3 + 4 calculation failed'); });

	Smack.api.execute('browser', 'tst.powThenSub', [2,3,4], function(res){ assert.equal(res, 4, '2^3 - 4 calculation failed'); });

	Smack.api.execute('browser', 'tst.powThenMul', [2,3,4], function(res){ assert.equal(res, 32, '2^3 * 4 calculation failed'); });

	Smack.api.execute('browser', 'tst.powThenDiv', [2,3,4], function(res){ assert.equal(res, 2, '2^3 / 4 calculation failed'); });

	Smack.api.execute('browser', 'tst.powThenMod', [2,3,4], function(res){ assert.equal(res, 0, '2^3 % 4 calculation failed'); });

	Smack.api.execute('browser', 'tst.powThenPow', [3,3,2], function(res){ assert.equal(res, 19683, '3^3^2 calculation failed'); });


	Smack.api.execute('browser', 'tst.parenAddThenMul', [2,3,4], function(res){ assert.equal(res, 20, '(2 + 3) * 4 calculation failed'); });

	Smack.api.execute('browser', 'tst.parenAddThenDiv', [2,2,4], function(res){ assert.equal(res, 1, '(2 + 2) / 4 calculation failed'); });

	Smack.api.execute('browser', 'tst.parenAddThenMod', [2,3,4], function(res){ assert.equal(res, 1, '(2 + 3) % 4 calculation failed'); });

	Smack.api.execute('browser', 'tst.parenAddThenPow', [1,2,3], function(res){ assert.equal(res, 27, '(1 + 2)^3 calculation failed'); });


	Smack.api.execute('browser', 'tst.parenSubThenMul', [2,3,4], function(res){ assert.equal(res, -4, '(2 - 3) * 4 calculation failed'); });

	Smack.api.execute('browser', 'tst.parenSubThenDiv', [2,2,4], function(res){ assert.equal(res, -0.25, '(2 - 3) / 4 calculation failed'); });

	Smack.api.execute('browser', 'tst.parenSubThenMod', [2,3,4], function(res){ assert.equal(res, -1, '(2 - 3) % 4 calculation failed'); });

	Smack.api.execute('browser', 'tst.parenSubThenPow', [1,3,3], function(res){ assert.equal(res, -8, '(1 - 3)^3 calculation failed'); });


	Smack.api.execute('browser', 'tst.parenMulThenPow', [2,3,4], function(res){ assert.equal(res, 1296, '(2 * 3)^4 calculation failed'); });

	Smack.api.execute('browser', 'tst.parenDivThenPow', [1,2,3], function(res){ assert.equal(res, 0.0625, '(1 / 2)^4 calculation failed'); });

	Smack.api.execute('browser', 'tst.parenModThenPow', [2,3,4], function(res){ assert.equal(res, 16, '(2 % 3)^4 calculation failed'); });
	

	Smack.api.execute('browser', 'tst.parenPowThenPow', [2,1,3], function(res){ assert.equal(res, 8, '(2^1)^3 calculation failed'); });


	Smack.api.execute('browser', 'tst.addEqAdd', [1,1,2,0], function(res){ assert.equal(res, true, '1 + 1 == 2 + 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.addEqAdd', [1,1,1,2], function(res){ assert.equal(res, false, '1 + 1 == 1 + 2 calculation failed'); });


	Smack.api.execute('browser', 'tst.addNeqAdd', [1,1,2,0], function(res){ assert.equal(res, false, '1 + 1 != 2 + 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.addNeqAdd', [1,1,1,2], function(res){ assert.equal(res, true, '1 + 1 != 1 + 2 calculation failed'); });


	Smack.api.execute('browser', 'tst.addLtAdd', [1,1,2,1], function(res){ assert.equal(res, true, '1 + 1 < 2 + 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.addLtAdd', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 + -1 < 1 + 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.addLtAdd', [1,1,2,0], function(res){ assert.equal(res, false, '1 + 1 < 2 + 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.addLtAdd', [1,1,1,0], function(res){ assert.equal(res, false, '1 + 1 < 1 + 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.addLtAdd', [1,1,-1,-2], function(res){ assert.equal(res, false, '1 + 1 < -1 + -2 calculation failed'); });


	Smack.api.execute('browser', 'tst.addLeAdd', [1,1,2,1], function(res){ assert.equal(res, true, '1 + 1 <= 2 + 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.addLeAdd', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 + -1 <= 1 + 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.addLeAdd', [1,1,2,0], function(res){ assert.equal(res, true, '1 + 1 <= 2 + 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.addLeAdd', [1,1,1,0], function(res){ assert.equal(res, false, '1 + 1 <= 1 + 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.addLeAdd', [1,1,-1,-2], function(res){ assert.equal(res, false, '1 + 1 <= -1 + -2 calculation failed'); });


	Smack.api.execute('browser', 'tst.addGtAdd', [1,1,2,1], function(res){ assert.equal(res, false, '1 + 1 > 2 + 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.addGtAdd', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 + -1 > 1 + 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.addGtAdd', [1,1,2,0], function(res){ assert.equal(res, false, '1 + 1 > 2 + 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.addGtAdd', [1,1,1,0], function(res){ assert.equal(res, true, '1 + 1 > 1 + 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.addGtAdd', [1,1,-1,-2], function(res){ assert.equal(res, true, '1 + 1 > -1 + -2 calculation failed'); });


	Smack.api.execute('browser', 'tst.addGeAdd', [1,1,2,1], function(res){ assert.equal(res, false, '1 + 1 >= 2 + 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.addGeAdd', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 + -1 >= 1 + 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.addGeAdd', [1,1,2,0], function(res){ assert.equal(res, true, '1 + 1 >= 2 + 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.addGeAdd', [1,1,1,0], function(res){ assert.equal(res, true, '1 + 1 >= 1 + 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.addGeAdd', [1,1,-1,-2], function(res){ assert.equal(res, true, '1 + 1 >= -1 + -2 calculation failed'); });


	Smack.api.execute('browser', 'tst.subEqSub', [1,1,2,0], function(res){ assert.equal(res, true, '1 - 1 == 2 - 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.subEqSub', [1,1,1,2], function(res){ assert.equal(res, false, '1 - 1 == 1 - 2 calculation failed'); });


	Smack.api.execute('browser', 'tst.subNeqSub', [1,1,2,0], function(res){ assert.equal(res, false, '1 - 1 != 2 - 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.subNeqSub', [1,1,1,2], function(res){ assert.equal(res, true, '1 - 1 != 1 - 2 calculation failed'); });


	Smack.api.execute('browser', 'tst.subLtSub', [1,1,2,1], function(res){ assert.equal(res, true, '1 - 1 < 2 - 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.subLtSub', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 - -1 < 1 - 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.subLtSub', [1,1,2,0], function(res){ assert.equal(res, false, '1 - 1 < 2 - 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.subLtSub', [1,1,1,0], function(res){ assert.equal(res, false, '1 - 1 < 1 - 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.subLtSub', [1,1,-1,-2], function(res){ assert.equal(res, false, '1 - 1 < -1 - -2 calculation failed'); });


	Smack.api.execute('browser', 'tst.subLeSub', [1,1,2,1], function(res){ assert.equal(res, true, '1 - 1 <= 2 - 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.subLeSub', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 - -1 <= 1 - 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.subLeSub', [1,1,2,0], function(res){ assert.equal(res, true, '1 - 1 <= 2 - 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.subLeSub', [1,1,1,0], function(res){ assert.equal(res, false, '1 - 1 <= 1 - 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.subLeSub', [1,1,-1,-2], function(res){ assert.equal(res, false, '1 - 1 <= -1 - -2 calculation failed'); });


	Smack.api.execute('browser', 'tst.subGtSub', [1,1,2,1], function(res){ assert.equal(res, false, '1 - 1 > 2 - 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.subGtSub', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 - -1 > 1 - 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.subGtSub', [1,1,2,0], function(res){ assert.equal(res, false, '1 - 1 > 2 - 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.subGtSub', [1,1,1,0], function(res){ assert.equal(res, true, '1 - 1 > 1 - 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.subGtSub', [1,1,-1,-2], function(res){ assert.equal(res, true, '1 - 1 > -1 - -2 calculation failed'); });


	Smack.api.execute('browser', 'tst.subGeSub', [1,1,2,1], function(res){ assert.equal(res, false, '1 - 1 >= 2 - 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.subGeSub', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 - -1 >= 1 - 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.subGeSub', [1,1,2,0], function(res){ assert.equal(res, true, '1 - 1 >= 2 - 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.subGeSub', [1,1,1,0], function(res){ assert.equal(res, true, '1 - 1 >= 1 - 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.subGeSub', [1,1,-1,-2], function(res){ assert.equal(res, true, '1 - 1 >= -1 - -2 calculation failed'); });


	Smack.api.execute('browser', 'tst.mulEqMul', [1,1,1,1], function(res){ assert.equal(res, true, '1 * 1 == 1 * 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulEqMul', [1,1,1,2], function(res){ assert.equal(res, false, '1 * 1 == 1 * 2 calculation failed'); });


	Smack.api.execute('browser', 'tst.mulNeqMul', [1,1,1,1], function(res){ assert.equal(res, false, '1 * 1 != 1 * 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulNeqMul', [1,1,1,2], function(res){ assert.equal(res, true, '1 * 1 != 1 * 2 calculation failed'); });


	Smack.api.execute('browser', 'tst.mulLtMul', [1,1,2,1], function(res){ assert.equal(res, true, '1 * 1 < 2 * 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulLtMul', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 * 1 < 1 * 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulLtMul', [1,1,1,1], function(res){ assert.equal(res, false, '1 * 1 < 1 * 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulLtMul', [1,1,-1,2], function(res){ assert.equal(res, false, '1 * 1 < -1 * 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulLtMul', [1,2,1,1], function(res){ assert.equal(res, false, '1 * 1 < -1 * -2 calculation failed'); });


	Smack.api.execute('browser', 'tst.mulLeMul', [1,1,2,1], function(res){ assert.equal(res, true, '1 * 1 <= 2 * 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulLeMul', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 * 1 <= 1 * 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulLeMul', [1,1,1,1], function(res){ assert.equal(res, true, '1 * 1 <= 1 * 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulLeMul', [1,1,-1,2], function(res){ assert.equal(res, false, '1 * 1 <= -1 * 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulLeMul', [1,2,1,1], function(res){ assert.equal(res, false, '1 * 2 <= 1 * 1 calculation failed'); });


	Smack.api.execute('browser', 'tst.mulGtMul', [1,1,2,1], function(res){ assert.equal(res, false, '1 * 1 > 2 * 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulGtMul', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 * 1 > 1 * 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulGtMul', [1,1,1,1], function(res){ assert.equal(res, false, '1 * 1 > 1 * 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulGtMul', [1,1,-1,2], function(res){ assert.equal(res, true, '1 * 1 > -1 * 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulGtMul', [1,2,1,1], function(res){ assert.equal(res, true, '1 * 2 > 1 * 1 calculation failed'); });


	Smack.api.execute('browser', 'tst.mulGeMul', [1,1,2,1], function(res){ assert.equal(res, false, '1 * 1 >= 2 * 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulGeMul', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 * 1 >= 1 * 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulGeMul', [1,1,1,1], function(res){ assert.equal(res, true, '1 * 1 >= 1 * 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulGeMul', [1,1,-1,2], function(res){ assert.equal(res, true, '1 * 1 >= -1 * 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.mulGeMul', [1,2,1,1], function(res){ assert.equal(res, true, '1 * 2 >= 1 * 1 calculation failed'); });


	Smack.api.execute('browser', 'tst.divEqDiv', [1,1,1,1], function(res){ assert.equal(res, true, '1 / 1 == 1 / 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.divEqDiv', [1,1,1,2], function(res){ assert.equal(res, false, '1 / 1 == 1 / 2 calculation failed'); });


	Smack.api.execute('browser', 'tst.divNeqDiv', [1,1,1,1], function(res){ assert.equal(res, false, '1 / 1 != 1 / 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.divNeqDiv', [1,1,1,2], function(res){ assert.equal(res, true, '1 / 1 != 1 / 2 calculation failed'); });


	Smack.api.execute('browser', 'tst.divLtDiv', [1,1,2,1], function(res){ assert.equal(res, true, '1 / 1 < 2 / 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.divLtDiv', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 / 1 < 1 / 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.divLtDiv', [1,1,1,1], function(res){ assert.equal(res, false, '1 / 1 < 1 / 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.divLtDiv', [1,1,-1,2], function(res){ assert.equal(res, false, '1 / 1 < -1 / 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.divLtDiv', [1,2,1,1], function(res){ assert.equal(res, false, '1 / 1 < -1 / -2 calculation failed'); });


	Smack.api.execute('browser', 'tst.divLeDiv', [1,1,2,1], function(res){ assert.equal(res, true, '1 / 1 <= 2 / 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.divLeDiv', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 / 1 <= 1 / 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.divLeDiv', [1,1,1,1], function(res){ assert.equal(res, true, '1 / 1 <= 1 / 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.divLeDiv', [1,1,-1,2], function(res){ assert.equal(res, false, '1 / 1 <= -1 / 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.divLeDiv', [1,2,1,1], function(res){ assert.equal(res, false, '1 / 2 <= 1 / 1 calculation failed'); });


	Smack.api.execute('browser', 'tst.divGtDiv', [1,1,2,1], function(res){ assert.equal(res, false, '1 / 1 > 2 / 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.divGtDiv', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 / 1 > 1 / 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.divGtDiv', [1,1,1,1], function(res){ assert.equal(res, false, '1 / 1 > 1 / 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.divGtDiv', [1,1,-1,2], function(res){ assert.equal(res, true, '1 / 1 > -1 / 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.divGtDiv', [1,2,1,1], function(res){ assert.equal(res, true, '1 / 2 > 1 / 1 calculation failed'); });


	Smack.api.execute('browser', 'tst.divGeDiv', [1,1,2,1], function(res){ assert.equal(res, false, '1 / 1 >= 2 / 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.divGeDiv', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 / 1 >= 1 / 0 calculation failed'); });

	Smack.api.execute('browser', 'tst.divGeDiv', [1,1,1,1], function(res){ assert.equal(res, true, '1 / 1 >= 1 / 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.divGeDiv', [1,1,-1,2], function(res){ assert.equal(res, true, '1 / 1 >= -1 / 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.divGeDiv', [1,2,1,1], function(res){ assert.equal(res, true, '1 / 2 >= 1 / 1 calculation failed'); });


	Smack.api.execute('browser', 'tst.modEqMod', [1,1,1,1], function(res){ assert.equal(res, true, '1 % 1 == 1 % 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.modEqMod', [1,1,1,2], function(res){ assert.equal(res, false, '1 % 1 == 1 % 2 calculation failed'); });


	Smack.api.execute('browser', 'tst.modNeqMod', [1,1,1,1], function(res){ assert.equal(res, false, '1 % 1 != 1 % 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.modNeqMod', [1,1,1,2], function(res){ assert.equal(res, true, '1 % 1 != 1 % 2 calculation failed'); });


	Smack.api.execute('browser', 'tst.modLtMod', [1,1,1,2], function(res){ assert.equal(res, true, '1 % 1 < 1 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modLtMod', [-1,1,1,2], function(res){ assert.equal(res, true, '-1 % 1 < 1 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modLtMod', [1,1,1,1], function(res){ assert.equal(res, false, '1 % 1 < 1 % 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.modLtMod', [1,1,-1,2], function(res){ assert.equal(res, false, '1 % 1 < -1 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modLtMod', [1,2,1,1], function(res){ assert.equal(res, false, '1 % 2 < 1 % 1 calculation failed'); });


	Smack.api.execute('browser', 'tst.modLeMod', [1,1,1,2], function(res){ assert.equal(res, true, '1 % 1 <= 1 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modLeMod', [-1,1,1,2], function(res){ assert.equal(res, true, '-1 % 1 <= 1 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modLeMod', [1,1,1,1], function(res){ assert.equal(res, true, '1 % 1 <= 1 % 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.modLeMod', [1,1,-1,2], function(res){ assert.equal(res, false, '1 % 1 <= -1 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modLeMod', [1,2,1,1], function(res){ assert.equal(res, false, '1 % 2 <= 1 % 1 calculation failed'); });


	Smack.api.execute('browser', 'tst.modGtMod', [1,1,1,2], function(res){ assert.equal(res, false, '1 % 1 > 1 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modGtMod', [-1,1,1,2], function(res){ assert.equal(res, false, '-1 % 1 > 1 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modGtMod', [1,1,1,1], function(res){ assert.equal(res, false, '1 % 1 > 1 % 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.modGtMod', [1,1,-1,2], function(res){ assert.equal(res, true, '1 % 1 > -1 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modGtMod', [1,2,1,1], function(res){ assert.equal(res, true, '1 % 2 > 1 % 1 calculation failed'); });


	Smack.api.execute('browser', 'tst.modGeMod', [1,1,1,2], function(res){ assert.equal(res, false, '1 % 1 <= 1 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modGeMod', [-1,1,1,2], function(res){ assert.equal(res, false, '-1 % 1 <= 1 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modGeMod', [1,1,1,1], function(res){ assert.equal(res, true, '1 % 1 >= 1 % 1 calculation failed'); });

	Smack.api.execute('browser', 'tst.modGeMod', [1,1,-1,2], function(res){ assert.equal(res, true, '1 % 1 >= -1 % 2 calculation failed'); });

	Smack.api.execute('browser', 'tst.modGeMod', [1,2,1,1], function(res){ assert.equal(res, true, '1 % 2 >= 1 % 1 calculation failed'); });


	Smack.api.execute('browser', 'tst.powEqPow', [1,1,1,1], function(res){ assert.equal(res, true, '1^1 == 1^1 calculation failed'); });

	Smack.api.execute('browser', 'tst.powEqPow', [1,1,2,1], function(res){ assert.equal(res, false, '1^1 == 1^2 calculation failed'); });


	Smack.api.execute('browser', 'tst.powNeqPow', [1,1,1,1], function(res){ assert.equal(res, false, '1^1 != 1^1 calculation failed'); });

	Smack.api.execute('browser', 'tst.powNeqPow', [1,1,2,1], function(res){ assert.equal(res, true, '1^1 != 1^2 calculation failed'); });


	Smack.api.execute('browser', 'tst.powLtPow', [1,1,2,1], function(res){ assert.equal(res, true, '1^1 < 1^2 calculation failed'); });

	Smack.api.execute('browser', 'tst.powLtPow', [-1,1,1,2], function(res){ assert.equal(res, true, '-1^1 < 1^2 calculation failed'); });

	Smack.api.execute('browser', 'tst.powLtPow', [1,1,1,1], function(res){ assert.equal(res, false, '1^1 < 1^1 calculation failed'); });

	Smack.api.execute('browser', 'tst.powLtPow', [1,1,-2,2], function(res){ assert.equal(res, false, '1^1 < -2^2 calculation failed'); });

	Smack.api.execute('browser', 'tst.powLtPow', [2,1,1,1], function(res){ assert.equal(res, false, '2^1 < 1^1 calculation failed'); });


	Smack.api.execute('browser', 'tst.powLePow', [1,1,2,1], function(res){ assert.equal(res, true, '1^1 <= 1^2 calculation failed'); });

	Smack.api.execute('browser', 'tst.powLePow', [-1,1,1,2], function(res){ assert.equal(res, true, '-1^1 <= 1^2 calculation failed'); });

	Smack.api.execute('browser', 'tst.powLePow', [1,1,1,1], function(res){ assert.equal(res, true, '1^1 <= 1^1 calculation failed'); });

	Smack.api.execute('browser', 'tst.powLePow', [1,1,-2,2], function(res){ assert.equal(res, false, '1^1 <= -2^2 calculation failed'); });

	Smack.api.execute('browser', 'tst.powLePow', [2,1,1,1], function(res){ assert.equal(res, false, '2^1 <= 1^1 calculation failed'); });


	Smack.api.execute('browser', 'tst.powGtPow', [1,1,2,1], function(res){ assert.equal(res, false, '1^1 > 1^2 calculation failed'); });

	Smack.api.execute('browser', 'tst.powGtPow', [-1,1,1,2], function(res){ assert.equal(res, false, '-1^1 > 1^2 calculation failed'); });

	Smack.api.execute('browser', 'tst.powGtPow', [1,1,1,1], function(res){ assert.equal(res, false, '1^1 > 1^1 calculation failed'); });

	Smack.api.execute('browser', 'tst.powGtPow', [1,1,-2,2], function(res){ assert.equal(res, true, '1^1 > -2^2 calculation failed'); });

	Smack.api.execute('browser', 'tst.powGtPow', [2,1,1,1], function(res){ assert.equal(res, true, '2^1 > 1^1 calculation failed'); });


	Smack.api.execute('browser', 'tst.powGePow', [1,1,2,1], function(res){ assert.equal(res, false, '1^1 <= 1^2 calculation failed'); });

	Smack.api.execute('browser', 'tst.powGePow', [-1,1,1,2], function(res){ assert.equal(res, false, '-1^1 <= 1^2 calculation failed'); });

	Smack.api.execute('browser', 'tst.powGePow', [1,1,1,1], function(res){ assert.equal(res, true, '1^1 >= 1^1 calculation failed'); });

	Smack.api.execute('browser', 'tst.powGePow', [1,1,-2,2], function(res){ assert.equal(res, true, '1^1 >= -2^2 calculation failed'); });

	Smack.api.execute('browser', 'tst.powGePow', [2,1,1,1], function(res){ assert.equal(res, true, '2^1 >= 1^1 calculation failed'); });

});

QUnit.test( "Assign", function( assert ) {
	var source;
	Papu.getFileContents('testCode/varAssign.smk', function(res){ source = res; });
	console.log(source);
	Smack.api.compile('browser', source);

	Smack.api.execute('browser', 'tst.assingAndCompare', [1.1, 2.2], function(res){ assert.equal(res, true, 'Variable assign calculation failed'); });
});

QUnit.test( "If Else", function( assert ) {
	var source;
	Papu.getFileContents('testCode/ifElse.smk', function(res){ source = res; });
	console.log(source);
	Smack.api.compile('browser', source);

	Smack.api.execute('browser', 'tst.ifOneElseIfTwoElse', [1], function(res){ assert.equal(res, 1, 'If part of if else if else failed'); });

	Smack.api.execute('browser', 'tst.ifOneElseIfTwoElse', [2], function(res){ assert.equal(res, 2, 'Else if part of if else if else failed'); });

	Smack.api.execute('browser', 'tst.ifOneElseIfTwoElse', [3], function(res){ assert.equal(res, false, 'Else part of if else if else failed'); });

	Smack.api.execute('browser', 'tst.ifOneElse', [1], function(res){ assert.equal(res, 1, 'If part of if else failed'); });

	Smack.api.execute('browser', 'tst.ifOneElse', [2], function(res){ assert.equal(res, false, 'Else part of if else failed'); });

});

QUnit.test( "While and exec()", function( assert ) {
	var source;
	Papu.getFileContents('testCode/while.smk', function(res){ source = res; });
	console.log(source);
	Smack.api.compile('browser', source);

	Smack.api.execute('browser', 'tst.addOneWhileLessThan', [10000], function(res){ assert.equal(res, 10000, 'While loop test failed'); });

	Smack.api.execute('browser', 'tst.callWithInput', ['addOneWhileLessThan', [10000]], function(res){ assert.equal(res, 10000, 'Exec test failed'); });

});
