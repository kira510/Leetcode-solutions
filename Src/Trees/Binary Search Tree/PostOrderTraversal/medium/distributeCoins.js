/**
 * https://leetcode.com/problems/distribute-coins-in-binary-tree/
 * 
 * https://www.youtube.com/watch?v=YfdfIOeV_RU
 * https://www.youtube.com/watch?v=RkVF5PdZJ1w
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
var distributeCoins = function(root) {
    let moves = 0;
    function dfs(node) {
        if(!node) return 0;

        const leftScore = dfs(node.left);
        const rightScore = dfs(node.right);

        moves+=Math.abs(leftScore) + Math.abs(rightScore);

        return node.val + leftScore + rightScore - 1;
    }

    dfs(root);

    return moves;
};

/**
 * 
Time Complexity
O(N), where N is the number of nodes in the tree. We visit each node exactly once.
Space Complexity
O(H), where H is the height of the tree, due to the recursion stack. 
In the worst case (skewed tree), this can be O(N), but typically O(log N) for balanced trees.

 */