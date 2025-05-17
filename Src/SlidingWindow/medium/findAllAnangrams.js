/**
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * 
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const res = [], pLen = p.length;
    const pCharMap = new Map();

    for(const char of p) {
        pCharMap.set(char, (pCharMap.get(char) || 0)+1);
    }

    let left=0, right=0, count = pLen;
    while(right<s.length) {
        if(pCharMap.has(s[right])) {
            const val = pCharMap.get(s[right]);
            if(val > 0) count--;
            pCharMap.set(s[right], val-1);
        }

        if(count === 0) res.push(left);

        right++;
        if((right-left) === pLen) {
            if(pCharMap.has(s[left])) {
                const val = pCharMap.get(s[left]);
                pCharMap.set(s[left], val+1);
                if(val >= 0) count++;
            } 
            left++;
        }

    }

    return res;
}

console.log(findAnagrams("cbaebabacd", "abc"));