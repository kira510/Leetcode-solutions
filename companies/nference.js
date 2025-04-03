/*
String s = “111111000000000001011100000….” Identify the substring where the number of 1’s - number of 0’s should be maximum.

1110111100

0000 -> Empty string

101011 -> Longest string length (2)

101011000001101010000 -> All the possible substrings with max difference and longest length

Input: string
Output: list of strings.


----------------------------------
101011
I = 0, j=5, maxSum = 2

------------------------------
j=8, sumOFcurrentArray = maxSum 
*/

//10101100000110101000
function test(str) {
    let outArr = []; //length: array of arrays
    let maxCount = 0;
    let maxLength = 0;

    if(str[0] == 1) {
        maxCount = 1;
        outArr[1] =  [str[0]]
        maxLength = 1;
    }

    let i = 0
    let count = 1;
    let subStr = str[i];
    let j=1

        while(i<j) {
            subStr = subStr + subStr[j];
            if(str[j] == 1) {
                count++ 
            } else {
                count--
            }
    
            if(count > maxCount) {
                maxCount = count;
                if(subStr.length > maxLength) {
                    maxLength = subStr.length;
                    outArr = [subStr];
                } else if(subStr.length == maxLength) {
                    outArr.push(subStr);
                }
            }else if (count < 0) {
                i=j+1;
                j=i+1;
                subStr = str[i];
                if(str[i] == 1) {
                    count = 1
                } else {
                    count = 0;
                }
            }
        }

    return outArr
}