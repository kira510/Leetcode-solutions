/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j=1;
    let candidate = nums[0];

    let k=0;
    for(let i=1; i<nums.length; i++) {
        if(candidate != nums[i]) {
            j++;
            candidate=nums[i];
            nums[++k]=nums[i];
        }
    }

    return j;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1,1,2]));

var removeDuplicatesEasy = function(nums) {
    let i=0;

    for(let j=1; j<nums.length; j++) {
        if(nums[i] != nums[j]) {
            i++;
            nums[i]=nums[j];
        }
    }

    return i+1;
}

console.log(removeDuplicatesEasy([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicatesEasy([1,1,2]));