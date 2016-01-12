pack tst;

func add(a, b) { ret a + b; }

func sub(a, b) { ret a - b; }

func mul(a, b) { ret a * b; }

func div(a, b) { ret a / b; }

func mod(a, b) { ret a % b; }

func pow(a,b) { ret a^b; }

func powParen(a,b) { ret (a)^b; }

func powSignedParen(a,b) { ret -(a)^b; }

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


func addThenAdd(a, b, c) { ret a + b + c; }

func addThenSub(a, b, c) { ret a + b - c; }

func addThenMul(a, b, c) { ret a + b * c; }

func addThenDiv(a, b, c) { ret a + b / c; }

func addThenMod(a, b, c) { ret a + b % c; }

func addThenPow(a, b, c) { ret a + b^c; }


func subThenAdd(a, b, c) { ret a - b + c; }

func subThenSub(a, b, c) { ret a - b - c; }

func subThenMul(a, b, c) { ret a - b * c; }

func subThenDiv(a, b, c) { ret a - b / c; }

func subThenMod(a, b, c) { ret a - b % c; }

func subThenPow(a, b, c) { ret a - b^c; }


func mulThenAdd(a, b, c) { ret a * b + c; }

func mulThenSub(a, b, c) { ret a * b - c; }

func mulThenMul(a, b, c) { ret a * b * c; }

func mulThenDiv(a, b, c) { ret a * b / c; }

func mulThenMod(a, b, c) { ret a * b % c; }

func mulThenPow(a, b, c) { ret a * b^c; }


func divThenAdd(a, b, c) { ret a / b + c; }

func divThenSub(a, b, c) { ret a / b - c; }

func divThenMul(a, b, c) { ret a / b * c; }

func divThenDiv(a, b, c) { ret a / b / c; }

func divThenMod(a, b, c) { ret a / b % c; }

func divThenPow(a, b, c) { ret a / b^c; }


func modThenAdd(a, b, c) { ret a % b + c; }

func modThenSub(a, b, c) { ret a % b - c; }

func modThenMul(a, b, c) { ret a % b * c; }

func modThenDiv(a, b, c) { ret a % b / c; }

func modThenMod(a, b, c) { ret a % b % c; }

func modThenPow(a, b, c) { ret a % b^c; }


func powThenAdd(a, b, c) { ret a^b + c; }

func powThenSub(a, b, c) { ret a^b - c; }

func powThenMul(a, b, c) { ret a^b * c; }

func powThenDiv(a, b, c) { ret a^b / c; }

func powThenMod(a, b, c) { ret a^b % c; }

func powThenPow(a, b, c) { ret a^b^c; }


func parenAddThenMul(a, b, c) { ret (a + b) * c; }

func parenAddThenDiv(a, b, c) { ret (a + b) / c; }

func parenAddThenMod(a, b, c) { ret (a + b) % c; }

func parenAddThenPow(a, b, c) { ret (a + b)^c; }


func parenSubThenMul(a, b, c) { ret (a - b) * c; }

func parenSubThenDiv(a, b, c) { ret (a - b) / c; }

func parenSubThenMod(a, b, c) { ret (a - b) % c; }

func parenSubThenPow(a, b, c) { ret (a - b)^c; }


func parenMulThenPow(a, b, c) { ret (a * b)^c; }

func parenDivThenPow(a, b, c) { ret (a / b)^c; }

func parenModThenPow(a, b, c) { ret (a % b)^c; }


func parenPowThenPow(a, b, c) { ret (a^b)^c; }


func addEqAdd(a, b, c, d) { ret a + b == c + d; }

func addNeqAdd(a, b, c, d) { ret a + b != c + d; }

func addLtAdd(a, b, c, d) { ret a + b < c + d; }

func addLeAdd(a, b, c, d) { ret a + b <= c + d; }

func addGtAdd(a, b, c, d) { ret a + b > c + d; }

func addGeAdd(a, b, c, d) { ret a + b >= c + d; }


func subEqSub(a, b, c, d) { ret a - b == c - d; }

func subNeqSub(a, b, c, d) { ret a - b != c - d; }

func subLtSub(a, b, c, d) { ret a - b < c - d; }

func subLeSub(a, b, c, d) { ret a - b <= c - d; }

func subGtSub(a, b, c, d) { ret a - b > c - d; }

func subGeSub(a, b, c, d) { ret a - b >= c - d; }


func mulEqMul(a, b, c, d) { ret a * b == c * d; }

func mulNeqMul(a, b, c, d) { ret a * b != c * d; }

func mulLtMul(a, b, c, d) { ret a * b < c * d; }

func mulLeMul(a, b, c, d) { ret a * b <= c * d; }

func mulGtMul(a, b, c, d) { ret a * b > c * d; }

func mulGeMul(a, b, c, d) { ret a * b >= c * d; }


func divEqDiv(a, b, c, d) { ret a / b == c / d; }

func divNeqDiv(a, b, c, d) { ret a / b != c / d; }

func divLtDiv(a, b, c, d) { ret a / b < c / d; }

func divLeDiv(a, b, c, d) { ret a / b <= c / d; }

func divGtDiv(a, b, c, d) { ret a / b > c / d; }

func divGeDiv(a, b, c, d) { ret a / b >= c / d; }


func modEqMod(a, b, c, d) { ret a % b == c % d; }

func modNeqMod(a, b, c, d) { ret a % b != c % d; }

func modLtMod(a, b, c, d) { ret a % b < c % d; }

func modLeMod(a, b, c, d) { ret a % b <= c % d; }

func modGtMod(a, b, c, d) { ret a % b > c % d; }

func modGeMod(a, b, c, d) { ret a % b >= c % d; }


func powEqPow(a, b, c, d) { ret a^b == c^d; }

func powNeqPow(a, b, c, d) { ret a^b != c^d; }

func powLtPow(a, b, c, d) { ret a^b < c^d; }

func powLePow(a, b, c, d) { ret a^b <= c^d; }

func powGtPow(a, b, c, d) { ret a^b > c^d; }

func powGePow(a, b, c, d) { ret a^b >= c^d; }


func not(a) { ret !a; }

func and(a, b) { ret a && b; }

func or(a, b) { ret a || b; }


func andOr(a, b, c) { ret a && b || c; }

func orAnd(a, b, c) { ret a || b && c; }


func andParenOr(a, b, c) { ret a && (b || c); }

func orParenAnd(a, b, c) { ret a || (b && c); }


func notAnd(a, b) { ret !a && b; }

func notOr(a, b) { ret !a || b; }

