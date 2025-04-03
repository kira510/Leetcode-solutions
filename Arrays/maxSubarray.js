/*
Maximum Subarray

Given an integer array nums, find the subarray which has the largest sum and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:

Input: nums = [1]
Output: 1

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0], summer = 0;
    nums.forEach(num => {
        summer += num;
        if (summer > maxSum) {
            maxSum = summer;
        }

        summer = Math.max(summer, 0); //make summer 0 if negative num is there
    })
    return maxSum
}

//console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([9,9,9,-9,-9,-9, 9, 9 ,9 ,9]));
console.log(maxSubArray([9,9,9,-9,-9,-9,81]));
console.log(maxSubArray([-15, -16, -2, -3]));
console.log(maxSubArray([1, 2, 3, -1, 9]));
