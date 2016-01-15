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

Smack.tests.testApi = function(tstCb) {
	QUnit.test( "Connections", function( assert ) {
		var cbCalled = false;
		var cb = function() { cbCalled = true; };
		var exception = false;
		var con;
		
		assert.ok(!Smack.api.hasConnection('test'), "The api says a connection exists which hasn't been created");
		assert.ok(!Smack.api.hasHost('tst.com'), "The api says a host connection exists which hasn't been created");
		
		try {
			Smack.api.getConnection('test');
		} catch(e) { exception = true; }
		assert.ok(exception, 'No exception was thrown for trying to get a non existent connection');
		exception = false;
		
		try {
			Smack.api.closeConnection('test');
		} catch(e) { exception = true; }
		assert.ok(exception, 'No exception was thrown for trying to close a non existent connection');
		exception = false;
		
		Smack.api.createConnection('test', 'tst.com', 'user', 'pass123', cb);
		assert.ok(cbCalled, "Callback didn't get called"); 
		cbCalled = false;
	
		assert.ok(Smack.api.hasConnection('test'), "The api says a connection doesn't exist which has been created");
		assert.ok(Smack.api.hasHost('tst.com'), "The api says a host connection doesn't exist which has been created");
		
		con = Smack.api.getConnection('test');
		con.executeAllSync = true;
		
		assert.deepEqual(con.latestRequest, {
			url : 'tst.com/connect',
			headers : {
				'uname' : 'user',
				'passw' : 'pass123',
				'session' : '',
				'content-type' : 'application/json',
			},
			body : undefined
		}, 'The api produced invalid request data for connecting');
		
		con.sessionId = 'tstsession123';
		
		try {
			Smack.api.createConnection('test', 'tst2.com', 'user', 'pass123', cb);
		} catch(e) { exception = true; }
		assert.ok(exception, 'No exception was thrown for trying to create a connection with the same name as an existing connection');
		exception = false;
		
		try {
			Smack.api.createConnection('test2', 'tst.com', 'user', 'pass123', cb);
		} catch(e) { exception = true; }
		assert.ok(exception, 'No exception was thrown for trying to create a connection with the same host name as an existing connection');
		exception = false;
		
		Smack.api.closeConnection('test', cb);
		assert.ok(cbCalled, "Callback didn't get called"); 
		cbCalled = false;
	
		assert.deepEqual(con.latestRequest, {
			url : 'tst.com/close',
			headers : {
				'session' : 'tstsession123',
				'content-type' : 'application/json',
			},
			body : undefined
		}, 'The api produced invalid request data for closing a connection');
		
		assert.ok(!Smack.api.hasConnection('test'), "The api says a connection exists which has been closed");
		assert.ok(!Smack.api.hasHost('tst.com'), "The api says a host connection exists which has been closed");
		
		try {
			Smack.api.getConnection('test');
		} catch(e) { exception = true; }
		assert.ok(exception, 'No exception was thrown for trying to get a closed connection');
		exception = false;
	});
	
	QUnit.test( "Requests", function( assert ) {
		var cbCalled = false;
		var cb = function() { cbCalled = true; };
		
		Smack.api.createConnection('test', 'tst.com', 'user', 'pass123', cb);

		var con = Smack.api.getConnection('test');
		con.executeAllSync = true;
		con.host = 'tst.com';
		con.sessionId = 'tst123';
		
		Smack.api.compile('test', {cUnit1 : 'source 1', cUnit2 : 'source 2'}, cb);
		assert.ok(cbCalled, "Callback didn't get called"); 
		cbCalled = false;
		assert.deepEqual(con.latestRequest, {
			url : 'tst.com/compile',
			headers : {
				'content-type' : 'application/json', 'session' : 'tst123'
			},
			body : {cUnit1 : 'source 1', cUnit2 : 'source 2'}
		}, 'The api produced invalid request data for compilation');
		
		Smack.api.del('test', ['cUnit1', 'cUnit2'], cb);
		assert.ok(cbCalled, "Callback didn't get called"); 
		cbCalled = false;
		assert.deepEqual(con.latestRequest, {
			url : 'tst.com/delete',
			headers : {
				'content-type' : 'application/json', 'session' : 'tst123'
			},
			body : ['cUnit1', 'cUnit2']
		}, 'The api produced invalid request data for deletion');
		
		Smack.api.delAll('test', cb);
		assert.ok(cbCalled, "Callback didn't get called"); 
		cbCalled = false;
		assert.deepEqual(con.latestRequest, {
			url : 'tst.com/deleteall',
			headers : {
				'content-type' : 'application/json', 'session' : 'tst123'
			},
			body : undefined
		}, 'The api produced invalid request data for all delete');
		
		Smack.api.get('test', ['cUnit1', 'cUnit2'], cb);
		assert.ok(cbCalled, "Callback didn't get called"); 
		cbCalled = false;
		assert.deepEqual(con.latestRequest, {
			url : 'tst.com/get',
			headers : {
				'content-type' : 'application/json', 'session' : 'tst123'
			},
			body : ['cUnit1', 'cUnit2']
		}, 'The api produced invalid request data for get');
		
		Smack.api.getNames('test', 'java regex', cb);
		assert.ok(cbCalled, "Callback didn't get called"); 
		cbCalled = false;
		assert.deepEqual(con.latestRequest, {
			url : 'tst.com/getnames',
			headers : {
				'content-type' : 'application/json', 'session' : 'tst123'
			},
			body : 'java regex'
		}, 'The api produced invalid request data for get names');
		
		Smack.api.execute('test', 'cUnit', ['arg1', 'arg2'], cb);
		assert.ok(cbCalled, "Callback didn't get called"); 
		cbCalled = false;
		assert.deepEqual(con.latestRequest, {
			url : 'tst.com/execute',
			headers : {
				'content-type' : 'application/json', 'session' : 'tst123'
			},
			body : { name : 'cUnit', args : ['arg1', 'arg2']}
		}, 'The api produced invalid request data for execute');

		Smack.api.closeConnection('test');
	});
};

Smack.tests.testHost = function(conName, host, uName, pWord, dataConnectionParams) {
	Smack.api.createConnection(conName, host, 'user', 'pass123', function() {
		
		var con = Smack.api.getConnection(conName);
		con.executeAllSync = true;
		
		var testArithmetics;
		var testVarAssign;
		var testIfElse;
		var testWhile;
		var testInvoke;
		var testQuery;
		var testSyncAsync;
		var testAll = function() {
			testArithmetics();
		};
		
		testArithmetics = function() {
			Papu.getFileContents('testCode/arithmetics.smk', function(source){ 
				QUnit.test( "Arithmetics", function( assert ) {
					
					console.log(source);
					Smack.api.compile(conName, {arithmetics : source});
				
					Smack.api.execute(conName, 'tst.add', [1.1,1.1], function(res){ assert.equal(res, 2.2, '1.1 + 1.1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.add', [-1.1,1.1], function(res){ assert.equal(res, 0, '-1.1 + 1.1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.add', [1.1,-1.1], function(res){ assert.equal(res, 0, '1.1 + -1.1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.add', [-1.1,-1.1], function(res){ assert.equal(res, -2.2, '-1.1 + -1.1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.add', [0,-1.1], function(res){ assert.equal(res, -1.1, '0 + -1.1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.add', [1.1,0], function(res){ assert.equal(res, 1.1, '1.1 + 0 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.sub', [1.1,1.1], function(res){ assert.equal(res, 0, '1.1 - 1.1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.sub', [-1.1,1.1], function(res){ assert.equal(res, -2.2, '-1.1 - 1.1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.sub', [1.1,-1.1], function(res){ assert.equal(res, 2.2, '1.1 - -1.1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.sub', [-1.1,-1.1], function(res){ assert.equal(res, 0, '-1.1 - -1.1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.sub', [0,1.1], function(res){ assert.equal(res, -1.1, '0 - 1.1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.sub', [-1.1,0], function(res){ assert.equal(res, -1.1, '-1.1 - 0 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.mul', [1,1], function(res){ assert.equal(res, 1, '1 * 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mul', [-1,1], function(res){ assert.equal(res, -1, '-1 * 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mul', [1,-1], function(res){ assert.equal(res, -1, '1 * -1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mul', [-1,-1], function(res){ assert.equal(res, 1, '-1 * -1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mul', [2,0.1], function(res){ assert.equal(res, 0.2, '2 * 0.1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mul', [1,0], function(res){ assert.equal(res, 0, '1 * 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mul', [0,-1], function(res){ assert.equal(res, 0, '0 * -1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.div', [1,1], function(res){ assert.equal(res, 1, '1 / 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.div', [-1,1], function(res){ assert.equal(res, -1, '-1 / 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.div', [1,-1], function(res){ assert.equal(res, -1, '1 / -1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.div', [-1,-1], function(res){ assert.equal(res, 1, '-1 / -1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.div', [2,0.1], function(res){ assert.equal(res, 20, '2 / 0.1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.div', [1,0], function(res){ assert.equal(res, Infinity, '1 / 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.div', [-1,0], function(res){ assert.equal(res, -Infinity, '-1 / 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.div', [0,-1], function(res){ assert.equal(res, 0, '0 / -1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.mod', [1,1], function(res){ assert.equal(res, 0, '1 % 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mod', [-1,1], function(res){ assert.equal(res, 0, '-1 % 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mod', [3,5], function(res){ assert.equal(res, 3, '3 % 5 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mod', [-3,5], function(res){ assert.equal(res, -3, '-3 % 5 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mod', [22,-5], function(res){ assert.equal(res, 2, '22 % -5 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mod', [-22,-5], function(res){ assert.equal(res, -2, '-22 % -5 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mod', [1,0.5], function(res){ assert.equal(res, 0, '1 % 0.5 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mod', [1,0], function(res){ assert.ok(isNaN(res), '1 % 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mod', [0,-1], function(res){ assert.equal(res, 0, '0 % -1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.pow', [1,1], function(res){ assert.equal(res, 1, '1^1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.pow', [-1,2], function(res){ assert.equal(res,1, '-1^2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.pow', [2,2], function(res){ assert.equal(res, 4, '2^2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.pow', [1.5,2], function(res){ assert.equal(res, 2.25, '1.5^2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.pow', [4,0.5], function(res){ assert.equal(res, 2, '4^0.5 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.pow', [2,-1], function(res){ assert.equal(res, 0.5, '2^-1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.pow', [1,0], function(res){ assert.equal(res, 1, '1^0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.pow', [0,1], function(res){ assert.equal(res, 0, '0^1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.pow', [0,-1], function(res){ assert.equal(res, Infinity, '0^-1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.pow', [-0,-1], function(res){ assert.equal(res, -Infinity, '-0^-1 calculation failed'); });
				
					
					Smack.api.execute(conName, 'tst.powParen', [-1,2], function(res){ assert.equal(res, 1, '(-1)^2 sdf calculation failed'); });
					
					Smack.api.execute(conName, 'tst.powParen', [-1,3], function(res){ assert.equal(res, -1, '(-1)^3 sdf calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.powSignedParen', [1,2], function(res){ assert.equal(res, -1, '-(1)^2 sdf calculation failed'); });
					
					Smack.api.execute(conName, 'tst.powSignedParen', [-1,3], function(res){ assert.equal(res, 1, '-(-1)^3 sdf calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.eq', [1.1,1.1], function(res){ assert.equal(res, true, '1.1 == 1.1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.eq', [1,-1], function(res){ assert.equal(res, false, '1 == -1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.neq', [1.1,1.1], function(res){ assert.equal(res, false, '1.1 != 1.1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.neq', [1,-1], function(res){ assert.equal(res, true, '1 != -1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.lt', [-2,1], function(res){ assert.equal(res, true, '-2 < 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.lt', [0, 0], function(res){ assert.equal(res, false, '0 < 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.lt', [1,-2], function(res){ assert.equal(res, false, '1 < -2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.le', [-2,1], function(res){ assert.equal(res, true, '-2 <= 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.le', [0, 0], function(res){ assert.equal(res, true, '0 <= 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.le', [1,-2], function(res){ assert.equal(res, false, '1 <= -2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.gt', [-2,1], function(res){ assert.equal(res, false, '-2 > 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.gt', [0, 0], function(res){ assert.equal(res, false, '0 > 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.gt', [1,-2], function(res){ assert.equal(res, true, '1 > -2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.ge', [-2,1], function(res){ assert.equal(res, false, '-2 >= 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.ge', [0, 0], function(res){ assert.equal(res, true, '0 >= 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.ge', [1,-2], function(res){ assert.equal(res, true, '1 >= -2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.plusMinusPlus', [3,2], function(res){ assert.equal(res, 1, '3 + - + 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.minusPlusMinus', [3,2], function(res){ assert.equal(res, 5, '3 - + - 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.plusThenMinus', [3,2,1], function(res){ assert.equal(res, 4, '3 + 2 - 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.minusThenPlus', [3,2,1], function(res){ assert.equal(res, 2, '3 - 2 + 1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.addThenAdd', [5,3,2], function(res){ assert.equal(res, 10, '5 + 3 + 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addThenSub', [5,3,2], function(res){ assert.equal(res, 6, '5 + 3 - 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addThenMul', [5,3,2], function(res){ assert.equal(res, 11, '5 + 3 * 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addThenDiv', [5,3,2], function(res){ assert.equal(res, 6.5, '5 + 3 / 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addThenMod', [5,3,2], function(res){ assert.equal(res, 6, '5 + 3 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addThenPow', [5,3,2], function(res){ assert.equal(res, 14, '5 + 3^2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.subThenAdd', [5,3,2], function(res){ assert.equal(res, 4, '5 - 3 + 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subThenSub', [5,3,2], function(res){ assert.equal(res, 0, '5 - 3 - 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subThenMul', [5,3,2], function(res){ assert.equal(res, -1, '5 - 3 * 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subThenDiv', [5,3,2], function(res){ assert.equal(res, 3.5, '5 - 3 / 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subThenMod', [5,3,2], function(res){ assert.equal(res, 4, '5 - 3 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subThenPow', [5,3,2], function(res){ assert.equal(res, -4, '5 - 3^2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.mulThenAdd', [5,3,2], function(res){ assert.equal(res, 17, '5 * 3 + 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulThenSub', [5,3,2], function(res){ assert.equal(res, 13, '5 * 3 - 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulThenMul', [5,3,2], function(res){ assert.equal(res, 30, '5 * 3 * 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulThenDiv', [5,3,2], function(res){ assert.equal(res, 7.5, '5 * 3 / 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulThenMod', [5,3,2], function(res){ assert.equal(res, 1, '5 * 3 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulThenPow', [5,3,2], function(res){ assert.equal(res, 45, '5 * 3^2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.divThenAdd', [6,3,2], function(res){ assert.equal(res, 4, '6 / 3 + 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divThenSub', [6,3,2], function(res){ assert.equal(res, 0, '6 / 3 - 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divThenMul', [6,3,2], function(res){ assert.equal(res, 4, '6 / 3 * 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divThenDiv', [6,3,2], function(res){ assert.equal(res, 1, '6 / 3 / 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divThenMod', [6,3,2], function(res){ assert.equal(res, 0, '6 / 3 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divThenPow', [18,3,2], function(res){ assert.equal(res, 2, '18 / 3^2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.modThenAdd', [5,3,2], function(res){ assert.equal(res, 4, '5 % 3 + 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modThenSub', [5,3,2], function(res){ assert.equal(res, 0, '5 % 3 - 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modThenMul', [5,3,2], function(res){ assert.equal(res, 4, '5 % 3 * 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modThenDiv', [5,3,2], function(res){ assert.equal(res, 1, '5 % 3 / 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modThenMod', [5,3,2], function(res){ assert.equal(res, 0, '5 % 3 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modThenPow', [5,3,2], function(res){ assert.equal(res, 5, '5 % 3^2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.powThenAdd', [2,3,4], function(res){ assert.equal(res, 12, '2^3 + 4 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powThenSub', [2,3,4], function(res){ assert.equal(res, 4, '2^3 - 4 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powThenMul', [2,3,4], function(res){ assert.equal(res, 32, '2^3 * 4 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powThenDiv', [2,3,4], function(res){ assert.equal(res, 2, '2^3 / 4 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powThenMod', [2,3,4], function(res){ assert.equal(res, 0, '2^3 % 4 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powThenPow', [3,3,2], function(res){ assert.equal(res, 19683, '3^3^2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.parenAddThenMul', [2,3,4], function(res){ assert.equal(res, 20, '(2 + 3) * 4 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.parenAddThenDiv', [2,2,4], function(res){ assert.equal(res, 1, '(2 + 2) / 4 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.parenAddThenMod', [2,3,4], function(res){ assert.equal(res, 1, '(2 + 3) % 4 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.parenAddThenPow', [1,2,3], function(res){ assert.equal(res, 27, '(1 + 2)^3 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.parenSubThenMul', [2,3,4], function(res){ assert.equal(res, -4, '(2 - 3) * 4 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.parenSubThenDiv', [2,3,4], function(res){ assert.equal(res, -0.25, '(2 - 3) / 4 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.parenSubThenMod', [2,3,4], function(res){ assert.equal(res, -1, '(2 - 3) % 4 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.parenSubThenPow', [1,3,3], function(res){ assert.equal(res, -8, '(1 - 3)^3 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.parenMulThenPow', [2,3,4], function(res){ assert.equal(res, 1296, '(2 * 3)^4 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.parenDivThenPow', [1,2,4], function(res){ assert.equal(res, 0.0625, '(1 / 2)^4 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.parenModThenPow', [2,3,4], function(res){ assert.equal(res, 16, '(2 % 3)^4 calculation failed'); });
					
				
					Smack.api.execute(conName, 'tst.parenPowThenPow', [2,1,3], function(res){ assert.equal(res, 8, '(2^1)^3 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.addEqAdd', [1,1,2,0], function(res){ assert.equal(res, true, '1 + 1 == 2 + 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addEqAdd', [1,1,1,2], function(res){ assert.equal(res, false, '1 + 1 == 1 + 2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.addNeqAdd', [1,1,2,0], function(res){ assert.equal(res, false, '1 + 1 != 2 + 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addNeqAdd', [1,1,1,2], function(res){ assert.equal(res, true, '1 + 1 != 1 + 2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.addLtAdd', [1,1,2,1], function(res){ assert.equal(res, true, '1 + 1 < 2 + 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addLtAdd', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 + -1 < 1 + 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addLtAdd', [1,1,2,0], function(res){ assert.equal(res, false, '1 + 1 < 2 + 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addLtAdd', [1,1,1,0], function(res){ assert.equal(res, false, '1 + 1 < 1 + 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addLtAdd', [1,1,-1,-2], function(res){ assert.equal(res, false, '1 + 1 < -1 + -2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.addLeAdd', [1,1,2,1], function(res){ assert.equal(res, true, '1 + 1 <= 2 + 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addLeAdd', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 + -1 <= 1 + 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addLeAdd', [1,1,2,0], function(res){ assert.equal(res, true, '1 + 1 <= 2 + 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addLeAdd', [1,1,1,0], function(res){ assert.equal(res, false, '1 + 1 <= 1 + 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addLeAdd', [1,1,-1,-2], function(res){ assert.equal(res, false, '1 + 1 <= -1 + -2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.addGtAdd', [1,1,2,1], function(res){ assert.equal(res, false, '1 + 1 > 2 + 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addGtAdd', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 + -1 > 1 + 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addGtAdd', [1,1,2,0], function(res){ assert.equal(res, false, '1 + 1 > 2 + 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addGtAdd', [1,1,1,0], function(res){ assert.equal(res, true, '1 + 1 > 1 + 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addGtAdd', [1,1,-1,-2], function(res){ assert.equal(res, true, '1 + 1 > -1 + -2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.addGeAdd', [1,1,2,1], function(res){ assert.equal(res, false, '1 + 1 >= 2 + 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addGeAdd', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 + -1 >= 1 + 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addGeAdd', [1,1,2,0], function(res){ assert.equal(res, true, '1 + 1 >= 2 + 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addGeAdd', [1,1,1,0], function(res){ assert.equal(res, true, '1 + 1 >= 1 + 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.addGeAdd', [1,1,-1,-2], function(res){ assert.equal(res, true, '1 + 1 >= -1 + -2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.subEqSub', [3,1,2,0], function(res){ assert.equal(res, true, '3 - 1 == 2 - 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subEqSub', [1,1,1,2], function(res){ assert.equal(res, false, '1 - 1 == 1 - 2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.subNeqSub', [3,1,2,0], function(res){ assert.equal(res, false, '3 - 1 != 2 - 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subNeqSub', [1,1,1,2], function(res){ assert.equal(res, true, '1 - 1 != 1 - 2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.subLtSub', [1,1,2,1], function(res){ assert.equal(res, true, '1 - 1 < 2 - 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subLtSub', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 - -1 < 1 - 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subLtSub', [1,1,2,0], function(res){ assert.equal(res, true, '1 - 1 < 2 - 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subLtSub', [3,1,0,-2], function(res){ assert.equal(res, false, '3 - 1 < 0 - (-2) calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subLtSub', [2,1,-1,-2], function(res){ assert.equal(res, false, '2 - 1 < -1 - -2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.subLeSub', [1,1,2,1], function(res){ assert.equal(res, true, '1 - 1 <= 2 - 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subLeSub', [-1,-1,1,0], function(res){ assert.equal(res, true, '-1 - -1 <= 1 - 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subLeSub', [1,1,2,0], function(res){ assert.equal(res, true, '1 - 1 <= 2 - 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subLeSub', [3,1,1,0], function(res){ assert.equal(res, false, '3 - 1 <= 1 - 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subLeSub', [3,1,-1,-2], function(res){ assert.equal(res, false, '3 - 1 <= -1 - -2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.subGtSub', [1,1,2,1], function(res){ assert.equal(res, false, '1 - 1 > 2 - 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subGtSub', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 - -1 > 1 - 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subGtSub', [1,1,2,0], function(res){ assert.equal(res, false, '1 - 1 > 2 - 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subGtSub', [3,1,1,0], function(res){ assert.equal(res, true, '3 - 1 > 1 - 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subGtSub', [3,1,-1,-2], function(res){ assert.equal(res, true, '3 - 1 > -1 - -2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.subGeSub', [-1,1,1,1], function(res){ assert.equal(res, false, '-1 - 1 >= 1 - 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subGeSub', [-1,-1,1,0], function(res){ assert.equal(res, false, '-1 - -1 >= 1 - 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subGeSub', [1,1,2,0], function(res){ assert.equal(res, false, '1 - 1 >= 2 - 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subGeSub', [2,1,1,0], function(res){ assert.equal(res, true, '2 - 1 >= 1 - 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.subGeSub', [4,1,0,-2], function(res){ assert.equal(res, true, '4 - 1 >= 0 - -2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.mulEqMul', [1,1,1,1], function(res){ assert.equal(res, true, '1 * 1 == 1 * 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulEqMul', [1,1,1,2], function(res){ assert.equal(res, false, '1 * 1 == 1 * 2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.mulNeqMul', [1,1,1,1], function(res){ assert.equal(res, false, '1 * 1 != 1 * 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulNeqMul', [1,1,1,2], function(res){ assert.equal(res, true, '1 * 1 != 1 * 2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.mulLtMul', [1,1,2,1], function(res){ assert.equal(res, true, '1 * 1 < 2 * 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulLtMul', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 * 1 < 1 * 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulLtMul', [1,1,1,1], function(res){ assert.equal(res, false, '1 * 1 < 1 * 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulLtMul', [1,1,-1,2], function(res){ assert.equal(res, false, '1 * 1 < -1 * 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulLtMul', [1,2,1,1], function(res){ assert.equal(res, false, '1 * 1 < -1 * -2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.mulLeMul', [1,1,2,1], function(res){ assert.equal(res, true, '1 * 1 <= 2 * 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulLeMul', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 * 1 <= 1 * 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulLeMul', [1,1,1,1], function(res){ assert.equal(res, true, '1 * 1 <= 1 * 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulLeMul', [1,1,-1,2], function(res){ assert.equal(res, false, '1 * 1 <= -1 * 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulLeMul', [1,2,1,1], function(res){ assert.equal(res, false, '1 * 2 <= 1 * 1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.mulGtMul', [1,1,2,1], function(res){ assert.equal(res, false, '1 * 1 > 2 * 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulGtMul', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 * 1 > 1 * 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulGtMul', [1,1,1,1], function(res){ assert.equal(res, false, '1 * 1 > 1 * 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulGtMul', [1,1,-1,2], function(res){ assert.equal(res, true, '1 * 1 > -1 * 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulGtMul', [1,2,1,1], function(res){ assert.equal(res, true, '1 * 2 > 1 * 1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.mulGeMul', [1,1,2,1], function(res){ assert.equal(res, false, '1 * 1 >= 2 * 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulGeMul', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 * 1 >= 1 * 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulGeMul', [1,1,1,1], function(res){ assert.equal(res, true, '1 * 1 >= 1 * 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulGeMul', [1,1,-1,2], function(res){ assert.equal(res, true, '1 * 1 >= -1 * 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.mulGeMul', [1,2,1,1], function(res){ assert.equal(res, true, '1 * 2 >= 1 * 1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.divEqDiv', [1,1,1,1], function(res){ assert.equal(res, true, '1 / 1 == 1 / 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divEqDiv', [1,1,1,2], function(res){ assert.equal(res, false, '1 / 1 == 1 / 2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.divNeqDiv', [1,1,1,1], function(res){ assert.equal(res, false, '1 / 1 != 1 / 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divNeqDiv', [1,1,1,2], function(res){ assert.equal(res, true, '1 / 1 != 1 / 2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.divLtDiv', [1,1,2,1], function(res){ assert.equal(res, true, '1 / 1 < 2 / 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divLtDiv', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 / 1 < 1 / 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divLtDiv', [1,1,1,1], function(res){ assert.equal(res, false, '1 / 1 < 1 / 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divLtDiv', [1,1,-1,2], function(res){ assert.equal(res, false, '1 / 1 < -1 / 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divLtDiv', [1,2,-1,-2], function(res){ assert.equal(res, false, '1 / 1 < -1 / -2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.divLeDiv', [1,1,2,1], function(res){ assert.equal(res, true, '1 / 1 <= 2 / 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divLeDiv', [-1,1,1,0], function(res){ assert.equal(res, true, '-1 / 1 <= 1 / 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divLeDiv', [1,1,1,1], function(res){ assert.equal(res, true, '1 / 1 <= 1 / 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divLeDiv', [1,1,-1,2], function(res){ assert.equal(res, false, '1 / 1 <= -1 / 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divLeDiv', [1,2,1,1], function(res){ assert.equal(res, true, '1 / 2 <= 1 / 1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.divGtDiv', [1,1,2,1], function(res){ assert.equal(res, false, '1 / 1 > 2 / 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divGtDiv', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 / 1 > 1 / 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divGtDiv', [1,1,1,1], function(res){ assert.equal(res, false, '1 / 1 > 1 / 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divGtDiv', [1,1,-1,2], function(res){ assert.equal(res, true, '1 / 1 > -1 / 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divGtDiv', [1,2,1,1], function(res){ assert.equal(res, false, '1 / 2 > 1 / 1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.divGeDiv', [1,1,2,1], function(res){ assert.equal(res, false, '1 / 1 >= 2 / 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divGeDiv', [-1,1,1,0], function(res){ assert.equal(res, false, '-1 / 1 >= 1 / 0 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divGeDiv', [1,1,1,1], function(res){ assert.equal(res, true, '1 / 1 >= 1 / 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divGeDiv', [1,1,-1,2], function(res){ assert.equal(res, true, '1 / 1 >= -1 / 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.divGeDiv', [1,2,1,1], function(res){ assert.equal(res, false, '1 / 2 >= 1 / 1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.modEqMod', [1,1,1,1], function(res){ assert.equal(res, true, '1 % 1 == 1 % 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modEqMod', [1,1,1,2], function(res){ assert.equal(res, false, '1 % 1 == 1 % 2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.modNeqMod', [1,1,1,1], function(res){ assert.equal(res, false, '1 % 1 != 1 % 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modNeqMod', [1,1,1,2], function(res){ assert.equal(res, true, '1 % 1 != 1 % 2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.modLtMod', [1,1,1,2], function(res){ assert.equal(res, true, '1 % 1 < 1 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modLtMod', [-1,1,1,2], function(res){ assert.equal(res, true, '-1 % 1 < 1 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modLtMod', [1,1,1,1], function(res){ assert.equal(res, false, '1 % 1 < 1 % 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modLtMod', [1,1,-1,2], function(res){ assert.equal(res, false, '1 % 1 < -1 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modLtMod', [1,2,1,1], function(res){ assert.equal(res, false, '1 % 2 < 1 % 1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.modLeMod', [1,1,1,2], function(res){ assert.equal(res, true, '1 % 1 <= 1 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modLeMod', [-1,1,1,2], function(res){ assert.equal(res, true, '-1 % 1 <= 1 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modLeMod', [1,1,1,1], function(res){ assert.equal(res, true, '1 % 1 <= 1 % 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modLeMod', [1,1,-1,2], function(res){ assert.equal(res, false, '1 % 1 <= -1 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modLeMod', [1,2,1,1], function(res){ assert.equal(res, false, '1 % 2 <= 1 % 1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.modGtMod', [1,1,1,2], function(res){ assert.equal(res, false, '1 % 1 > 1 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modGtMod', [-1,1,1,2], function(res){ assert.equal(res, false, '-1 % 1 > 1 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modGtMod', [1,1,1,1], function(res){ assert.equal(res, false, '1 % 1 > 1 % 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modGtMod', [1,1,-1,2], function(res){ assert.equal(res, true, '1 % 1 > -1 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modGtMod', [1,2,1,1], function(res){ assert.equal(res, true, '1 % 2 > 1 % 1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.modGeMod', [1,1,1,2], function(res){ assert.equal(res, false, '1 % 1 <= 1 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modGeMod', [-1,1,1,2], function(res){ assert.equal(res, false, '-1 % 1 <= 1 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modGeMod', [1,1,1,1], function(res){ assert.equal(res, true, '1 % 1 >= 1 % 1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modGeMod', [1,1,-1,2], function(res){ assert.equal(res, true, '1 % 1 >= -1 % 2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.modGeMod', [1,2,1,1], function(res){ assert.equal(res, true, '1 % 2 >= 1 % 1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.powEqPow', [1,1,1,1], function(res){ assert.equal(res, true, '1^1 == 1^1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powEqPow', [1,1,2,1], function(res){ assert.equal(res, false, '1^1 == 1^2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.powNeqPow', [1,1,1,1], function(res){ assert.equal(res, false, '1^1 != 1^1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powNeqPow', [1,1,2,1], function(res){ assert.equal(res, true, '1^1 != 1^2 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.powLtPow', [1,1,2,1], function(res){ assert.equal(res, true, '1^1 < 1^2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powLtPow', [-1,1,1,2], function(res){ assert.equal(res, true, '-1^1 < 1^2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powLtPow', [1,1,1,1], function(res){ assert.equal(res, false, '1^1 < 1^1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powLtPow', [1,-2,1,-1], function(res){ assert.equal(res, false, '1^-2 < 1^-1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powLtPow', [2,1,1,1], function(res){ assert.equal(res, false, '2^1 < 1^1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.powLePow', [1,1,2,1], function(res){ assert.equal(res, true, '1^1 <= 1^2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powLePow', [-1,1,1,2], function(res){ assert.equal(res, true, '-1^1 <= 1^2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powLePow', [1,1,1,1], function(res){ assert.equal(res, true, '1^1 <= 1^1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powLePow', [2,-1,2,-2], function(res){ assert.equal(res, false, '2^-1 <= 2^-2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powLePow', [2,1,1,1], function(res){ assert.equal(res, false, '2^1 <= 1^1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.powGtPow', [1,1,2,1], function(res){ assert.equal(res, false, '1^1 > 1^2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powGtPow', [-1,1,1,2], function(res){ assert.equal(res, false, '-1^1 > 1^2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powGtPow', [1,1,1,1], function(res){ assert.equal(res, false, '1^1 > 1^1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powGtPow', [1,1,-2,-2], function(res){ assert.equal(res, true, '1^1 > 2^-2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powGtPow', [2,1,1,1], function(res){ assert.equal(res, true, '2^1 > 1^1 calculation failed'); });
				
				
					Smack.api.execute(conName, 'tst.powGePow', [1,1,2,1], function(res){ assert.equal(res, false, '1^1 <= 1^2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powGePow', [-1,1,1,2], function(res){ assert.equal(res, false, '-1^1 <= 1^2 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powGePow', [1,1,1,1], function(res){ assert.equal(res, true, '1^1 >= 1^1 calculation failed'); });
				
					Smack.api.execute(conName, 'tst.powGePow', [1,-1,-1,1], function(res){ assert.equal(res, true, '1^-1 >= 1^1 calculation failed'); });
					
					Smack.api.execute(conName, 'tst.powGePow', [2,1,1,1], function(res){ assert.equal(res, true, '2^1 >= 1^1 calculation failed'); });
				
					
					Smack.api.execute(conName, 'tst.andOr', [false,true,false], function(res){ assert.equal(res, false, 'false && true || false calculation failed'); });
					
					Smack.api.execute(conName, 'tst.orAnd', [true,false,true], function(res){ assert.equal(res, true, 'true || false && true calculation failed'); });
					
					
					Smack.api.execute(conName, 'tst.andParenOr', [false,true,false], function(res){ assert.equal(res, false, 'false && (true || false) calculation failed'); });
					
					Smack.api.execute(conName, 'tst.orParenAnd', [true,false,true], function(res){ assert.equal(res, true, 'true || (false && true) calculation failed'); });
					
					
					Smack.api.execute(conName, 'tst.notAnd', [true,false], function(res){ assert.equal(res, false, '!true && false calculation failed'); });
					
					Smack.api.execute(conName, 'tst.notOr', [false,true], function(res){ assert.equal(res, true, '!false || true calculation failed'); });

					Smack.api.delAll(conName);
					
					testVarAssign();
				});
			});
		}
		testVarAssign = function() {
			Papu.getFileContents('testCode/varAssign.smk', function(source){ 
				QUnit.test( "Assign", function( assert ) {
					console.log(source);
					Smack.api.compile(conName, {varAssign : source});
				
					Smack.api.execute(conName, 'tst.assingAndCompare', [1.1, 2.2], function(res){ assert.equal(res, true, 'Variable assign calculation failed'); });
					
					Smack.api.delAll(conName);
					
					testIfElse();
				});
			});
		}
		testIfElse = function() {
			Papu.getFileContents('testCode/ifElse.smk', function(source){ 
				QUnit.test( "If Else", function( assert ) {
					console.log(source);
					Smack.api.compile(conName, {ifElse : source});
				
					Smack.api.execute(conName, 'tst.ifOneElseIfTwoElse', [1], function(res){ assert.equal(res, 1, 'If part of if else if else failed'); });
				
					Smack.api.execute(conName, 'tst.ifOneElseIfTwoElse', [2], function(res){ assert.equal(res, 2, 'Else if part of if else if else failed'); });
				
					Smack.api.execute(conName, 'tst.ifOneElseIfTwoElse', [3], function(res){ assert.equal(res, false, 'Else part of if else if else failed'); });
				
					Smack.api.execute(conName, 'tst.ifOneElse', [1], function(res){ assert.equal(res, 1, 'If part of if else failed'); });
				
					Smack.api.execute(conName, 'tst.ifOneElse', [2], function(res){ assert.equal(res, false, 'Else part of if else failed'); });
					
					Smack.api.delAll(conName);
					
					testWhile();
				});
			});
		}
		testWhile = function() {
			Papu.getFileContents('testCode/while.smk', function(source){ 
				QUnit.test( "While and exec()", function( assert ) {
					console.log(source);
					Smack.api.compile(conName, {'while' : source});
				
					Smack.api.execute(conName, 'tst.addOneWhileLessThan', [10000], function(res){ assert.equal(res, 10000, 'While loop test failed'); });
				
					Smack.api.execute(conName, 'tst.callWithInput', ['tst.addOneWhileLessThan', [10000]], function(res){ assert.equal(res, 10000, 'Exec with input test failed'); });
					
					Smack.api.execute(conName, 'tst.callWithoutInput', ['tst.returnTrue'], function(res){ assert.equal(res, true, 'Exec without input test failed'); });
					
					Smack.api.delAll(conName);
					
					testInvoke();
				});
			});
		}
		
		testInvoke = function() {
			Papu.getFileContents('testCode/invoke.smk', function(source){ 
				QUnit.test( "Invoke", function( assert ) {
					console.log(source);
					Smack.api.compile(conName, {'invoke' : source});
				
					Smack.api.execute(conName, 'tst.invokeAdd', [1, 1], function(res){ assert.equal(res, 2, 'Invokation with parameters failed'); });
				
					Smack.api.execute(conName, 'tst.invokeTrue', undefined, function(res){ assert.equal(res, true, 'Invokation without parameters failed'); });
					
					Smack.api.delAll(conName);
					
					testQuery();
				});
			});
		}
		
		testQuery = function() {
			QUnit.test( "Query", function( assert ) {
				Smack.api.execute(conName, 'openDataConnection', [{name : dataConnectionParams}], function(res){ 
					assert.ok(typeof res === 'string', 'openDataConnection didn\'t return a connection id'); 
					var conId = res;
					
					Smack.api.execute(conName, 'createQuery', [conId, 'setItem("testItm1", "data1")', 0], function(res){ 
						assert.ok(typeof res === 'string', 'createQuery didn\'t return a query id');
						var queryId1 = res;
						
						Smack.api.execute(conName, 'runQuery', [conId, queryId1], function(res){ 
							assert.ok(res.success, 'failed to run query: ' + queryId1); 

							Smack.api.execute(conName, 'createQuery', [conId, 'getItem("testItm1")', 1], function(res){ 
								assert.ok(typeof res === 'string', 'createQuery didn\'t return a query id');
								var queryId2 = res;
								
								Smack.api.execute(conName, 'runQuery', [conId, queryId2], function(res){ 
									assert.ok(res.success, 'failed to run query: ' + queryId2); 
									assert.equal(res.result, 'data1', 'query: ' + queryId2 + ' returned the wrong result'); 

									Smack.api.execute(conName, 'deleteQuery', [conId, queryId2], function(res){ 
										assert.ok(res.success, 'failed to delete query: ' + queryId2); 

										Smack.api.execute(conName, 'runQuery', [conId, queryId2], function(res){ 
											assert.notOk(res.success, 'query: ' + queryId2 + ' wasn\'t deleted'); 

											Smack.api.execute(conName, 'closeDataConnection', [conId], function(res){ 
												assert.ok(res.success, 'failed to close connection: ' + conId); 

												Smack.api.execute(conName, 'runQuery', [conId, queryId1], function(res){ 
													assert.notOk(res.success, 'connection: ' + conId + ' wasn\'t closed'); 
													
													testQueryBatchesRemoveAndClear();
												});
											});
										});
									});
								});
								
							});
						});
					});
					
				});
			});
		}
		
		testQueryBatchesRemoveAndClear = function() {
			QUnit.test( "Query batches, remove and clear", function( assert ) {
				var conId;
				var queryId;
				var openConnection;
				var createItems;
				var createReadQuery;
				var runRead1;
				var runRead2;
				var runRead3;
				var runRead4;
				var createItems2;
				var removeItem;
				var runRead5;
				var createItems3;
				var clear;
				var runRead6;
				
				openConnection = function() {
					Smack.api.execute(conName, 'openDataConnection', [{name : dataConnectionParams}], function(res){
						conId = res;
						createItems();
					});
				};
				createItems = function() {
					Smack.api.execute(conName, 'runQueryOnce', [conId, 'setItem("testItm", ["data1", "data2", "data3", "data4", "data5"])', 0], function(res){
						createReadQuery()
					}); 
				};
				createReadQuery = function() {
					Smack.api.execute(conName, 'createQuery', [conId, 'getItem("testItm")', 2], function(res){
						queryId = res;
						runRead1();
					});
				};
				runRead1 = function() {
					Smack.api.execute(conName, 'runQuery', [conId, queryId], function(res){
						assert.ok(res.success, 'failed to run query: ' + queryId  + ' : ' + res.err); 
						assert.deepEqual(res.result, ["data1", "data2"], 'the query result is incorrect');
						runRead2();
					});
				};
				runRead2 = function() {
					Smack.api.execute(conName, 'runQuery', [conId, queryId], function(res){
						assert.ok(res.success, 'failed to run query: ' + queryId  + ' : ' + res.err); 
						assert.deepEqual(res.result, ["data3", "data4"], 'the query result is incorrect');
						runRead3();
					});
				};
				runRead3 = function() {
					Smack.api.execute(conName, 'runQuery', [conId, queryId], function(res){
						assert.ok(res.success, 'failed to run query: ' + queryId  + ' : ' + res.err); 
						assert.deepEqual(res.result, ["data5"], 'the query result is incorrect');
						runRead4();
					});
				};
				runRead4 = function() {
					Smack.api.execute(conName, 'runQuery', [conId, queryId], function(res){
						assert.notOk(res.success, 'this query should be completed and removed: ' + queryId);
						createItems2();
					});
				};
				createItems2 = function() {
					Smack.api.execute(conName, 'runQueryOnce', [conId, 'setItem("testItm", ["data1", "data2", "data3", "data4", "data5"])', 0], function(res){
						removeItem()
					}); 
				};
				removeItem = function() {
					Smack.api.execute(conName, 'runQueryOnce', [conId, 'removeItem("testItm")', 0], function(res){
						assert.ok(res.success, 'failed to run remove query: ' + queryId  + ' : ' + res.err); 
						queryId = res;
						runRead5();
					});
				};
				runRead5 = function() {
					Smack.api.execute(conName, 'runQueryOnce', [conId, 'getItem("testItm")'], function(res){
						assert.ok(res.success, 'failed to run query: ' + queryId  + ' : ' + res.err);
						assert.equal(res.result, null, 'the query result is incorrect');
					});
				};
				createItems3 = function() {
					Smack.api.execute(conName, 'runQueryOnce', [conId, 'setItem("testItm", ["data1", "data2", "data3", "data4", "data5"])', 0], function(res){
						clear()
					}); 
				};
				clear = function() {
					Smack.api.execute(conName, 'runQueryOnce', [conId, 'clear()', 0], function(res){
						assert.ok(res.success, 'failed to run clear query: ' + queryId  + ' : ' + res.err); 
						queryId = res;
						runRead6();
					});
				};
				runRead6 = function() {
					Smack.api.execute(conName, 'runQueryOnce', [conId, 'getItem("testItm")'], function(res){
						assert.ok(res.success, 'failed to run query: ' + queryId  + ' : ' + res.err);
						assert.equal(res.result, null, 'the query result is incorrect');
						
						closeDataConnection(conId);
						
						testSyncAsync();
					});
				};
				
				openConnection();
			});
		}
		
		testSyncAsync = function(){
			Papu.getFileContents('testCode/small.smk', function(source) { 
				QUnit.test('async calls', function( assert ){
					// sync
					Smack.api.getConnection(conName).executeAllSync = true;
					
					var wait0Complete = false;
					var wait100Complete = false;
					
					Smack.api.execute(conName, 'wait', [100], function(res) { 
						wait100Complete = true;
						assert.ok(wait0Complete, "wait(0) should have completed before wait(100) execution");
					});
					
					Smack.api.execute(conName, 'wait', [0], function(res) { wait0Complete = true; });
					
					wait0Complete = false;
					var compileComplete = false;
					wait100Complete = false;
					
					Smack.api.execute(conName, 'wait', [100], function(res) { 
						wait100Complete = true;
						assert.ok(!compileComplete, "Compilation shouldn't have completed before wait(100) execution");
					});
					
					Smack.api.compile(conName, {small : source}, function(res) { compileComplete = true; });
					
					Smack.api.execute(conName, 'wait', [0], function(res) { 
						wait0Complete = true;
						assert.ok(compileComplete, "Compilation should have completed before wait(0) execution");
					});
					
					getComplete = false;
					wait100Complete = false;
					
					Smack.api.execute(conName, 'wait', [100], function(res) {
						wait100Complete = true;
						assert.ok(!getComplete, "Get shouldn't have completed before wait(100) execution");
					});
					
					Smack.api.get(conName, ['small'], function(res) { getComplete = true; });
					
					Smack.api.execute(conName, 'wait', [0], function(res) { 
						wait0Complete = true;
						assert.ok(getComplete, "Get should have completed before wait(0) execution");
					});
	
					wait0Complete = false;
					getNamesComplete = false;
					wait100Complete = false;
					
					Smack.api.execute(conName, 'wait', [100], function(res) {
						wait100Complete = true;
						assert.ok(!getNamesComplete, "Get names shouldn't have completed before wait(100) execution");
					});
					
					Smack.api.get(conName, ['small'], function(res) { getNamesComplete = true; });
					
					Smack.api.execute(conName, 'wait', [0], function(res) { 
						wait0Complete = true;
						assert.ok(getNamesComplete, "Get names should have completed before wait(0) execution");
					});
	
					wait0Complete = false;
					delComplete = false;
					wait100Complete = false;
					
					Smack.api.execute(conName, 'wait', [100], function(res) { 
						wait100Complete = true;
						assert.ok(!delComplete, "Deletion shouldn't have completed before wait(100) execution");
					});
					
					Smack.api.del(conName, source, function(res) { delComplete = true; });
					
					Smack.api.execute(conName, 'wait', [0], function(res) { 
						wait0Complete = true;
						assert.ok(delComplete, "Delete should have completed before wait(0) execution");
					});
					
					wait0Complete = false;
					delAllComplete = false;
					wait100Complete = false;
					
					Smack.api.execute(conName, 'wait', [100], function(res) { 
						wait100Complete = true;
						assert.ok(!delAllComplete, "Delete all shouldn't have completed before wait(100) execution");
					});
					
					Smack.api.delAll(conName, source, function(res) { delAllComplete = true; });
					
					Smack.api.execute(conName, 'wait', [0], function(res) { 
						wait0Complete = true;
						assert.ok(delAllComplete, "Delete all should have completed before wait(0) execution");
					});
					
					// async
					this.getConnection(conName).executeAllSync = false;
					
					var wait0Complete = false;
					var wait100Complete = false;
					
					Smack.api.execute(conName, 'wait', [100], function(res) { 
						wait100Complete = true;
						assert.ok(wait0Complete, "wait(0) should have completed before wait(100) execution");
					});
					
					Smack.api.execute(conName, 'wait', [0], function(res) { wait0Complete = true; });
					
					wait0Complete = false;
					var compileComplete = false;
					wait100Complete = false;
					
					Smack.api.execute(conName, 'wait', [100], function(res) { 
						wait100Complete = true;
						assert.ok(!compileComplete, "Compilation shouldn't have completed before wait(100) execution");
					});
					
					Smack.api.compile(conName, {small : source}, function(res) { compileComplete = true; });
					
					Smack.api.execute(conName, 'wait', [0], function(res) { 
						wait0Complete = true;
						assert.ok(compileComplete, "Compilation should have completed before wait(0) execution");
					});
					
					getComplete = false;
					wait100Complete = false;
					
					Smack.api.execute(conName, 'wait', [100], function(res) {
						wait100Complete = true;
						assert.ok(getComplete, "Get should have completed before wait(100) execution");
					});
					
					Smack.api.get(conName, ['small'], function(res) { getComplete = true; });
	
					getNamesComplete = false;
					wait100Complete = false;
					
					Smack.api.execute(conName, 'wait', [100], function(res) {
						wait100Complete = true;
						assert.ok(getNamesComplete, "Get names should have completed before wait(100) execution");
					});
					
					Smack.api.getNames(conName, ['small'], function(res) { getNamesComplete = true; });
	
					wait0Complete = false;
					delComplete = false;
					wait100Complete = false;
					
					Smack.api.execute(conName, 'wait', [100], function(res) { 
						wait100Complete = true;
						assert.ok(!delComplete, "Deletion shouldn't have completed before wait(100) execution");
					});
					
					Smack.api.del(conName, source, function(res) { delComplete = true; });
					
					Smack.api.execute(conName, 'wait', [0], function(res) { 
						wait0Complete = true;
						assert.ok(delComplete, "Delete should have completed before wait(0) execution");
					});
					
					wait0Complete = false;
					delAllComplete = false;
					wait100Complete = false;
					
					Smack.api.execute(conName, 'wait', [100], function(res) { 
						wait100Complete = true;
						assert.ok(!delAllComplete, "Delete all shouldn't have completed before wait(100) execution");
					});
					
					Smack.api.delAll(conName, function(res) { delAllComplete = true; });
					
					Smack.api.execute(conName, 'wait', [0], function(res) { 
						wait0Complete = true;
						assert.ok(delAllComplete, "Delete all should have completed before wait(0) execution");
					});
	
					// One last sync call to make sure execution doesn't continue before all tests have run
					Smack.api.delAll(conName, function(res) { delAllComplete = true; });
				 });
			});
		}
		testAll();
	});
}