/**
 * https://leetcode.com/problems/process-tasks-using-servers/
 * 
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function(servers, tasks) {
    // create a heap to manage free servers.
    // free servers will need to be prioritized by weight and index
    const freeServers = new Heap((serverA,serverB) => (
        serverA.weight - serverB.weight || serverA.index - serverB.index //if negative, server A is smaller
    ))

    // create a heap to manage used servers.
    // used servers will need to be prioritized by availableTime, weight and index
    const usedServers = new Heap((serverA, serverB) => (
        serverA.availableAt - serverB.availableAt ||
        serverA.weight - serverB.weight || serverA.index - serverB.index
    ))

    for(let i=0; i<servers.length; i++) {
        freeServers.push({
            weight: servers[i],
            index: i,
            availableAt: 0 //every server is available at time 0
        })
    }

    const result = [];
    for(let i=0; i<tasks.length; i++) {
        // find all the servers that are available and add them to the
        // free servers heap
        while(usedServers.size() > 0 && usedServers.peak().availableAt <= i) {
            freeServers.push(usedServers.pop());
        }

        // get the free server with the lowest weight or lower index
        // or the usedServer with the lowest start time.
        const server = freeServers.pop() || usedServers.pop();
        result.push(server.index);
        const availableAt = Math.max(i, server.availableAt);
        server.availableAt = availableAt + tasks[i];
        usedServers.push(server);
    }

    return result;
};

//A min heap
class Heap {
    constructor(compFunc) {
        this.store = [];
        this.compFunc = compFunc;
    }

    peak() {
        return this.store[0];
    }

    size() {
        return this.store.length;
    }

    pop() {
        if(this.store.length < 2) {
            return this.store.pop();
        }
        const res = this.store[0];
        this.store[0] = this.store.pop();
        this.heapifyDown(0);
        return res;
    }

    push(val) {
        this.store.push(val);
        this.heapifyUp(this.store.length - 1);
    }

    heapifyUp(last) {
        while(last) {
            const parent = Math.floor((last-1)/2);

            if(this.shouldSwap(last, parent)) {
                this.swap(last, parent);
                last = parent;
            } else return;
        }
    }

    heapifyDown(parent) {
        while(true) {
            let [child1, child2] = [1,2].map(x => 2*parent + x).filter(x => x<this.size());
            if(this.shouldSwap(child2, child1)) {
                child1 = child2;
            }

            if(this.shouldSwap(child1, parent)) {
                this.swap(child1, parent);
                parent = child1;
            } else return
        }
    }

    swap(i, j) {
        [this.store[i], this.store[j]] = [this.store[j], this.store[i]];
    }

    shouldSwap(child, parent) {
        return child && this.compFunc(this.store[child], this.store[parent]) < 0;
    }
}

console.log(assignTasks([3,3,2], [1,2,3,2,1,2]));

/*
The time complexity is O((m + n) log n) because each task requires operations involving insertion and removal from the min-heaps.
Space Complexity
The space complexity is O(n) required for the heaps.
*/