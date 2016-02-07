if(!Smack)
	throw 'Smack is required';
Smack.actions = {};

Smack.actions = (function(){
	var stack = [];
	return {
		undo : function() { throw 'undo hasn\'t been implemented'; },
		redo : function() { throw 'redo hasn\'t been implemented'; },
		newContentEdit : {
			doo : function() { throw 'newContentAdd.doo hasn\'t been implemented'; },
			undoo : function() { throw 'newContentAdd.undoo hasn\'t been implemented'; },
		},
	}
})();
