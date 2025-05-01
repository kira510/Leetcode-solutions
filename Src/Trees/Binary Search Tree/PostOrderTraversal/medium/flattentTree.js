/**
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    function flat(node) {
        if(!node) return;

        flat(node.left);
        flat(node.right);

        const left = node.left;
        const right = node.right;

        let curr = node;
        node.left = null;
        node.right = left;

        while(curr.right) {
            curr = curr.right;
        }

        curr.right = right;
    }

    flat(root);
};

/*
Time Complexity: O(N), where N is the number of nodes. We visit each node exactly once.
Space Complexity: O(H), where H is the height of the tree. 
    This space is used in the function call stack during recursion.
*/

var flattenUsingStack = function (root) {
    if(!root) return root;
    const stack = [root];

    while(stack.length) {
        const node = stack.pop();

        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);

        if(stack.length > 0) node.right = stack[stack.length-1];
        node.left = null;
    }
}

/*
Time Complexity: O(N), where N is the number of nodes. Each node is processed once.
Space Complexity: O(N), in the worst case, when the tree is a complete binary tree, 
we might have all nodes in the stack.
*/