/**
 * https://leetcode.com/problems/maximum-number-of-balloons/
 * 
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let b=0; a=0, l=0, o=0, n=0;

    for(const char of text) {
        if(char === 'b') b++;
        else if(char === 'a') a++;
        else if(char === 'l') l++;
        else if(char === 'o') o++;
        else if(char === 'n') n++;
    }

    return Math.min(b, a, Math.floor(l/2), Math.floor(o/2), n);
};

console.log(maxNumberOfBalloons('loonbalxballpoon'));
console.log(maxNumberOfBalloons('nlaebolko'));