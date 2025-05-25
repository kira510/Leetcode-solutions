/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 2) return n;

    const dp = new Array(n+1).fill(0); //using n+1 for convenience
    dp[1] = 1;
    dp[2] = 2;

    for(let i=3; i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
};



/*
Time: O(2^n)
Space: O(n) -> height of recursion tree

finbonacci series
Exceeds timelimit
*/
var climbStairsRecursive = function(n) {
    if(n <= 2) return n;

    return climbStairsRecursive(n-1) + climbStairs(n-2);
};
