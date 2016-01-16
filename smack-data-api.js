if(!$)
	throw 'jQuery is required';
if(!Smack.bserver)
	throw 'Smack browser server is required';

Smack.bserver.code = $.extend(Smack.bserver.code, (function() {
	var conId = 0;
	var queryId = 0;
	var connections = {};
	
	var runQuery = function(conId, queryId, batchSize) {
		var result;
		try {
			var query = connections[conId].queries[queryId];
			result = getQueryResult(query)
			deleteQueryIfFinished(conId, queryId);
		} catch(e) {
			return {
				success : false,
				err : e
			}
		}
		return {
			success : true,
			result : result
		};
	};
	
	var getQueryResult = function(query) {
		var result;
		if(!query.result) {
			eval('var resultStr = localStorage.' + query.queryStr);
			if(resultStr !== undefined)
				query.result = JSON.parse(resultStr);
		}
		if($.isArray(query.result))
			result = query.result.splice(0, query.batchSize);
		else
			result = query.result;
		return result;
	}
	
	var deleteQueryIfFinished = function(conId, queryId) {
		var query = connections[conId].queries[queryId];
		if($.isArray(query.result)){
			if(query.result.length == 0)
				delete connections[conId].queries[queryId];
		}
		else
			delete connections[conId].queries[queryId];
	}
	
	return {
		// creates a connection and returns a unique connection id
		openDataConnection : function(conParams) {
			conId++;
			connections[conId] = { queries : {} };
			return {
				success : true,
				id : '' + conId
			}
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
			return {
				success : true,
				id : '' + queryId
			}
		},
		runQueryOnce : function(conId, queryStr, batchSize) {
			var code = Smack.bserver.code;
			var queryId = code.createQuery(conId, queryStr, batchSize).id;
			var result = runQuery(conId, queryId);
			code.deleteQuery(conId, queryId);
			return result;
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
		runQuery : function(conId, queryId, batchSize) {
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
			return runQuery(conId, queryId);
		},
	}
})());

