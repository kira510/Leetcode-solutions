/**
 * https://leetcode.com/problems/continuous-subarray-sum/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const remainderMap = new Map();
    //this is a remainder index map
    remainderMap.set(0, -1); //at index -1, the sum is 0. Base case
    let runningSum = 0;

    for(let i=0; i<nums.length; i++) {
        runningSum+=nums[i];
        let remainder = runningSum%k;

        if(remainderMap.has(remainder)) {
            //return true; fails when [0]
            if(i - remainderMap.get(remainder) > 1) return true
        } else {
            remainderMap.set(remainder, i);
        }
    }

    return false;
};

//console.log(checkSubarraySum([23,2,4,6,7], 6));
console.log(checkSubarraySum([23,2,4,6,7], 13));

/*
Pa%k == Pb%k 

Pa-Pb/6 = 0.

Which means the array from P(a + 1) to P(b) is divisible by 6

Ex: 
[23,2,4,6,7]

P0/6 = 5
P2/6 = 5

P2 - P0 = 29-23 = 6

Therefore: arr[1] to arr[2] is the subarray. 
*/