/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;

    let prev = prices[0];
    let i=1
    while(i<prices.length) {
        if(prev > prices[i]) {
            prev = prices[i];
        } else if(prices[i+1] > prices[i]) {
            i++;
            continue
        }
        else if(prices[i] > prev) {
            max += prices[i] - prev;
            prev = prices[i+1];
            i++;
        }

        i++
    }

    return max;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([[7,6,4,3,1]]));

var maxProfit2 = function(prices) {
    let max = 0;

    for(let i=1; i<prices.length; i++) {
        if(prices[i] > prices[i-1]) {
            max += prices[i] - prices[i-1]; 
        }
    }
    
    return max;
};

console.log(maxProfit2([7,1,5,3,6,4]));
console.log(maxProfit2([1,2,3,4,5]));
console.log(maxProfit2([[7,6,4,3,1]]));