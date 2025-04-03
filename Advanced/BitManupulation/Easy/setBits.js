/**
 * https://leetcode.com/problems/number-of-1-bits/
 * 
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;

    while(n != 0) {
        n = n & (n-1); //makes the last bit in n to 0.
        count++
    }

    return count;
};

/**
 * https://leetcode.com/problems/number-of-1-bits/
 * 
 * @param {number} n
 * @return {number}
 */
var hammingWeightBruteForce = function(n) {
    let count = 0;
    for(let i = 0; i<32; i++) {
        if(n & 1 == 1) {
            count++;
        }
        n = n >> 1;
    }

    return count;
};