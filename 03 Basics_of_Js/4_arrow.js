
// ++++++++++++++++++ this keyword ++++++++++++++++++
// "this" keyword refers to current contex
// in arrow function, "this" function is not there

const user = {
    username: "mrunal",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        /*
            Expected output =>  
                mrunal , welcome to website
                {
                username: 'mrunal',
                price: 999,
                welcomeMessage: [Function: welcomeMessage]
                }
                sam , welcome to website
                {
                username: 'sam',
                price: 999,
                welcomeMessage: [Function: welcomeMessage]
                }
        */ 
    }
}

// user.welcomeMessage
// Expected output => no o/p

// user.welcomeMessage()
// Expected output => mrunal , welcome to website

// user.username = "sam"
// user.welcomeMessage()
// Expected output => sam , welcome to website


// console.log(this);
// Expected output => {}









// function tea() {
//     console.log(this);
// }

// tea()
/*
    Expected output =>  
    <ref *1> Object [global] {
        global: [Circular *1],
        queueMicrotask: [Function: queueMicrotask],
        clearImmediate: [Function: clearImmediate],
        setImmediate: [Function: setImmediate] {
            [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        structuredClone: [Function: structuredClone],
        clearInterval: [Function: clearInterval],
        clearTimeout: [Function: clearTimeout],
        setInterval: [Function: setInterval],
        setTimeout: [Function: setTimeout] {
            [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        atob: [Function: atob],
        btoa: [Function: btoa],
        performance: Performance {
            nodeTiming: PerformanceNodeTiming {
            name: 'node',
            entryType: 'node',
            startTime: 0,
            duration: 66.37330001592636,
            nodeStart: 4.2426000237464905,
            v8Start: 9.902300000190735,
            bootstrapComplete: 48.82209998369217,
            environment: 24.15880000591278,
            loopStart: -1,
            loopExit: -1,
            idleTime: 0
            },
            timeOrigin: 1717154383683.452
        },
        fetch: [AsyncFunction: fetch]
    }
*/ 


// function chai() {
//     let username = "mrunal"
//     console.log(this.username);
// }

// chai()
// Expected output => undefined




// const chaiii = function () {
//     let username = "mrunal"
//     console.log(this.username);
// }

// chaiii()
// Expected output => undefined



// ++++++++++++++++++ arrow (=>)  function ++++++++++++++++++
// arrow functiom symbol : =>
// arrow functiom syntax : () => {}  OR
// arrow functiom syntax : function_name () => {}

const chaee = () => {
    let username = "mrunal"
    console.log(this);
}
// chaee()
// Expected output => {}


const chaeee = () => {
    let username = "mrunal"
    console.log(this.username);
}
// chaeee()
// Expected output => undefined



// const addTwo = (num1, num2) => {
//     return num1 + num2    // explicit return
// }

// console.log(addTwo(3, 5));
// Expected output => 8

const addTwoo = (num1, num2) =>  num1 + num2    // implict return
console.log(addTwoo(3, 4));
// Expected output => 7

const addTwooo = (num1, num2) =>  (num1 + num2)    // implict return    // more use in React
console.log(addTwooo(3, 8));
// Expected output => 11


const addTwoooo = (num1, num2) => ({username: "mrunal"})  // if there is an object, then always wrap with the {}
console.log(addTwoooo(3, 4));
// Expected output => {username: "mrunal"}


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach( function () {})
console.log(myArray.forEach( function () {}));
// Expected output => undefined

// myArray.forEach(() => {})
console.log(myArray.forEach( function () {}));
// Expected output => undefined


// myArray.forEach(() => ())
console.log(myArray.forEach( function () {}));
// Expected output => undefined



/*
    Key Note:

    if there are {}, then always write the "return" keyword
    if there are (), then no write the "return" keyword

    if there is an object, then always wrap with the {}

*/