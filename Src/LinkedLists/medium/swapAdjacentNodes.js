/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let slow = head;

    while(slow) {
        let fast = slow.next; 

        if(fast) {
            let temp = slow.val;
            slow.val = fast.val;
            fast.val = temp;

            slow = fast.next;
        } else {
            break
        }
    }

    return head
};