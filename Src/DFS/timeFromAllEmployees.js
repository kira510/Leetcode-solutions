/**
 * https://leetcode.com/problems/time-needed-to-inform-all-employees/
 * 
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    const emplOfManagers = new Array(n).fill(null).map(() => []);

    for(let i=0; i<n; i++) {
        if(manager[i] !== -1) 
            emplOfManagers[manager[i]].push(i);
    }

    const queque = [[headID, 0]]; //time taken for information to reach the head is 0;
    let maxTime = 0;

    while(queque.length > 0) {
        const [currentManager, currentTime] = queque.shift();
        maxTime = Math.max(maxTime, currentTime);

        const timeToDeliverToEmployees = informTime[currentManager];
        for(const emp of emplOfManagers[currentManager]) {
            queque.push([emp, timeToDeliverToEmployees + currentTime]);
        }
    }

    return maxTime;
};

console.log(numOfMinutes(6, 2, [2,2,-1,2,2,2], [0,0,1,0,0,0]));

/*
THIS IS ACTUALLY BFS SOLUTION
Time complexity: O(n)
Space Complexity: 
O(N), primarily for the storage of the hierarchy in the adjacency list and BFS queue.

Example:

managers = [2,2,-1,2,0,0,3]
info = [3,0,1,2,0,0,0]

employees = [
    [4,5],
    [], 
    [0,1,3], 
    [6], 
    [], 
    [], 
    []
]

Iteration 1:
    quque = [[2,0]]
    maxtime = 0;
    currentTime = 1;
    currentManager = 2 => [0,1,3]
    queque = [[0,1], [1,1], [3,1]]

Iteration 2:
    queque = [[1,1], [3,1], [4,4], [5,4]]

 AND SO ON

*/