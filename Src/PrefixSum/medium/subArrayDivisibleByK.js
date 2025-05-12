/**
 * https://leetcode.com/problems/subarray-sums-divisible-by-k/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * Hint:
 * Prefix Sum feature:
 * 
 * j > i,
 * sub[0..i] % k === sub[0...j] % k ==> sub[i+1...j]/k = 0
 * Always use positive remainders 
 */
var subarraysDivByK = function(nums, k) {
    let count = 0, total = 0;
    let remainderTracker = {0:1};

    for(const num of nums) {
        total += num;

        let remainder = total % k;

        if(remainder < 0) remainder += k; //may have negative numbers

        if(remainderTracker[remainder] !== undefined) {
            count += remainderTracker[remainder];
        }

        remainderTracker[remainder] = (remainderTracker[remainder] || 0) + 1;
    }

    return count;  
};

//console.log(subarraysDivByK([4,5,0,-2,-3,1], 5));

console.log(subarraysDivByK([-4, -1, 5, 5], 5));


/*
On negative remainder explanation -- I am thinking this way just to elaborate on it a bit ( have not seen Euclidean division)
21%5 = 1 , it means two things :

1 is extra, once removed, it would be divisible by 5 (ie. (21-1)%5 ==0)
it is short of 4, once added it would be divisible by 5 ( i.e. (21+4)%5 ==0)
so if you see -4 in the a previous sub-array sum, that previous sub-array is reducing the current total sum by "4"- the reason why current sum is short of 4.
So essentially, rem = "1" and "-4" is same thing, i.e. "21" is short of 4 for it to become divisible by 5 = "21" has extra "1" which when removed makes it divisible by 5.
*/