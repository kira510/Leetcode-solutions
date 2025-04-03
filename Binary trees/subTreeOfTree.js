/* 
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
*/

//USES DEPTH FIRST SEARCH
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtreeMySol = function(root, subRoot) {
    
    function isSameTree(node1, node2) {
        if (!node1 && !node2) return true;
        if(!node1 || !node2 || (node1.val != node2.val)) return false;
        return isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right);
    }

    function dfs(node) {
        if(!node) return false
        if (node.val === subRoot.val && isSameTree(node, subRoot)) {
            return true
        }

        return dfs(node.left) || dfs(node.right);
    }

    return dfs(root)
};

var isSubtree = function(s, t) {
    // given a node, returns whether they are the same
    var isSame = function(node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2 || node1.val!=node2.val) return false;
        return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
    }

	// whether t is a subtree of the given node
    var dfs = function(node) {
        if (!node) return false;
        if (node.val==t.val && isSame(node, t)) {
            return true;
        }
        return dfs(node.left) || dfs(node.right);
    }
    return dfs(s);
};