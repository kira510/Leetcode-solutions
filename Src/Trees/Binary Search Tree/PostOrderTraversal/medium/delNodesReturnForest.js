/**
 * https://leetcode.com/problems/delete-nodes-and-return-forest/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Time Complexity: O(n), where n is the number of nodes in the tree. Each node is visited once.
Space Complexity: O(n + m), where n is the recursion stack space in the worst case and m is the size of the set containing nodes to delete.
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const deleteSet = new Set(to_delete);
    const result = [];

    function postOrder(node, isRoot) {
        if(!node) return null;

        let shouldDelete = false;
        if(deleteSet.has(node.val)) shouldDelete  = true;

        if(isRoot && !shouldDelete) result.push(node);

        node.left = postOrder(node.left, shouldDelete);
        node.right = postOrder(node.right, shouldDelete);

        return shouldDelete ? null : node;
    }


    postOrder(root, true);
    return result;
};

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);

node1.left = node2;
node1.right = null;

node2.left = node4;
node2.right = node3;


console.log(delNodes(node1, [3]));