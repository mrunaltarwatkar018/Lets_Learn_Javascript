// let myName = "mrunal     "
// let myChannel = "chai     "

// console.log(myName.length);
// Expected Output => 11

// console.log(myName.trim().length);
// Expected Output => 6

// console.log(myName.trueLength);
// Expected Output => undefined






let myHeros = ["thor", "spiderman"];

// object heroPower
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.mrunal = function(){
    console.log(`mrunal is present in all objects`);
}

Array.prototype.heyMrunal = function(){
    console.log(`Mrunal says hello`);
}


heroPower.mrunal();
// Expected Output => mrunal is present in all objects

myHeros.mrunal();
// Expected Output => mrunal is present in all objects

myHeros.heyMrunal();
// Expected Output => Mrunal says hello

// heroPower.heyMrunal();
// Expected Output => heroPower.heyMrunal is not a function










// *********************** Inheritance ***********************

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User // outdated approach

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
/*
    Expected Output =>
        ChaiAurCode     
        True length is: 11
*/

"mrunal".trueLength();
/*
    Expected Output =>
        mrunal
        True length is: 6
*/

"iceTea".trueLength();
/*
    Expected Output =>
        iceTea
        True length is: 6
*/
