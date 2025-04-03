/**
 * https://leetcode.com/problems/decode-string/
 * 
 * Time Complexity: O(n), where n is the length of the input string. Each character is processed once.
Space Complexity: O(m), where m is the maximum depth of nested structures.
 * 
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let currString = '';
    let currNum = 0;
    const stack = [];

    for(const char of s) {
        if(!isNaN(char)) {
            currNum = currNum*10 + parseInt(char);
        } else if(char === '[') {
            stack.push(currString);
            currString = '';
            stack.push(currNum);
            currNum = 0;
        } else if(char === ']') {
            const repeatTimes = stack.pop();
            const prevString = stack.pop();

            currString = prevString + currString.repeat(repeatTimes);
        } else {
            currString+=char;
        }
    }

    return currString;
};

//console.log(decodeString("3[a2[c]]"));

/*
DFS is used here because we process nested structures (like brackets) using a recursive depth-first approach:
*/
var decodeStringRecusion = function(s) {
    let i=0;

    function dfs() {
        let currStr = '';
        let currNum = 0;

        while(i<s.length) {
            const char = s[i];
            if(!isNaN(char)) {
                currNum = currNum*10 + parseInt(char);
                i++;
            } else if(char == '[') {
                i++;
                const innerString = dfs();
                currStr += innerString.repeat(currNum);
                currNum = 0;
            } else if(char === ']') {
                i++;
                return currStr;
            } else {
                currStr+=char;
                i++;
            }
        }

        return currStr;
    }

    return dfs();
};

//console.log(decodeStringRecusion("3[a2[c]]"));
/*
Time Complexity: O(n), exploring each character in the string just once.
Space Complexity: O(m), where m is the maximum depth of braces due to recursive call stack.
*/
console.log(decodeStringRecusion("3[a]2[bc]"));