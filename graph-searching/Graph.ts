import { Node } from './Node';

export class Graph {

    private _numberPairs: number[][]
    private _nodes: Node[] = []
    get nodes()  {return this._nodes};

    constructor(numberPairs: number[][]) {
        this._numberPairs = numberPairs;
        this.buildGraph();
    }    

    buildGraph() {
        //parse this._nodes        
        this._numberPairs.forEach(pair => {
            if (!this._nodes.find(n => n.num == pair[0])) this._nodes.push({ num: pair[0], pathsTo: [] })
            if (!this._nodes.find(n => {
                return n.num == pair[1];
            })) this._nodes.push({ num: pair[1], pathsTo: [] })
        })

        //parse node paths
        this._nodes.forEach(node => {
            this._numberPairs.filter(pair => pair[0] == node.num).forEach(pairFiltered => {
                node.pathsTo.push(this._nodes.find(n => n.num == pairFiltered[1]));
            })
        })

    }
}