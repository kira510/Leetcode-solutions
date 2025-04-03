/*

2. Is Sub Tree? Using recursion.

      1
  2       3
4   5   6   7

  2
4    5

*/


/*

class Tree {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;   
    }
}

*/

function isSubtree(root, subroot) {

    function nodeTraverse(node) {
        if(!node) {return false}
    
        if(node.val === subroot.val) {
            if(isSameTree(node, subroot)) {
                return true
            }
        }

        return nodeTraverse(node.left) || nodeTraverse(node.right)
    }

    return nodeTraverse(root)
} 

function isSameTree(node1, node2) {
    if(!node1 && !node2) {
        return true;
    }

    if(!node1 || !node2 || (node1.val != node2.val)) {
        return false
    }

    return isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right)
}

