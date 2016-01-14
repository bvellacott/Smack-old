if(!$)
	throw 'jQuery is required';
if(!Smack.bserver)
	throw 'Smack browser server is required';

Smack.bserver.code = $.extend(Smack.bserver.code, (function() {
	var conId = 0;
	var queryId = 0;
	var connections = {};
	
	return {
		// creates a connection and returns a unique connection id
		openDataConnection : function(conParams) {
			conId++;
			connections[conId] = { queries : {} };
			return '' + conId;
		},
		// closes a connection by it's id and deletes all corresponding queries
		closeDataConnection : function(conId) {
			try {
				delete connections[conId];
			} catch(e) {
				return {
					success : false,
					err : e
				}
			}
			return { success : true };
		},
		// creates a query and returns a query id
		createQuery : function(conId, queryStr, batchSize) {
			queryId++;
			connections[conId].queries[queryId] = { 
				queryStr : queryStr,
				batchSize : batchSize
			};
			return '' + queryId;
		},
		deleteQuery : function(conId, queryId) {
			try {
				delete connections[conId].queries[queryId];
			} catch(e) {
				return {
					success : false,
					err : e
				}
			}
			return { success : true };
		},
		runQuery : function(conId, queryId) {
			if(!connections[conId])
				return {
				success : false,
				err : 'The connection: ' + conId + ' doesn\'t exist'
			}
			if(!connections[conId].queries[queryId])
				return {
				success : false,
				err : 'The connection: ' + conId + ' doesn\'t have a query with the id: ' + queryId
			}
			try {
				eval('var queryResult = localStorage.' + connections[conId].queries[queryId].queryStr);
			} catch(e) {
				return {
					success : false,
					err : e
				}
			}
			return {
				success : true,
				result : queryResult
			};
		},
	}
})());

