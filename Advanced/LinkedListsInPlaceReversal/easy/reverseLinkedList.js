/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/reverse-linked-list/
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head;
    let rev = null;

    while(curr) {
        let temp = curr.next;
        curr.next = rev;
        rev = curr;
        curr = temp;
    }

    return rev;
};

var reverseLstRecursion = function(head) {
    if(head == null || head.next == null) return head;

    const newHead = reverseLstRecursion(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
};