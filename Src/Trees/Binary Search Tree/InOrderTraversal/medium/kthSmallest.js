/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Time Complexity: O(H + k), where H is the height of the tree. 
 * In the worst-case scenario, we might traverse down to the leaf nodes and 
 * then start counting to k.
 * 
 * Space Complexity: O(H), due to the recursion stack in the case of a completely unbalanced tree. 
 * In a balanced tree, this reduces to O(log N).
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0, result;

    function inOrder(node) {
        if(!node || result) return;

        inOrder(node.left);

        count++;
        if(count == k) {
            result = node.val;
            return;
        }
        inOrder(node.right);
    }

    inOrder(root);
    return result;
};