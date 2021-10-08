/*
let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// console.log(testRegex.test(testStr));
let testRegex = /code/;
console.log(testRegex.test(testStr));

// using  OR (|) operator
let str = "henry and george ferrao";
// let match = /henry|george/; // true
let match = /Henry|George/; // fasle
let result = match.test(str);
console.log(result);

console.log("Hello, World!".match(/World/));
let ourStr = "Regular expressions";
let ourRegex = /expressions/;

console.log(ourStr.match(ourRegex));

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig;
let result = twinkleStar.match(starRegex); 

console.log("Henry ferrao george henry HeNry".match(/henry/gi));


//Match using dot(.)
let str = "hi Henry how are you HeRe";
// let result = str.match(/h./gi);
let result = str.match(/h./gi);
console.log(result);

let quoteSample = "Beware of bugs in the above code A";
console.log(quoteSample.match(/[aeiou]/gi));


// match using [-]  hyphen
let quoteSample = "Cat Bat mat eat";
let alphabetRegex = /[a-z]at/gi;
let result = quoteSample.match(alphabetRegex);
console.log(result);

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[a-z2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);

let str = "henry12536253";
console.log(str.match(/[h-z0-9]/gi));


// Nagating charcator
let str = "henry12536253";
console.log(str.match(/[aeiou0-9]/ig))

*/
