/**
 * https://leetcode.com/problems/maximum-sum-circular-subarray/
 * 
 * https://www.youtube.com/watch?v=fxT9KjakYPM
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let currentMax = 0;
    let currentMin = 0;
    let kadanesMax = -Infinity;
    let kadanesMin = Infinity;
    let totalSum = 0;

    for(const num of nums) {
        currentMax = Math.max(currentMax + num, num);
        currentMin = Math.min(currentMin + num, num);

        kadanesMax = Math.max(kadanesMax, currentMax);
        kadanesMin = Math.min(kadanesMin, currentMin);

        totalSum += num;
    }

    if(kadanesMax < 0) return kadanesMax;

    return Math.max(kadanesMax, totalSum-kadanesMin);
};

/*
Kadanes Algorithm
To calculate the maximum sum of subarray ending at current element, say maxEnding, we can use the maximum sum ending at the previous element. 
So for any element, we have two choices:

Choice 1: Extend the maximum sum subarray ending at the previous element by adding the current element to it. 
    If the maximum subarray sum ending at the previous index is positive, then it is always better to extend the subarray.
Choice 2: Start a new subarray starting from the current element. If the maximum subarray sum ending at the previous index is negative, 
    it is always better to start a new subarray from the current element.


See the video for explanation of logic
*/

console.log(maxSubarraySumCircular([1,-2,3,-2]));
console.log(maxSubarraySumCircular([5,-3,5]));
console.log(maxSubarraySumCircular([-3,-2,-3]));
console.log(maxSubarraySumCircular([1,-6,-7,4])); //5