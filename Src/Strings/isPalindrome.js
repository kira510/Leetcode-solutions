/**
 * https://leetcode.com/problems/valid-palindrome/
 * 
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.toLowerCase();
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "");

    let i=0, j=cleanedStr.length-1, isPalindrome = false;
    while(i<j) {
        if(cleanedStr[i] != cleanedStr[j]) {
            return false
        }

        i++;
        j--;
    }

    return true;
};