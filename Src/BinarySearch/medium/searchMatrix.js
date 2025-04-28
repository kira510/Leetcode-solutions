/**
 * https://leetcode.com/problems/search-a-2d-matrix/
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix.length || !matrix[0].length) return false;
    const rows = matrix.length;
    const cols = matrix[0].length;

    let left = 0, right = rows*cols - 1;

    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        const val = matrix[Math.floor(mid/cols)][Math.floor(mid%cols)];
        if(val === target) return true
        else if(val < target) left = mid+1;
        else right = mid-1;
    }

    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));

/*
Time Complexity: (O(\log(m \times n)))
Space Complexity: (O(1))
*/
