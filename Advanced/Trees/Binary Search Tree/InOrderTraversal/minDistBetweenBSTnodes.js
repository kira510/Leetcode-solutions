/**
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * note: Its balanced
 * 
 *
Time Complexity: O(N), since each node is visited once during the traversal.

Space Complexity: O(H), where H is the height of the BST, due to the recursive call stack. 
For balanced BSTs, this is O(log N). In the worst case, it's O(N) for an unbalanced tree. 
This approach improves on the space needed for tracking the nodes.
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let prev = null; min = Infinity;

    function inOrder(node) {
        if(!node) return;

        inOrder(node.left);

        if(prev !== null) {
            min = Math.min(min, node.val-prev);
        }

        prev = node.val;
        inOrder(node.right);
    }

    inOrder(root);
    return min;
};