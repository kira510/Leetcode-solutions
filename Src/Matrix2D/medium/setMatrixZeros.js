/**
Time Complexity:
O(m*n)

Space Complexity:
O(m + n)

 * https://leetcode.com/problems/set-matrix-zeroes/
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const rowArr = new Array(rows).fill(false);
    const colsArr = new Array(cols).fill(false);

    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            if(matrix[i][j] === 0) {
                rowArr[i] = true;
                colsArr[j] = true;
            }
        }
    }

    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            if(rowArr[i] || colsArr[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};

let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(matrix);
console.log(JSON.stringify(matrix));


var setZeroesInPlaceSolution = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let setFirstRowZero = false;
    let setFirstColumnZero = false;

    for(let i=0; i<rows; i++) {
        if(matrix[i][0] === 0) {
            setFirstColumnZero = true;
        }
    }

    for(let j=0; j<cols; j++) {
        if(matrix[0][j] === 0) {
            setFirstRowZero = true;
        }
    }

    for(let i=1; i<rows; i++) {
        for(let j=1; j<cols; j++) {
            if(matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    for(let i=1; i<rows; i++) {
        for(let j=1; j<cols; j++) {
            if(matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if(setFirstRowZero) {
        for(let j=0; j<cols; j++) {
            matrix[0][j] = 0;
        }
    }

    if(setFirstColumnZero) {
        for(let i=0; i<rows; i++) {
            matrix[i][0] = 0;
        }
    }
};

let matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroesInPlaceSolution(matrix2);
console.log(JSON.stringify(matrix2));

/*
Time Complexity:
O(m*n)

Space Complexity:
O(1)
*/