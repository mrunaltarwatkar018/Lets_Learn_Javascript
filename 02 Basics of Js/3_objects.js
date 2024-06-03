// singleton
// if object is from the literals, then singleton does not formed.

// if object is from the constructors, then singleton formed.


// Object.create

// object literals


// Decalration of Symbol
const mySymbol = Symbol("key1");

// Decalration of Object

const JsUser = {   // object literals
    name: "Mrunal",
    "full name": "Mrunal Tarwatkar",
    [mySymbol]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "mrunal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};


// console.log(JsUser);  // this method not prefered while accessing the object
/**
                Expected output:
                    {
                        name: "Mrunal",
                        "full name": "Mrunal Tarwatkar",
                        age: 18,
                        location: "Jaipur",
                        email: "mrunal@google.com",
                        isLoggedIn: false,
                        lastLoginDays: [ 'Monday', 'Saturday' ],
                        [Symbol(key1)]: 'mykey1'
                    }    
*/

// console.log(JsUser.email); // this method  prefered while accessing the object
// Expected output: mrunal@google.com

// console.log(JsUser["email"]);
// Expected output: mrunal@google.com

// console.log(JsUser["full name"]);
// Expected output: Mrunal Tarwatkar


// console.log(JsUser[mySymbol]);
// Expected output: mykey1


// How to change the values of objects

JsUser.email = "mrunal@yoo.com";
// console.log(JsUser);
/**
                Expected output:
                    {
                        name: "Mrunal",
                        "full name": "Mrunal Tarwatkar",
                        age: 18,
                        location: "Jaipur",
                        email: "JsUser.email = "mrunal@yoo.com",
                        isLoggedIn: false,
                        lastLoginDays: [ 'Monday', 'Saturday' ],
                        [Symbol(key1)]: 'mykey1'
                    }    
*/

// Object.freeze(JsUser);  // not change the value if it is freez
JsUser.email = "mrunal@ymicrosoft.com";
// console.log(JsUser);
/**
                Expected output:
                    {
                        name: "Mrunal",
                        "full name": "Mrunal Tarwatkar",
                        age: 18,
                        location: "Jaipur",
                        email: "JsUser.email = "mrunal@yoo.com",
                        isLoggedIn: false,
                        lastLoginDays: [ 'Monday', 'Saturday' ],
                        [Symbol(key1)]: 'mykey1'
                    }    
*/


// Declaration of function in Objects
JsUser.greeting = function () {
    console.log("Hello Js User");
}


// console.log(JsUser.greeting);
// Expected output => undefined

// console.log(JsUser.greeting());
// Expected output => TypeError: JsUser.greeting is not a function, if freez is declared


console.log(JsUser.greeting);
// Expected output => [Function (anonymous)]

console.log(JsUser.greeting());
// Expected output => Hello Js User
// undefined



JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // string interpolation
}

console.log(JsUser.greeting());
// Expected output => Hello Js User
// undefined

console.log(JsUser.greetingTwo());
// Expected output => Hello JS user, Mrunal
// undefined