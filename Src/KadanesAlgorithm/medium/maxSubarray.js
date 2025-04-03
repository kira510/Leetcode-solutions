/**
 * https://leetcode.com/problems/maximum-subarray/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]; //why not 0? what if all elements are negative?
    let curSum = nums[0];

    for(let i=1; i<nums.length; i++) {
        curSum = Math.max(curSum + nums[i], nums[i]);
        max = Math.max(max, curSum);
    }

    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
//console.log(maxSubArray([-1]));