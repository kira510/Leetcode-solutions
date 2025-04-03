/**
 * https://leetcode.com/problems/sort-characters-by-frequency/
 * 
 * @param {string} s
 * @return {string}
 * 
 * Normal hashmap and sorting technique
 * 
 * Time Complexity: O(n + klogk) , k is number of keys in freq map.
 * Space Complexity: O(n)
 */
var frequencySort = function(s) {
    const freqMap = {};

    for(const char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    const sortedChars = Object.keys(freqMap).sort((a,b) => freqMap[b] - freqMap[a]);

    let res = '';
    for(const char of sortedChars) {
        res += char.repeat(freqMap[char]);
    }

    return res;
};


var frequencySortWithBucketSort = function(s) {
    const freqMap = {};

    for(const char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    const bucket = Array.from({length: s.length + 1}, () => []); //since max length is s.length and lets say we have all chars same
    Object.keys(freqMap).forEach(char => {
        bucket[freqMap[char]].push(char);
    })

    let res = '';
    for(let i=bucket.length-1; i>0; i--) {
        for(let j=0; j<bucket[i].length; j++) {
            const char = bucket[i][j];
            res += char.repeat(i);
        }
    }

    return res;
};