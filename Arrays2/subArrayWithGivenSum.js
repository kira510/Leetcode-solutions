/*
Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S and return the left and right index(1-based indexing) of that subarray.

In case of multiple subarrays, return the subarray indexes which comes first on moving from left to right.

Note:- Both the indexes in the array should be according to 1-based indexing. You have to return an arraylist consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.

Example 1:

Input:
N = 5, S = 12
A[] = {1,2,3,7,5}
Output: 2 4
Explanation: The sum of elements 
from 2nd position to 4th position 
is 12.
*/

function subArray(arr, sum) {
    let currentSum=0;

    for(i=0; i<arr.length; i++) {
        currentSum = arr[i];

        let j=i+1;
        while(j<arr.length) {
            if(currentSum === sum) {
                return [i, j-1]
            }

            if(currentSum > sum) {
                break
            }

            currentSum += arr[j];
            j++;
        }
    }

    return []
}

console.log(subArray([15, 2, 4, 8, 9, 5, 10, 23], 23));