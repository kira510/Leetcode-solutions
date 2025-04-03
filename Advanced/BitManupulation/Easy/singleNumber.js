/**
 * 
 * https://leetcode.com/problems/single-number/
 * 
 * @param {number[]} nums
 * @return {number}
 */
//can use hashmap or xor.
//read about xor in docs.
var singleNumber = function(nums) {
    let result = 0;

    for(let i=0; i<nums.length; i++) {
        result ^= nums[i]; //a ^ a = 0
    }

    return result
};