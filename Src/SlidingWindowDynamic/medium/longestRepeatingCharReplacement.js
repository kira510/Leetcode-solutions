/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * https://www.youtube.com/watch?v=gqXU1UyA8pk&t=882s
 * 
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
    let maxCharCount = 0;
    let charCountArray = new Array(26).fill(0);
    let maxLen = 0, left = 0;

    for(let right=0; right<s.length; right++) {
        const charCode = s[right].charCodeAt() - 'A'.charCodeAt();
        charCountArray[charCode]++;
        maxCharCount = Math.max(maxCharCount, charCountArray[charCode]);

        let currentLen = right - left + 1;
        if(currentLen - maxCharCount > k) {
            charCountArray[s[left].charCodeAt() - 'A'.charCodeAt()]--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

console.log(characterReplacement('AAABBCCBBBB', 2));
console.log(characterReplacement('AABABBA', 1));

/*

Time Complexity: O(n) - A single pass solution maintaining a sliding window.

Space Complexity: O(1) - Fixed space for a constant-size auxiliary array and counters.


LOGIC:
The length - maxChar count => returns the number of characters that should be replaced.

If it is less than k then its a valid subsequecnce, if greater then shift left by 1.

Why do we dont reduce maxCharCount when we shift left?
In example 1, doesnt this mean A is still the largest and we have removed A from left?

Technically speacking, the maxlen changes only if maxCountArray is exceeded otherwise it remains the same.
That is the result is maximised only if find a new maxCharCount.

*/