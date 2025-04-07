/**
 * https://leetcode.com/problems/01-matrix/
 * 
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const n = mat.length, m=mat[0].length;
    const res = Array.from({ length: n }, () => new Array(m).fill(Infinity));
    const queue = [], directions = [[1,0],[-1,0],[0,1],[0,-1]];

    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            if(mat[i][j] === 0) {
                queue.push([i,j]);
                res[i][j] = 0;
            }
        }
    }

    while(queue.length > 0) {
        const [x,y] = queue.shift();
        for(const [dx,dy] of directions) {
            const i = x + dx;
            const j = y + dy;
            if(i >=0 && j>=0 && i<n && j<m && res[i][j] > res[x][y] + 1) {
                res[i][j] = res[x][y] + 1;
                queue.push([i, j])
            }
        }
    }

    return res;
};

console.log(JSON.stringify(updateMatrix([[0,0,0],[0,1,0],[1,1,1]])));

/*
Time Complexity: O(m * n), where m is the number of rows and n is the number of columns. 
Each cell is processed once.
Space Complexity: O(m * n) for the queue in the worst case.

*/