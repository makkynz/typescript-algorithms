import * as fs from 'fs';
import * as path from 'path';

export class Input {


    public nodePairs: number[][];

    public static parseFile(algorithmFolder: string): Input {

        const inputLines: string[] = fs.readFileSync(path.join(__dirname, `../graph-searching/${algorithmFolder}/input.txt`)).toString().split('\n')
        console.log(`Input: ${inputLines[0]}`)
        let input: Input = new Input()
        const firstLineArgs = inputLines[0].split(' ');

        input.nodePairs = [];

        for (let i = 0; i < firstLineArgs.length; i = i + 2) {
            input.nodePairs.push([Number(firstLineArgs[i]), Number(firstLineArgs[i + 1])]);
        }

        return input;
    }
}