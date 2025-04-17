/**
 * https://leetcode.com/problems/maximum-product-subarray/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProduct = nums[0];
    let currentMax = nums[0];
    let currentMin = nums[0];

    for(let i=1;i<nums.length; i++) {
        const tempMax = currentMax;
        currentMax = Math.max(nums[i], currentMax*nums[i], currentMin*nums[i]);
        currentMin = Math.min(nums[i], tempMax*nums[i], currentMin*nums[i]);

        maxProduct = Math.max(maxProduct, currentMax);
    }

    return maxProduct;
};

console.log(maxProduct([2,3,-2,4]))
console.log(maxProduct([-2,0,-1]))
console.log(maxProduct([-2,3,-4]));

/*
LOGIC:
Instead of calculating every subarray product from scratch, we can consider the properties of multiplication:

A positive product can be made larger by multiplying by a positive number (unless overflowed by a negative).
A negative product can turn positive if multiplied by another negative.
Thus, store both the maximum and minimum product up to each index.


*/
