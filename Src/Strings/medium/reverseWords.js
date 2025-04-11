/**
 * https://leetcode.com/problems/reverse-words-in-a-string/
 * 
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const n = s.length;
    const words = [];
    let word = '';

    let i=0;
    while(i<n) {
        while(i < n && s[i] === ' ') i++

        while(i < n && s[i] !== ' ') {
            word+=s[i];
            i++;
        }

        if(word) {
            words.push(word);
            word = '';
        }
    }

    const reverse = []
    while(words.length > 0) {
        reverse.push(words.pop());
    }

    return reverse.join(' ');
}; 

console.log(reverseWords('a good   example'));
console.log(reverseWords('  hello world  '));



/*
Another solution:
    It uses:

        String.trim(): creates a new string

        String.split(): creates an array of words

        Array.reverse(): reverses the array (new allocation in some engines)

        Array.join(): creates a new final string

        📦 Memory usage: Multiple new intermediate structures are created.


The previous approach:
    Processes the string character by character (avoids regex overhead)

    Manually constructs each word

    Stores words in a stack-like array (words)

    Pops from the array to reverse the order (LIFO stack)

    Only joins once at the end
*/
var reverseWordsExtraSpace = function(s) {
    const n = s.length;
    const words = [];
    let word = '';

    let i=0;
    while(i<n) {
        while(i < n && s[i] === ' ') i++

        while(i < n && s[i] !== ' ') {
            word+=s[i];
            i++;
        }

        if(word) {
            words.push(word);
            word = '';
        }
    }

    const reverse = []
    while(words.length > 0) {
        reverse.push(words.pop());
    }

    return reverse.join(' ');
}; 