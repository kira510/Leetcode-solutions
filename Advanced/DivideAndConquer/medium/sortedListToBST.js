/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Time Complexity: O(N log N) because every node in the list contributes to the traversal at each level of recursion.
Space Complexity: O(log N) due to the recursive stack space used when constructing the BST node by node.

Key Considerations:
Recursive Call Stack Depth

Since we're dividing the list in half at each step, the recursion tree height is O(log N).
Each recursive function call holds only one node at a time before returning.
No extra data structures are being stored except the recursion stack.
Total Function Calls

Yes, we do make N function calls over the entire execution.
However, at any given time, only O(log N) recursive calls exist in memory due to backtracking.

 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) return null;

    function findMiddle(left, right) {
        let slow = left;
        let fast = left;

        while(fast !== right && fast.next !== right) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    function convertToBST(left, right) {
        if(left === right) return null;
        const mid = findMiddle(left, right);

        const root = new TreeNode(mid.val);

        root.left = convertToBST(left, mid);
        root.right = convertToBST(mid.next, right);

        return root;
    }

    return convertToBST(head, null);
};


class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
//step one, convert the linked list to array nums
function convertToBSTFromArray(nums) {
    function buildBST(left, right) {
        if(left > right) return null;

        let mid = Math.floor((left+right)/2);
        const node = new TreeNode(nums[mid]);

        node.left = buildBST(left, mid-1);
        node.right = buildBST(mid+1, right);

        return node;
    }

    return buildBST(0, nums.length - 1);
}

console.log(convertToBSTFromArray([-10,-3,0,5,9]));