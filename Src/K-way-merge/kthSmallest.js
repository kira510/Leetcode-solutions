/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
 * 
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const n = matrix.length;
    const m = matrix[0].length;
    const maxHeap = new MaxHeap();

    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            maxHeap.push(matrix[i][j]);

            if(maxHeap.len() > k) {
                maxHeap.pop();
            }
        }
    }

    return maxHeap.top();
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    len() {
        return this.heap.length;
    }

    top() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.heapify();
    }


    pop() {
        this.swap(0, this.len()-1);
        const max = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapify() {
        let last = this.len()-1;

        while(last>0) {
            let parent = Math.floor((last-1)/2);

            if(this.heap[last]>this.heap[parent]) {
                this.swap(last, parent);
                last=parent
            } else break;
        }
    }

    heapifyDown() {
        let parent=0;

        while(true) {
            let leftChild = 2*parent + 1;
            let rightChild = 2*parent + 2;
            let biggest = parent;

            if(leftChild < this.len() && this.heap[leftChild] > this.heap[biggest]) {
                biggest = leftChild;
            }

            if(rightChild < this.len() && this.heap[rightChild] > this.heap[biggest]) {
                biggest = rightChild;
            }

            if(biggest == parent) return;

            this.swap(biggest, parent);
            parent=biggest;
        }
    }
}

console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8));

/*
Brute force approach:

We will loop through n*m times and store it an new array.
Then we sort the array. And then return kth element

Hence the complexity is n*m + nmlog(nm) + O(1)
Space complexity: O(n*m) -> additional array


Max Heap Approach:

Time complexity: we do insert operations n*m times => nmLog(K)

Space complexity: O(k) 
*/
