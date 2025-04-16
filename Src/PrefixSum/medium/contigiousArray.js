/**
 * https://leetcode.com/problems/contiguous-array/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let count = 0, maxLen = 0;;
    const countMap = new Map();
    countMap.set(0, -1); //count 0 at index -1

    for(let i=0; i< nums.length; i++) {
        count += (nums[i] == 0 ? -1: 1);
        if(countMap.has(count)) {
            maxLen = Math.max(maxLen, i-countMap.get(count));
        } else {
            countMap.set(count, i);
        }
    }

    return maxLen;
};

console.log(findMaxLength([0,1,1,1,1,1,0,0,0]));
