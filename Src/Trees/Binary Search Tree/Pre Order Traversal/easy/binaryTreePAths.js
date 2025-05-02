/**
 * https://leetcode.com/problems/binary-tree-paths/
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = [];
    function treePath(node, path) {
        path += node.val;
        if(!node.left && !node.right) {
            result.push(path);
            return;
        }
        
        if (node.left) treePath(node.left, path + '->');
        if(node.right) treePath(node.right, path + '->');
    }

    treePath(root, '');

    return result;
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
const node5 = new TreeNode(5);

root.left = node2;
root.right = node3;
node2.right = node5;

console.log(JSON.stringify(binaryTreePaths(root)));

/*
Time Complexity: O(N), where N is the number of nodes in the tree. Each node is visited once.
Space Complexity: O(H), where H is the height of the tree. This space is used by the recursion stack.
*/


//-----------------Stack based-----------
var binaryTreePathsStack = function(root) {
    const result = [];
    const stack = [[root, `${root.val}`]];

    while(stack.length) {
        const [node, path] = stack.shift();

        if(!node.left && !node.right) {
            result.push(path);
        }

        if(node.left) stack.push([node.left, path + '->' + node.left.val]);
        if(node.right) stack.push([node.right, path + '->' + node.right.val]);
    }

    return result;
};

/*
Time Complexity: O(N), where N is the number of nodes in the tree. Each node is visited once.
Space Complexity: O(N), considering the storage in the stack in the worst case when the tree is skewed.
*/
