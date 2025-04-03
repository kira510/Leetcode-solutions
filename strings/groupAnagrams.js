/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const anaGramObj = {}

    for(let i=0; i<strs.length; i++) {
        let temp = strs[i].split("").sort().join('');

        if(!anaGramObj[temp]) anaGramObj[temp] = [];
        anaGramObj[temp].push(strs[i]);
    }

    return Object.values(anaGramObj);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

