/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */

/*
Complexity:
O(n*m) where n is the number of people and m is the max 
number of the tickets a person can buy
*/
var timeRequiredToBuyMySoln = function(tickets, k) {
    let count = 0;
    while(true) {
        count++;
        let temp = tickets.shift();
        temp--;
        if(temp !=0) tickets.push(temp);

        if(k==0 && temp == 0) return count;
        k--;
        if(k<0) k=tickets.length-1;
    }
};



//--------------------------------
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuyBruteForce2 = function(tickets, k) {
    let time = 0;
    while(tickets[k]>0) {
        for(let i=0; i<tickets.length; i++) {
            if(tickets[i]>0) {
               time++;
               tickets[i]--; 
            }

            if(tickets[k] == 0) return time;
        }
    }

    //return time;
};


// console.log(timeRequiredToBuy([2,3,2], 2));
// console.log(timeRequiredToBuy([5,1,1,1], 0));


//O(n), S(1)
//OPTIMISED SOLUTION
var timeRequiredToBuy = function(tickets, k) {
    let time = 0;
    for(let i=0; i<tickets.length; i++) {
        if(i<=k) {
            time+=Math.min(tickets[i], tickets[k]);
        } else {
            time+=Math.min(tickets[i], tickets[k] - 1);
        }
    }

    return time;
};

console.log(timeRequiredToBuy([2,3,2], 2));
console.log(timeRequiredToBuy([5,1,1,1], 0));