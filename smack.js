var Smack = {};

Smack.api = (function($) {
	var connections = {};
	
	connections.test = {
		request : function(uri, headers, body, cb) {
			this.requests.push({ url : this.host + uri, headers : headers, body : body });
			console.log('Last request data : ' + this.getLatestRequest());
			if(cb) cb({});
		},
		requests : [],
		getLatestRequest : function() { return this.requests[this.requests.length-1] },
	};
	
	return {
		call : function(connection, uri, body, cb) {
			var con = this.getConnection(connection);
			con.request(uri, {
				'content-type' : 'application/json', 
				session : (con.sessionId ? con.sessionId : '')
			}, body, function(response) {
				if(response.err)
					throw err;
				if(cb) cb(response.result)
			});
		},
		compile : function(connection, units, cb) {
			this.call(connection, '/compile', units, cb)
		},
		del : function(connection, names, cb) {
			this.call(connection, '/delete', names, cb)
		},
		delAll : function(connection, cb) {
			this.call(connection, '/deleteall', undefined, cb)
		},
		get : function(connection, names, cb) {
			this.call(connection, '/get', names, cb)
		},
		getNames : function(connection, regex, cb) {
			this.call(connection, '/getnames', regex, cb)
		},
		// The javascript arguments array is used as input
		execute : function(connection, name, args, cb) {
			this.call(connection, '/execute', { name : name, args : args }, cb)
		},
		createConnection : function(name, url, uName, pWord) {
			throw 'Not implemented';
		},
		getConnection : function(name) {
			if(typeof name !== 'string')
				throw 'Please provide the connection name';
			var con = connections[name]
			if(!con)
				throw 'No connection was found by the name ' + name;
			return con;
		},
		closeConnection : function(name) {
			throw 'Not implemented';
		},
	}
})($);