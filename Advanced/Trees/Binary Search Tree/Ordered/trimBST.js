/**
 * https://leetcode.com/problems/trim-a-binary-search-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * 
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 * 
 * Time Complexity: O(N), where N is the total number of nodes in the tree. In the worst case, we might have to check each node once.
Space Complexity: O(N) in the worst case due to the space used by the recursive call stack.

 */
var trimBST = function(root, low, high) {
    if(!root) return null

    if(root.val < low) {
        return trimBST(root.right, low, high)
    } else if(root.val > high) {
        return trimBST(root.left, low, high)
    }

    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);

    return root;
};