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
 * https://leetcode.com/problems/palindrome-linked-list/
 * 
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    function findMiddleNode(head) {
        let slow = head;
        let fast = head;

        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    function reverseList(head) {
        if(head == null || head.next == null) {
            return head;
        }

        let newHead = reverseList(head.next);
        head.next.next = head;
        head.next = null;

        return newHead;
    }

    let middle = findMiddleNode(head);
    let middleReverse = reverseList(middle);

    let p1 = head;
    let p2 = middleReverse;

    while(p2) {
        if(p1.val !== p2.val) return false
        p1 = p1.next;
        p2 = p2.next;
    }

    return true;
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

const linkedList = createLinkedList([1,1,3,1,1]);

//console.log(isPalindrome(linkedList));


var isPalindromeArraySoln = function(head) {
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

const linkedList2 = createLinkedList([1,2]);

console.log(isPalindromeArraySoln(linkedList2));