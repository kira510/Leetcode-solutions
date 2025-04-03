/**
 * https://leetcode.com/problems/diameter-of-binary-tree/
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
var diameterOfBinaryTree = function(root) {
    let max = -Infinity;

    function diameter(node) {
        if(!node) return 0; 

        const leftPath = diameter(node.left);
        const rightPath = diameter(node.right);

        max = Math.max(max, leftPath + rightPath);

        return Math.max(leftPath, rightPath)+1;
    }

    diameter(root);

    return max;
};


class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);

root.left = node2;
root.right = node3;

node2.left = node4;
node2.right = node5;


console.log(diameterOfBinaryTree(root));
