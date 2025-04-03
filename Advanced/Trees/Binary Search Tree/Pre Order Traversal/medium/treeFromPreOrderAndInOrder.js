/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * This approach is O(n) because each element in the preorder and inorder lists is processed exactly once.
Space Complexity:
The space complexity remains O(n) due to the recursion stack and the hashmap storing all nodes.
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const inOrderMap = {};

    inorder.forEach((val,i) => {
        inOrderMap[val] = i;
    })

    let i = 0;
    function build(left, right) {
        if(left > right) return null;

        const nodeVal = preorder[i++];
        const node = new TreeNode(nodeVal);

        const inOrderIndex = inOrderMap[nodeVal];

        node.left = build(left, inOrderIndex-1);
        node.right = build(inOrderIndex+1, right);

        return node;
    }

    return build(0, preorder.length-1);
};