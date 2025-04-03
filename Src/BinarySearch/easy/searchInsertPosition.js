/**
 * https://leetcode.com/problems/search-insert-position/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    function binarySearch(l, r) {
        if(l>r) {
            return l
        }
        const mid = Math.floor((l + r)/2);

        if(nums[mid] == target) return mid;
        else if(target < nums[mid]) {
            return binarySearch(l, mid-1);
        } else {
            return binarySearch(mid+1, r)
        }
    }

    return binarySearch(0, nums.length-1);
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));