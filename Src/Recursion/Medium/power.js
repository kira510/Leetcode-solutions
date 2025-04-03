/**
 * https://leetcode.com/problems/powx-n/
 * 
 * x^n = (x^(n/2))^2 if n is even.
x^n = x * x^(n-1) if n is odd.

 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

    function power(y,m) {
        if(m==0) return 1;

        let half = power(y, Math.floor(m/2));

        if(m%2 == 0) {
            return half*half;
        } else {
            return y*half*half; //floor removes the half
        }
    }

    const res = power(x, Math.abs(n));

    return n < 0 ? 1/res : res;
};

function myPowIterative(x, n) {
    // Handle special case when n is 0, any number to power 0 is 1
    if (n === 0) return 1;

    // Calculate the absolute value of n
    let N = Math.abs(n);

    // Initialize result
    let result = 1;

    // Multiply x to itself N times
    for (let i = 0; i < N; i++) {
        result *= x;
    }

    // If n is negative, return the inverse
    return n < 0 ? 1 / result : result;
}

// console.log(myPow(2.00000, -200000000))

var myPow2 = function(x, n) {

    function power(y,m) {
        if(m==0) return 1;

        return y*power(y, m-1);
    }

    const res = power(x, Math.abs(n));

    return n < 0 ? 1/res : res;
};

//this gives max call stack size unline iterative
//recusion adds more functions to the call stack hence exceeding the stack size for large vals like 200000000
//meanwhile iteration runs in the same function and does not contribute to stack size increase
console.log(myPow2(2.00000, -200000000))