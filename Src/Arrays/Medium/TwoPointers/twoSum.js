/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSumTowPointerApproach = function(numbers, target) {
    let i=0, j=numbers.length-1;
    while(j>i) {
        if(numbers[j] + numbers[i] > target) {
            j--;
        } else if(numbers[j] + numbers[i] < target) {
            i++;
        } else {
            return [i+1, j+1]
        }
    }
};

var twoSumMapApproach = function(numbers, target) {
    let tracker = {}
    for(let i=0; i<numbers.length; i++) {
        const diff = target - numbers[i];

        if(tracker[diff]) {
            return [tracker[diff], i+1]
        } else {
            tracker[numbers[i]] = i + 1;
        }
    }
};

console.log(twoSumMapApproach([2,7,11,15], 9))