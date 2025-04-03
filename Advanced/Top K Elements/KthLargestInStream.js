/**
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/description/
 * 
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.minHeap = new MinHeap(); // Custom Min Heap implementation

    for (let num of nums) {
        this.add(num);
    }

};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.minHeap.push(val);

    // Keep only 'k' largest elements in the heap
    if (this.minHeap.size() > this.k) {
        this.minHeap.pop();  // Remove the smallest element
    }

    return this.minHeap.top(); // Return Kth largest element (smallest in the heap)

};

// Min Heap (Priority Queue) Implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length; // heap size.
    }

    top() {
        return this.heap[0]; // top value / smallest value in this heap.
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp() // bubble up operation....
    }

    _heapifyUp() {
        let length = this.heap.length;
        let idx = length - 1;

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] >= this.heap[parentIdx]) break;
            this._swap(idx, parentIdx);
            idx = parentIdx;
        }
    }

    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    pop() {  // popping means, removing the top item of the heap.
        this._swap(0, this.heap.length - 1);
        let popped = this.heap.pop();

        this._heapifyDown();
        return popped;
    }

    _heapifyDown() {
        let idx = 0;
        let length = this.heap.length;
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let smallest = idx;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === idx) break; // means, if there is no swap, then.

            this._swap(idx, smallest);
            idx = smallest;
        }
    }
}
/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


// Time complexity: O(nlog k)

//for each num, worst case we insert once which is nlogK.

// Space complexity: O(k)

