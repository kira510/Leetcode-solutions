/*
Description: Write a function flattenKDeep(arr, k) that flattens an array up to a specific depth k. Elements deeper than k should remain as arrays. k=0 means no flattening.
Example:
flattenKDeep([1, [2, [3, [4]]], 5], 0) should return [1, [2, [3, [4]]], 5]
flattenKDeep([1, [2, [3, [4]]], 5], 1) should return [1, 2, [3, [4]], 5]
flattenKDeep([1, [2, [3, [4]]], 5], 2) should return [1, 2, 3, [4], 5]
*/

function flattenKDeep(arr, n) {
  if (n === 0) {
    return arr;
  }

  const result = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      result.push(...flattenKDeep(element, n - 1));
    } else {
      result.push(element);
    }
  }
  return result;
}

console.log(JSON.stringify(flattenKDeep([1, [2, [3, [4]]], 5], 1)));
console.log(JSON.stringify(flattenKDeep([1, [2, [3, [4]]], 5], 2)));