/*
 * Exercise 3:  
 * 
 * Capitalize each of an array of names
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/

function capitalizeNames(arr) {
    return arr.map(function1);
}

function function1(name) {
    let str = name.toLowerCase().split('');
    str[0] = str[0].toUpperCase();
    return str.join('');
        
}



console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 