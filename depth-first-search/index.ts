import { Input } from './Input';
import { Node } from './Node';

//read input.txt
const input: Input = Input.parseFile();

//parse nodes 
let nodes: Node[] = [];
input.nodePairs.forEach(pair => {
    if (!nodes.find(n => n.num == pair[0])) nodes.push({ num: pair[0], pathsTo: [] })
    if (!nodes.find(n => {
        return n.num == pair[1];
    })) nodes.push({ num: pair[1], pathsTo: [] })
})

//parse node paths
nodes.forEach(node => {
    input.nodePairs.filter(pair => pair[0] == node.num).forEach(pairFiltered => {
        node.pathsTo.push(nodes.find(n => n.num == pairFiltered[1]));
    })
})

//traverse 
let result: Number[] = [];
traverseDFS(nodes, result);

console.log(result);

function traverseDFS(nodes: Node[], result: Number[]) {
    nodes.forEach(node => {
        if (result.indexOf(node.num) == -1) result.push(node.num);
        traverseDFS(node.pathsTo, result);
    })
}

