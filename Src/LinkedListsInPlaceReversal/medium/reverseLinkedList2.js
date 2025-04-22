/**
 * https://leetcode.com/problems/reverse-linked-list-ii/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head || left == right) return head;

    let dummy = new ListNode(0, head);
    let prev = dummy;

    for(let i=1; i<left; i++) {
        prev = prev.next;
    }

    let curr = prev.next;
    for(let i=1; i<=right-left; i++) {
        let temp = curr.next;
        curr.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
    }

    return dummy.next;
};

/*
Time Complexity: 
    O(N), where N is the total number of nodes. It requires a single pass through. 
Space Complexity: 
    O(1), as the approach works in-place without extra data structures.


Logic:

1 - 2 - 3 - 4 - 5 - 6

prev = 1
cur = 2
temp = 3

Iteration 1:
1 - 3 - 2 - 4 - 5 - 6

Iteration 2:
1 - 4 - 3 - 2 - 5 - 6

Iteration 3:
1 - 5 - 4 - 3 - 2 - 6

In each iteration,
1. point 2.next to the next of 2
2. 2.next should come inbetween prev and prev.next
*/