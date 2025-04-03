/**
 * https://leetcode.com/problems/subarray-sum-equals-k/solutions/6156695/adding-number-of-current-total-k/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let total = 0, count = 0;
    const preSum = {0:1};

    for(const num of nums) {
        total += num;

        if(preSum[total - k] !== undefined) {
            count += preSum[total - k];
        }

        preSum[total] = (preSum[total] || 0) + 1;
    }

    return count;
}



console.log(subarraySum([1,1,-1,1,2,5], 7));