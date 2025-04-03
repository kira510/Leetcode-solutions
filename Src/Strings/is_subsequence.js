/**
 * 
 * https://leetcode.com/problems/is-subsequence/
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let j=0, isSubsequence = false;
    for(let i=0; i<t.length; i++) {
        if(t[i] === s[j]) {
            j++;
            if(j == s.length) {
                isSubsequence = true;
                break;
            }
        }
    }

    return isSubsequence;
};