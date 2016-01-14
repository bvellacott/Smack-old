if(!$)
	throw 'jQuery is required';
if(!Smack.bserver)
	throw 'Smack browser server is required';

Smack.bserver.code = $.extend(Smack.bserver.code, {
	// creates a connection and returns a unique connection id
	openDataConnection : function(conParams) {
		throw 'opening data connections not implemented';
	},
	// closes a connection by it's id and deletes all corresponding queries
	closeDataConnection : function(conId) {
		throw 'closing data connections not implemented';
	},
	// creates a query and returns a query id
	createQuery : function(conId, queryStr, batchSize) {
		throw 'creating  queries not implemented';
	},
	deleteQuery : function(conId, queryId) {
		throw 'deleting queries not implemented';
	},
	runQuery : function(conId, queryId) {
		throw 'data queries not implemented';
	},
});

