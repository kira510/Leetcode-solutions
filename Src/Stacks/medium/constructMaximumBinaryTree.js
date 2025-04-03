/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Time Complexity: O(n), as each element is pushed and popped from the stack at most once.
Space Complexity: O(n), to hold the stack of tree nodes.
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    const stack = [];

    for(let i=0; i<nums.length; i++) {
        const current = new TreeNode(nums[i]);

        while(stack.length && stack[stack.length - 1].val < nums[i]) {
            current.left = stack.pop();
        }

        if(stack.length) {
            stack[stack.length-1].right = current;
        }

        stack.push(current);
    }

    return stack[0];
};

// [[3,2,1,6,0,5]]

/*
Iterative solution:

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var constructMaximumBinaryTree = function(nums) {
    // Recursive helper function to construct the tree
    function construct(nums, left, right) {
        if (left > right) return null;

        // Find the index of the maximum value
        let maxIdx = left;
        for (let i = left + 1; i <= right; i++) {
            if (nums[i] > nums[maxIdx]) {
                maxIdx = i;
            }
        }

        // Create a new node with the maximum value
        let node = new TreeNode(nums[maxIdx]);

        // Recursively build the left and right subtrees
        node.left = construct(nums, left, maxIdx - 1);
        node.right = construct(nums, maxIdx + 1, right);

        return node;
    }

    // Start construction with the full array
    return construct(nums, 0, nums.length - 1);
};

Time Complexity: O(n^2) in the worst case, where n is the number of elements in nums. This happens when the array is sorted in either ascending or descending order as we traverse nearly the entire array for each node.
Space Complexity: O(n) due to the recursive stack depth in the worst case when the array is sorted.
*/