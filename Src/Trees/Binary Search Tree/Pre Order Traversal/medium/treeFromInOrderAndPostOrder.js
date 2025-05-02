/**
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * 
 * https://www.youtube.com/watch?v=LgLRTaEMRVc
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const inOrderIndexMap = new Map();

    inorder.forEach((num, index) => {
        inOrderIndexMap.set(num, index);
    })

    function construct(inStart, inEnd, postStart, postEnd) {
        if(inStart > inEnd || postStart > postEnd) return null;

        const root = new TreeNode(postorder[postEnd]);

        const inOrderRootIndex = inOrderIndexMap.get(postorder[postEnd]);
        const leftInOrderLength = inOrderRootIndex - inStart;

        root.left = construct(inStart, inOrderRootIndex-1, postStart, postStart + leftInOrderLength-1);
        root.right = construct(inOrderRootIndex + 1, inEnd, postStart + leftInOrderLength, postEnd-1);

        return root;
    }

    return construct(0, inorder.length-1, 0, postorder.length-1);
};

/*
Time Complexity: O(n), where n is the number of nodes. Each node is processed once.
Space Complexity: O(n), for the hashmap storage and recursive stack space.
*/