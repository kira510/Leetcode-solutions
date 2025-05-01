/**
 * https://leetcode.com/problems/maximum-width-of-binary-tree/
 * https://www.youtube.com/watch?v=FPzLE2L7uHs
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
function widthOfBinaryTree(root) {
    if (!root) return 0;

    let maxWidth = 0;
    const queue = [[root, 0]]; // Initializing queue with root node and its index

    while (queue.length > 0) {
        const levelLength = queue.length;
        let minIndex = queue[0][1]; // The first node's index in the current level
        let first = 0, last = 0; // To track the first and last indices at this level
        
        for (let i = 0; i < levelLength; ++i) {
            const [node, index] = queue.shift();
            const normalizedIndex = index - minIndex; // Normalize to avoid large numbers
            
            // Update first and last index at the level
            if (i === 0) first = normalizedIndex;
            last = normalizedIndex;
            
            // Add children to queue with calculated indices
            if (node.left) queue.push([node.left, 2 * normalizedIndex + 1]);
            if (node.right) queue.push([node.right, 2 * normalizedIndex + 2]);
        }
        maxWidth = Math.max(maxWidth, last - first + 1); // Update the maximum width
    }
    
    return maxWidth;
}