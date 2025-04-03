//Longest Substring Without Repeating Characters

/* 
Given a string s, find the length of the longest
substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let tempStr = [];
    let maxLength = 0;

    for(let i=0; i<s.length; i++) {
        let index = tempStr.indexOf(s[i]);
        if(index === -1) {
            //if not present then slice the string till this item
            tempStr.push(s[i]);
            maxLength = Math.max(tempStr.length, maxLength);
        } else {
            tempStr = tempStr.slice(tempStr.indexOf(s[i])+1, tempStr.length);
            tempStr.push(s[i]);
        }
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));