/**
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 * 
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
    const stack = [];

    let current = head;
    while(current) {
        if(current.child) {
            if(current.next) stack.push(current.next);
            current.next = current.child;
            current.next.prev = current;
            current.child = null;
        }

        if(!current.next && stack.length > 0) {
            current.next = stack.pop();
            current.next.prev = current;
        }

        current = current.next;
    }

    return head;
};

/*
Time Complexity
O(N) as we process every node once.
Space Complexity
O(N) to store nodes in the stack in the worst case, all nodes are on a single level with nested children.

*/