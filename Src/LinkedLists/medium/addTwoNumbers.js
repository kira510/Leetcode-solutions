/**
 * https://leetcode.com/problems/add-two-numbers/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let newHead = new ListNode(0);
    let l3 = newHead;

    let carry = 0;
    while(l1 || l2 || carry) {
        let num1 = l1 ? l1.val : 0;
        let num2 = l2 ? l2.val : 0;

        let total = num1+num2+carry;
        carry = Math.floor(total/10);

        l3.next = new ListNode(((total)%10));
        l3 = l3.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }

    return newHead.next;
};

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

let l1head = new ListNode(2)
let node2 = new ListNode(4);
let node3 = new ListNode(3);

l1head.next = node2;
node2.next = node3;


let l2head = new ListNode(5)
node2 = new ListNode(6);
node3 = new ListNode(4);

l2head.next = node2;
node2.next = node3;

let l3 = addTwoNumbers(l1head, l2head);
while(l3) {
    console.log(l3.val);
    l3 = l3.next;
}

/*
Time Complexity: O(max(m,n)), where m and n are the lengths of the two linked lists.
Space Complexity: O(max(m,n)), considering the space used for the result list.
*/