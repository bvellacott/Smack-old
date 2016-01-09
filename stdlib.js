if(!$)
	throw 'jQuery is required';
if(!Smack)
	throw 'Smack is required';

Smack.bserver.code.exec = function(func, args) {
	if(args)
		return eval('Smack.bserver.code.' + func + '.apply(undefined, args)');
	else
		return eval('Smack.bserver.code.' + func + '.apply(undefined)');
};
Smack.bserver.code.wait = function(millis) {
	var ready = false;
	setTimeout(function() { ready = true; }, millis);
//	while(!ready) if(ready) break;
}
