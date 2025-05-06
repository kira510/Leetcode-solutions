/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0, right=0;

    while(right < nums.length) {
        if(right == left) {
            if(nums[right] != 0) {
                right++;
                left++;
            } else {
                right++;
            }
            continue;
        }

        if(nums[right] != 0) {
            swap(nums, left, right);
            left++;
        }
        
        right++;
    }
};

function swap(a, i, j) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

const nums = [0,1,0,3,12];
moveZeroes(nums)
console.log(nums);


function easyMoveZeros(nums) {
    let lastZeroFound = 0

    for(let current=0; current<nums.length; current++) {
        if(nums[current] != 0) {
            [nums[current], nums[lastZeroFound]] = [nums[lastZeroFound], nums[current]];
            lastZeroFound++;
        }
    }
}

const nums2 = [0,1,0,3,12];
easyMoveZeros(nums2)
console.log(nums2);