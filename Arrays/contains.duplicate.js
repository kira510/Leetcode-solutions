/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


*/



/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let tracker = {};
    tracker[nums[0]] = true;

    for(let i = 1; i < nums.length; i++) {
        if(tracker.hasOwnProperty(nums[i])) {
            return true
        }
        tracker[nums[i]] = true;
    }

    return false
};

var containsDuplicate2 = function(nums) {
    return new Set(nums).size < nums.length;
};

console.log(containsDuplicate([1,2,3,1]))