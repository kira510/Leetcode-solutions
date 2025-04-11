/**
 * https://leetcode.com/problems/isomorphic-strings/
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const sMap = new Map();
    const tMap = new Map();

    for(let i=0; i<s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if((sMap.has(charS) && sMap.get(charS) !== charT) ||
            (tMap.has(charT) && tMap.get(charT) !== charS)
        ) {
            return false
        }

        sMap.set(charS, charT);
        tMap.set(charT, charS);
    }

    return true
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));