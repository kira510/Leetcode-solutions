/**
 * https://leetcode.com/problems/non-overlapping-intervals/
 * 
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length === 0) return 0;

    //sort based on the end time
    intervals = intervals.sort((a,b) => a[1] - b[1]);

    let count = 1, end = intervals[0][1];
    for(let i=1; i<intervals.length; i++) {
        if(intervals[i][0]>=end) {
            count++;
            end=intervals[i][1];
        }
    }

    return intervals.length - count;
};

/*
Time Complexity
Sorting the intervals takes (O(n \log n)).
Iterating through the list of intervals takes (O(n)).
So, the overall time complexity is (O(n \log n)).

Space Complexity
We sort the intervals in-place, hence only using (O(1)) additional space. The overall space complexity remains (O(1)).

*/