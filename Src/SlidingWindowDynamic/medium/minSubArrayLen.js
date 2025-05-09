/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * 
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLen = Infinity;
    let left = 0, sum = 0;

    for(let right = 0; right<nums.length; right++) {
        sum+=nums[right];

        while(sum >= target) {
            minLen = Math.min(minLen, right-left+1);
            sum-=nums[left];
            left++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
};

// console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));