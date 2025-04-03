/**
 * https://leetcode.com/problems/rotate-image/
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/*
Soln:

Iterate through each element:

(i,j) => (j, N-1-i)

Time Complexity: O(N^2)
Space Complexity: O(N^2)
*/
var rotate = function(matrix) {
    let n = matrix.length;
    let res = new Array(n).fill(null).map(() => new Array(n).fill(0));

    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(!res[j]) res[j] = [];
            res[j][n-1-i] = matrix[i][j];
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = res[i][j];
        }
    }
};

let input = [[1,2,3],[4,5,6],[7,8,9]];
rotate(input);
console.log(JSON.stringify(input))


/*
Transpose is where:
(i,j) = (j,i)

then reverse the row
*/
var rotateWithTranspose = function(matrix) {
    let n = matrix.length;

    let i=0;
    while(i<n) {
        for(let j=i; j<n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
        i++;
    }

    for (let i = 0; i < n; i++) {
        matrix[i] = matrix[i].reverse();
    }
};

let input2 = [[1,2,3],[4,5,6],[7,8,9]];
rotateWithTranspose(input2);
console.log(JSON.stringify(input2))