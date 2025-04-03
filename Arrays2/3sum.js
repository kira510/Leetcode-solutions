/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/


//[-1,0,1,2,-1,-4]
//[-4, -1, -1, 0, 1, 2]

function threeSum(arr) {
    let output = [];

    arr.sort((a,b) => a-b)

    let i=0;

    while(i<arr.length-2) {
        let j = i+1;
        let k = arr.length - 1;

        while(j<k) {
            let sum = arr[i] + arr[j] + arr[k];

            if(sum<0) {
                while(arr[++j] === arr[j-1]);
            } else if(sum>0) {
                while(arr[--k] === arr[k+1]);
            } else {
                output.push([arr[i], arr[j], arr[k]]);
                while(arr[++j] === arr[j+1]);
                while(arr[--k] === arr[k-1]);
            }
        }

        while(arr[++i]===arr[i-1]);
    }

    return output;
}

console.log(threeSum([-1,0,1,2,-1,-4]));

function threeSum2(nums) {
    nums.sort((a, b) => a - b)
    const res = []
    let i = 0
    
    while (i < nums.length - 2) {
        let j = i + 1
        let k = nums.length - 1
        
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]
            
            if (sum < 0) {
                while (nums[++j] === nums[j - 1]);
            } else if (sum > 0) {
                while (nums[--k] === nums[k + 1]);
            } else {
                res.push([nums[i], nums[j], nums[k]])
                while (nums[++j] === nums[j - 1]);
                while (nums[--k] === nums[k + 1]);
            }
        }
        
        while (nums[++i] === nums[i - 1]);
    }
    
    return res
}

console.log(threeSum2([-1,0,1,2,-1,-4]));