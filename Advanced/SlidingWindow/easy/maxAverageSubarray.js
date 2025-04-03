/**
 * https://leetcode.com/problems/maximum-average-subarray-i/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// [0,1,2,3,4,5,6,7,8,9] k=3
var findMaxAverage = function(nums, k) {
    let max = 0;

    for(let i=0; i<k; i++) {
        max +=nums[i];
    }

    let i=1; j=i+k-1;
    let oldWindowTotal = max;
    while(i<=nums.length-k) {
        const newWindowTotal = oldWindowTotal - nums[i-1] + nums[j];

        if(newWindowTotal > max) {
            max = newWindowTotal;
        }
        oldWindowTotal = newWindowTotal;
        i++;
        j++;
    }

    return max/k;
};

// console.log(findMaxAverage([1,12,-5,-6,50,3], 4));

console.log(findMaxAverage([0,4,0,3,2], 1));

//Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75