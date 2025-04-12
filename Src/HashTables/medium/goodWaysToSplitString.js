/**
 * https://leetcode.com/problems/number-of-good-ways-to-split-a-string/
 * 
 * https://www.youtube.com/watch?v=UVfpK3dNGKE
 * 
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    const leftSet = new Set();
    const rightSet = new Set();
    const n = s.length;
    let count = 0;

    const leftCount = new Array(n).fill(0);
    const rightCount = new Array(n).fill(0);

    for(let i=0; i<n; i++) {
        leftSet.add(s[i]);
        leftCount[i] = leftSet.size;
    }

    for(let i=n-1; i>=0; i--) {
        rightSet.add(s[i]);
        rightCount[i] = rightSet.size;
    }

    for(let i=0; i<n-1; i++) {
        if(leftCount[i] === rightCount[i+1]) count++;
    }

    return count;
};

console.log(numSplits("aacaba"));
console.log(numSplits("abcd"));

/*
Time Complexity: O(n), where n is the length of the string. We iterate through the string a few times to build the prefix and suffix arrays.
Space Complexity: O(n), for storing prefix and suffix arrays.
*/
