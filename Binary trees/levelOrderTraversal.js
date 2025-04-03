

/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Input: root = [1]
Output: [[1]]
*/




/**
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
 var levelOrder = function(root) {
    let result = [];

    levelOrderTraverse(root, 0);

    return result

    function levelOrderTraverse(node, level) {
        if (!node) {return}

        if(!result[level]) {
            result[level] = [];
        }

        result[level].push(node.val);

        levelOrderTraverse(node.left, level + 1);
        levelOrderTraverse(node.right, level + 1);
    }
};


/* 
var levelOrder = function(root) {
    var result = [];
    var level = 0;
    traverse(root, level);
    return result;

    function traverse(root, level) {
        if (root === null) {
            return;
        }
        else {
            if (level >= result.length) {
                 result[level] = [];
            }
            result[level].push(root.val);
            traverse(root.left, level + 1);
            traverse(root.right, level + 1);
        }
    }};
*/