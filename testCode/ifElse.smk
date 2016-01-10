pack tst;

func ifOneElseIfTwoElse(a) {
	if(a == 1) { ret 1; }
	else if(a == 2) { ret 2; }
	else { ret false; } 
}

func ifOneElse(a) {
	if(a == 1) { ret 1; }
	else { ret false; } 
}