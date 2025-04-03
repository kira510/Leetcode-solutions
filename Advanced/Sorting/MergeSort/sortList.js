/**
 * https://leetcode.com/problems/sort-list/description/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * Time Complexity: (O(n \log n)) because we recursively divide the list and merge them.
Space Complexity: (O(\log n)) due to recursive stack space used by merge sort.
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function sortList(head) {
    if(!head || !head.next) return head;

    const mid = getMid(head);
    const left = sortList(head);
    const right = sortList(mid)

    return merge(left, right);
}

function getMid(head) {
    let slow = head, fast = head, prev = null;
    while(fast && fast.next) {
        prev=slow;
        slow=slow.next;
        fast=fast.next.next;
    }
    prev.next = null;

    return slow
}

function merge(left, right) {
    let dummy = new ListNode(0);
    let tail = dummy;

    while(left && right) {
        if(left.val < right.val) {
            tail.next = left;
            left = left.next;
        } else {
            tail.next = right;
            right = right.next;
        }
        tail = tail.next;
    }

    tail.next = left || right;
    return dummy.next;
}

let head = new ListNode(5);
let cur = head;
cur.next = new ListNode(-1);
cur = cur.next;
cur.next = new ListNode(3);
cur = cur.next;
cur.next = new ListNode(4);
cur = cur.next;
cur.next = new ListNode(0);
cur = cur.next;

let list = sortList(head);
while(list) {
    console.log(list.val);
    list = list.next;
}