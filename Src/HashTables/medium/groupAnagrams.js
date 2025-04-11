/**
 * https://leetcode.com/problems/group-anagrams/
 * 
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * Time Complexity:
O(M * L), where M is the number of strings and L is the maximum length of a string. Counting characters is linear in each string's length.
Space Complexity:
O(M * L), due to the storage in the map similar to the above approach.

 */
var groupAnagrams = function(strs) {
    const anaGramMap = new Map();
    const charCodeOfa = 'a'.charCodeAt();

    for(const str of strs) {
        let charArray = Array.from({length: 26}, () => 0);

        for(const char of str) {
            charArray[char.charCodeAt() - charCodeOfa]++;
        }

        const hash = charArray.join(',');

        if(!anaGramMap.has(hash)) anaGramMap.set(hash, []);
        anaGramMap.get(hash).push(str);
    }

    return Array.from(anaGramMap.values());
};

console.log(JSON.stringify(groupAnagrams(["eat","tea","tan","ate","nat","bat"])));