/**
 * https://leetcode.com/problems/3sum/
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const arr = nums.sort((a,b) => a-b);
    const res = [];

    let i=0
    while(i<nums.length-2) {
        let j=i+1, k = nums.length-1;

        while(j<k) {
            const sum = arr[i] + arr[j] + arr[k];

            if(sum < 0) {
                while(arr[++j] === arr[j-1]);
            } else if(sum > 0) {
                while(arr[--k] === arr[k+1]);
            } else {
                res.push([arr[i], arr[j], arr[k]]);
                while(arr[++j] === arr[j-1]);
                while(arr[--k] === arr[k+1]);
            }
        }

        while(arr[++i] === arr[i-1]);
    }

    return res;
};

console.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4])))

/*
Time Complexity: 
    (O(n^2) + logn), reduced from (O(n^3)) because we use two pointers instead of a third loop.
Space Complexity: 
    (O(n)) for storing the results, though the sorting process may take additional space.

*/