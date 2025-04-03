/*
But first, let's try the Coin Change - Greedy Algorithm approach:

Write a function minCoinChange that takes two arguments: an array of coin denominations (coins) and a target amount number (amount). The provided array of coins is sorted in ascending order, starting from the smallest coin denomination to the largest.

Your task is to return an array representing the minimum number of coins needed to make the given amount. The result should be an array of the actual coins used, not their count or sum. To achieve this, you should start by considering the largest denominations first and use them as much as possible before moving to smaller denominations. As a consequence of this, the result array should be sorted in descending order, starting from the largest coin denomination to the smallest.

Examples:

minCoinChange([1, 2, 3, 4, 5], 11); // this should return: [5, 5, 1]
minCoinChange([5, 10, 15, 20, 25], 85); // this should return: [25, 25, 25, 10]
minCoinChange([1, 5, 6, 9], 11); // this should return: [9, 1, 1]
*/
//should follow greedy
function minCoinChange(coins, amount) {
    let i = coins.length - 1;
    let res = [];
    let amtRem = amount;
    while(true) {
        let size = coins[i];

        if(size > amtRem) {
            i--;
            continue
        } 

        const rem = amtRem % size;
        const quo = amtRem / size;
        for(let j=1 ; j<=quo; j++) {
            res.push(size);
        }
        
        if(rem !== 0) {
            i--
            amtRem = rem;
        } else break;
    }

    return res;
}

console.log(minCoinChange([1, 2, 3, 4, 5], 11));
console.log(minCoinChange([5, 10, 15, 20, 25], 85));
console.log(minCoinChange([1, 5, 6, 9], 11));


//Greedy
function minCoinChangeGreedy(coins, amount) {
    let res = [];
    let total = 0;
    
    for(let i=coins.length - 1; i >= 0; i--) {
        while(total + coins[i] <= amount) {
            total+=coins[i];
            res.push(coins[i]);
        }
    }

    return res;
}

console.log(minCoinChangeGreedy([1, 2, 3, 4, 5], 11));
console.log(minCoinChangeGreedy([5, 10, 15, 20, 25], 85));
console.log(minCoinChangeGreedy([1, 5, 6, 9], 11));


//https://leetcode.com/problems/coin-change/solutions/6162873/video-keep-minimum-number-of-coins-to-make-up-each-amount/
var coinChangeLeetCode = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for(let currAmt = 1; currAmt<dp.length; currAmt++) {
        for(let coin of coins) {
            if(currAmt - coin >= 0) {
                dp[currAmt] = Math.min(dp[currAmt], 1 + dp[currAmt - coin]);
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
};

console.log(coinChangeLeetCode([186,419,83,408], 6249));