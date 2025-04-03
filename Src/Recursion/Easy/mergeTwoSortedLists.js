/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * Time Complexity: O(n + m), where n and m are the lengths of the two lists.
Space Complexity: O(n + m), due to recursion stack usage.
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;

    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};


var mergeTwoListsIterative = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;

    let dummy = new ListNode(0, null);
    let current = dummy;


    while(l1!==null && l2!==null) {
        if(l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    if(!l1) current.next = l2;
    if(!l2) current.next = l1;

    return dummy.next;
};