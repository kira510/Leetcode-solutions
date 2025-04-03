/**
 * https://leetcode.com/problems/valid-parentheses/
 * 
 * @param {string} s
 * @return {boolean}
 * 
 * Time Complexity
The algorithm makes a single linear scan of the string. Both the time complexity for traversing the string and the average time complexity for push/pop operations on a stack are O(1). Hence, the overall time complexity is O(n).
Space Complexity
We only use a stack to store opening brackets, which is O(n) in the worst case when all the characters are opening brackets.
 */
var isValid = function(s) {
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '[' 
    }

    const stack = [];

    for(let i=0; i<s.length; i++) {
        if(!bracketMap[s[i]]) {
            stack.push(s[i]);
        } else {
            const bracket = stack.pop(s[i]);
            if(bracketMap[s[i]] !== bracket) return false; 
        }
    }

    return stack.length == 0;
};

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([])"))