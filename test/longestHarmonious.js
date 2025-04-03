/*
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].

Example 2:

Input: nums = [1,2,3,4]
Output: 2

Example 3:

Input: nums = [1,1,1,1]
Output: 0
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
//We can prevent using alreadyProcessed by just looping through the keys of the freq map.
var findLHS = function(nums) {
    let freq = {};
    let alreadyProcessed = {};

    for(let i=0 ;i<nums.length; i++) {
        if(freq[nums[i]]) {
            freq[nums[i]]++;
        } else {
            freq[nums[i]] = 1;
        }
    }

    let maxLength = 0;
    let i=0;
    while(i<nums.length) {
        if(alreadyProcessed[nums[i]]) {
            i++
            continue
        }

        if(freq[nums[i] + 1]) {
            let sum = freq[nums[i] + 1] + freq[nums[i]];
            maxLength = Math.max(maxLength, sum)
        }

        alreadyProcessed[nums[i]]=1;
        i++;
    }

    return maxLength;
};

console.log(findLHS([1,3,2,2,5,2,3,7]))
console.log(findLHS([1,2,3,4]))
console.log(findLHS([1,1,1,1]))