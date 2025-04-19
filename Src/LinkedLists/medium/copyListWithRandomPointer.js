/**
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 * 
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return head;
    const map = new Map();

    let current = head;
    while(current) {
        map.set(current, new Node(current.val));
        current = current.next;
    }

    current = head;
    while(current) {
        const newNode = map.get(current);
        newNode.next = map.get(current.next) || null;
        newNode.random = map.get(current.random) || null;
        current = current.next;
    }

    return map.get(head);
};

/*
Time Complexity: O(N), where N is the number of nodes in the linked list, as we are iterating over the list twice.

Space Complexity: O(N), due to the additional space required to store the map.
*/



//Solving in O(1) space time: Interweaving Nodes
var copyRandomListInterweaving = function(head) {
    if (!head) return head;
    
    let current = head;
    while(current) {
        let newNode = new Node(current.val);
        newNode.next = current.next;
        current.next = newNode;

        current = current.next.next;
    }

    current = head;
    while(current) {
        if(current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }

    let dummy = new Node(0);
    let deepClone = dummy;
    current = head;
    while(current) {
        let clone = current.next;
        current.next = clone.next;
        current = current.next;

        deepClone.next = clone;
        deepClone = clone;
    }

    return dummy.next;
};