/**
 * https://leetcode.com/problems/ransom-note/
 * 
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const freqMap = new Map();

    for(const char of magazine) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    for(const char of ransomNote) {
        if(freqMap.has(char) && freqMap.get(char) > 0) {
            freqMap.set(char, freqMap.get(char) - 1);
        } else return false;
    }

    return true;
};

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
