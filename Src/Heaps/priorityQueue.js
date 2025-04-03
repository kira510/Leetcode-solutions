//also a min heap.
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        const last = this.heap.length - 1;
        this.heapify(last);
    }

    swap(pos1, pos2) {
        let temp = this.heap[pos1];
        this.heap[pos1] = this.heap[pos2];
        this.heap[pos2] = temp;
    }

    heapify(last) {
        let parent = Math.floor((last-1)/2);

        if(this.heap[parent] > this.heap[last]) {
            this.swap(parent, last)
        } else return

        if (parent == 0) return;

        this.heapify(parent);
    }

    remove() {
        const last = this.heap.pop();
        this.heap.shift();

        this.heap = [last].concat(this.heap);

        this.bubbleDown(0);
    }

    bubbleDown(parent) {
        const child1pos = 2*parent + 1;
        const child2pos = 2*parent + 2;

        if(!this.heap[child1pos]) return
        
        let smallerChildPos;
        if (!this.heap[child2pos]) {
            smallerChildPos = child1pos;
        } else {
            smallerChildPos = this.heap[child1pos] < this.heap[child2pos] ? child1pos : child2pos;
        }

        if(this.heap[smallerChildPos] < this.heap[parent]) {
            this.swap(parent, smallerChildPos);
            this.bubbleDown(smallerChildPos);
        }
    }
}

function main() {
    const heap = new MinHeap();

    heap.insert(13);
    heap.insert(16);
    heap.insert(31);
    heap.insert(41);
    heap.insert(51);
    heap.insert(100);
    heap.insert(115);

    //console.log(heap.heap);
    
    heap.insert(10);
    //console.log(heap.heap);
    heap.insert(12);
    console.log(heap.heap);

    heap.remove();
    console.log(heap.heap);
}

main();