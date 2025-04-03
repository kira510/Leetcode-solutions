
/*
Recursive solution

Time Complexity = O(2^n) --> VERY BAD
*/
function fib(n) {
    if(n == 1 || n == 2) return 1;

    return fib(n - 1) + fib(n-2);
}

console.log(fib(5));
console.log(fib(6));
console.log(fib(45));

/*
memoization soluton
timecomplexity =~ O(n) //approximately
*/
function fibMemoization(n) {
    const fibRes = {};

    function fib(n) {
        if(n == 1 || n == 2) return 1;
        if(fibRes[n]) return fibRes[n];

        const res = fib(n-1) + fib(n-2);
        fibRes[n] = res;

        return res;
    }

    return fib(n);
}

console.log(fibMemoization(45));


/*
Bottoms up approach
Add f(1) + f(2) and so on. 
*/
function finonacciTabulated(n) {
    const fib = [0,1,1];

    for(let i=3; i<=n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[n];
}

console.log(finonacciTabulated(45));
