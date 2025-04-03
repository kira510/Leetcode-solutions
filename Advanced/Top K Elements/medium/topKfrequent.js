/**
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequentHashMap = function(nums, k) {
    const freqCounter = new Map();

    nums.forEach(num => {
        freqCounter.set(num, (freqCounter.get(num) || 0) + 1)
    })

    let elements = Array.from(freqCounter.keys());
    elements.sort((a,b) => freqCounter.get(b) - freqCounter.get(a));

    return elements.slice(0,k);
};

console.log(topKFrequentHashMap([3,0,1,0], 1));
console.log(topKFrequentHashMap([1,1,1,2,2,3], 2));
console.log(topKFrequentHashMap([1], 1));

/*
Time complexity: O(nlogn)
Space Complexity: O(n)
*/

//-----------------------------------------------------------------------------------
//BUCKET SORT

var topKFrequentBucketSort = function(nums, k) {
    const freqCounter = new Map();

    nums.forEach(num => {
        freqCounter.set(num, (freqCounter.get(num) || 0) + 1)
    })

    let elements = Array.from({length: nums.length + 1}, () => []);

    for(let [num, freq] of freqCounter) {
        elements[freq].push(num);
    }

    const topK = [];
    for(let i=elements.length-1; i>=0 && topK.length < k; i--) {
        if(elements[i].length > 0) topK.push(...elements[i])
    }

    return topK.slice(0, k);
};

console.log('------bucketsort------');
console.log(topKFrequentBucketSort([3,0,1,0], 1));
console.log(topKFrequentBucketSort([1,1,1,2,2,3], 2));
console.log(topKFrequentBucketSort([1], 1));

/*
Time complexity: O(n)
Space Complexity: O(n)
*/























//-------------------------------MIN HEAP SOLN----------------------------------------------------
class MinHeap {
    constructor() {
        this.heap=[];
    }

    len() {
        return this.heap.length;
    }

    push(val, freq) {
        this.heap.push({val, freq});
        this.heapify();
    }

    heapify() {
        let last = this.heap.length - 1;

        while(last > 0) {
            let parent = Math.floor((last-1)/2);
            if(this.heap[parent].freq > this.heap[last].freq) {
                this.swap(last, parent)
                last = parent;
            } else break
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    pop() {
        if (!this.len()) return null;
        if (this.len() === 1) {
            return this.heap.pop();
        }
        this.swap(0, this.heap.length-1);
        const poped = this.heap.pop();
        this.heapifyDown();
        return poped;
    }

    heapifyDown() {
        let parent = 0;

        while(true) {
            let child1 = 2*parent + 1;
            let child2 = 2*parent + 2;
            let smallest = parent;

            if(child1 < this.len() && this.heap[smallest].freq > this.heap[child1].freq) {
                smallest = child1;
            }

            if(child2 < this.len() && this.heap[smallest].freq > this.heap[child2].freq) {
                smallest = child2;
            }

            if(smallest == parent) break;

            this.swap(smallest, parent);
            parent = smallest;
        }
    }

    top() {
        return this.heap[0].freq;
    }
}

var topKFrequent = function(nums, k) {
    const freqCounter = new Map();
    const minHeap = new MinHeap();

    nums.forEach(num => {
        freqCounter.set(num, (freqCounter.get(num) || 0) + 1)
    })

    for(let [num, freq] of freqCounter) {
        if(minHeap.len() < k) {
            minHeap.push(num, freq);
        } else if(freq >= minHeap.top()) {
            minHeap.pop();
            minHeap.push(num, freq);
        }
    }

    const topK = [];

    for(let i=0; i<k; i++) {
        topK.push(minHeap.pop().val);
    }


    return topK;
};

console.log('------min heap------');
// console.log(topKFrequent([3,0,1,0], 1));
// console.log(topKFrequent([1,1,1,2,2,3], 2));
// console.log(topKFrequent([1], 1));
// console.log(topKFrequent([4,1,-1,2,-1,2,3], 2));
console.log(topKFrequent([5,1,-1,-8,-7,8,-5,0,1,10,8,0,-4,3,-1,-1,4,-5,4,-3,0,2,2,2,4,-2,-4,8,-7,-7,2,-8,0,-8,10,8,-8,-2,-9,4,-7,6,6,-1,4,2,8,-3,5,-9,-3,6,-8,-5,5,10,2,-5,-1,-5,1,-3,7,0,8,-2,-3,-1,-5,4,7,-9,0,2,10,4,4,-4,-1,-1,6,-8,-9,-1,9,-9,3,5,1,6,-1,-2,4,2,4,-6,4,4,5,-5], 7));

/*
Time Complexity: O(N log K) — Pushing to and popping from the heap both take O(log K), and each is done for N elements.

Space Complexity: O(N) — For the frequency map.


*/
