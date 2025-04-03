/**
 * https://leetcode.com/problems/jump-game-ii/
 * 
 * https://www.youtube.com/watch?v=9kyHYVxL4fw
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 * TimeComplexity: O(n)
 * SpaceComplexity: O(1)
 */
var jump = function(nums) {
    let jumps = 0;
    let maxCoverage = 0;
    let farthest = 0;

    for(let i=0; i<nums.length-1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if(i == maxCoverage) {
            maxCoverage = farthest;
            jumps++; 
        }
    }

    return jumps;
};

console.log(jump([2,3,1,1,4]));
console.log(jump([2,3,0,1,4]));
