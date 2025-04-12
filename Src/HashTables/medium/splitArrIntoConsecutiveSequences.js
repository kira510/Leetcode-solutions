/**
 * https://leetcode.com/problems/split-array-into-consecutive-subsequences/
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    if(nums.length < 3) return false;

    const freqMap = new Map();
    const tailSeqMap = new Map();

    for(const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    for(const num of nums) {
        if((freqMap.get(num) || 0 ) == 0) continue;

        if((tailSeqMap.get(num-1) || 0) > 0) {
            tailSeqMap.set(num-1, tailSeqMap.get(num-1) - 1);
            tailSeqMap.set(num, (tailSeqMap.get(num) || 0) + 1);
        } else if((freqMap.get(num + 1) || 0) > 0 &&
            (freqMap.get(num + 2) || 0) > 0) {
                freqMap.set(num+1, freqMap.get(num+1) - 1);
                freqMap.set(num+2, freqMap.get(num+2) - 1);
                tailSeqMap.set(num+2, (tailSeqMap.get(num + 2) || 0) + 1)
        } else {
            return false;
        }

        freqMap.set(num, freqMap.get(num) - 1);
    }

    return true;
};

// console.log(isPossible([1,2,3,4]));
// console.log(isPossible([1,2,3,3,4,4,5,5]));
console.log(isPossible([1,2,3,4,4,5]));

/*
Ex: nums = [1,2,3,3,4,4,5,5]
Output: true

Explanation:
[1,2,3,4,5]
[3,4,5]

Time Complexity: 
    O(n), where n is the length of the nums array, 
    since we traverse the list and perform constant-time operations with the maps.
Space Complexity: 
    O(n), due to the hash maps used to store the frequency and tail information for the elements in the array.
*/