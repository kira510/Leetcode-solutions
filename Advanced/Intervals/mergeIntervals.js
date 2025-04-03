/**
 * https://leetcode.com/problems/merge-intervals/
 * 
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const merged = [];
    intervals = intervals.sort((a,b) => a[0]-b[0]);

    let current;
    for(let i=0; i<intervals.length; i++) {
        current = intervals[i];

        if(merged.length === 0 || merged[merged.length-1][1] < current[0]) {
            merged.push(current);
        } else {
            merged[merged.length-1][1] = Math.max(merged[merged.length-1][1], current[1]);
        }
    }

    return merged;
};

console.log(JSON.stringify(merge([[1,3],[2,6],[8,10],[15,18]])));
console.log(JSON.stringify(merge([[1,4],[4,5]])));

/*
Time Complexity: (O(n \log n)), where (n) is the number of intervals. Sorting the intervals takes (O(n \log n)), and then we perform a single pass over the intervals.
Space Complexity: (O(\log n)) to (O(n)), depending on the sorting algorithm used. The additional space complexity incurred by the storage of the intervals is (O(n)) in the worst case.
*/