if(!$)
	throw 'jQuery is required';
if(!antlr4)
	throw 'antlr4 is required';
if(!antlr4.SmackParser)
	throw 'SmackParser is required';

var Smack = {};

Smack.api = (function($) {
	var connections = {};
	var syncUris = {'/compile' : true, '/delete' : true, '/deleteall' : true, };

	var newConnection = function(name, host, requester) {
		return {
			sessionId : undefined,
			name : name,
			host : host,
			latestRequest : undefined,
			executeAllSync : false,
			request : requester,
			queue : [],
			pendingUri : undefined,
		};
	}
	
	var requestHandler = function(data) {
		throw 'Request handler not implemented';
	}
	
	var testRequestHandler = function(data) {
		this.latestRequest = { url : this.host + data.uri, headers : data.headers, body : data.body };
		console.log('Last request data : ' + this.latestRequest);
		if(data.cb) data.cb({});
	}
	
	return {
		call : function(connection, uri, headers, body, cb) {
			var con = this.getConnection(connection);
			var data = {
				con : con,
				uri : uri, 
				headers : $.extend({
					'content-type' : 'application/json', 
					session : (con.sessionId ? con.sessionId : '')
				}, headers),
				body : body, 
				cb : function(response) {
					if(response.err) throw response.err;
					if(cb) cb(response.result)
					con.pendingUri = undefined;
					if(con.queue.length > 0) {
						var data = con.queue.shift();
						data.con.request(data);
					}
						
				},
			};
			if((con.executeAllSync && con.pendingUri) || syncUris[con.pendingUri] || (syncUris[uri] && con.pendingUri))
				con.queue.push(data);
			else {
				try {
					con.pendingUri = uri;
					con.request(data);
				} catch(e) {
					con.pendingUri = undefined;
					throw e;
				}
			}
		},
		compile : function(connection, units, cb) {
			this.call(connection, '/compile', undefined, units, cb)
		},
		del : function(connection, names, cb) {
			this.call(connection, '/delete', undefined, names, cb)
		},
		delAll : function(connection, cb) {
			this.call(connection, '/deleteall', undefined, undefined, cb)
		},
		get : function(connection, names, cb) {
			this.call(connection, '/get', undefined, names, cb)
		},
		getNames : function(connection, regex, cb) {
			this.call(connection, '/getnames', undefined, regex, cb)
		},
		// The javascript arguments array is used as input
		execute : function(connection, name, args, cb) {
			this.call(connection, '/execute', undefined, { name : name, args : args }, cb)
		},
		createConnection : function(name, host, uname, passw, cb) {
			if(this.hasConnection(name))
				throw 'A connection by the name ' + name + ' exists';
			if(this.hasHost(host))
				throw 'The host ' + host + ' has already been connected to';
			var con = undefined;
			if(host == 'tst.com')
				con = newConnection(name, host, testRequestHandler);
			else if(host == 'browser')
				con = newConnection(name, host, Smack.browserRequestHandler);
			else
				con = newConnection(name, host, requestHandler);
			connections[name] = con;
			this.call(name, '/connect', {uname : uname, passw : passw}, undefined, function(data) {
				con.sessionId = data;
				if(cb) cb({});
			});
		},
		hasConnection : function(name) {
			return (connections[name] ? true : false);
		},
		hasHost : function(host) {
			for(var name in connections)
				if(connections[name].host == host)
					return true;
			return false;
		},
		getConnection : function(name) {
			if(typeof name !== 'string')
				throw 'Please provide the connection name';
			var con = connections[name]
			if(!con)
				throw 'No connection was found by the name ' + name;
			return con;
		},
		closeConnection : function(name, cb) {
			this.call(name, '/close', undefined, undefined, function() {
				delete connections[name];
				if(cb) cb();
			});
		},
	}
})($);

Smack.bserver = (function(){
	var code = {};
	var units = {};
	var compile = function(name, source) {
		throw 'Not implemented';
	}
	
	var createUnit = function(name, source, pack, funcs) {
		return {
			name : name,
			source : source,
			pack : pack,
			funcs : funcs,
		};
	}
	
	var addUnit = function(unit) {
		if(units[unit.name])
			throw 'a compilation unit by the name ' + unit.name + ' already exists';
		for(fn in unit.funcs)
			if(code[pack + '.' + fn])
				throw 'a function by the name ' + pack + '.' + fn + ' already exists';
		for(fn in unit.funcs)
			code[pack + '.' + fn] = unit.funcs[fn];
		units[unit.name] = unit;
	}
	
	var delUnit = function(name) {
		if(!units[unit.name])
			throw 'a compilation unit by the name ' + unit.name + ' doesn\'t exist';
		for(fn in unit.funcs)
			delete code[pack + '.' + fn];
		delete units[unit.name];
	}
	
	var activeSession = undefined;
	
	return {
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
			for(name in units)
				compile(name, units[name]);
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
			if(!code[name])
				'no function exists by the name ' + name;
			cb(code[name].apply(null, args));
		},
	};
})();

Smack.parser = (function() {
	return {
		getParseTree : function(source) {
			var chars = new antlr4.InputStream(input);
			var lexer = new antlr4.SelectLexer(chars);
			var tokens  = new antlr4.CommonTokenStream(lexer);
			var parser = new antlr4.SmackParser(tokens);
			parser.buildParseTrees = true;
			return parser.smkFile();
		},
		translateTreeToJs : function(tree) {
				
		}
	}
})();

Smack.JsTranslator = (function(){
	var translator = function(){};
	translator.prototype = new antlr4.SmackListener();
	translator.prototype.enterSmkFile = function(ctx) { };
	translator.prototype.exitSmkFile = function(ctx) { };
	translator.prototype.enterPackageDecl = function(ctx) { };
	translator.prototype.exitPackageDecl = function(ctx) { };
	translator.prototype.enterPlus = function(ctx) { };
	translator.prototype.exitPlus = function(ctx) { };
	translator.prototype.enterMinus = function(ctx) { };
	translator.prototype.exitMinus = function(ctx) { };
	translator.prototype.enterMul = function(ctx) { };
	translator.prototype.exitMul = function(ctx) { };
	translator.prototype.enterDiv = function(ctx) { };
	translator.prototype.exitDiv = function(ctx) { };
	translator.prototype.enterMod = function(ctx) { };
	translator.prototype.exitMod = function(ctx) { };
	translator.prototype.enterEq = function(ctx) { };
	translator.prototype.exitEq = function(ctx) { };
	translator.prototype.enterNeq = function(ctx) { };
	translator.prototype.exitNeq = function(ctx) { };
	translator.prototype.enterLt = function(ctx) { };
	translator.prototype.exitLt = function(ctx) { };
	translator.prototype.enterLe = function(ctx) { };
	translator.prototype.exitLe = function(ctx) { };
	translator.prototype.enterGt = function(ctx) { };
	translator.prototype.exitGt = function(ctx) { };
	translator.prototype.enterGe = function(ctx) { };
	translator.prototype.exitGe = function(ctx) { };
	translator.prototype.enterVarAssign = function(ctx) { };
	translator.prototype.exitVarAssign = function(ctx) { };
	translator.prototype.enterFuncDeclParams = function(ctx) { };
	translator.prototype.exitFuncDeclParams = function(ctx) { };
	translator.prototype.enterFuncDeclNoParams = function(ctx) { };
	translator.prototype.exitFuncDeclNoParams = function(ctx) { };
	translator.prototype.enterFuncInvokeParams = function(ctx) { };
	translator.prototype.exitFuncInvokeParams = function(ctx) { };
	translator.prototype.enterFuncInvokeNoParams = function(ctx) { };
	translator.prototype.exitFuncInvokeNoParams = function(ctx) { };
	translator.prototype.enterRetStatement = function(ctx) { };
	translator.prototype.exitRetStatement = function(ctx) { };
	translator.prototype.enterIfStat = function(ctx) { };
	translator.prototype.exitIfStat = function(ctx) { };
	translator.prototype.enterElseIfStat = function(ctx) { };
	translator.prototype.exitElseIfStat = function(ctx) { };
	translator.prototype.enterElseStat = function(ctx) { };
	translator.prototype.exitElseStat = function(ctx) { };
	translator.prototype.enterLoop = function(ctx) { };
	translator.prototype.exitLoop = function(ctx) { };
	translator.prototype.enterNonParenExpr = function(ctx) { };
	translator.prototype.exitNonParenExpr = function(ctx) { };
	translator.prototype.enterAtomExpr = function(ctx) { };
	translator.prototype.exitAtomExpr = function(ctx) { };
	translator.prototype.enterParenExpr = function(ctx) { };
	translator.prototype.exitParenExpr = function(ctx) { };
	translator.prototype.enterValResolv = function(ctx) { };
	translator.prototype.exitValResolv = function(ctx) { };
	translator.prototype.enterJpathResolv = function(ctx) { };
	translator.prototype.exitJpathResolv = function(ctx) { };
	translator.prototype.enterInvokeResolv = function(ctx) { };
	translator.prototype.exitInvokeResolv = function(ctx) { };
	translator.prototype.enterCodeBlock = function(ctx) { };
	translator.prototype.exitCodeBlock = function(ctx) { };
	translator.prototype.enterSentence = function(ctx) { };
	translator.prototype.exitSentence = function(ctx) { };
	translator.prototype.enterStatement = function(ctx) { };
	translator.prototype.exitStatement = function(ctx) { };
	translator.prototype.enterJson = function(ctx) { };
	translator.prototype.exitJson = function(ctx) { };
	translator.prototype.enterObject = function(ctx) { };
	translator.prototype.exitObject = function(ctx) { };
	translator.prototype.enterPair = function(ctx) { };
	translator.prototype.exitPair = function(ctx) { };
	translator.prototype.enterArray = function(ctx) { };
	translator.prototype.exitArray = function(ctx) { };
	translator.prototype.enterValue = function(ctx) { };
	translator.prototype.exitValue = function(ctx) { };
 	translator.prototype.enterJsonPath = function(ctx) { };
	translator.prototype.exitJsonPath = function(ctx) { };
	translator.prototype.enterKeyRef = function(ctx) { };
	translator.prototype.exitKeyRef = function(ctx) { };
	
	return translator;
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
	else if(data.uri === '/deleteAll') {
		try {
			Smack.bserver.del(function(res) {
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
	else if(data.uri === '/getNames') {
		try {
			Smack.bserver.getNames(data.body, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else if(data.uri === '/execute') {
		try {
			Smack.bserver.execute(data.body.names, data.body.args, function(res) {
				if(data.cb) data.cb({result : res});
			});
		}catch(e) { if(data.cb) data.cb({err : e}); }
	}
	else
		throw 'Invalid uri';
}

