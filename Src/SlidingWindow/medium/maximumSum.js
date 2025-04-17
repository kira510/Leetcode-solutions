/**
 * https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    const uniqueSet = new Set();
    let maxCount = 0;
    let currentCount = 0;

    for(let i=0, j=0; j<nums.length; j++) {
        while(uniqueSet.has(nums[j])) {
            uniqueSet.delete(nums[i]);
            currentCount-=nums[i];
            i++;
        }

        uniqueSet.add(nums[j]);
        currentCount+=nums[j];

        if(j-i+1 === k) {
            maxCount = Math.max(maxCount, currentCount);
            uniqueSet.delete(nums[i]);
            currentCount-=nums[i];
            i++;
        }
    }

    return maxCount;
};

// console.log(maximumSubarraySum([1,5,4,2,9,9,9], 3));
// console.log(maximumSubarraySum([4,4,4], 3));
console.log(maximumSubarraySum([1,2,2], 2));

/*
Time Complexity: O(n), where n is the length of the array as each element is added and removed from the set at most once.
Space Complexity: O(k), for storing unique elements in the set.
*/