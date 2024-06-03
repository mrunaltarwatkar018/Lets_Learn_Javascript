// IIFE: Immediately Invoked Function Expressions 


/*
    There is a occurance of global pollution, 
    to avoid these pollution, we have to use IIFE Function
*/

// function chi() {
//     console.log(`DB CONNECTED`);
// }
// chi(); 
// Expected output => DB CONNECTED


(function chi() {
    console.log(`DB CONNECTED`);
})();
// Expected output => DB CONNECTED

/*
    in above,
    first paranthesis () is a function i.e, function defination
    and second () is execution call (like calling function for execution)


    in some cases, code interpreter not understand the whether the function is terminated or ended, to avoid these always use semicolon(;) at the end of function
*/




// above function in arrow function

(function aurCode() {
    console.log(`DB CONNECTED Two`);
})();

// Expected output => DB CONNECTED Two


/*
    to end above function, we use semicolon(;) at the end of function
*/



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('mrunal')
// Expected output => DB CONNECTED Two mrunal






