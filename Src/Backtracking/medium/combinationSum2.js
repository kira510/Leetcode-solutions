/**
 * https://leetcode.com/problems/combination-sum-ii/
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    candidates = candidates.sort((a,b) => a-b);

    function backtracking(remain, comb, start) {
        if(remain === 0) {
            result.push([...comb]);
            return;
        }

        if(remain < 0) return;

        for(let i=start; i<candidates.length; i++) {
            if(i>start && candidates[i] == candidates[i-1]) continue;

            comb.push(candidates[i]);
            backtracking(remain-candidates[i],comb,i+1);
            comb.pop();
        }
    }

    backtracking(target, [], 0);

    return result;
};

console.log(JSON.stringify(combinationSum2([10,1,2,7,6,1,5], 8)))

/**
 * 
 * Time Complexity: O(2^n), where n is the number of elements in the candidates array. 
 * In the worst case, we explore all subsets.
Space Complexity: O(n), used for the recursion stack and temporary storage of current combinations.
 */