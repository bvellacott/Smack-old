if(!$)
	throw 'jQuery is required';

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
	var compile = function(source) {
		throw 'Not implemented';
	}	
	
	return {
		connect : function() { throw 'Not implemented'; },
		close : function() { throw 'Not implemented'; },
		compile : function() { throw 'Not implemented'; },
		del : function() { throw 'Not implemented'; },
		delAll : function() { throw 'Not implemented'; },
		get : function() { throw 'Not implemented'; },
		getNames : function() { throw 'Not implemented'; },
		execute : function() { throw 'Not implemented'; },
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

