/**
 * https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
 * 
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    const merged = [];
    points = points.sort((a,b) => a[1] - b[1]);

    merged.push(points[0]);
    for(let i=1; i<points.length; i++) {
        if(!(merged[merged.length-1][1] >= points[i][0])) {
            merged.push(points[i]);
        }
    }

    return merged.length;
};

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));
console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]));
console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]));
console.log(findMinArrowShots([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]));



/*
Algo master soln:

O(1) space complexity.
*/
/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShotsAlgo = function(points) {
    // Sort the balloons based on their end positions
    points.sort((a, b) => a[1] - b[1]);
    
    let arrowCount = 0;
    let arrowPos = -Infinity;
    
    for (let i = 0; i < points.length; i++) {
        // If the current balloon starts after the last arrow position,
        // this means a new arrow is necessary.
        if (arrowPos < points[i][0]) {
            arrowCount++;
            // Set the position of the new arrow to the end of the current balloon
            arrowPos = points[i][1];
        }
    }
    
    return arrowCount;
};