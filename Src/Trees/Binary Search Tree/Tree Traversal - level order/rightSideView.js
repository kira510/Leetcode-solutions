/**
 * https://leetcode.com/problems/binary-tree-right-side-view/submissions/1584322780/
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = [];

    function dfs(node, height) {
        if(!node) return;

        result[height] = node.val;

        dfs(node.left, height+1);
        dfs(node.right, height+1)
    }

    dfs(root, 0);

    return result;
};

//Time Complexity: O(N) where N is the number of nodes. 
// Space Complexity: O(H) where H is the height of the tree due to the call stack.