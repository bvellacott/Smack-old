pack tstArithmetic;

func add(a, b) { ret a + b; }

func sub(a, b) { ret a - b; }

func mul(a, b) { ret a * b; }

func div(a, b) { ret a / b; }

func mod(a, b) { ret a % b; }

func pow(a,b) { ret a^b; }

// applies to strings also
func eq(a,b) { ret a == b; }

func neq(a,b) { ret a != b; }

func lt(a,b) { ret a < b; }

func le(a,b) { ret a <= b; }

func gt(a,b) { ret a > b; }

func ge(a,b) { ret a >= b; }


func plusMinusPlus(a, b) { ret a + - + b; }

func minusPlusMinus(a, b) { ret a - + - b; }

func plusThenMinus(a, b, c) { ret a + b - c; }

func minusThenPlus(a, b, c) { ret a - b + c; }


func mulThenDiv(a, b, c) { ret a * b / c; }

func divThenMul(a, b, c) { ret a / b * c; }

func mulThenMod(a, b, c) { ret a * b % c; }

func modThenMul(a, b, c) { ret a % b * c; }

func divThenMod(a, b, c) { ret a / b % c; }

func modThenDiv(a, b, c) { ret a % b / c; }


func addThenMul(a, b, c) { ret a + b * c; }

func addThenDiv(a, b, c) { ret a + b / c; }

func addThenMod(a, b, c) { ret a + b % c; }

func subThenMul(a, b, c) { ret a - b * c; }

func subThenDiv(a, b, c) { ret a - b / c; }

func subThenMod(a, b, c) { ret a - b % c; }


func addThenPow(a, b, c) { ret a + b^c; }

func subThenPow(a, b, c) { ret a - b^c; }

func mulThenPow(a, b, c) { ret a * b^c; }

func divThenPow(a, b, c) { ret a / b^c; }

func modThenPow(a, b, c) { ret a % b^c; }


func parenAddThenMul(a, b, c) { ret (a + b) * c; }

func parenAddThenDiv(a, b, c) { ret (a + b) / c; }

func parenAddThenMod(a, b, c) { ret (a + b) % c; }

func parenSubThenMul(a, b, c) { ret (a - b) * c; }

func parenSubThenDiv(a, b, c) { ret (a - b) / c; }

func parenSubThenMod(a, b, c) { ret (a - b) % c; }


func parenAddThenPow(a, b, c) { ret (a + b)^c; }

func parenSubThenPow(a, b, c) { ret (a - b)^c; }

func parenMulThenPow(a, b, c) { ret a * b^c; }

func parenDivThenPow(a, b, c) { ret a / b^c; }

func parenModThenPow(a, b, c) { ret a % b^c; }

