/**
 * https://leetcode.com/problems/game-of-life/
 * 
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const directions = [
        [1,0], [0,1], [-1, 0], [0, -1],
        [1,1], [-1,-1], [1,-1], [-1, 1]
    ];
    const n = board.length;
    const m = board[0].length;

    for(let row=0; row<n; row++) {
        for(let col=0; col<m; col++) {
            let liveNeighbours = 0;
            for(const dir of directions) {
                const x = row + dir[0];
                const y = col + dir[1];

                if(x < n && x>=0 && y<m && y>=0 && ((board[x][y] & 1) === 1)) {
                    liveNeighbours++;
                }
            }

            if(board[row][col] === 1 && (liveNeighbours === 2 || liveNeighbours === 3)) {
                board[row][col] = 3;
            }

            if(board[row][col] === 0 && (liveNeighbours === 3)) {
                board[row][col] = 2;
            }
        }
    }

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            board[row][col] >>= 1; // New state is shifted in
        }
    }
};

// Time Complexity
// O(M x N), similar to the previous approach.
// Space Complexity
// O(1), since we don’t use additional space for another board.

/*

Original  New  TruthTable
0         0    0
1         0    1
0         1    2
1         1    3

let original = truthTable & 1;
let newVal = truthTable >> 1;
*/
let matrix = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
gameOfLife(matrix);

console.log(JSON.stringify(matrix));