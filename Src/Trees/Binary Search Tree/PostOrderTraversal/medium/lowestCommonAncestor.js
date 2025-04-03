/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * Time Complexity: O(n), as each node is visited at most once.
    Space Complexity: O(h), where h is the height of the tree, due to the recursion stack.
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root == p || root == q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if(left && right) return root;
    
    return left ? left : right;    
};

//Problem to solve:
//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/