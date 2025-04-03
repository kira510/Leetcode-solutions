/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/linked-list-cycle-ii/
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const seen = new Set();

    let curr = head;
    while(!seen.has(curr) && curr !== null) {
        seen.add(curr);
        curr = curr.next;
    }

    return curr;
};


/*
This is: `Floyd's Tortoise and Hare (Cycle Detection)`
soln here: https://www.youtube.com/watch?v=wzoNwa0eOm0&t=279s

check tab for answer
*/

var detectCycleFloyd = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast) {
            let start = head;

            while(start !== slow) {
                start = start.next;
                slow = slow.next;
            }

            return start;
        }
    }

    return null
};