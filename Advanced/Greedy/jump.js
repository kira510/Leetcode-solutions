/**
 * https://leetcode.com/problems/jump-game/
 * 
 * @param {number[]} nums
 * @return {boolean}
 * 
 * TimeComplexity: O(n)
 * SpaceComplexity: O(1)
 */
var canJump = function(nums) {
    let maxCoverage = 0, farthest = 0;

    for(let i=0; i<nums.length-1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if(i==maxCoverage) {
            maxCoverage = farthest;
        }
    }

    return maxCoverage >= nums.length-1
};

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));