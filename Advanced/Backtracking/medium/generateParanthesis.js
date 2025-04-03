/**
 * https://leetcode.com/problems/generate-parentheses/
 * 
 * @param {number} n
 * @return {string[]}
 * 
 * Time Complexity: O(4^n / √n)
Each valid sequence has a well-defined length, and the Catalan number grows exponentially with n.
Space Complexity: O(n)
The recursion stack will go at most n levels deep. Additionally, result storage grows with the number of valid sequences generated.

 * 
 */
var generateParenthesis = function(n) {
    const result = [];

    function backtracking(str, openCount, closeCount) {
        if(str.length === 2*n) {
            result.push(str);
            return
        }

        if(openCount < n) {
            backtracking(str + '(', openCount + 1, closeCount);
        }

        if(closeCount < openCount) {
            backtracking(str+')', openCount, closeCount+1)
        }
    }

    backtracking('', 0, 0);

    return result;
};

console.log(generateParenthesis(3));