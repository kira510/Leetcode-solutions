/**
 * https://leetcode.com/problems/pacific-atlantic-water-flow/
 * 
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const rows = heights.length;
    const cols = heights[0].length;
    const res = [];
    const pacificRechable = Array.from({length: rows}, () => Array(cols).fill(false));
    const atlanticRechable = Array.from({length: rows}, () => Array(cols).fill(false));
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    function dfs(row, col, rechable) {
        rechable[row][col] = true;

        for(const dir of dirs) {
            const dx = row + dir[0];
            const dy = col + dir[1];

            if(dx >= 0 && dx < rows && dy >= 0 && dy < cols && !rechable[dx][dy] 
                && heights[dx][dy] >= heights[row][col]  
            ) dfs(dx, dy, rechable);
        }
    }

    for(let i=0; i<rows; i++) {
        dfs(i, 0, pacificRechable); //left boundry
        dfs(i, cols-1, atlanticRechable); //right boundry
    }

    for(let j=0; j<cols; j++) {
        dfs(0, j, pacificRechable); //top boundry
        dfs(rows-1, j, atlanticRechable); //bottom boundry
    }

    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            if(pacificRechable[i][j] && atlanticRechable[i][j])
                res.push([i,j]);
        }
    }

    return res;
};

// console.log(JSON.stringify(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])));
console.log(JSON.stringify(pacificAtlantic([[10,10,10],[10,1,10],[10,10,10]])));

/*
Time and Space Complexity:
Time Complexity: O(m * n), because each node in the graph is visited once per DFS initiated.
Space Complexity: O(m * n) due to recursive stack space.
*/