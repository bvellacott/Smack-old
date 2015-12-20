if(!$)
	throw 'jQuery is required';

var Smack = {};

Smack.api = (function($) {
	var connections = {};
	var executeAllSync = false;
	var syncUris = {'/compile' : true, '/delete' : true, '/deleteall' : true, };
	var pendingUri = undefined;
	var queue = [];
	
	var newConnection = function(name, host, requester) {
		return {
			session : undefined,
			name : name,
			host : host,
			latestRequest : undefined,
			request : requester,
		};
	}
	
	var testRequestHandler = function(data) {
		this.latestRequest = { url : this.host + data.uri, headers : data.headers, body : data.body };
		console.log('Last request data : ' + this.latestRequest);
		if(data.cb) data.cb({});
	}
	
	var browserRequestHandler = function(data) {
		this.latestRequest = { url : this.host + data.uri, headers : data.headers, body : data.body };
		// todo
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
					if(response.err) throw err;
					if(cb) cb(response.result)
					pendingUri = undefined;
					if(queue.length > 0) {
						var data = queue.shift();
						data.con.request(data);
					}
						
				},
			};
			if((executeAllSync && pendingUri) || syncUris[pendingUri] || (syncUris[uri] && pendingUri))
				queue.push(data);
			else {
				try {
					pendingUri = uri;
					con.request(data);
				} catch(e) {
					pendingUri = undefined;
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
				con = newConnection(name, host, browserRequestHandler);
			else {
				con = newConnection(name, host, function(data) {
					throw 'Not implemented';
					this.latestRequest = { url : this.host + data.uri, headers : data.headers, body : data.body };
					if(data.cb) data.cb({});
				});
			}
			connections[name] = con;
			this.call(name, '/connect', {uname : uname, passw : passw}, undefined, cb);
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
		setExecuteAllSync : function(inSync) {
			executeAllSync = inSync;
		},
	}
})($);
