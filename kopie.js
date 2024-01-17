let mijnArray = [1, 2, 3];

function voegElementToe(arr, element) {
    arr.push(element);
}

function wijsNieuweArrayToe(arr) {
    let nieuweArray = [];
    for (let element of [4, 5, 6]) {
        voegElementToe(nieuweArray, element);
    }
    arr = nieuweArray;
}
console.log("Voor de push: " + mijnArray);

voegElementToe(mijnArray, 4);
console.log("Na de push: " + mijnArray);

console.log("Voor de toewijzing: " + mijnArray);
wijsNieuweArrayToe(mijnArray);
console.log("Na de toewijzing: " + mijnArray);
