/**
 * https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 
 * Time: O(N), same as the first approach because each node is visited once.
    Space: O(H), with recursion stack space corresponding to the height of the tree.

 */
var maxAncestorDiff = function(root) {
    function dfs(node, currentMax, currentMin) {
        if(!node) return 0;

        const diff = Math.max(Math.abs(currentMax-node.val), Math.abs(currentMin-node.val));

        currentMax = Math.max(currentMax, node.val);
        currentMin = Math.min(currentMin, node.val);


        const leftDiff = dfs(node.left, currentMax, currentMin);
        const rightDiff = dfs(node.right, currentMax, currentMin);

        return Math.max(diff, leftDiff, rightDiff);
    }

    return dfs(root, root.val, root.val);
};