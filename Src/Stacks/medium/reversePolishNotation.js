/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * 
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    for(const char of tokens) {
        if(isNaN(char)) {
            const num1 = +stack.pop();
            const num2 = +stack.pop();

            let res;
            switch (char) {
                case '+':
                    res = num2 + num1;
                    break;
                case '-':
                    res = num2 - num1;
                    break;
                case '*':
                    res = num2 * num1;
                    break;
                case '/':
                    // Perform integer division
                    res = Math.trunc(num2 / num1);
                    break;
            }
            stack.push(res);
        } else {
            stack.push(char);
        }
    }

    return +stack.pop();
};

console.log(evalRPN(["2","1","+","3","*"]));
console.log(evalRPN(["4","13","5","/","+"]));
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));

/*
Time Complexity: O(n)

Space Complexity:O(n)

*/
