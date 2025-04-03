/*
There are N people standing in a circle waiting to be executed. The counting out begins at some point in the circle and 
proceeds around the circle in a fixed direction. In each step, a certain number of people are skipped and the next person is executed. 

The elimination proceeds around the circle (which is becoming smaller and smaller as the executed people are removed), 
until only the last person remains, who is given freedom. 

Given the total number of persons N and a number k which indicates that k-1 persons are skipped and the kth person is killed in a circle. 
The task is to choose the person in the initial circle that survives.

Input: N = 7 and k = 3
Output: 4
Explanations: The persons at positions 3, 6, 2, 7, 5, and 1 are killed in order, 
and the person at position 4 survives.
*/

function josephus(arr, currPos, k) {
    let num = arr.length;
    if (num === 1) {
        return arr[0]
    }

    let i = (currPos + k - 1)%num;
    arr.splice(i, 1)
    return josephus(arr, i, k)
}

console.log(josephus([1,2,3,4,5,6,7], 0, 3));