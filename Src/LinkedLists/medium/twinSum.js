/**
 * https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let fast = head, current = head, newList = null;

    while(fast && fast.next) {
        fast = fast.next.next;
        let temp = current.next;
        current.next = newList;
        newList = current;
        current = temp; //new list has reversed first half
    }

    let maxSum = 0;
    while(current) {
        maxSum = Math.max(maxSum, current.val + newList.val);
        current = current.next;
        newList = newList.next;
    }

    return maxSum;
};

//1 - 2 - 3 - 4 - 5 - 6
//6 - 5 - 4 - 3 - 2 - 1