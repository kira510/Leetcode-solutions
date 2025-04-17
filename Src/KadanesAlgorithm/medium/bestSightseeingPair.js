/**
 * https://leetcode.com/problems/best-sightseeing-pair/
 * 
 * https://www.youtube.com/watch?v=MK0Nku4Y4HI
 * 
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let iMax = values[0]; //values[0] - 0 = values[0]
    let maxScore = 0;

    for(let j=1; j<values.length; j++) {
        maxScore = Math.max(maxScore, iMax + values[j] - j);
        iMax = Math.max(iMax, values[j] + j);
    }

    return maxScore;
};

console.log(maxScoreSightseeingPair([8,1,5,2,6]));
console.log(maxScoreSightseeingPair([1,2]));
/*

Max(V(i) + V(j) + i - j) => Max(V(i) + i) + Max(V(j) - j);

Keep track of these max separately and add the max at end.

*/