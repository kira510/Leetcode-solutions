/**
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity, second = Infinity;

    for(const num of nums) {
        if(num <=first) first = num;
        else if(num <= second) second = num;
        else return true;
    }

    return false;
};
// [2,1,5,0,4,6]

// console.log(increasingTriplet([1,2,3,4,5]))
// console.log(increasingTriplet([5,4,3,2,1]))
// console.log(increasingTriplet([2,1,5,0,4,6]))

console.log(increasingTriplet([20,100,10,12,5,13]));
