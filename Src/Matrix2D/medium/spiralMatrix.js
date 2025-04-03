/**
 * https://leetcode.com/problems/spiral-matrix/
 * 
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let left = 0, top = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;
    let result = [];

    while(top <= bottom && left <= right) {
        for(let i=left; i<=right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        for(let i=top; i<=bottom; i++) {
            result.push(matrix[i][right]);
        }

        right--;

        if(top <= bottom) {
            for(let i=right; i>=left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if(left <= right) {
            for(let i=bottom; i>=top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
};

//console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9],[10,11,12], [13,14,15], [16,17,18]]));