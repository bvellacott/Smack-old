if(!window.$)
	throw 'jQuery is required';
if(!window.Smack.jsCompilers)
	throw 'Smack javascript compilers are required';
if(!window.Ember)
	throw 'Ember is required';
if(!window.DS)
	throw 'Ember data is required';
if(!window.DS.LSAdapter)
	throw 'Smack local storage adapter is required';

Smack.bserver = (function(){
	var code = { _funcs_ : {} };
	var units = {};
	var compile = function(name, source) {
		addUnit(Smack.compile(name, source));
	}
	
	var addUnit = function(unit) {
		if(units[unit.name])
			throw 'a compilation unit by the name ' + unit.name + ' already exists';
		if(!eval(unit.pack))
			eval(unit.pack + ' = { _funcs_ : {}};');
		console.log(unit.targetSource);
		eval(unit.targetSource);
		units[unit.name] = unit;
	}
	
	var removeAllTestData = function(funcName) {
		localStorage.removeItem('testData.' + funcName)
	}
	
	// This needs to be redone to be able to delete the specific functions for the unit!!
	var delUnit = function(name) {
		var unit = units[name]
		if(!unit)
			throw 'a compilation unit by the name ' + unit.name + ' doesn\'t exist';
		eval('var funcs = ' + unit.pack + '._funcs_');
		for(var i = 0; i < unit.funcNames.length; i++) {
			delete funcs[unit.funcNames[i]];
			removeAllTestData(unit.packAbr + '.' + unit.funcNames[i]);
		}
		delete units[unit.name];
	}
	
	var getFunc = function(name) {
		var parts = name.split('.');
		var curObj = code;
		var funcName = parts[parts.length-1];
		for(var i = 0; i < parts.length-1; i++) {
			curObj = curObj[parts[i]];
			if(!curObj)
				throw 'No function exists by the name ' + name;
		}
		if(!curObj._funcs_ || !(typeof curObj._funcs_[funcName] === 'function'))
			throw 'No function exists by the name ' + name;
		return curObj._funcs_[funcName];
	}
	
	var generateReturnObjectAssignSrc = function(objName, argNames) {
		var src = objName + ' = {};\n';
		for(var i = 0; i < argNames.length; i++)
			src += objName + '["' + argNames[i] + '"] = ' + argNames[i] + ';\n';
		src += 'ret ' + objName + ';\n';
		return src;
	}
	
	var activeSession = undefined;
	
	return {
		code : code,
		getFunction : getFunc,
		connect : function(uname, passw, cb) { 
			activeSession = 'browser-session';
			cb(activeSession); 
		},
		close : function(cb) {
			var sessionId = activeSession;
			activeSession = undefined;
			cb('closed' + sessionId); 
		},
		compile : function(units, cb) {
			try {
				for(name in units)
					compile(name, units[name]);
				if(cb) cb('done');
			} catch(e) {
				console.log(e);
				if(cb) cb(e);
			}
		},
		del : function(names, cb) {
			for(var i = 0; i < names.length; i++) {
				try {
					delUnit(names[i]);
				} catch(e){}
			}
			cb('done');
		},
		delAll : function(cb) {
			for(name in units) {
				try {
					delUnit(name);
				} catch(e){}
			}
			cb('done');
		},
		get : function(names, cb) {
			var sources = [];
			for(var i = 0; i < names.length; i++)
				if(units[names[i]])
					sources.push(units[names[i]].source);
			cb(sources);
		},
		getNames : function(regex, cb) {
			var names = [];
			if(!regex)
				cb(Object.keys(units));
			cb(names);
		},
		execute : function(name, args, cb) { 
			cb(getFunc(name).apply(undefined, args));
		},
		executeAnonymous : function(src, args, cb) {
			var argNames = [];
			var argValues = []
			for(var argName in args) {
				argNames.push(argName);
				argValues.push(args[argName]);
			} 
			var anonFuncSrc = 'pack anonymous;\n func anonymous(' + argNames.join(', ') + ') {\n' + 
			src + '\n' +
			generateReturnObjectAssignSrc('_rEToBJ_', argNames) +
			'\n}';
			var server = this;
			var compileAndExecute = function(){
				server.compile({ anonymous : anonFuncSrc }, execute);
			};
			var execute = function(){
				server.execute('anonymous.anonymous', argValues, cb);
			};
			this.del(['anonymous'], compileAndExecute);
		},
		setTestData : function(funcName, tstName, tstArgs, cb) {
			var allData = JSON.parse(localStorage.getItem('testData.' + funcName));
			if(!allData)
				allData = {};
			allData[tstName] = tstArgs;
			localStorage.setItem('testData.' + funcName, JSON.stringify(allData));
			if(cb) cb('done');
		},
		removeTestData : function(funcName, tstName, cb) {
			var allData = JSON.parse(localStorage.getItem('testData.' + funcName));
			if(allData) {
				delete allData[tstName];
				localStorage.setItem('testData.' + funcName, JSON.stringify(allData));
			}
			if(cb) cb('done');
		},
		removeAllTestData : function(funcName, cb) {
			removeAllTestData(funcName);
			if(cb) cb('done');
		},
		getTestData : function(funcName, tstName, cb) {
			var result = {};
			var allData = JSON.parse(localStorage.getItem('testData.' + funcName));
			if(allData && allData[tstName])
				result = allData[tstName];
			if(cb) cb(result);
		},
		getAllTestData : function(funcName, cb) {
			var result = {};
			var allData = JSON.parse(localStorage.getItem('testData.' + funcName));
			if(allData)
				result = allData;
			if(cb) cb(result);
		},
	};
})();

Smack.browserRequestHandler = function(data) {
	this.latestRequest = { url : this.host + data.uri, headers : data.headers, body : data.body };
	var response;
	if(data.uri === '/connect') {
		try {
			Smack.bserver.connect(data.headers.uname, data.headers.passw, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/close') {
		try {
			Smack.bserver.close(function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/compile') {
		try {
			Smack.bserver.compile(data.body, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/delete') {
		try {
			Smack.bserver.del(data.body, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/deleteall') {
		try {
			Smack.bserver.delAll(function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/get') {
		try {
			Smack.bserver.get(data.body, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/getnames') {
		try {
			Smack.bserver.getNames(data.body, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/execute') {
		try {
			Smack.bserver.execute(data.body.name, data.body.args, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/executeAnonymous') {
		try {
			Smack.bserver.executeAnonymous(data.body.src, data.body.args, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/setTestData') {
		try {
			Smack.bserver.setTestData(data.body.funcName, data.body.tstName, data.body.tstArgs, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/removeTestData') {
		try {
			Smack.bserver.removeTestData(data.body.funcName, data.body.tstName, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/removeAllTestData') {
		try {
			Smack.bserver.removeAllTestData(data.body.funcName, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/getTestData') {
		try {
			Smack.bserver.getTestData(data.body.funcName, data.body.tstName, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/getAllTestData') {
		try {
			Smack.bserver.getAllTestData(data.body.funcName, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else
		throw 'Invalid uri';
}

Smack.Adapter = DS.RESTAdapter.extend({
    find : function(store, type, id, snapshot) {
    	return this.findRecord(store, type, id, snapshot);
    },
    findRecord : function(store, type, id, snapshot) {
    	return this.query(store, type, "Id = '" + id + "'");
    },
	createRecord: function(store, type, snapshot) {
		return new Ember.RSVP.Promise(function(resolve, reject) {
			try {
				var obj = Papu.SF.sfFormatSnapshot(snapshot, type);
				var res = sforce.connection.create([obj], 
				function(res) {
					snapshot.id = res[0].id;
					var pl = {};
					pl[type.modelName] = snapshot;
					Ember.run(null, resolve, pl);
					
					// Update record in the background - in case it has values that are calculated on the server
					Papu.SF.query(store, type, "Id = '" + res[0].id + "'", 
						function(res) {
							var r = Papu.SF.formatPayload(type, res);
							store.pushPayload(type.modelName, r);
						}, 
						function(err) { 
							console.log(err); 
						});
				},
				function(err) { 
					console.log(err); 
					Ember.run(null, reject, err);
				});               
			}catch(e) {
				console.log(e.faultstring);
				console.log(e.message);
				console.log(e);
				Ember.run(null, reject, e);
			}
		});
	},
	updateRecord: function(store, type, snapshot) {
		return new Ember.RSVP.Promise(function(resolve, reject) {
			try {
				var obj = Papu.SF.sfFormatSnapshot(snapshot, type);
				var res = sforce.connection.update([obj], 
				function(res) {
					Papu.SF.formatRecord(obj);
					var pl = {};
					pl[type.modelName] = obj;
					Ember.run(null, resolve, pl);

					// Update record in the background - in case it has values that are calculated on the server
					Papu.SF.query(store, type, "Id = '" + res[0].id + "'", 
						function(res) {
							var r = Papu.SF.formatPayload(type, res);
							store.pushPayload(type.modelName, r);
						}, 
						function(err) { 
							console.log(err); 
						});
				},
				function(err) { 
					console.log(err); 
					Ember.run(null, reject, err);
				});
			}catch(e) {
				console.log(e.faultstring);
				console.log(e.message);
				console.log(e);
				Ember.run(null, reject, e);
			}
		});
	},
	deleteRecord: function(store, type, snapshot) {
		return new Ember.RSVP.Promise(function(resolve, reject) {
			try {
				sforce.connection.deleteIds([snapshot.id], 
				function(res) {
					Ember.run(null, resolve, {});
				},
				function(err) { 
					console.log(err); 
					Ember.run(null, reject, err);
				});
			}catch(e) {
				console.log(e.faultstring);
				console.log(e.message);
				console.log(e);
				Ember.run(null, reject, e);
			}
		});
	},
	findAll: function(store, type, sinceToken) {
    	return this.query(store, type);
	},
    findMany : function(store, type, ids, snapshot) {
    	return this.query(store, type, "Id in " + Papu.SF.toSoqlArray(ids));
    },
    findQuery : function(store, type, query) {
    	return this.query(store, type, query);
    },
    query : function(store, type, query) {
		return new Ember.RSVP.Promise(function(resolve, reject) {
			try {
				Papu.SF.query(store, type, query, 
					function(res) {
						var r = Papu.SF.formatPayload(type, res);
						Ember.run(null, resolve, r);
					}, 
					function(err) { 
						console.log(err); 
						Ember.run(null, reject, err);
					});
			} catch(e) {
				console.log(e.faultstring);
				console.log(e.message);
				console.log(e);
				Ember.run(null, reject, e);
			}
		});
    },
});

