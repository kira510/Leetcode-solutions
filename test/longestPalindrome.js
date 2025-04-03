var longestPalindrome = function(s) {
    let m = new Map();
    for (let i = 0; i < s.length; i++) {
        m.set(s[i], m.get(s[i]) + 1 || 1);
    }
    let numOfOdds = 0;
    for (let value of m.values()) {
        if (value % 2 === 1) {
            numOfOdds += 1;
        }
    }

    console.log('---', numOfOdds, s.length, s.length - numOfOdds + 1)
    return numOfOdds > 0 ? s.length - numOfOdds + 1 : s.length;
    // T.C: O(N)
    // S.C: O(N)
    // We can have only one letter that repeats an odd number of times 
    // in a palindrome. Except for the one, we need to subtract one from
    // each odd number and make it even. So, we substract the number of odds
    // from the number of letters in a given string and lastly add one
    // because we can allow one letter that occurs an odd number of times.
    // If no letter in the given string occurs an odd number of times,
    // then we can just return the length of the given string because
    // we can make a palindrome using all letters if each letter occurs
    // an even number of times.

    /*
    consider: aaabbccde
    numberOfOdds is 3. 
    Out of which only one odd can be used in the palindrome.
    Either a or d or e in `acb_bca`

    so soln: s.lenght - numOfOdds + 1 (plus 1 is to include one odd)

    */
};

console.log(longestPalindrome('aaabbccde'));
console.log(longestPalindrome('aaabbccd'));