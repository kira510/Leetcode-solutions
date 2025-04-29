/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * 
 * https://www.youtube.com/watch?v=0snEunUacZY
 * 
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length) return [];
    const result = [];

    const digitToLetter = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', 
        '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    }

    function backtracking(index, path) {
        if(path.length === digits.length) {
            result.push([...path].join(''));
            return
        }

        for(const letter of digitToLetter[digits[index]]) {
            path.push(letter);
            backtracking(index+1, path);
            path.pop();
        }
    }

    backtracking(0, []);

    return result;
};

console.log(JSON.stringify(letterCombinations("23")));

/*
Time Complexity: O(n*4^n), where N is the number of digits
Space Complexity: O(N + M) due to the recursion stack and the path storage.

Time complexity explanation:

*/
