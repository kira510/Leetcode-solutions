/**
 * https://leetcode.com/problems/valid-sudoku/
 * 
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rowArr = Array.from({length: 9}, () => new Set());
    const colArr = Array.from({length: 9}, () => new Set());
    const boxIndexArr = Array.from({length: 9}, () => new Set());

    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            if(board[i][j] != '.') {
                const num = board[i][j];
                const boxIndex = Math.floor(i/3)*3 + Math.floor(j/3);
                if(rowArr[i].has(num) || colArr[j].has(num) || boxIndexArr[boxIndex].has(num)) {
                    return false
                }

                rowArr[i].add(num);
                colArr[j].add(num);
                boxIndexArr[boxIndex].add(num);
            }
        }
    }

    return true;
};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]))

    console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]))

/*
https://www.youtube.com/watch?v=TjFXEUCMqI8

Box Index Derivation:

0 1 2
1
2

The 9x9 grid can be configured as 3*3 grid by assuming 3rows or 3 colums form 3 grids.
(row/3)*3 + column/3 = boxIndex 
*/

/*
Time:
O(9*9) = O(1)

Space: 
O(3*9) = O(1)
*/