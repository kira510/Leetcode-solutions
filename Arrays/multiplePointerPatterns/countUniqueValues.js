/*
Find the total of unique values in sorted array:

[1,2,3,4,4,4,7,7,12,12,13,13] = 7
*/

function countUniqueValues(nums) {
    let i = 0;

    for(let j=1; j<nums.length-1; j++) {
        if(nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
}

console.log(countUniqueValues([1,1,2,3,4,4,4,7,7,12,12,13,13]))
