/**
 * https://leetcode.com/problems/find-duplicate-subtrees/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Time Complexity: O(n), where n is the number of nodes since each node is visited once.
Space Complexity: O(n), for storing serialized subtree strings and duplicates in the result list.
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const subTrees = new Map();
    const result = [];
    
    function serialize(node) {
        if(!node) return null;

        const left = serialize(node.left);
        const right = serialize(node.right);
        const subtreeHash = `${left},${right},${node.val}`;

        if(subTrees.has(subtreeHash)) {
            subTrees.set(subtreeHash, subTrees.get(subtreeHash) + 1);

            if(subTrees.get(subtreeHash) === 2) result.push(node);
        } else {
            subTrees.set(subtreeHash, 1);
        }

        return subtreeHash;
    }
    serialize(root);

    return result;
};