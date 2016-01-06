if(!$)
	throw 'jQuery is required';
if(!Smack)
	throw 'Smack is required';

Smack.bserver.stdLib = (function(){
	return {
		exec : function(func, args) {
			if(args)
				func.apply(undefined, args)
			else
				func.apply(undefined);
		}
	}
})();
