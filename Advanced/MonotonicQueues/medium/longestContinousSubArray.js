/**
 * https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
 * 
 * uses dequeue, can remove from any ends
 * 
 * Time Complexity: O(n), where n is the size of the input array. Each element is added and removed from the deques at most once.
Space Complexity: O(n), because in the worst case, the deques can contain all elements of the array.
 * 
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
function longestSubarray(nums, limit) {
    let maxLen = 0;
    const maxQueue = [];
    const minQueue = [];
    let right=0, left=0;

    while(right < nums.length) {
        while(maxQueue.length && nums[maxQueue[maxQueue.length-1]] < nums[right]) {
            maxQueue.pop();
        }
        maxQueue.push(right);

        while(minQueue.length && nums[minQueue[minQueue.length-1]] > nums[right]) {
            minQueue.pop();
        }
        minQueue.push(right);

        while(nums[maxQueue[0]] - nums[minQueue[0]] > limit) {
            left++;
            if(maxQueue[0] < left) maxQueue.shift();
            if(minQueue[0] < left) minQueue.shift();
        }

        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }

    return maxLen;
}


console.log(longestSubarray([10,1,2,4,7,2], 5))
console.log(longestSubarray([10,1,2,4,7,1], 5))