/**
 * https://leetcode.com/problems/symmetric-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Time Complexity: O(n), where 'n' is the number of nodes in the tree. This is because every node is checked once.
Space Complexity: O(h), where 'h' is the height of the tree due to the recursion stack. 
In the worst-case scenario, the tree is completely unbalanced, requiring O(n) space (skewed tree).
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true;

    function isMirror(p,q) {
        if(!p & !q) return true;
        if(!p || !q || (p.val !== q.val)) return false;

        return isMirror(p.left, q.right) && isMirror(p.right, q.left)
    }

    return isMirror(root.left, root.right);
};