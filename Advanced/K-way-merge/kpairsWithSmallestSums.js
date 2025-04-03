/*
https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
*/
function kSmallestPairs(nums1, nums2, k) {
    const minHeap = new MinHeap();
    const result = [];

    for(let i=0; i<Math.min(nums1.length, k); i++) {
        minHeap.push({
            sum: nums1[i] + nums2[0],
            i: i,
            j: 0
        });
    }

    while(result.length < k) {
        const min = minHeap.pop();
        const j= min.j, i = min.i;
        result.push([nums1[i], nums2[j]]);

        if(j+1 < nums2.length) {
            minHeap.push({
                sum: nums1[i] + nums2[j+1],
                i: i,
                j: j+1
            })
        }
    }

    return result;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    len() {
        return this.heap.length;
    }

    push(val) {
        this.heap.push(val);
        this.heapify()
    }

    pop() {
        this.swap(0, this.len() - 1);
        const min = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapify() {
        let last = this.len() - 1;

        while(last > 0) {
            let parent = Math.floor((last-1)/2);
            if(this.heap[last].sum < this.heap[parent].sum) {
                this.swap(last, parent);
                last = parent;
            } else break;
        }
    }

    heapifyDown() {
        let parent = 0;

        while(true) {
            let leftChild = 2*parent + 1;
            let rightChild = 2*parent + 2;
            let smallest = parent;

            if(leftChild < this.len() 
                && this.heap[leftChild].sum < this.heap[smallest].sum) {
                    smallest = leftChild;
            }

            if(rightChild < this.len() 
                && this.heap[rightChild].sum < this.heap[smallest].sum) {
                    smallest = rightChild;
            }

            if(smallest === parent) break;
            this.swap(smallest, parent);
            parent = smallest;
        }
    }
}

console.log(JSON.stringify(kSmallestPairs([1,7,11], [2,4,6], 3)));

/*
Time: O(k * log(min(m, k))), since we limit heap size to the lesser of m or k.
Space Complexity
    Space: O(min(m, n, k)), due to heap storage and result storage of size k.
*/
