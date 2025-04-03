/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  var twoSum = function(nums, target) {
//     let a, b, exit = false;
//     for(let i=0; i<nums.length-1; i++) {
//         let j=i+1;
//         while(j <= nums.length) {
//             if(nums[i] + nums[j] === target) {
//                 a = i; b = j;
//                 exit = true;
//                 break
//             }
//             j++;
//         }

//         if(exit) {
//             break;
//         }
//     }

//     return [a, b];
// };

var twoSum2 = function(nums, target){

    var saved={}
    var result=[]
    for(i=0; i< nums.length; i++){
      if(saved.hasOwnProperty(nums[i])){
        result[0] = saved[nums[i]] + 1
        result[1] = i + 1;
        return result
      }
      saved[target - nums[i]] = i
    }
  }

console.log(twoSum2([2,3,7,15] , 9));