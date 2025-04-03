//Product of Array Except Self

/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//does not work for zero
//  var productExceptSelf = function(nums) {
//     let product = 1;

//     for (let i=0; i<nums.length; i++) {
//         product *= nums[i];
//     }

//     console.log(product)

//     return nums.map(num => {
//         return product/num
//     });
// };

//1, [1,2,3,4] ,1
var productExceptSelf2 = function(nums) {
    let output = [];
    let leftMultiplier = 1;
    let rightMultiplier = 1;

    for (let i=nums.length-1; i>=0; i--) {
        output[i] = rightMultiplier;
        rightMultiplier = rightMultiplier*nums[i];
    }

    for(let j=0; j<nums.length; j++) {
        output[j] = output[j]*leftMultiplier;
        leftMultiplier = leftMultiplier*nums[j];
    } 

    return output
};

console.log(productExceptSelf2([1,2,3,4]));
console.log(productExceptSelf2([-1,1,0,-3,3]));
//[0,0,9,0,0]