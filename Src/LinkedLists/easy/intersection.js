/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let set = new Set();

    let iterator = headA;
    while(iterator != null) {
        set.add(iterator);
        iterator = iterator.next;
    }

    iterator = headB;
    while(iterator != null) {
        if(set.has(iterator)) return iterator;
        iterator = iterator.next;
    }

    return null
};


/*

*/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var getIntersectionNodeTwoPointer = function(headA, headB) {
    if(headA == null && headB == null) return null;

    let pA = headA;
    let pB = headB;

    while(pA !== pB) {
        pA = pA !== null ? pA.next : headB; 
        pB = pB !== null ? pB.next : headA;
    }

    return pA;
};

function main() {
    const headA = new ListNode(4);
    const headB = new ListNode(5);
    const a1Node = new ListNode(1);
    const b1Node = new ListNode(6);
    const b2Node = new ListNode(7);
    const inersectionNode = new ListNode(8);

    const commonNode1 = new ListNode(4);
    const commonNode2 = new ListNode(5);


    headA.next = a1Node;
    a1Node.next = inersectionNode;
    inersectionNode.next = commonNode1;
    commonNode1.next = commonNode2;

    headB.next = b1Node;
    b1Node.next = b2Node;
    b2Node.next = inersectionNode;

    console.log(getIntersectionNodeTwoPointer(headA,  headB).val);
}

main();