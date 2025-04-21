/**
 * https://leetcode.com/problems/rotate-list/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return head
    let tail = head, len = 1;

    while(tail.next) {
        tail = tail.next;
        len++;
    }
    tail.next = head;

    k = k%len;

    let newTail = head;
    for(let i=1; i<len-k; i++) {
        newTail = newTail.next;
    }

    const newHead = newTail.next;
    newTail.next = null;

    return newHead;
};

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

let head = new ListNode(1)
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(rotateRight(head, 2));

// Time Complexity: O(n), a full traversal is needed to compute the length and rearrange the pointers.
// Space Complexity: O(1), as it only uses constant extra space.
