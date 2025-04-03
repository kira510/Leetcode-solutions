/**
 * https://leetcode.com/problems/reveal-cards-in-increasing-order/
 * 
 * @param {number[]} deck
 * @return {number[]}
 * 
 * Input: deck = [17,13,11,2,3,5,7]
    Output: [2,13,3,11,5,17,7]

    Time complexity: sort time + one loop = O(NLogN) + O(N)
    Space Complexity: O(n) due to additional array
 */
var deckRevealedIncreasing = function(deck) {
    const sortedDeck = deck.sort((a,b) => a-b);

    const revealingDeck = new Array(deck.length);
    const queue = Array.from({ length: deck.length }, (_,i) => i);

    for(let i=0; i<sortedDeck.length; i++) {
        const place = queue.shift();
        revealingDeck[place] = sortedDeck[i];

        if(queue.length) queue.push(queue.shift());
    }

    return revealingDeck;
};

console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]));