/**
 * https://leetcode.com/problems/k-closest-points-to-origin/
 * 
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    const distance = (x,y) => x*x + y*y;

    const heap = new MaxHeap(K);

    for(const point of points) {
        const dist = distance(point[0], point[1]);
        heap.add([dist, point]);
    }

    return heap.toArray().map(data => data[1]);
}

class MaxHeap {
    constructor(size) {
        this.maxSize = size;
        this.heap = [];
    }

    //[dist, [point]]
    add(data) {
        if(this.getHeapSize() < this.maxSize) {
            this.heap.push(data);
            this.bubbleUp();
        } else if(this.heap[0][0] > data[0]) {
            this.heap[0] = data;
            this.bubbleDown();
        }
    }

    getHeapSize() {
        return this.heap.length;
    }

    bubbleUp() {
        let last = this.getHeapSize()-1;
        while(last>0) {
            let parent = Math.floor((last-1)/2);
            if(this.heap[parent][0] < this.heap[last][0]) {
                this.swap(parent, last);
                last = parent;
            } else break
        }
    }

    bubbleDown() {
        let parent = 0;
        const len = this.getHeapSize()
        
        while(true) {
            let largest = parent;
            let leftChild = 2*largest + 1;
            let rightChild = 2*largest + 2;
            if(leftChild < len && this.heap[leftChild][0] > this.heap[largest][0]) {
                largest = leftChild
            }

            if(rightChild < len && this.heap[rightChild][0] > this.heap[largest][0]) {
                largest = rightChild;
            }

            if(largest !== parent) {
                this.swap(largest, parent);
                parent = largest;
            } else break;
        }
    }

    swap(i,j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    toArray() {
        return this.heap;
    }
}

console.log(JSON.stringify(kClosest([[-63,-55],[-20,17],[-88,-82],[-90,-95],[-88,18],[-62,-21],[71,-64],[-14,56],[65,90],[-48,-52],[59,92],[-44,-59],[-3,-66]], 7)));

/*
Time Complexity: O(N log K), where N is the number of points and K is the capacity of the heap.
Space Complexity: O(K), for storing the K closest points.
*/

/*
[[6994,[-63,-55]]]

[[6994,[-63,-55]],[689,[-20,17]]]

[[14468,[-88,-82]],[689,[-20,17]],[6994,[-63,-55]]]

[[17125,[-90,-95]],[14468,[-88,-82]],[6994,[-63,-55]],[689,[-20,17]]]

[[17125,[-90,-95]],[14468,[-88,-82]],[6994,[-63,-55]],[689,[-20,17]],[8068,[-88,18]]]

[[17125,[-90,-95]],[14468,[-88,-82]],[6994,[-63,-55]],[689,[-20,17]],[8068,[-88,18]],[4285,[-62,-21]]]

[[17125,[-90,-95]],[14468,[-88,-82]],[9137,[71,-64]],[689,[-20,17]],[8068,[-88,18]],[4285,[-62,-21]],[6994,[-63,-55]]]--correct

[[14468,[-88,-82]],[8068,[-88,18]],[9137,[71,-64]],
    [689,[-20,17]],[3332,[-14,56]],[4285,[-62,-21]],[6994,[-63,-55]]]

[[12325,[65,90]],[8068,[-88,18]],[9137,[71,-64]],[689,[-20,17]],
    [3332,[-14,56]],[4285,[-62,-21]],[6994,[-63,-55]]]

2
[[9137,[71,-64]],[8068,[-88,18]],[6994,[-63,-55]],[689,[-20,17]],[3332,[-14,56]],[4285,[-62,-21]],[5008,[-48,-52]]]

[[8068,[-88,18]],[5417,[-44,-59]],[6994,[-63,-55]],[689,[-20,17]],[3332,[-14,56]],[4285,[-62,-21]],[5008,[-48,-52]]]

[[6994,[-63,-55]],[5417,[-44,-59]],[5008,[-48,-52]],[689,[-20,17]],[3332,[-14,56]],[4285,[-62,-21]],[4365,[-3,-66]]]

[[-63,-55],[-44,-59],[-48,-52],[-20,17],[-14,56],[-62,-21],[-3,-66]]
*/

