/**
 * https://leetcode.com/problems/count-complete-tree-nodes/
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
 */
var countNodes = function(root) {
    function leftHeight(node) {
        if(!node) return 0;

        return 1 + leftHeight(node.left);
    }

    function rightHeight(node) {
        if(!node) return 0;

        return 1 + rightHeight(node.right);
    }

    function countSubTreeNodes(node) {
        const leftDepth = leftHeight(node);
        const rightDepth = rightHeight(node);
        
        if(leftDepth === rightDepth) return Math.pow(2, leftDepth) - 1;

        return 1 + countSubTreeNodes(node.left) + countSubTreeNodes(node.right);
    }

    return countSubTreeNodes(root);
};

/*
Time Complexity:
    At max we traverse Log(N) nodes each time to find the height and also compute no of nodes
    threfore O(LogN * LogN)

Space Complexity:
    Recursive space: O(LogN)
*/