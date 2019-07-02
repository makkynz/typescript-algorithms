import * as fs from 'fs';
import * as path from 'path';

export class Input{
    
    public nodes : number;
    public edges : number;
    public nodePairs :  number[][];

    public static parseFile() : Input{
        const inputLines: string[] = fs.readFileSync(path.join(__dirname, "../input.txt")).toString().split('\n');

        let input :Input = new Input()
        const firstLineArgs = inputLines[0].split(' ');
        const secondLineArgs = inputLines[1].split(' ');
        input.nodes = Number(firstLineArgs[0]);
        input.edges = Number(firstLineArgs[1]);
        input.nodePairs =  [];

        for(let i = 0; i < secondLineArgs.length; i = i + 2){
            input.nodePairs.push([Number(secondLineArgs[i]),Number(secondLineArgs[i+1])]);            
        }
        
        return input;
    }
}