if(!window.Smack)
	throw 'Smack is required';
if(!window.Ember)
	throw 'Ember is required';
if(!window.DS)
	throw 'Ember data is required';

(function() {
	var compileEventListeners = [];
	Smack.addCompileEventListener = function(listener) {
		compileEventListeners.push(listener);
	};

	var notify = function(ctx, listeners) {
		for(var i = 0; typeof listeners[i] === 'function'; i++)
			listeners[i](ctx);
	};

	Ember.CompileEvent = DS.Model.extend({
		name : DS.attr('string'),
		source : DS.attr('string'),
		didCreate : function() {
			notify(this, compileEventListeners);
		}
	});
})();