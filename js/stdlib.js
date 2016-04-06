if(!$)
	throw 'jQuery is required';
if(!Smack.bserver)
	throw 'Smack browser server is required';

Smack.bserver.code._funcs_ = $.extend(Smack.bserver.code._funcs_, {
	exec : function(func, args) {
		var ids = func.split('.');
		var callString = 'Smack.bserver.code.' + ids.slice(0, ids.length-1).join('.') + '._funcs_.' + ids[ids.length-1];
		if(args)
			return eval(callString + '.apply(undefined, args)');
		else
			return eval(callString + '.apply(undefined)');
	},
	wait : function(millis) {
		throw 'wait hasn\'t been implemented in the browser standard library';
	},
});

Smack.bserver.code.ary = {
	_funcs_ : {
		length : function(ary) { return ary.length; }
	}
}


