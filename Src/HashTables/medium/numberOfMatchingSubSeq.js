/**
 * https://leetcode.com/problems/number-of-matching-subsequences/description/
 * 
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
function numMatchingSubseq(s, words) {
    const freqMap = new Map();

    for(let i=0; i<s.length; i++) {
        if(!freqMap.has(s[i])) freqMap.set(s[i], []);
        freqMap.get(s[i]).push(i);
    }

    function isSubsequence(word) {
        let prefix = -1;

        for(const char of word) {
            const indices = freqMap.get(char);
            if(!indices) return false;

            let left=0, right = indices.length;
            while(left<right) {
                const middle = Math.floor((left+right)/2);
                if(indices[middle] > prefix) right = middle;
                else left = middle+1;
            }

            if(left === indices.length) return false;
            prefix = indices[left];
        }

        return true;
    }

    let count = 0;
    for(const word of words) {
        if(isSubsequence(word)) count++;
    }

    return count;
}

console.log(numMatchingSubseq("abcde", ["a","bb","acd","ace"]));
console.log(numMatchingSubseq("dsahjpjauf", ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]));

/*
Time Complexity
O(n + m * log(L)): where L is the maximum number of occurrences of any character in s, and m is the number of characters across all words.
Space Complexity
O(n): for storing indices of each character in s.

*/
