function showFirstAndLast(array) {

    let newarray = new Array;
    array.forEach(element => {
        newarray.push(`${element[0]}${ element[element.length - 1]}`);
    });
    return newarray;
}


console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy'])  );
console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])  );