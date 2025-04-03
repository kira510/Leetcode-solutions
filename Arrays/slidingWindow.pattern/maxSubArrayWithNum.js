/*
num = 3
arr = [1,2,3,4,5,6,7]

ans: 5 + 6 + 7 = 18
*/

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)