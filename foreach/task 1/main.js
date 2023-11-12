function doubleValues(arr) {
    arr.forEach((element,i) => {
        arr[i] = element * 2
    });
    return arr;
}

let Case1 = [1, 2, 3];
let Case2 = [5, 1, 2, 3, 10];


console.log(doubleValues(Case1));
console.log(doubleValues(Case2));