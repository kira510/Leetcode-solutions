/**
 * https://www.youtube.com/watch?v=GBKI9VSKdGg
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    function backTracking(remain, comb, start) {
        if(remain === 0) {
            result.push([...comb]);
            return
        }

        if(remain < 0) return;

        for(let i=start; i<candidates.length; i++) {
            comb.push(candidates[i]);
            backTracking(remain-candidates[i], comb, i);
            comb.pop();
        }
    }

    backTracking(target, [], 0);

    return result;
};

console.log(JSON.stringify(combinationSum([2,3,6,7], 7)));
console.log(JSON.stringify(combinationSum([2,3,5], 8)));

/*
Time Complexity: O(2^t), where t is the target value, 
    due to the decision tree branching at each step.

Space Complexity: O(t), due to the call stack from recursion 
    and the space required to store combinations.
*/
