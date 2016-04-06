//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.

// This is the grammar used to generate the select lexer and parser using the 
// antlr4 tool

grammar Json;

json
	:	object
	|	array
	;
	
object
	:	'{' pair (',' pair)* '}'
	|	'{' '}' // empty object
	;
	
pair
	:	STRING ':' value 
	;
	
array
	:	'[' value (',' value)* ']'
	|	'[' ']' // empty array
	;
	
value
	:	STRING
	|	NUMBER
	|	object // recursion
	|	array // recursion
	|	'true' // keywords
	|	'false'
	|	'null'
	;
	
STRING 
	:	'"' (ESC | ~["\\])* '"' 
	;
	
fragment ESC 
	:	'\\' (["\\/bfnrt] | UNICODE) 
	;
fragment UNICODE 
	: 'u' HEX HEX HEX HEX 
	;
fragment HEX 
	: [0-9a-fA-F] 
	;
	
NUMBER
	:	INT '.' [0-9]+ EXP? 	// 1.35, 1.35E-9, 0.3, -4.5
	|	INT EXP				// 1e10 -3e4
	|	INT					// -3, 45
	;
	
fragment INT 
	:	'0' | [1-9] [0-9]*			// no leading zeros
	;
fragment EXP 
	:	[Ee] INT 			// \- since - means "range" inside [...]
	;

	 