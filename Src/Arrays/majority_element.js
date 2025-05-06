/**
 * https://leetcode.com/problems/majority-element/
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */
/*
O(n) space complexity
*/
var majorityElement = function(nums) {
    let tracker = {};

    nums.forEach(num => {
        if(tracker[num]) {
            tracker[num]++;
        } else {
            tracker[num] = 1;
        }
    })

    const keys = Object.keys(tracker);
    let max = keys[0];
    for(let i=1; i<keys.length; i++) {
        const key = keys[i];
        if(tracker[key] > tracker[max]) {
            max = key;
        }
    }

    return +max;
};

console.log(majorityElement([3,2,3]));


// The Boyer-Moore Voting Algorithm efficiently finds the majority element in linear time. 
// It maintains a candidate and a counter. 
// It increases the counter for the current candidate on matches while switching the candidate when the counter hits zero.

// Code:
function majorityElement2(nums) {
    let candidate = nums[0];
    let count = 0;

    for (const num in nums) {
        if (count == 0) {
            candidate = nums[num];
        }
        count += (nums[num] == candidate) ? 1 : -1;
    }
    return candidate;
}

//console.log(majorityElement2([3,2,3]));
console.log(majorityElement2([2,2,4,4,4]));
//approcah 3:
/*
If the array is sorted, the majority element must be located at the middle index. As there are more occurrences of the majority element than any other element, it consistently dominates around the n/2 index.

Code:
import java.util.Arrays;

public int majorityElement(int[] nums) {
    Arrays.sort(nums);
    return nums[nums.length / 2];
}
Time Complexity:
O(n log n) due to sorting.
Space Complexity:
O(1) when using in-place sorting (ignoring input space).
*/