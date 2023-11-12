function addKeyAndValue(array, key, value) {
    array.forEach((element,i) => {
        array[i][key] = value;
    });
    return array;
}


console.log(addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'title', 'instructor')); 

