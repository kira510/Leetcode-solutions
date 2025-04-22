/**
 * https://leetcode.com/problems/basic-calculator-ii/description/
 * 
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let num = '';
    let preOperator = '+';
    const stack = [];

    for(let i = 0; i <= s.length; i++) {
        const char = s[i];
        if(char === ' ') continue;

        if(!isNaN(char)) {
            num+=char;
        } else {
            num = Number(num);

            switch(preOperator) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop()*num);
                    break;
                case '/':
                    stack.push(parseInt(stack.pop()/num));
                    break;
                default:
                    stack.push(num);
                    break;
            }
            num = '';
            preOperator = char;
        }
    }

    return stack.reduce((a,b) => {
        return a + b;
    }, 0)
};

console.log(calculate("3+2*2"));
console.log(calculate(" 3/2 "));
console.log(calculate(" 3+5 / 2 "));

/*
Time Complexity: (O(n)), where (n) is the length of the input string, since we traverse the string once.

Space Complexity: (O(n)) in the worst case, due to the stack.
*/
