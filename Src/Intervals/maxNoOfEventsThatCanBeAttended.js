/**
 * https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/
 * 
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    const attended = new Set();

    events = events.sort((a,b) => a[1] - b[1] || a[0] - b[0]);

    events.forEach(event => {
        const start = event[0], end = event[1];
        for(let d=start; d<=end; d++) {
            if(!attended.has(d)) {
                attended.add(d);
                break;
            }
        }
    })

    return attended.size;
};

console.log(maxEvents([[1,2],[2,3],[3,4]]));

/*
Time Complexity:
Sorting: O(NlogN)
Iteration: O(ND) where D is number of days in each event

Total: O(NlogN + ND)


Space Complexity:
O(D) for tracking attended days.

This solution times out, must use priority queues
*/


//https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/1631731/javascript-using-priority-queue/

