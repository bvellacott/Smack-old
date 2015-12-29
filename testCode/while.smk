pack tst;

func addOneWhileLessThan(limit) {
	i = 0;
	result = 0;
	while(i < limit) { 
		result = result + 1; 
		i = i + 1;
	}
	ret result;
}

func callWithInput(funcName, input) {
	exec(funcName, input);
}