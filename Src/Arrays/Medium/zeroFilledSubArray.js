/**
 * https://leetcode.com/problems/number-of-zero-filled-subarrays/
 * 
 * https://www.youtube.com/watch?v=G-EWVGCcL_w
 * 
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0;
    let zeroCounter = 0;

    for(let i=0; i<nums.length; i++) {
        if(nums[i] !== 0) {
            zeroCounter = 0;
        } else {
            zeroCounter++;
            count += zeroCounter;
        }
    }

    return count;
};

console.log(zeroFilledSubarray([1,3,0,0,2,0,0,4]));

function zeroFilledSubarrayBruteForce(nums) {
    let count = 0;
    
    // Loop over every starting point
    for (let start = 0; start < nums.length; start++) {
        // Initialize the current subarray sum
        let isZeroArray = true;
        
        // Loop to check each subarray starting at `start`
        for (let end = start; end < nums.length; end++) {
            if (nums[end] !== 0) {
                isZeroArray = false;
                break;
            }
            // If is a zero-filled subarray, count it
            if (isZeroArray) {
                count++;
            }
        }
    }

    return count;
}

//console.log(zeroFilledSubarrayBruteForce([1,3,0,0,2,0,0,4]));

/*
Pattern Formula:

number of zeros -> no of subarrays
0 -> 1
00 -> 3 //add 2 to prev
000 -> 6 //+3
0000 -> 10 //add 4 t0 6 (ie the length of the array)

so on

Formula:
if n is length of subarray,

number of subarrays = n*(n+1)/2

*/