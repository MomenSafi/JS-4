'use strict';
function onlyEvenValues(arr) {
    let a = [];
    arr.forEach(element => {
        if (element % 2 === 0) {
            a.push(element);
        }
    });
    return a;
}


console.log(onlyEvenValues([1,2,3]) );
console.log(onlyEvenValues([5,1,2,3,10]) );
