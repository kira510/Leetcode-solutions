/**
 * https://leetcode.com/problems/permutations/
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    function dfs(nums, i) {
        if(i===nums.length) {
            result.push([...nums]);
            return
        }

        for(let j=i; j<nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            dfs(nums, i+1);
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }

    dfs(nums, 0);

    return result;
};

console.log(JSON.stringify(permute([1,2,3])));

/*
Time complexity:
    We are generating all permutations of the given array using backtracking. The key observation is:

    Each recursive call processes a different element at each index (i)

    We swap nums[i] with nums[j] for all j ≥ i, iterating n times at the first level, n-1 at the second level, and so on.
    The total number of function calls follows a tree-like structure.
        Total number of permutations = O(n!)

    The number of unique ways to arrange n elements is n! (factorial growth).
    Each permutation requires O(n) swaps (O(n) work per function call)

    At each level of recursion, we do O(n) work swapping elements.
    Final Time Complexity:
        𝑂(𝑛⋅𝑛!)

Space Complexity Analysis
    We need to consider:

    Storage for Results (O(n!))

    We store all n! permutations in result, each of size n, leading to O(n!) space.
    Recursive Call Stack (O(n))

    The depth of recursion is n (since we make recursive calls up to n levels deep).
    Final Space Complexity:
        𝑂(𝑛!)

*/