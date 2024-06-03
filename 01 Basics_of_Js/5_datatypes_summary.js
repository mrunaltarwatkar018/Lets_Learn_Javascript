/**
 * JavaScript is a dynamically typed language. This means that 
 * variable types are determined at runtime, and you do not 
 * need to explicitly declare the type of a variable before 
 * using it. You can assign different types of values to a 
 * variable during its lifetime.
 */


//  Primitive
// Primitive datatypes are generally a call by value.

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 // number
const scoreValue = 100.3 // number

const isLoggedIn = false // boolean
const outsideTemp = null // null
let userEmail; // undefined

const id = Symbol('123') // symbols
const anotherId = Symbol('123') // symbols

console.log(id === anotherId); // o/p => false
console.log(typeof anotherId);

const bigNumber = 344565641789129876451n;
console.log(typeof bigNumber);




// Reference (Non primitive)

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]; // array

let myObj = {
    name: "hitesh",
    age: 22,
} // objects


const myFunction = function(){
    console.log("Hello world");
} // functions


console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);


/**
 * Documentation link: https://262.ecma-international.org/5.1/#sec-11.4.3 
 */