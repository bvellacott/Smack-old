var Smack = {};


Smack.browserServer = (function(){
	
})();
	
Smack.api = (function($) {
	var connections = {};
	var executeAllSync = false;
	var syncUris = {'/compile' : true, '/delete' : true, '/deleteall' : true, };
	var pendingUri = undefined;
	var queue = [];
	
	connections.test = {
		session : undefined,
		host : 'tst.com',
		request : function(data) {
			this.requests.push({ url : this.host + data.uri, headers : data.headers, body : data.body });
			console.log('Last request data : ' + this.getLatestRequest());
			if(data.cb) data.cb({});
		},
		requests : [],
		getLatestRequest : function() { return this.requests[this.requests.length-1] },
	};
		
	return {
		call : function(connection, uri, body, cb) {
			var con = this.getConnection(connection);
			var data = {
				con : con,
				uri : uri, 
				headers : {
					'content-type' : 'application/json', 
					session : (con.sessionId ? con.sessionId : '')
				},
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
		setExecuteAllSync : function(inSync) {
			executeAllSync = inSync;
		},
	}
})($);
