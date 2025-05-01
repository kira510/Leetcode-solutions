/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
 * 
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(!root) return root;

    let dummy = new Node(0);
    let curr = root;

    while(curr) {
        let currentLevel = dummy;

        while(curr) {
            if(curr.left) {
                currentLevel.next = curr.left;
                currentLevel = currentLevel.next;
            }

            if(curr.right) {
                currentLevel.next = curr.right;
                currentLevel = currentLevel.next;
            }

            curr = curr.next;
        }

        curr = dummy.next;
        dummy.next = null;
    }

    return root;
};

/*
Time Complexity: O(N) because each node is processed once.
Space Complexity: O(1) because no extra space is used apart from pointers.
*/