/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function binarySearch(l, r) {
        if(l>r) return [-1, -1];

        const mid = Math.floor((l+r)/2);
        if(nums[mid] == target) {
            let i=mid, j=mid;
            while(nums[i]==nums[mid]) {
                i--
            }
            while(nums[j]==nums[mid]) {
                j++
            }
            return [i+1, j-1];
        } else if(target < nums[mid]) {
            return binarySearch(l, mid-1);
        } else {
            return binarySearch(mid+1, r);
        }
    }

    return binarySearch(0, nums.length-1)
};

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 6));
console.log(searchRange([], 0));