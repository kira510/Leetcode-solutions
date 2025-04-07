/**
 * https://leetcode.com/problems/open-the-lock/
 * 
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const deadSet = new Set(deadends);
    const visted = new Set();
    const queue = [['0000', 0]];
    visted.add('0000');

    while(queue.length > 0) {
        const [current, steps] = queue.shift();

        if(deadSet.has(current)) continue;

        if(current === target) return steps;

        const neighbours = getNeighbours(current);
        for(const neighbour of neighbours) {
            if(!visted.has(neighbour)) {
                visted.add(neighbour);
                queue.push([neighbour, steps + 1]);
            }
        }

    }

    return -1;
};

var getNeighbours = function(node) {
    const neighbours = [];

    for(let i=0; i<node.length; i++) {
        const digit = parseInt(node[i]);
        for(const dir of [-1, 1]) {
            const newDigit = (digit + dir + 10)%10;
            const neighbour = node.slice(0,i) + newDigit + node.slice(i+1);
            neighbours.push(neighbour);
        }
    }

    return neighbours
}

console.log(openLock(["0201","0101","0102","1212","2002"], "0202"));

/*
Time Complexity
The time complexity of this approach is O(b^d), 
where b is the branch factor (8 possible neighbors per node after avoiding deadends), 
and d is the number of steps (depth in our case).

Space Complexity
The space complexity is O(b^d) due to the queue space. Likewise, 
the space needed to maintain the visited set has an upper bound of 10,000 if all possible combinations are explored.
*/