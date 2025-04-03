/**
 * https://leetcode.com/problems/task-scheduler/
 * 
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 * 
 * https://www.youtube.com/watch?v=eGf-26OTI-A
 */
var leastInterval = function(tasks, n) {
    const freqMap = new Map();

    for(const task of tasks) {
        freqMap.set(task,(freqMap.get(task) || 0) + 1);
    }

    const values = Array.from(freqMap.values()).sort((a,b) => b-a);
    const maxValue = values.shift();

    let idealSpots = (maxValue-1)*n; //ex: A _ _ A _ _ A _ _ A => ideal spots = 3*2

    for(let i=0; i<values.length; i++) {
        idealSpots-=Math.min(values[i], maxValue-1);
    }

    return idealSpots > 0 ? idealSpots + tasks.length : tasks.length;
};

console.log(leastInterval(["A","A","A","B","B","B"], 2));


/*
Time complexity: Sorting the freq array takes O(26 log 26), which simplifies to O(1) as it's a constant time operation. The loop to calculate intervals takes O(26), which is again a constant. 
So overall, the time complexity is O(1) + O(n) => O(n) for large n.
Space complexity: We use an array of size 26 for frequency, so the space complexity is O(1).
*/