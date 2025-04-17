/**
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxOnesCount = 0, currentOnesCount=0;
    let maxLen = 0;
    let left = 0;

    for(let right=0; right<nums.length; right++) {
        if(nums[right] === 1) currentOnesCount++;

        maxOnesCount = Math.max(maxOnesCount, currentOnesCount);

        if(right - left + 1 - maxOnesCount > k) {
            if(nums[left] === 1) currentOnesCount--;
            left++;
        }
        maxLen = Math.max(maxLen, right-left+1);
    }

    return maxLen
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));
