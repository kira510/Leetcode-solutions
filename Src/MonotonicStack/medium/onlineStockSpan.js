
//https://leetcode.com/problems/online-stock-span/
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;

    while(this.stack.length && this.stack[this.stack.length-1][0] <= price) {
        span+=this.stack.pop()[1]
    }

    this.stack.push([price, span]);
    return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

/*
Time Complexity:
O(1) -> function next takes only one operation to give the output

Space Complexity: O(n)

*/