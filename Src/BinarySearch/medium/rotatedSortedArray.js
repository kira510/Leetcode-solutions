/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = nums.length - 1;

    if(nums[left] < nums[right]) return nums[left]; //already sorted

    while(left < right) {
        const mid = Math.floor((left+right)/2);

        if(mid > 0 && nums[mid] < nums[mid-1]) return nums[mid];

        if(nums[mid] > nums[right]) {
            left = mid+1; //if left side is sorted, then smallest is on right
        } else right = mid-1; // The right side is sorted, so the unsorted minimum is in the left
    }

    return nums[left];
};

console.log(findMin([4,5,6,7,0,1,2]));

/*
Time Complexity: O(log n) because we halve the search space with each pass.
Space Complexity: O(1) because we use a constant amount of space.
*/