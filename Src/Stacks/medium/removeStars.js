/**
 * https://leetcode.com/problems/removing-stars-from-a-string/
 * 
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];

    for(const char of s) {
        if(char == '*') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};

/*
Time Complexity: O(n)

space Complexity: O(n)
*/