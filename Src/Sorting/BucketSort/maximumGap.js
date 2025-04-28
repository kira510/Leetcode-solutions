/**
 * https://leetcode.com/problems/maximum-gap/description/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length < 2) return 0;

    let minNum = Math.min(...nums);
    let maxNum = Math.max(...nums);
    let n = nums.length;

    if(minNum === maxNum) return 0;

    const bucketSize = Math.max(1, Math.ceil((maxNum - minNum)/(n-1)));
    const bucketsCount = Math.floor((maxNum - minNum)/bucketSize) + 1;

    const buckets = Array.from({length: bucketsCount}, () => ({min: Infinity, max: -Infinity}));

    nums.forEach(num => {
        const index = Math.floor((num-minNum)/bucketSize);
        buckets[index].min = Math.min(buckets[index].min, num);
        buckets[index].max = Math.max(buckets[index].max, num);
    })

    let maxGap = 0, previousMax = minNum;
    buckets.forEach(bucket => {
        if(bucket.min === Infinity) return;
        maxGap = Math.max(maxGap, bucket.min - previousMax);
        previousMax = bucket.max; 
    })

    return maxGap;
};

console.log(maximumGap([3,6,9,1]));

/**
https://www.youtube.com/watch?v=21XhR6r5jU8

Time Complexity: (O(n)), traversing through the array and buckets is linear.
Space Complexity: (O(n)), due to the space used by buckets.

Intuition
Instead of sorting the entire array, we can use the Pigeonhole Principle: if numbers are evenly distributed, 
the max gap must be between buckets, not within. This allows for linear time bucket processing.


Identify the global min and max. Return 0 if all elements are the same.
Calculate optimal bucket size: gap = max(1, (max - min) // (n - 1)).
Create buckets to store local min and max values.
Traverse the array and populate each bucket.
Scan through buckets, calculating max gap between consecutive buckets.
This method avoids full sorting and cleverly uses buckets to achieve linear performance — a high-impact 
optimization that can turn heads in interviews.


 */
