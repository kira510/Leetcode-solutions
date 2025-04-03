/**
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * 
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
    const res = [];
    let reqChars = {};
    
    for(const str of p) {
        if(reqChars[str]) reqChars[str]++;
        else reqChars[str] = 1;
    }

    let left = 0;
    let right = 0;
    let count = p.length;

    while(right < s.length) {
        if(reqChars[s[right]] > 0) count--;
        reqChars[s[right]]--;
        right++;

        if(count == 0) res.push(left);

        if((right - left) === p.length) {
            if(reqChars[s[left]] >= 0) count++;
            reqChars[s[left]]++;
            left++
        }
    }

    return res;
};

console.log(findAnagrams("cbaebabacd", "abc"));