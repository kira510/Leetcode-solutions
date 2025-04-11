/**
 * https://leetcode.com/problems/number-of-good-pairs/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0
    const freqMap = {};

    for(const num of nums) {
        if(freqMap[num]) {
            //if the number appears again, then it forms a new pair with each of the previous
            //occurances, so simple.
            count+=freqMap[num];
            freqMap[num]++;
        } else {
            freqMap[num] = 1;
        }
    }

    return count;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));
console.log(numIdenticalPairs([1,1,1,1]))