// Primitive datatypes
// 7 types => String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedin = false;
const outsideTem = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.table([score, scoreValue, isLoggedin, outsideTem, userEmail, id, anotherId]);

// console.log(id==anotherId)

// const bigNumber = 234567890965432n; // bigInt suffix with 'n'
// console.log(typeof bigNumber);


// ***Object***
// const heros = ["ironman", "thor", "captain marvel"]
// console.log(heros);

// let myObj = {
//     name : "Suraj",
//     age : 23    
// }
// console.log(myObj);

// *** function ***
let myFunction = function(){
    console.log("Hello javaScript");
} 
console.log(typeof myFunction);

// Reference types or non-primitive datatypes
// Array, Objects, Functions