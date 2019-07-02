

import {InputParser} from './InputParser';
import { Input } from './Input';

const ap: InputParser = new InputParser();

const input : Input = ap.parse();
console.log(input)
dfs();

class Node{
    num : number;
    pathsTo: Node[];
}

function dfs(){
    //parse  nodes 
    let nodes : Node[] = [];
    let result: Number[] = [];
    input.nodePairs.forEach(pair =>{
        if(!nodes.find(n=>n.num == pair[0])) nodes.push({num: pair[0], pathsTo: []})
        if(!nodes.find(n=>n.num == pair[1])) nodes.push({num: pair[1], pathsTo: []})
    })

    //parse paths
    nodes.forEach(node=>{
        input.nodePairs.filter(pair => pair[0] == node.num).forEach(pairFiltered=>{
            node.pathsTo.push(nodes.find(n=>n.num==pairFiltered[1]));
        })
    })

    //traverse
    traverseDFS(nodes, result)


    console.log(nodes);
    console.log(result);
}

function traverseDFS(nodes: Node[], result : Number[]) {
    nodes.forEach(node=>{

        if(result.indexOf(node.num) == -1) result.push(node.num);   
         traverseDFS(node.pathsTo, result);     
    })
}

