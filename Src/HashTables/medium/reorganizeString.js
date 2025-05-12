/**
 * https://leetcode.com/problems/reorganize-string/
 * 
 * https://www.youtube.com/watch?v=2g_b1aYTHeg
 * 
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const freqMap = new Map();
    const maxHeap = [];

    for(const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    for(const [char, freq] of  freqMap) {
        maxHeap.push([char, freq]);
    }

    maxHeap.sort((a,b) => b[1] - a[1]);

    let prev = ['', -1];
    const result = [];

    while(maxHeap.length > 0) {
        const [char, freq] = maxHeap.shift();
        result.push(char);

        if(prev[1] > 0) {
            maxHeap.push(prev);
            maxHeap.sort((a,b) => b[1] - a[1]);
        }

        prev = [char, freq-1];
    }

    if(result.length < s.length) return '';

    return result.join('');
};

console.log(reorganizeString("aab"))
console.log(reorganizeString("aaab"))

/*
One solution we can think of is: 
Keep a freq map and arrange in descending order of their count
Then loop one by one and arrange them

Ex: {a: 2, b:2, c:2 }
abcabc

But what if: aaabc is the string?
abcaa -> not possible

Solution:
ex: {a: 3, b:1, c:1}
abaca
*/

/*
Time Complexity
    O(n log k): Priority queue operations for each character, 
    where n is the string length and k is the number of unique characters.
Space Complexity
    O(k): For storing characters and their counts in the heap.
*/

var reorganizeString2 = function(s) {
    const freqMap = new Map();
    const maxHeap = [];

    for(const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    for(const [char, freq] of freqMap) 
        maxHeap.push([char, freq]);

    maxHeap.sort((a,b) => b[1] - a[1]);

    const result = [];
    let prev = ['', -1];
    while(maxHeap.length) {
        const [char, freq] = maxHeap.shift();

        result.push(char);
        if(prev[1] > 0) {
            maxHeap.push(prev);
            maxHeap.sort((a,b) => b[1] - a[1]);
        }

        prev = [char, freq-1];
    }

    if(result.length < s.length) return '';

    return result.join('');
};
