//randomised input array
const input: number[] = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
const valToFind: number = 4;

binarySearch(input, valToFind);


function binarySearch(list: number[], valToFind: number) {
    console.log(`input: ${list}`);
    console.log(`value to find: ${valToFind}`);

    //first sort the list
    list = list.sort((n1, n2) => n1 - n2);

    while (list.length > 1) {
        console.log(`list: ${list}`);
        const split = splitList(list);

        if (valToFind <= split.left[split.left.length - 1]) {
            list = split.left;
        } else {
            list = split.right;
        }
    }

    if (list[0] === valToFind) {
        console.log('found!');
    } else {
        console.log('not found');
    }


}

function splitList(list: number[]): SplitList {
    const middleIndex = Math.floor(list.length / 2)
    const leftList = list.slice(0, middleIndex);
    const rightList = list.slice(middleIndex, list.length);
    return { left: leftList, right: rightList }
}


interface SplitList {
    left: number[];
    right: number[];
}