import { Input } from '../Input';
import { Node } from '../Node';
import { Graph } from '../Graph';
//read input.txt
const input: Input = Input.parseFile('breadth-first-search');

//build Graph
const graph: Graph = new Graph(input.nodePairs);

//traverse graph using dfs
let result: Number[] = [];
console.log(graph.nodes)
traverseBFS(graph.nodes[0], result);
console.log(`Traverse BFS: ${result}`);



function traverseBFS(startNode: Node, result: Number[]) {
    let queue = []
    queue.push(startNode)
    while (queue.length > 0) {
        let currentNode = queue[0];
        currentNode.pathsTo.forEach(node => {
            queue.push(node);
        })
        if (result.indexOf(currentNode.num) == -1) result.push(currentNode.num);
        
        queue.splice(0, 1);
    }

}




