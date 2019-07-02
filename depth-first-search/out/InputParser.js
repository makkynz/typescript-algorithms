"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var Input_1 = require("./Input");
var InputParser = /** @class */ (function () {
    function InputParser() {
    }
    InputParser.prototype.parse = function () {
        var inputLines = this.readInputFile().split('\n');
        var input = new Input_1.Input();
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
    InputParser.prototype.readInputFile = function () {
        return fs.readFileSync(path.join(__dirname, "../input.txt")).toString();
    };
    return InputParser;
}());
exports.InputParser = InputParser;
//# sourceMappingURL=InputParser.js.map