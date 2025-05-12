/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let maxLen = 0;

    for(const num of numSet) { //if u iterate over nums then it will timeout
        if(!numSet.has(num-1)) { //start with smallest number the seq might start from
            let count = 0;
            let k = num;
            while(numSet.has(k)) {
                count++;
                k++;
            }
            maxLen = Math.max(maxLen, count);
        }
    }

    return maxLen;
};

console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
console.log(longestConsecutive([1,0,1,2]))

//the above timeouts if i use a map and loop over all numbers in nums.
//use set to avoid duplicates. See output of 2 and 3.
