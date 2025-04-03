/**
 * https://leetcode.com/problems/next-greater-element-i/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * TimeComplexity: O(n1 + n2)
 * Space Complexity: O(n2)
 */
var nextGreaterElement = function(nums1, nums2) {
    const map = {};
    const stack = []; //decreasing stack

    for(const num of nums2) {
        while(stack.length && (stack[stack.length - 1] < num)) {
            map[stack.pop()] = num;
        }
        stack.push(num);
    }

    return nums1.map(num => map[num] ? map[num] : -1);
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]))