class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        const last = this.heap.length - 1;
        this.heapify(last);
    }

    heapify(last) {
        const parent = Math.floor((last-1)/2);

        if(this.heap[last] > this.heap[parent]) {
            this.swap(last, parent);
        } else return;

        if(parent == 0) return;
        this.heapify(parent);
    }

    swap(pos1, pos2) {
        let temp = this.heap[pos1];
        this.heap[pos1] = this.heap[pos2];
        this.heap[pos2] = temp;
    }

    remove() {
        if (this.heap.length === 0) return;

        this.heap.shift();

        const lastEle = this.heap.pop();
        this.heap = [lastEle].concat(this.heap);
        this.bubbleDown(0);
    }

    bubbleDown(parent) {
        const child1pos = 2*parent+1;
        const child2pos = 2*parent+2;

        let greaterChildpos; 

        if(!this.heap[child1pos]) return;


        if(!this.heap[child2pos]) {
            greaterChildpos = child1pos;
        } else  {
            greaterChildpos = this.heap[child1pos] > this.heap[child2pos] ? child1pos : child2pos;
        }
        
        if(this.heap[greaterChildpos] > this.heap[parent]) {
            this.swap(greaterChildpos, parent);
            this.bubbleDown(greaterChildpos);
        }
    }
}

function main() {
    const heap = new MaxHeap();
    heap.insert(9);
    heap.insert(8);
    heap.insert(6);
    heap.insert(5);
    heap.insert(2);
    heap.insert(1);
    heap.insert(10);
    heap.insert(7);

    console.log(heap.heap);

    heap.remove();
    heap.remove();
    console.log(heap.heap);
}

main();