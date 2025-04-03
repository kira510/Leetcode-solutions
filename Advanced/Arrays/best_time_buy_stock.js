/**
 * Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxDiff = 0, i=0;

    for(let j=1; j<prices.length; j++) {
        if(prices[j] < prices[i]) {
            i = j;
        } else if((prices[j] - prices[i]) > maxDiff) {
            maxDiff = (prices[j] - prices[i]);
        }
    }

    return maxDiff;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));