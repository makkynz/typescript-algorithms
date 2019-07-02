"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InputParser_1 = require("./InputParser");
var ap = new InputParser_1.InputParser();
var input = ap.parse();
console.log(input);
dfs();
var Node = /** @class */ (function () {
    function Node() {
    }
    return Node;
}());
function dfs() {
    //parse  nodes 
    var nodes = [];
    var result = [];
    input.nodePairs.forEach(function (pair) {
        if (!nodes.find(function (n) { return n.num == pair[0]; }))
            nodes.push({ num: pair[0], pathsTo: [] });
        if (!nodes.find(function (n) { return n.num == pair[1]; }))
            nodes.push({ num: pair[1], pathsTo: [] });
    });
    //parse paths
    nodes.forEach(function (node) {
        input.nodePairs.filter(function (pair) { return pair[0] == node.num; }).forEach(function (pairFiltered) {
            node.pathsTo.push(nodes.find(function (n) { return n.num == pairFiltered[1]; }));
        });
    });
    //traverse
    traverseDFS(nodes, result);
    console.log(nodes);
    console.log(result);
}
function traverseDFS(nodes, result) {
    nodes.forEach(function (node) {
        if (result.indexOf(node.num) == -1)
            result.push(node.num);
        traverseDFS(node.pathsTo, result);
    });
}
//# sourceMappingURL=index.js.map