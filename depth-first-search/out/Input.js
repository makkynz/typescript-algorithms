"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var Input = /** @class */ (function () {
    function Input() {
    }
    Input.parseFile = function () {
        var inputLines = fs.readFileSync(path.join(__dirname, "../input.txt")).toString().split('\n');
        var input = new Input();
        var firstLineArgs = inputLines[0].split(' ');
        var secondLineArgs = inputLines[1].split(' ');
        input.nodes = Number(firstLineArgs[0]);
        input.edges = Number(firstLineArgs[1]);
        input.nodePairs = [];
        for (var i = 0; i < secondLineArgs.length; i = i + 2) {
            input.nodePairs.push([Number(secondLineArgs[i]), Number(secondLineArgs[i + 1])]);
        }
        return input;
    };
    return Input;
}());
exports.Input = Input;
//# sourceMappingURL=Input.js.map