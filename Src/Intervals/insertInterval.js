/**
 * https://leetcode.com/problems/insert-interval/
 * 
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const merged = [];
    let i=0, n=intervals.length;

    //need i<n, for intervals = []
    while(i<n && intervals[i][1] < newInterval[0]) {
        merged.push(intervals[i]);
        i++;
    }

    while(i<n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }

    merged.push(newInterval);

    while(i<n) {
        merged.push(intervals[i]);
        i++
    }

    return merged;
};

console.log(JSON.stringify(insert([[1,3],[6,9]], [2,5])));
console.log(JSON.stringify(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])));
console.log(JSON.stringify(insert([], [5,7])));

/*
Time Complexity: O(n) as we are going through the intervals list a constant number of times.
Space Complexity: O(n) for storing the merged intervals.

*/
