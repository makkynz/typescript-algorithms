import { Input } from '../Input';
import { Node } from '../Node';
import { Graph } from '../Graph';
//read input.txt
const input: Input = Input.parseFile('depth-first-search');

//build Graph
const graph: Graph = new Graph(input.nodePairs);

//traverse graph using dfs
let result: Number[] = [];
traverseDFS(graph.nodes, result);
console.log(`Traverse DFS: ${result}`);

//search graph using dfs
const numToFind = 3;
const foundNode = searchDFS(graph.nodes[0], numToFind);
console.log(`Node num ${numToFind}${foundNode == null ? ' not':''} found` )

function traverseDFS(nodes: Node[], result: Number[]) {
    nodes.forEach(node => {
        if (result.indexOf(node.num) == -1) result.push(node.num);
        traverseDFS(node.pathsTo, result);
    })
}

function searchDFS(rootNode: Node, searchForNum: number): Node {

    if (rootNode.num === searchForNum) return rootNode;

    let nodeFound: Node = null;
    for (let node of rootNode.pathsTo) {
        nodeFound = searchDFS(node, searchForNum);
        if (nodeFound != null) break;
    }

    return nodeFound;
}



