/**
 * https://leetcode.com/problems/range-sum-query-immutable/description/
 * 
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let total = 0;
    this.prefixSum = nums.map(num => {
        total += num;
        return total;
    });
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left == 0) return this.prefixSum[right];
    
    return this.prefixSum[right] - this.prefixSum[left - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

let rangesum = new NumArray([-2,0,3,-5,2,-1]);

console.log(rangesum.sumRange(0,2));