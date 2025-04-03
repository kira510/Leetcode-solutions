/**
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 * 
 * @param {string} s
 * @return {number}
 * 
 * Time: O(n)
 * Space: O(1)
 */
var minAddToMakeValid = function(s) {
    let openBraces = 0;
    let unmatchedClosed = 0;

    for(const char of s) {
        if(char === '(') {
            openBraces++;
        } else {
            if(openBraces>0) {
                openBraces--;
            } else {
                unmatchedClosed++
            }
        }
    }

    return openBraces + unmatchedClosed;
};

console.log(minAddToMakeValid('())'));
console.log(minAddToMakeValid('((('));


/*
 * Time: O(n)
 * Space: O(n)
*/
var minAddToMakeValidStack = function(s) {
    let openBracesStack = [];
    let unmatchedClosed = 0;

    for(const char of s) {
        if(char === '(') {
            openBracesStack.push(char);
        } else {
            if(openBracesStack.length>0) {
                openBracesStack.pop();
            } else {
                unmatchedClosed++
            }
        }
    }

    return openBracesStack.length + unmatchedClosed;
};

console.log(minAddToMakeValidStack('())'));
console.log(minAddToMakeValidStack('((('));
