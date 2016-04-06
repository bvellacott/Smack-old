if(!Smack)
	throw 'Smack is required';
Smack.actions = {};

Smack.actions = (function(){
	var stack = [];
	return {
		undo : function() { document.execCommand('undo'); },
		redo : function() { document.execCommand('redo'); },
		newContentEdit : function(input) {
			return {
				doo : function() { throw 'newContentAdd.doo hasn\'t been implemented'; },
				undoo : function() { throw 'newContentAdd.undoo hasn\'t been implemented'; },
			}
		},
		newContentEdit : function() {
			var action = {
				doo : function() { throw 'newContentAdd.doo hasn\'t been implemented'; },
				undoo : function() { throw 'newContentAdd.undoo hasn\'t been implemented'; },
			};
			stack.push(action);
			return action;
		},
	}
})();
