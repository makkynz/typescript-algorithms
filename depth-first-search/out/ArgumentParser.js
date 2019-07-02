"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var ArgumentParser = /** @class */ (function () {
    function ArgumentParser() {
    }
    ArgumentParser.prototype.start = function () {
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Supply Input Values: ', function (input) {
            var test = "booya";
            console.log(test);
            rl.close();
        });
    };
    return ArgumentParser;
}());
exports.ArgumentParser = ArgumentParser;
//# sourceMappingURL=ArgumentParser.js.map