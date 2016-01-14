if(!$)
	throw 'jQuery is required';
if(!Smack.bserver)
	throw 'Smack browser server is required';

Smack.bserver.code = $.extend(Smack.bserver.code, {
	exec : function(func, args) {
		if(args)
			return eval('Smack.bserver.code.' + func + '.apply(undefined, args)');
		else
			return eval('Smack.bserver.code.' + func + '.apply(undefined)');
	},
	wait : function(millis) {
		throw 'wait hasn\'t been implemented in the browser standard library';
	}
});


