/* 
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""

*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
*/
var gcdOfStrings = function(str1, str2) {
    let [smallerStr, largerStr] = [str1, str2].sort((a,b) => a.length - b.length);
    let tempStr = smallerStr;

    for(let i = tempStr.length; i>0; i--) {
        tempStr = tempStr.slice(0, i);
        let isSmallStringDivisor = !smallerStr.split(tempStr).join('').length;
        let isLargeStringDivisor = !largerStr.split(tempStr).join('').length;

        console.log('--------', tempStr, isSmallStringDivisor, isLargeStringDivisor)

        if(isSmallStringDivisor && isLargeStringDivisor) return tempStr;
    }

    return '';
};

console.log(gcdOfStrings("ABCABC", "ABC"));