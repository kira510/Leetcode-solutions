/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * 
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;

    for(let i=0; i<=n; i++) {
        fast = fast.next;
    }

    while(fast) {
        slow = slow.next;
        fast = fast.next;
    }


    slow.next = slow.next.next;

    return dummy.next;
};

function createLinkedList(arr) {
    const head = new ListNode(arr[0]);

    let curr = head;
    for(let i=1; i<arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return head;
}

const linkedList = createLinkedList([1]);

const newList = removeNthFromEnd(linkedList, 1);

let res = [];
while(newList) {
    res.push(newList.val);
    newList = newList.val;
}

console.log(res);