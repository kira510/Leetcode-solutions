/**
 * https://leetcode.com/problems/number-of-islands/
 * 
 * @param {character[][]} grid
 * @return {number}
 * 
 * Time Complexity: 
 * O(M * N) where M is the number of rows and N is the number of columns. 
 * Each cell is visited once.
Space Complexity: 
    O(M * N) in case the grid is full of lands, and the depth of DFS call stack can be M * N.

 */
var numIslandsDfs = function(grid) {
    const n = grid.length; m = grid[0].length;
    let islandsCount = 0;

    function dfs(i,j) {
        if(i<0 || i>n-1 || j<0 || j>m-1 || grid[i][j] == '0') return

        grid[i][j] = 0;
        dfs(i, j+1);
        dfs(i, j-1);
        dfs(i+1, j);
        dfs(i-1, j);
    }

    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            if(grid[i][j] == '1') {
                dfs(i,j);
                islandsCount++;
            }
        }
    }

    return islandsCount;
};

console.log(numIslandsDfs([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]))

console.log(numIslandsDfs([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]));


var numIslandsBfs = function(grid) {
    const n = grid.length; m = grid[0].length;
    let islandsCount = 0;
    const directions = [[-1,0], [1, 0], [0, -1], [0, 1]]; //up, down, left, right
    const queue = [];

    function bfs(i,j) {
        grid[i][j] = 0;
        queue.push([i,j]);

        while(queue.length>0) {
            const pos = queue.pop();
            for(const dir of directions) {
                const x = pos[0] + dir[0];
                const y = pos[1] + dir[1];

                if(x<n && y<m && x>=0 && y>=0 && grid[x][y] == 1) {
                    grid[x][y] = 0;
                    queue.push([x,y]);
                }
            }
        }
    }

    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            if(grid[i][j] == '1') {
                bfs(i,j);
                islandsCount++;
            }
        }
    }

    return islandsCount;
};

console.log(numIslandsBfs([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]))

console.log(numIslandsBfs([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]));

/*
Time Complexity: O(M * N) where M is the number of rows and N is the number of columns. 
Each cell is processed once.

Space Complexity: O(min(M, N)) for the queue, though in the worst case it could be O(M * N) 
due to needing to store many nodes temporarily.
*/