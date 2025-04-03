/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Time Complexity:
O(n), where n is the number of nodes in the tree, since we visit each node once.
Space Complexity:
O(n) in the worst case if the tree is unbalanced because it depends on the height of the tree. 
For a balanced tree, the space complexity is O(log n).
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];

    function inOrder(node) {
        if(!node) return;

        inOrder(node.left);
        result.push(node.val);
        inOrder(node.right);
    }

    inOrder(root);
    return result;
};