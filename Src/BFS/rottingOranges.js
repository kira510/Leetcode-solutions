/**
 * https://leetcode.com/problems/rotting-oranges/
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [], directions = [[1,0], [-1, 0], [0, -1], [0, 1]];
    let freshOranges = 0;
    let minutes = 0;

    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            if(grid[i][j] === 2) queue.push([i,j]);
            if(grid[i][j] === 1) freshOranges++;
        }
    }

    if(freshOranges === 0) return minutes;

    while(queue.length > 0 && freshOranges > 0) {
        const size = queue.length;

        for(let i=0; i<size; i++) {
            const [x,y] = queue.shift();

        for(const dir of directions) {
            const dx = x + dir[0];
            const dy = y + dir[1];

            if(dx >=0 && dy >=0 && dx<rows && dy<cols && grid[dx][dy] === 1) {
                grid[dx][dy] = 2;
                freshOranges--;
                queue.push([dx, dy]);
            }
        }
        }
        minutes++;
    }

    return freshOranges ? -1 : minutes;
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));

/*
Time Complexity: O(m × n)
Let m be the number of rows and n be the number of columns in the grid.

Why O(m × n)?
The initial nested loop (lines 5–11) scans the entire grid once to:

Count fresh oranges.

Add rotten oranges to the queue.

This is O(m × n).

The BFS loop (starting from line 14):

In the worst case, each fresh orange becomes rotten once.

For every rotten orange, we check its 4 neighbors (constant work).

So we process each cell at most once, resulting again in O(m × n) operations.

Thus, the total time complexity is O(m × n).

📦 Space Complexity: O(m × n)
Why O(m × n)?
The queue used in BFS can potentially hold all the oranges in the grid (if all are rotten or become rotten).

In the worst case, the queue holds O(m × n) elements.

Apart from the queue, no other significant extra data structures are used (the grid is modified in-place).

So, space complexity is also O(m × n) due to the queue storage.

🔁 Summary
Time Complexity: O(m × n) — because each cell is processed once during BFS.

Space Complexity: O(m × n) — for storing rotten oranges in the queue.

Let me know if you'd like this visualized or rewritten in Python or C++!
*/