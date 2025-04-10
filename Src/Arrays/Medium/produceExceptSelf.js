/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length, res = new Array(n);
    let leftMultiplier = 1
    let rightMultiplier = 1;

    for(let i=0; i<n; i++) {
        res[i] = leftMultiplier;
        leftMultiplier = leftMultiplier * nums[i];
    }

    for(let i=n-1; i>=0; i--) {
        res[i] = res[i]*rightMultiplier;
        rightMultiplier = nums[i]*rightMultiplier;
    }

    return res
};

console.log(productExceptSelf([1,2,3,4]));