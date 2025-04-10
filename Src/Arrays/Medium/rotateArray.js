/**
 * https://leetcode.com/problems/rotate-array/
 * 
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * Time Complexity: O(n)
 * Space: O(n)
 */
var rotateWithExtraSpace = function(nums, k) {
    const n = nums.length;
    const rotateArray = new Array(n);

    for(let i=0; i<n; i++) {
        rotateArray[(i+k)%n] = nums[i];
    }

    for(let i=0; i<n; i++) {
        nums[i] = rotateArray[i];
    }
};

let nums = [1,2,3,4,5,6,7];
rotateWithExtraSpace(nums, 3)
console.log(nums);


var rotateWithoutExtraSpace = function(nums, k) {
    const n = nums.length;
    k= k%n; //if k == n, then k should be 0, no point in reversing

    function reverse(left, right) {
        while(left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--
        }
    }

    reverse(0, n-1);
    reverse(0, k-1);
    reverse(k, n-1);
};

let nums2 = [1,2,3,4,5,6,7];
rotateWithoutExtraSpace(nums2, 3)
console.log(nums2);