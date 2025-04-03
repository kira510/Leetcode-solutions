/**
 * https://leetcode.com/problems/happy-number/
 * 
 * @param {number} n
 * @return {boolean}
 * 
 * Time Complexity:
O(k): Where k is the number of iterations before a loop is detected or we reach 1. Since the sum of squares operation reduces the number, this is generally quite efficient.
Space Complexity:
O(k): Due to the space required to store the numbers in the set.

 * Logic: When we add the square of the digits, if happy number one is not reached then 
 * the number is bound to cycle back.
 */
var isHappy = function(n) {
    function getSquareOfDigits(num) {
        let sum = 0;

        while(num > 0) {
            let q = Math.floor(num/10);
            let r = num % 10;

            num = q;
            sum+=(r*r);
        }

        return sum;
    }

    let p = n;

    const seen = new Set();

    while(p !== 1 && !seen.has(p)) {
        seen.add(p);
        p = getSquareOfDigits(p);
    }

    return p === 1;
};

console.log(isHappy(19));
console.log(isHappy(21));


/*
two pointer solution:
Slow moves at normal speed but fast moves twice as fast.

If a cycle exists then eventually slow becomes equal to fast or fast becomes 1.
This is: `Floyd's Tortoise and Hare (Cycle Detection)`
*/
var isHappy2 = function(n) {
    function getSquareOfDigits(num) {
        let sum = 0;

        while(num > 0) {
            let q = Math.floor(num/10);
            let r = num % 10;

            num = q;
            sum+=(r*r);
        }

        return sum;
    }

    let slow = n;
    let fast = getSquareOfDigits(n);

    while(fast !== 1 && slow !== fast) {
        slow = getSquareOfDigits(slow);
        fast = getSquareOfDigits(getSquareOfDigits(fast));
    }

    return fast === 1;
};

console.log(isHappy2(19));
console.log(isHappy2(21));