/**
 * https://leetcode.com/problems/contains-duplicate-ii/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const posMap = new Map();

    for(let i=0; i<nums.length; i++) {
        const num = nums[i];
        if(posMap.has(num)) {
            if(Math.abs(i - posMap.get(num)) <= k) return true;
        }
        
        posMap.set(num, i);
    }

    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));
console.log(containsNearbyDuplicate([1,0,1,1], 1));
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));
