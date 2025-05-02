/**
 * https://leetcode.com/problems/binary-search-tree-iterator/
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
 */
var BSTIterator = function(root) {
    this.nodes = [];
    this.index = -1;
    this.inOrderTraversal(root);
};

BSTIterator.prototype.inOrderTraversal = function(node) {
    if(!node) return;
    this.inOrderTraversal(node.left);
    this.nodes.push(node.val);
    this.inOrderTraversal(node.right);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.nodes[++this.index];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.index + 1 < this.nodes.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 * 
 * Time Complexity:

Preprocessing (constructor call): O(N), where N is the number of nodes in the BST since we are performing a complete in-order traversal.
next(): O(1) since we're simply accessing the next element.
hasNext(): O(1) since it's just checking if more elements exist.
Space Complexity:

O(N) due to storing all node values in an array.
 */