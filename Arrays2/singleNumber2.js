/*
 Single Number II
Medium
5K
524
Companies

Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,3,2]
Output: 3

Example 2:

Input: nums = [0,1,0,1,0,1,99]
Output: 99

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};

    for(let i=0; i<nums.length; i++) {
        if(map[nums[i]]) {
            if(map[nums[i]] > 1) { 
                delete map[nums[i]] 
            } else {
                map[nums[i]] = map[nums[i]] + 1
            }
        } else {
            map[nums[i]] = 1;
        }
    }

    return Object.keys(map)[0]
};

// function dec2Bin(num) {
    

//     return (num >>> 0).toString(3);
// }

console.log(singleNumber([9,9,3,9]))


/*
Objec­tive:  Given an array of integers in which all the elements appear thrice but one which appears only once. Write an algorithm to find that element.

Example

int [] arrA = {6,5,3,2,4,2,5,6,3,3,6,5,2};
Output: 4

Approach:

Naïve Approach: Use nested for loops and compare each element with all other elements and return the element which appears only once.

Time Complexity: O(n^2)

Use Hash Map:

    Store each element as a key and its count as the value in the hash map.
    Iterate through the map and return the element that appears once.

Time complexity: O(n), Space complexity: O(n)

Better Approach – O(n) time and O(1) space:

    Doing XOR will not help here since all the elements appear an odd number of times.
    Sum all the bits in the same positions for all the elements and take modulus with 3.
    If the remainder is 0 i.e if the sum is a multiple of 3 means that the bit is set by elements appearing thrice.
    If the remainder is not 0 i.e sum is not multiple of 3, it means that the bit is set in the element and appears once for sure. (not sure if that bit is set or unset in elements appearing thrice.)
    So if we repeat steps 2,3,4 for all the elements for all the positions then we will get the element appearing once. See the example below

Say arr[] = {6, 6, 6, 3}

1 1 0
1 1 0
1 1 0
0 1 1
__________+
3 4 1

Now modulus with 3

3mod3  4mod3 1mod3 => 0 1 1 => 3 element appearing once.

Code:

import java.util.Arrays;
public class FindSingleElement {
    public static void find (int [] arrA){
        int singleElement =0;
        for (int i = 0; i <32 ; i++) { //this is for calculating for every position in 32 bit integer
            int y = (1 << i);
            int tempSum = 0;
            for (int j = 0; j <arrA.length ; j++) {
                if((arrA[j] & y)>=1) //if that particular bit is set for the ith position, add 1 to sum (w.r.t that bit)
                    tempSum = tempSum +1;
            }
            //if bits are not multiple of 3 then that bit belongs to the element appearing single time
            if((tempSum%3)==1) {
                singleElement = singleElement | y;
            }
        }
        System.out.println("Element appearing once is: " + singleElement);
    }

    public static void main(String[] args) {
        int arrA [] = {1, 4, 5, 6, 1, 4, 6, 1, 4, 6};
        System.out.print(Arrays.toString(arrA));
        find(arrA);
    }
    
}
*/
