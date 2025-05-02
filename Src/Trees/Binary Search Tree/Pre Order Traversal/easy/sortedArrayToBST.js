/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function constructBST(left, right) {
        if(left > right) return null;

        const mid = Math.floor((left+right)/2);
        const node = new TreeNode(nums[mid]);

        node.left = constructBST(left, mid-1);
        node.right = constructBST(mid+1, right);

        return node;
    }

    return constructBST(0, nums.length-1);
};

/*
Time Complexity: 
O(n), where n is the number of nodes in the BST. We visit each node exactly once.
Space Complexity: 
    O(log n), due to the recursion stack during the formation of a balanced BST. 
    The maximum depth of recursion is log n corresponding to the height of the balanced tree.
*/

