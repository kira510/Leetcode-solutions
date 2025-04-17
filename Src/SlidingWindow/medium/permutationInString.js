/**
 * https://leetcode.com/problems/permutation-in-string/
 * 
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;
    const charCountArr = new Array(26).fill(0);
    const charCodeOfa = 'a'.charCodeAt();

    for(const char of s1) {
        charCountArr[char.charCodeAt() - charCodeOfa]++;
    }

    let required = s1.length;
    let left = 0, right = 0;

    while(right < s2.length) {
        if(charCountArr[s2[right].charCodeAt() - charCodeOfa] > 0) {
            required--;
        }

        charCountArr[s2[right].charCodeAt() - charCodeOfa]--;
        right++;

        if(required === 0) return true;

        if(right - left === s1.length) {
            if(charCountArr[s2[left].charCodeAt() - charCodeOfa] >= 0) {
                required++;
            }
            charCountArr[s2[left].charCodeAt() - charCodeOfa]++;
            left++;
        }

    }

    return false;
};

console.log(checkInclusion('ab', 'eidbaooo'));
console.log(checkInclusion('ab', 'eidboaoo'));
