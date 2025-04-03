/**
 * https://leetcode.com/problems/single-threaded-cpu/
 * 
 * @param {number[][]} tasks
 * @return {number[]}
 * 
 * Time Complexity: O(NLogN): The priority queue operations for each task are (O(\log n)), thus for all tasks, it is (O(n \log n)).
 * Space: The priority queue holds all tasks in the worst case: (O(n)).
 * 
 * NOTE: 
 * Check this out as well: GOOD SOLUTION
 * https://github.com/AlgoMaster-io/leetcode-solutions/blob/main/javascript/single-threaded-cpu.md
 */
var getOrder = function(tasks) {
    tasks = tasks.map((task, i) => {
        return {
            startTime: task[0],
            processingTime: task[1],
            index: i
        }
    }).sort((a,b) => a.startTime - b.startTime);

    function compareFunc (a, b) {
        if (a.processingTime === b.processingTime) return a.index - b.index
        return a.processingTime - b.processingTime
    };
    const pq = new PriorityQueue(compareFunc)


    let currentTime = 0;
    const result = [];
    let taskCount = 0;

    while(result.length < tasks.length) {
        while(taskCount < tasks.length && tasks[taskCount].startTime <= currentTime) {
            pq.push(tasks[taskCount]);
            taskCount++;
        }

        if(!pq.isEmpty()) {
            const task = pq.pop();
            result.push(task.index);
            currentTime +=task.processingTime;
        } else {
            currentTime = tasks[taskCount].startTime;
        }
    }

    return result;
};
