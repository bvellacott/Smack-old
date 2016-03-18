pack tst;

func isFibonacci(val) {
	fib1 = 0;
	fib2 = 1;
	while(val > fib2) {
		tmp = fib2;
		fib2 = fib1 + fib2;
		fib1 = tmp;
	}
	ret val == fib1 || val == fib2;
}

func containsFibonacci(arr) {
	i = 0;
	while(i < ary.length(arr)) {
		if(isFibonacci(arr[i])) {
			return true;
		}
	}
	return false;
}

func areFibonacci(a, b) {
	return isFibonacci(a) && isFibonacci(b);
}