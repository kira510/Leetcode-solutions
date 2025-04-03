/*
Given an integer array nums, return the length of the longest strictly increasing
subsequence
.

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let arr = Array(nums.length).fill(1)

    for(let i=0; i<nums.length; i++) {
        for(let j=0; j<i; j++) {
            if(nums[j] < nums[i]) {
                arr[i] = Math.max(arr[i], arr[j] + 1);
            }
        }
    }

    return Math.max(...arr);
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
console.log(lengthOfLIS([7,7,7,7,7,7,7]));
console.log(lengthOfLIS([3,2,1]))


/*
DP apporac
The logic is that we keep another to track of the lenght of subsequence possible till that position.

arr[3] tells the max length of subsequence upto the position 2 in nums.
Example: [10,9,2,5,3,7,101,18]
    here arr[3] is 2.

    which is: Max(arr[3], arr[2] + 1)

Initiall arr as 1 at each position cause the max subseq at each pos is 1.

Then we increment i from 0 to length of array, as we increase,
    each time we loop from j=0 till i to find the max subsequence.

i=0
    j=0
    num[0] < num[0] ---> false

i=1
    j=0
    num[0] < num[1] ---> false

i=2
    j=0
    num[0] < num[2] ---> false
    
    j=1
    num[1] < num[2] ---> false

i=3
    j=0
    num[0] < num[3] ---> false

    j=1
    num[1] < num[3] ---> false

    j=2
    num[2] < num[3] ---> true
    arr[3] = Max(arr[3], arr[2] + 1) = 2 --------> means at num[3], max subseq length = [2,5]

i=4
    j=0
    num[0] < num[4] ---> false

    j=1
    num[1] < num[4] ---> false

    j=2
    num[2] < num[4] ---> true
    arr[4] = Max(arr[4], arr[2] + 1) = 2 --------> means at num[4], max subseq length = [2,3]

    j=3
    num[3] < num[4] ---> false
*/


//--------------------------Binary Search Soln------------------------------------------