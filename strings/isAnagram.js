/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length != t.length) return false;

    let wordTracker = {}

    for(let char in s) {
        if(!wordTracker[s[char]]) {
            wordTracker[s[char]] = 1
        } else {
            wordTracker[s[char]]++
        }
    }

    for(let char in t) {
        if(!wordTracker[t[char]]) return false;
        wordTracker[t[char]]--;
    }

    return true
};

console.log(isAnagram("anagram", "anagram"));