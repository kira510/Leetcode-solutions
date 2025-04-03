/* 
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.


Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.


Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
*/

var maxPathSum = function(root) {
    if (root === null) return 0;
    
	// Save a max and set it to the lowest possible value
    let max = -Infinity;
    
	// Call the recurisve function that will update the max variable above
    maxPath(root);
   
   // Return our calculated value
    return max;
    
    function maxPath(node) {
		// If the subtree is empty then it doesn't add or detract from our current path
        if(node === null) return 0;
        
		// We find the max of taking the path to the left - if its less than 0
		// we will not include it in our path so we default it to 0
        const leftMax = Math.max(0, maxPath(node.left));
		
		// Same logic applies to the right side
        const rightMax = Math.max(0, maxPath(node.right));
		
		// So the max path that passes through our current node
        const thisPath = leftMax + rightMax + node.val;
        
		// Update the max if its higher
        max = Math.max(max, thisPath);
        
		// Now we return the max path for our parent. We can only choose one branch
		// of our current path though, left or right plus our node's value
        return Math.max(leftMax, rightMax) + node.val;        
    }
};