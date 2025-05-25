/**
 * https://leetcode.com/problems/surrounded-regions/
 * 
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(row, col) {
        if(row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] != 'O')
            return;

        board[row][col] = 'T';
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }

    for(let i=0; i<rows; i++) {
        dfs(i, 0); //left boundry
        dfs(i, cols-1); //right boundry
    }

    for(let j=0; j<cols; j++) {
        dfs(0, j); //top boundry
        dfs(rows-1, j); //bottom boundry
    }

    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            if(board[i][j] === 'O') 
                board[i][j] = 'X';
            else if(board[i][j] === 'T')
                board[i][j] = 'O';
        }
    }
}

let board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
solve(board);
console.log(JSON.stringify(board));

let board2 = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","O","X"]];
solve(board2);
console.log(JSON.stringify(board2));

/*
Time Complexity:
O(m * n), where m is the number of rows and n is the number of columns. 
We potentially visit each cell multiple times.

Space Complexity:
O(m * n) in the worst case due to the recursion stack in DFS. 
However, in practice, it's more efficient than the worst case.

We dont need visited map here since the check not equal to O if already visited when its T
*/