/**
 * https://leetcode.com/problems/jump-game-vi/
 * 
 * https://www.youtube.com/watch?v=3LRL-aHkDDI
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * [1,-1,-2,4,-7,3], k = 2
 * 
 * 
 * Time Complexity: O(n), because each index is inserted and removed from the deque at most once.
Space Complexity: O(n), due to the storage of the dp array and deque.
 */
//See TAB for explanation.
var maxResult = function(nums, k) {
    const dp = new Array(nums.length).fill(0);
    const deque = [];
    dp[0] = nums[0];
    deque[0] = 0;

    for(i=1; i<nums.length; i++) {
        while(deque.length && deque[0] < i-k) {
            deque.shift();
        }

        dp[i] = nums[i] + dp[deque[0]];

        while(deque.length && dp[deque[deque.length-1]] <= dp[i]) {
            deque.pop();
        }
        deque.push(i);
    }

    return dp[nums.length-1];
};


//console.log(maxResult([1,-1,-2,4,-7,3], 2));
console.log(maxResult([10,-5,-2,4,0,3], 3));