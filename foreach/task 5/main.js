
/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/

function vowelCount(str){
  str = str.toLowerCase();
  let strA = str.split('');
  let a = 0;
  let i = 0;
  let u = 0;
  let e = 0;
  let o = 0;
  strA.forEach(element => {
    switch (element) {
      case 'a':
        a++;
        break;
      case 'i':
        i++;
        break;
      case 'u':
        u++;
        break;
      case 'e':
        e++;
        break;
      case 'o':
        o++;
        break;
      default:
        break;
    }
  });

  let object = {};
  if (a > 0) { object['a'] = a; };
  if (i > 0) { object['i'] = i; };
  if (u > 0) { object['u'] = u; };
  if (e > 0) { object['e'] = e; };
  if (o > 0) { object['o'] = o; }
  return object;

}


console.log(vowelCount('Elie'));
console.log(vowelCount('Tim') );
console.log(vowelCount('Matt') );
console.log(vowelCount('hmmm') );
console.log(vowelCount('I Am awesome and so are you') );

