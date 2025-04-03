var singleNumber = function(nums) {
    return nums.reduce(function(prev,curr){
        return curr ^= prev;
    })
};

console.log(singleNumber([4,1,2,1,2]))

/*
The best solution is to use XOR. XOR of all array elements gives us the number with a single occurrence. The idea is based on the following two facts. 

     XOR of a number with itself is 0. 
    XOR of a number with 0 is number itself.

Let us consider the above example.  
Let ^ be xor operator as in C and C++.

res = 7 ^ 3 ^ 5 ^ 4 ^ 5 ^ 3 ^ 4

Since XOR is associative and commutative, above 
expression can be written as:
res = 7 ^ (3 ^ 3) ^ (4 ^ 4) ^ (5 ^ 5)  
    = 7 ^ 0 ^ 0 ^ 0
    = 7 ^ 0
    = 7 

*/