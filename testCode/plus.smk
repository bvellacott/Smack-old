pack tstArithmetic;

func add(a, b) { ret a + b; }

func sub(a, b) { ret a - b; }

func mul(a, b) { ret a * b; }

func div(a, b) { ret a / b; }

func mod(a, b) { ret a % b; }

func pow(a,b) { ret a^b;}

func plusMinusPlus(a, b) { ret a + - + b; }

func minusPlusMinus(a, b) { ret a - + - b; }

func plusThenMinus(a, b, c) { a + b - c };

func minusThenPlus(a, b, c) { a - b + c };

func mulThenDiv(a, b, c) { a * b / c };

func divThenMul(a, b, c) { a / b * c };

func mulThenMod(a, b, c) { a * b % c };

func modThenMul(a, b, c) { a % b * c };

func divThenMod(a, b, c) { a / b % c };

func modThenDiv(a, b, c) { a % b / c };
