/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charTracker = {}, maxLen = 0;

    let j=0;
    let i=0;
    let len = 0;
    while(j < s.length) {
        if(charTracker[s[j]] === undefined) {
            len = j-i+1;
            if(len > maxLen) maxLen = len;
            charTracker[s[j]] = 1;
            j++;
        } else {
            delete charTracker[s[i]];
            i++;   
        }
    }

    return maxLen;
};

var lengthOfLongestSubstringOptimised = function(s) {
    let charMap = new Map();
    let maxLen = 0, i=0, j=0;

    while(j<s.length) {
        if(charMap.has(s[j])) {
            i = Math.max(charMap.get(s[j]) + 1, i);
        }
        charMap.set(s[j], j);
        maxLen = Math.max(maxLen, j - i + 1);
        j++;
    }

    return maxLen;
};

// console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring("tmmzuxt"));
// console.log(lengthOfLongestSubstring("aab"));

console.log(lengthOfLongestSubstringOptimised("dvdf"));
console.log(lengthOfLongestSubstringOptimised("tmmzuxt"));
console.log(lengthOfLongestSubstringOptimised("aab"));