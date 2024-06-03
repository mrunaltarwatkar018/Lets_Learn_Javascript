// *********************** Conversions ***********************

let score = "mrunal";

// console.log(typeof score); // gives type of data types
// console.log(typeof(score)); // gives type of data types

// conversion of string to number
let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // gives type of data types
// console.log(valueInNumber);

/*
    if score = 33 then output of typeof is number
    if score = 33 then output of typeof is number
    if score = "33abc" then output of typeof is NaN i.e. Not a Number
    if score = null then output of typeof is 0
    if score = undefined then output of typeof is NaN i.e. Not a Number
    if score = true then output of typeof is 1
    if score = true then output of typeof is 1
    if score = "mrunal" then output of typeof is NaN i.e. Not a Number


    in short,
    "33" => 33
    "33abc" => NaN
    true => 1; false => 0
*/


// conversion to boolean values

let isLoggedIn = "mrunal"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/*
    if isLoggedIn = 1 then output of booleanIsLoggedIn is true
    if isLoggedIn = 0 then output of booleanIsLoggedIn is false
    if isLoggedIn = "" i.e., empty string then output of booleanIsLoggedIn is false
    if isLoggedIn = "mrunal" i.e., not empty string then output of booleanIsLoggedIn is true

    im short,
        1 => true; 0 => false
        "" => false
        "hitesh" => true
*/


// conversion to string values

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

/*
    if someNumber = 33 then output of stringNumber is 33
*/




// *********************** Operations ***********************

let value = 3

let negValue = -value
// console.log(negValue);


// console.log(2+2); // Addition (+)
// console.log(2-2); // Subtraction(-)
// console.log(2*2); // Multiplication (*)
// console.log(2**3); // Power (**)
// console.log(2/3); // Division (/)
// console.log(2%3); // Remainder (%)



let str1 = "Hello"
let str2 = " Mrunal"

let str3 = str1 + str2
// console.log(str3); // o/p => Hello Mrunal

// console.log("Hello" + "Sanket"); // o/p => HelloSanket
// console.log("Hello" + " " + "Sanket"); // o/p => Hello Sanket
// console.log(101 + " " + "hello"); // o/p => 101 hello

// console.log("1" + 2); // o/p => 12
// console.log(1 + "2"); // o/p => 12
// console.log("1" + 2 + 2); // o/p => 122
// console.log(1 + 2 + "2"); // o/p => 32

// console.log( (3 + 4) * 5 % 3); // o/p => 2


// console.log(true); // o/p => true  // valid
// console.log(+true); // o/p => 1  // not valid, not readable
// console.log(+""); // o/p => 0 



let num1, num2, num3;


num1 = num2 = num3 = 2 + 2;  // not valid, not readable


let gameCounterS = 100
++gameCounterS;
console.log(gameCounterS); // o/p =>101

let gameCounter = 100
++gameCounter;
console.log(gameCounter); // o/p =>101
