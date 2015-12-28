pack tst;

func add(a, b) {
	ret a + b;
}

func retTrue() {
	ret true;
}

func invokeAdd(a, b) {
	ret tst.add(a, b);
}

func invokeTrue() {
	ret tst.retTrue();
}