/**
 * https://leetcode.com/problems/zigzag-conversion/
 * 
 * https://www.youtube.com/watch?v=Q2Tw6gcVEwc
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    let str = '';

    for (let i = 0; i < numRows; i++) {
        let start = i;

        while(start<s.length) {
            str+=s[start];

            if(i>0 && i < (numRows-1) && 
                (start + (numRows - 1)*2 - 2*i) < s.length) {
                str+=s[start + (numRows - 1)*2 - 2*i]
            }

            start += (numRows - 1)*2
        }
    }

    return str;
};

// console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));

//Refer to tab for explanation