/**
 * https://leetcode.com/problems/koko-eating-bananas/
 * 
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const maxPile = Math.max(...piles);
    const canEatAll = (speed) => {
        let totalHours = 0;

        for(const pile of piles) {
            totalHours += Math.ceil(pile/speed);
        }

        return totalHours <= h;
    }

    let left = 1, right = maxPile; 
    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        if(canEatAll(mid)) {
            right = mid-1;
        } else left = mid + 1;
    }

    return left;
};

console.log(minEatingSpeed([3,6,7,11], 8));

/*
Time Complexity: O(n log(max(piles))), where n is the number of piles. 
The log factor comes from the binary search.
Space Complexity: O(1) – constant space used.

*/