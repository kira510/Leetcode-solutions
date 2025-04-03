/**
 * https://leetcode.com/problems/132-pattern/
 * 
 * @param {number[]} nums
 * @return {boolean}
 * 
 * Time Complexity: O(n), where n is the length of nums. We traverse the list once, with each element being pushed and popped from the stack only once.
Space Complexity: O(n), due to the stack usage. In the worst case, all elements could be pushed into the stack.
 */
function find132pattern(nums) {
    const stack = [];
    let kth = -Infinity;

    for(let i=nums.length-1; i>=0; i--) {
        //ith element smaller than k
        if(nums[i] < kth) return true;

        //Jth element must be larger than kth element
        while(stack.length && stack[stack.length-1] < nums[i]) {
            kth = stack.pop();
        }

        stack.push(nums[i]);
    }

    return false
}

//if you still havent found a pattern, make k as large possible

console.log(find132pattern([-1, 6, 5, 7, 8, 13, 4]))
