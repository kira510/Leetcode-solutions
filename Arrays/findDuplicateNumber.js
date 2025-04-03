/*
Find the Duplicate Number

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2

Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    let obj = {};

    for(let i=0; i<nums.length; i++) {
        if(!obj[nums[i]]) {
            obj[nums[i]] = true;
        } else {
            return nums[i];
        }
    }

    return 0
};

console.log(findDuplicate([1,3,4,2,2]))

//------------------------------------------------------------------------
//JavaScript Solution - Floyd's Cycle Finding Algorithm (Tortoise and Hare)
var findDuplicate2 = function(nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];
    
    while (slow != fast) { // we are guaranteed to have a cycle
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    
    slow = 0;
    
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
};

