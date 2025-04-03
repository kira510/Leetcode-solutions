class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }
  
  class WeightedGraph {
      constructor() {
          this.adjacencyList = {};
      }
      addVertex(vertex){
          if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
      }
      addEdge(vertex1,vertex2, weight){
          this.adjacencyList[vertex1].push({node:vertex2,weight});
          this.adjacencyList[vertex2].push({node:vertex1, weight});
      }
      dijkstra(start, finish){
          let nodes = new PriorityQueue();
          let previous = {};
          let distances = {};
          let smallest;
          
          for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                nodes.enqueue(vertex, 0);
                distances[vertex] = 0;
            } else {
                //nodes.enqueue(vertex.node, vertex.weight);
                distances[vertex] = Infinity;
            }
            previous[vertex] = null;
          }

          while(nodes.values.length) {
            smallest = nodes.dequeue().val;

            if(smallest === finish) break;

            for(let neighbor in this.adjacencyList[smallest]) {
                const neighbourVertex = this.adjacencyList[smallest][neighbor];
                const distToNeighbour = neighbourVertex.weight + distances[smallest];

                if(distToNeighbour < distances[neighbourVertex.node]) {
                    distances[neighbourVertex.node] = distToNeighbour;
                    previous[neighbourVertex.node] = smallest;
                    nodes.enqueue(neighbourVertex.node, neighbourVertex.weight);
                }
            }
        }

        const path = [];
        path.push(smallest);
        while(previous[smallest]) {
            path.push(previous[smallest]);
            smallest = previous[smallest];
        }

        return path.reverse();
      }
  }
  
  var graph = new WeightedGraph()
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");
  
  graph.addEdge("A","B", 4);
  graph.addEdge("A","C", 2);
  graph.addEdge("B","E", 3);
  graph.addEdge("C","D", 2);
  graph.addEdge("C","F", 4);
  graph.addEdge("D","E", 3);
  graph.addEdge("D","F", 1);
  graph.addEdge("E","F", 1);
  
  
  console.log(graph.dijkstra("A", "E"));
  
  // ["A", "C", "D", "F", "E"]