//Follows adjency list approach
class Graph{
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; 
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1].includes(vertex2)) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }


    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1].includes(vertex2)) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
        }
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length > 0) {
            const connect = this.adjacencyList[vertex].pop();
            this.removeEdge(connect, vertex);
        }
        delete this.adjacencyList[vertex];
    }

    dfsRecursive(vertex) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        function dfx(node) {
            if(visited[node]) return 
            else visited[node] = true;

            result.push(node);
            adjacencyList[node].forEach(vert => {
                if(!visited[vert]) dfx(vert)
            });
        }

        dfx(vertex);

        return result;
    }

    dfsIterative(vertex) {
        let stack = [];
        let result = [];
        let visited = {};

        stack.push(vertex);
        while(stack.length !== 0) {
            let node = stack.shift();
            if(!visited[node]) {
                visited[node] = true;
                result.push(node);
                this.adjacencyList[node].forEach(item => {
                    stack.push(item)
                });
            }
        }

        return result;
    }

    //instructor soln
    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor)
               } 
            });
        }
        return result;
    }


    //instructor soln
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    }

    bfs(start) {
        const result = [];
        const visited = {};
        const stack = [];

        stack.push(start);

        while(stack.length > 0) {
            const node = stack.shift();

            if(!visited[node]) {
                result.push(node);

                this.adjacencyList[node].forEach(item => {
                    if(!visited[item]) {
                        stack.push(item);
                    }
                })
                visited[node] = true;
            }
        }

        return result;
    }

    //instructor sol
    breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
           

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

}

function main() {
    const g1 = new Graph();

    g1.addVertex('A');
    g1.addVertex('B');
    g1.addVertex('C');
    g1.addVertex('D');
    g1.addVertex('E');
    g1.addVertex('F');

    g1.addEdge('A', 'B');
    g1.addEdge('A', 'C');
    g1.addEdge('B', 'D');
    g1.addEdge('C', 'E');
    g1.addEdge('D', 'E');
    g1.addEdge('D', 'F');
    g1.addEdge('E', 'F');

    console.log(g1.adjacencyList);

    console.log(g1.dfsRecursive('A'));
    console.log(g1.depthFirstRecursive('A'));
    // console.log(g1.dfsIterative('A'));
    // console.log(g1.depthFirstIterative('A'));
    console.log(g1.bfs('A'))
    console.log(g1.breadthFirst('A'))
}

main();