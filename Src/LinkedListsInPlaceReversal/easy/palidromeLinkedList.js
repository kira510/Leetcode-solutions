/**
 * 
 * https://leetcode.com/problems/palindrome-linked-list/description/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const res = [];

    let cur = head;
    while(cur) {
        res.push(cur.val);
        cur = cur.next;
    }

    let i=0; j=res.length-1;
    while(i<j) {
        if(res[i] !== res[j]) return false;
        i++;
        j--;
    }

    return true;
};