/**
 * https://leetcode.com/problems/furthest-building-you-can-reach/
 * 
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 * 
 * Time Complexity: O(n log k), where k is the number of ladders, because we insert into and remove from the heap typically up to k times.
Space Complexity: O(k) for maintaining the heap.
 */
var furthestBuilding = function(heights, bricks, ladders) {
    const maxHeap = new MaxHeap();

    let i=0;
    for(i=0; i<heights.length-1; i++) {
        const diff = heights[i+1] - heights[i];

        if(diff <= 0) continue;

        maxHeap.push(diff);
        bricks-=diff;

        if(bricks<0) {
            ladders--;
            bricks+=maxHeap.pop()
        }

        if(ladders < 0) break
    }

    return i;
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(num) {
        this.heap.push(num);
        this.heapify();
    }

    heapify() {
        let last = this.heap.length-1;

        while(last > 0) {
            const parent = Math.floor((last-1)/2);
            if(this.heap[last] > this.heap[parent]) {
                [this.heap[parent], this.heap[last]] = [this.heap[last], this.heap[parent]];
            } else break

            last = parent;
        }
    }

    pop() {
        const max = this.heap[0];
        const last = this.heap.pop();

        if(this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }

        return max;
    }

    heapifyDown() {
        let parent = 0; 

        while(true) {
            const child1pos = 2*parent+1;
            const child2pos = 2*parent+2;
            let greaterChildpos;
            if(!this.heap[child1pos]) break;

            if(!this.heap[child2pos]) {
                greaterChildpos = child1pos;
            } else  {
                greaterChildpos = this.heap[child1pos] > this.heap[child2pos] ? child1pos : child2pos;
            }

            if(this.heap[greaterChildpos] > this.heap[parent]) {
                [this.heap[parent], this.heap[greaterChildpos]] = 
                    [this.heap[greaterChildpos], this.heap[parent]];
                parent = greaterChildpos;
            } else break;
        }
    }

}

console.log(furthestBuilding([4,2,7,6,9,14,12], 5, 1));
console.log(furthestBuilding([4,12,2,7,3,18,20,3,19], 10, 2));
console.log(furthestBuilding([14,3,19,3], 17, 0));

/*
Note:

the initial approach did use the recursive way of heapify up and down

But it failed with time exceeds for very large input hence we had to go the iterative way.
*/
