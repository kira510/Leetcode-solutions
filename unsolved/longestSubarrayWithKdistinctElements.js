/*
Longest subarray not having more than K distinct elements

    Difficulty Level : Medium

Given N elements and a number K, find the longest subarray which has not more than K distinct elements.(It can have less than K).

Examples: 

Input : arr[] = {1, 2, 3, 4, 5}
            k = 6 
Output : 1 2 3 4 5 
Explanation: The whole array has only 5 
distinct elements which is less than k, 
so we print the array itself.

Input: arr[] = {6, 5, 1, 2, 3, 2, 1, 4, 5}
           k = 3
Output: 1 2 3 2 1, 
The output is the longest subarray with 3
distinct elements.
*/

function longest(a,k) {
    let countDistinct = 1, objMap = {}, maxCount = 1, count = 1, left, right;

   let i=0; j=i+1;

   objMap[a[i]] = true;

    while(j<a.length) {
        if(!objMap[a[j]]) {
            if(countDistinct + 1 > k) {
                delete objMap[a[i]]
                i++
                countDistinct = countDistinct - 1;
                count--
            } else {
                objMap[a[j]] = true;
                countDistinct++
                count++
            }
        } else {
            count++
        }

        if(count > maxCount) {
            maxCount = count;
            left = i
            right = j
        }

        j++
    }


    for(i=left; i<=right; i++) {
        console.log(a[i])
    }
}

longest([6, 5, 1, 2, 3, 2, 1, 4, 5], 3)
