/*
Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
        1
      1   1
    1   2    1
  1   3    3    1
1   4    6    4    1

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:

Input: numRows = 1
Output: [[1]]

*/


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows == 0) return []

    let result = [];

    for(let i=0; i<numRows; i++) {
        let rowArr = [];
        for(let j=0; j<=i; j++) {
            if(j == 0 || j==i) {
                rowArr[j] = 1;
            } else {
                rowArr[j] = result[i-1][j-1] + result[i-1][j]
            }
        }
        result.push(rowArr)
    }

    return result
};

console.log(generate(4));