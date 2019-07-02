
import * as readline from 'readline';


export class ArgumentParser{
    numberOfTestCases : number;

    start(){
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        rl.question('Supply Input Values: ', (input)=>{

            let test : any = "booya";         
            console.log(test);
            rl.close();
        })
    }
}