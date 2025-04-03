/**
 * https://leetcode.com/problems/daily-temperatures/
 * 
 * @param {number[]} temperatures
 * @return {number[]}
 * 
 * Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Time Complexity:
O(n), each temperature is pushed and popped from the stack at most once.
Space Complexity:
O(n), for the stack storing the indices.
 */
var dailyTemperatures = function(T) {
    const stack = []; //decreasing montonic stack
    const result = new Array(T.length).fill(0);

    for(let i=0; i<T.length; i++) {
        while(stack.length && T[stack[stack.length-1]] < T[i]) {
            const colderIndex = stack.pop();
            result[colderIndex] = i-colderIndex;
        }
        stack.push(i);
    }

    return result;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));