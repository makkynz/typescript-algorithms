"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Input_1 = require("./Input");
//read input.txt
var input = Input_1.Input.parseFile();
//parse nodes 
var nodes = [];
input.nodePairs.forEach(function (pair) {
    if (!nodes.find(function (n) { return n.num == pair[0]; }))
        nodes.push({ num: pair[0], pathsTo: [] });
    if (!nodes.find(function (n) {
        return n.num == pair[1];
    }))
        nodes.push({ num: pair[1], pathsTo: [] });
});
//parse node paths
nodes.forEach(function (node) {
    input.nodePairs.filter(function (pair) { return pair[0] == node.num; }).forEach(function (pairFiltered) {
        node.pathsTo.push(nodes.find(function (n) { return n.num == pairFiltered[1]; }));
    });
});
//traverse 
var result = [];
traverseDFS(nodes, result);
console.log(result);
function traverseDFS(nodes, result) {
    nodes.forEach(function (node) {
        if (result.indexOf(node.num) == -1)
            result.push(node.num);
        traverseDFS(node.pathsTo, result);
    });
}
//# sourceMappingURL=index.js.map