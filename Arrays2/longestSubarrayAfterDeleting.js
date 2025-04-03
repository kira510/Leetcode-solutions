/*
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

 

Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestSubarray = function(nums) {
    let preSum=0, currSum=0, totalSum=0, hasZeros=false;

    if(nums[0] === 0) {
        hasZeros = true;
    } else {
        currSum = 1;
        totalSum = 1;
    }

    for(let i=1; i<nums.length; i++) {
        if(nums[i] === 0) {
            hasZeros = true;
            if(nums[i-1] === 0) {
                preSum = 0;
            } else {
                preSum = currSum;
                currSum = 0;
            }
        } else {
            currSum++
            totalSum = Math.max(currSum+preSum, totalSum);
        }
    }

    return hasZeros ? totalSum : nums.length-1
};


console.log(longestSubarray([0,1,1,1,0,1,1,0,1]))
