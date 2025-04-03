/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Time Complexity: O(n), where n is the number of nodes in the binary tree. Each node is visited once.
Space Complexity: O(h), where h is the height of the binary tree, corresponding to the depth of the recursion stack.
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = [];

    function postOrder(node) {
        if(!node) return;

        postOrder(node.left);
        postOrder(node.right);
        result.push(node.val);
    }


    postOrder(root);
    return result;
};