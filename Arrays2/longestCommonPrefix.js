/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};

console.log(longestCommonPrefix(["flower","flow","flight"]));

var longestCommonPrefixMine = function(strs) {
    if (strs === undefined || strs.length === 0) { return ''; }
    
    let prev=strs[0];
    for(let i=1; i<strs.length; i++) {
        let j=0;
        let next = strs[i];

        while(prev[j] && next[j] && prev[j] === next[j]) j++;
        prev = prev.slice(0, j);
    }

    return prev
};

console.log(longestCommonPrefixMine(["flower","flow","flight"]));
