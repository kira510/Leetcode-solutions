/*
Given two strings a and b, return the length of the longest uncommon subsequence between a and b. If the longest uncommon subsequence does not exist, return -1.

An uncommon subsequence between two strings is a string that is a subsequence of one but not the other.

A subsequence of a string s is a string that can be obtained after deleting any number of characters from s.

    For example, "abc" is a subsequence of "aebdc" because you can delete the underlined characters in "aebdc" to get "abc". Other subsequences of "aebdc" include "aebdc", "aeb", and "" (empty string).


Example 1:

Input: a = "aba", b = "cdc"
Output: 3
Explanation: One longest uncommon subsequence is "aba" because "aba" is a subsequence of "aba" but not "cdc".
Note that "cdc" is also a longest uncommon subsequence.

Example 2:

Input: a = "aaa", b = "bbb"
Output: 3
Explanation: The longest uncommon subsequences are "aaa" and "bbb".

Example 3:

Input: a = "aaa", b = "aaa"
Output: -1
Explanation: Every subsequence of string a is also a subsequence of string b. Similarly, every subsequence of string b is also a subsequence of string a.


the idea wasn't that obvious in the beginning but if we take a closer look and pay attention to the conditions which are :
1)subsequence (fixed order of characters of a given string)
2)not a subsequence in the other string
3)the longest subsequence result that validates the 2 conditions above

if a and b are not the same then there's 2 cases :
1)both are equal in length but have at least one different character ===> a.length== b.length== is the longest uncommon subsequence
2)one of them is longer than the other which means the longer one isn't a subsequence of the shorter one ===> the longer one length is the final result (e.g "abc" and "abct" the result is "abct".length)
*/

var findLUSlength = function(a, b) {
    // identical strings don't have uncommon subsequence
    if (a === b) return -1;
    // the longer string itself is the longest uncommon subsequence
    else return Math.max(a.length, b.length);
};

console.log(findLUSlength('abd', 'abe'));