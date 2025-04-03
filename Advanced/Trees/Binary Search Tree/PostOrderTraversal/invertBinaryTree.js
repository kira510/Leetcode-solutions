/**
 * https://leetcode.com/problems/invert-binary-tree/
 * 
 * Definition for a binary tree root.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Time Complexity: O(n)

We visit each node exactly once, where n is the number of nodes in the tree.
Space Complexity: O(h)

This is the space used by the recursion stack. "h" is the height of the tree, 
which in the worst case is O(n) for a skewed tree.
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null;

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root
};