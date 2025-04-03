/*
Given a string s, return the longest
palindromic
substring
in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s || s.length < 1) { return ''};
    if(s.length < 2) {return s};

    let start = 0; maxLength = 1;

    function expandFromMiddle(s, left, right) {
        if(!s || left > right) { return 0 }
    
        while((left >=0 && right < s.length) && (s[left] === s[right])) {
            if(right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1
            }

            left--;
            right++;
        }
    }

    for(let i=0; i<s.length; i++) {
        expandFromMiddle(s, i, i)
        expandFromMiddle(s, i, i+1)
    }

    return s.slice(start, start + maxLength)
};

//console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
