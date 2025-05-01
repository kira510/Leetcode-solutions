/**
 * https://leetcode.com/problems/palindrome-partitioning/
 * 
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];
    function isPalindrome(left, right) {
        while(left <= right) {
            if(s[left] !== s[right]) return false;
            left++;
            right--;
        }

        return true;
    }

    function backtracking(start, path) {
        if(start === s.length) {
            result.push([...path]);
            return
        }

        for(let i=start; i<s.length; i++) {
            if(isPalindrome(start, i)) {
                path.push(s.substring(start, i+1));
                backtracking(i+1, path);
                path.pop();
            }
        }
    }

    backtracking(0, []);

    return result;
};

console.log(JSON.stringify(partition('aab')));

/*
O(N * 2^N): There are 2^N possible partitions (each character can either be included in the current partition or start a new one), and checking if each partition is a palindrome takes O(N) time.
Space Complexity:
O(N): Space required for path and stack in the worst case.
*/