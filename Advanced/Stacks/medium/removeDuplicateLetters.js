/**
 * https://leetcode.com/problems/remove-duplicate-letters/
 * 
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const chars = {};

    for(let i=0; i<s.length; i++) {
        if(chars[s[i]]) chars[s[i]]++
        else chars[s[i]] = 1;
    }

    const stack = [];
    const seen = new Set();

    for(let i=0; i<s.length; i++) {
        chars[s[i]]--;

        if(seen.has(s[i])) continue;

        while(stack.length && s[i] < stack[stack.length - 1] && 
            chars[stack[stack.length-1]] > 0) {
            const pop = stack.pop();
            seen.delete(pop);
        }

        stack.push(s[i]);
        seen.add(s[i]);
    }

    return stack.join('');
};

console.log(removeDuplicateLetters("cbacdcbc"));