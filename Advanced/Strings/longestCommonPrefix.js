/**
 * https://leetcode.com/problems/longest-common-prefix/
 * 
 * the time complexity of the given longestCommonPrefix function is O(n * m)
 * Space complexity: O(len(strs[0]))
 * 
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    for(i=0; i<strs.length; i++) {
        prefix = getPrefix(prefix, strs[i])
    }

    return prefix;
};

function getPrefix(arr0, arr1) {
    let prefix = '';

    let j=0, i=0;
    while((arr0[i] == arr1[j]) && arr0[i] && arr1[j]) {
        prefix += arr0[i];
        i++;
        j++
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));