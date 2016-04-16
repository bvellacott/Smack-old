if(!window.Smack)
	throw 'Smack is required';
if(!window.Ember)
	throw 'Ember is required';
if(!window.DS)
	throw 'Ember data is required';

(function() {

	var listenerLists = [];
	var addListener(type, listener) {
		var listeners = listenerLists[type];
		if(!listeners)
			listenerLists[type] = listeners = [];
		listeners.push(listener);
	}
	var removeListener(type, listener) {
		var listeners = listenerLists[type];
		if(!listeners || listeners.indexOf(listener) < 0)
			return;
		listeners.splice(listeners.indexOf(listener), 1);
	}

	Smack.modelFunctions = {
		addListener : addListener,
		removeListener : removeListener
	};

	var notify = function(type, ctx) {
		var listeners = listenerLists[type];
		if(!listeners)
			return;
		for(var i = 0; typeof listeners[i] === 'function'; i++)
			listeners[i](ctx);
	};

	Ember.CompilationUnit = DS.Model.extend({
		name : DS.attr('string'),
		source : DS.attr('string'),
		testData : hasMany('TestDatum'),
		didCreate : function() {
			notify('unit created', this);
		},
		didUpdated : function() {
			notify('unit updated', this);
		},
		didDelete : function() {
			notify('unit deleted', this);
		}
	});

	Ember.Connection = DS.Model.extend({
		username : DS.attr('string'),
		password : DS.attr('string'),
		didCreate : function() {
			notify('connection created', this);
		},
		didDelete : function() {
			notify('connection deleted', this);
		}
	});

	Ember.ExecuteEvent = DS.Model.extend({
		name : DS.attr('string'),
		arguments : DS.attr(),
		didCreate : function() {
			notify('execute event created', this);
		}
	});

	Ember.ExecuteAnonymousEvent = DS.Model.extend({
		source : DS.attr('string'),
		arguments : DS.attr(),
		didCreate : function() {
			notify('execute anonymous event created', this);
		}
	});

	Ember.TestDatum = DS.Model.extend({
		name : DS.attr('string'),
		arguments : DS.attr(),
		func : DS.belongsTo('compilationUnit'),
		didCreate : function() {
			notify('test datum created', this);
		},
		didUpdate: function() {
			notify('test datum updated', this);
		},
		didDelete : function() {
			notify('test datum deleted', this);
		}
	});
})();