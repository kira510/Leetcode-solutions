/* 
Given an integer array nums, find a
subarray
that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

/*
This is something I would never come up by myself, so I'm using this discussion as an 
oppotunity to both reinforce the knowledge for myself and possibly share some insights with others.

The intuition is that we store the information about our previous maximum product, 
and as we iterate through the array, we keep using our previous maximum to calculate the new maximum product.
The tricky part of this problem is that negative numbers exist in the input array. 
This causes situations where the smallest previous product (a negative number) can 
become the largest product if the next number in line is also a negative number.
Since the minimum product may have a chance to become the maximum, we need to store 
the information about the previous minimum as well and take it into account when we are calculating our maximum product.

consider examples like: 
A. [3, -1, -6, 4, 9, -50] : when we are 2nd position, min is -3 and max is 3
    When we are 3rd pos, max is 18 (-3*-6), min is -6
    Simlilarly when are at position 6, min is: -216 = -6*4*9, max is: 10800
*/

var maxProduct = function(nums) {
    if (nums.length === 1) return nums[0];
    
    let max = nums[0], min = nums[0], output = nums[0];
    
    console.log('---', max, min, nums[0]);
    for (let i=1;i<nums.length;i++) {
        let prevMax = max;
        
        max = Math.max(nums[i], max * nums[i], min * nums[i]);
        min = Math.min(prevMax * nums[i], nums[i], min * nums[i]);

        console.log('---', nums[i], max, min);
        
        output = Math.max(max, output);
    }
    return output;
};

// var maxProduct = function(nums) {
//     let prevMax = nums[0];
//     let prevMin = nums[0];
//     let result = nums[0];
//     for (let i=1;i<nums.length;i++) {
//         // given the new number, the new maximun can have 3 conditions
//         // 1. number(+) * prevMax(+) is the largest
//         // 2. number(+) it self is the largest
//         // 3. number(-) * prevMin(-) is the largest 
//         curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        
//         curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

// 		// updating the prevMax & prevMin, these two may swap locations
//         prevMax = curMax
//         prevMin = curMin

//         result = Math.max(curMax, result);
//     }
//     return result;
// }

console.log(maxProduct([3, -1, -6, 4, 9, -50]))

