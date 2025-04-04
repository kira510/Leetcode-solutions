/**
 * https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * Time: O(n)
 * Space: O(n) due to recursive call stack size
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const targetNode = findTargetAndAttachParent(root, null, target);

    const res = [];

    function findNodes(root, distance) {
        if(!root) return;
        if(root.visited) return

        root.visited = true;
        if(distance == k) {
            res.push(root.val);
            return;
        }

        findNodes(root.parent, distance + 1);
        findNodes(root.left, distance + 1);
        findNodes(root.right, distance + 1);
    }

    findNodes(targetNode, 0);
    return res;
};

function findTargetAndAttachParent(root, parent, target) {
    if(!root) return null;

    root.parent = parent;
    if(root == target) return target;

    return findTargetAndAttachParent(root.left, root, target)
        || findTargetAndAttachParent(root.right, root, target);
}

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const root = new TreeNode(3);
const node1 = new TreeNode(5);
root.left = node1;
const node2 = new TreeNode(1);
root.right = node2;

const node3 = new TreeNode(6)
const node4 = new TreeNode(2)
const node5 = new TreeNode(0)
const node6 = new TreeNode(8)

const node7 = new TreeNode(7)
const node8 = new TreeNode(4)

node1.left = node3;
node1.right = node4;
node4.left = node7;
node4.right = node8;

node2.left = node5;
node2.right = node6;

console.log(distanceK(root, node1, 2));
