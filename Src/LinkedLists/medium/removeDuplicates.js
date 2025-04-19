//https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/submissions/1611371540/
//Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head) return head;

    let dummy = new ListNode(0, head);

    let current = head;
    let prev = dummy;
    while(current) {
        if(current.next && current.val === current.next.val) {
            while(current.next && current.val === current.next.val) {
                current = current.next
            }
            prev.next = current.next;
        } else {
            prev = current;
        }

        current = current.next;
    }

    return dummy.next;
};

const head = new ListNode(1, null);
const node1 = new ListNode(2, null);
const node2 = new ListNode(3, null);
const node3 = new ListNode(3, null);
const node4 = new ListNode(4, null);
const node5 = new ListNode(4, null);
const node6 = new ListNode(5, null);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log(deleteDuplicates(head));

/*
Time Complexity: O(N), where N is the number of nodes in the linked list. 
Each node is visited and removed if needed.
Space Complexity: O(1), as the solution uses a constant amount of extra space.
*/
