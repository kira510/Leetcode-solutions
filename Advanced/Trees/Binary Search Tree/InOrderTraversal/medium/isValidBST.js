/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Time Complexity: O(n), where n is the number of nodes, since each node is visited once.

Space Complexity: O(n), where n is the height of the tree due to recursion stack space.
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let prev = null;

    function inOrder(node) {
        if(!node) return true;

        if(!inOrder(node.left)) return false;

        if(prev !== null) {
            if(prev >= node.val) return false;
        }

        prev = node.val;

        return inOrder(node.right);
    }

    return inOrder(root);
};