if(!$)
	throw 'jQuery is required';
if(!Smack.jsCompilers)
	throw 'Smack javascript compilers are required';

Smack.bserver = (function(){
	var code = {};
	var units = {};
	var compile = function(name, source) {
		addUnit(Smack.compile(name, source));
	}
	
	var addUnit = function(unit) {
		if(units[unit.name])
			throw 'a compilation unit by the name ' + unit.name + ' already exists';
		if(!eval(unit.pack))
			eval(unit.pack + ' = {};');
		eval(unit.targetSource);
		units[unit.name] = unit;
	}
	
	// This needs to be redone to be able to delete the specific functions for the unit!!
	var delUnit = function(name) {
		var unit = units[name]
		if(!unit)
			throw 'a compilation unit by the name ' + unit.name + ' doesn\'t exist';
		eval('var pack = ' + unit.pack);
		for(var i = 0; i < unit.funcNames.length; i++)
			delete pack[unit.funcNames[i]];
		delete units[unit.name];
	}
	
	var getFunc = function(name) {
		var parts = name.split('.');
		var curObj = code;
		for(var i = 0; i < parts.length; i++) {
			curObj = curObj[parts[i]];
			if(!curObj)
				throw 'No function exists by the name ' + name;
		}
		if(!(typeof curObj === 'function'))
			throw 'No function exists by the name ' + name;
		return curObj;
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
			src +  + '\n' +
			generateReturnObjectAssignSrc('_rEToBJ_', argNames);
			var server = this;
			var compileAndExecute = function(){
				server.compile({ anonymous : anonFuncSrc }, execute);
			};
			var execute = function(){
				server.execute('anonymous.anonymous', argValues, cb);
			};
			this.del(['anonymous'], compileAndExecute);
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
	else
		throw 'Invalid uri';
}
