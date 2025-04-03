/**
 * https://leetcode.com/problems/sort-colors/
 * 
 * Complexity Analysis
Time Complexity: O(n), where n is the number of elements in the array. We pass over the array twice (once to count, once to overwrite).
Space Complexity: O(1), since we use a fixed-size count array.

 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const numsCount  = [0,0,0];

    for(const num of nums) {
        numsCount[num]++;
    }

    let index = 0;
    for(let i=0; i<numsCount[0]; i++) {
        nums[index]=0;
        index++;
    }

    for(let i=0; i<numsCount[1]; i++) {
        nums[index]=1;
        index++;
    }

    for(let i=0; i<numsCount[2]; i++) {
        nums[index]=2;
        index++;
    }

    return nums;
};

console.log(sortColors([2,0,2,1,1,0]))


/*
Three pointer solution: One-Pass with Dutch National Flag Problem

complexity, same as above
*/
function sortColorsThreePointers(nums) {
    let low=0,mid=0,high=nums.length-1;

    function swap(left, right) {
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right]=temp;
    }

    while(mid <= high) {
        if(nums[mid]==0) {
            swap(low, mid);
            low++;
            mid++
        } else if(nums[mid] == 1) {
            mid++;
        } else {
            swap(mid, high);
            high--;
        }
    }

    return nums;
}

console.log(sortColorsThreePointers([2,0,2,1,1,0]))
console.log(sortColorsThreePointers([0,1,2]))