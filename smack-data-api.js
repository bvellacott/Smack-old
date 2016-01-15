if(!$)
	throw 'jQuery is required';
if(!Smack.bserver)
	throw 'Smack browser server is required';

Smack.bserver.code = $.extend(Smack.bserver.code, (function() {
	var conId = 0;
	var queryId = 0;
	var connections = {};
	
	var runQuery = function(conId, queryStr) {
		try {
//			if(queryStr.substring(0, 10) === 'removeItem' || queryStr.substring(0, 5) === 'clear')
//				eval('var queryResult = Storage.' + queryStr);
//			else
				eval('var queryResult = localStorage.' + queryStr);
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
	};
	
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
				queryStr : queryStr.trim(),
				batchSize : batchSize
			};
			return '' + queryId;
		},
		runQueryOnce : function(conId, queryStr, batchSize) {
			return runQuery(conId, queryStr);
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
			return runQuery(conId, connections[conId].queries[queryId].queryStr);
		},
	}
})());

