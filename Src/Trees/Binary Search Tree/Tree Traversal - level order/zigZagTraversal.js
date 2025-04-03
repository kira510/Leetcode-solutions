/**
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    const result = [];
    let currentStack = [root];
    let nextStack = [];
    let leftToRight = true;
    
    while(currentStack.length > 0) {
        const level = [];

        while(currentStack.length > 0) {
            const node = currentStack.pop();
            level.push(node.val);
            if(leftToRight) {
                if(node.left) nextStack.push(node.left);
                if(node.right) nextStack.push(node.right);
            } else {
                if(node.right) nextStack.push(node.right);
                if(node.left) nextStack.push(node.left);
            }
        }

        result.push(level);
        leftToRight = !leftToRight;
        [currentStack, nextStack] = [nextStack, currentStack];
    }

    return result;
};

/*
Time Complexity: O(n), where n is the number of nodes in the tree. Each node is processed exactly once.
Space Complexity: O(n) for the stacks used to store nodes in each level.
*/