// Declaration of functions

/*
    synatx: 
        function function_name() {
            statements.....
            statements.....
            statements.....
            statements.....
        }
*/

function sayMyName(){
    console.log("M");
    console.log("R");
    console.log("U");
    console.log("N");
    console.log("A");
    console.log("L");
}


// sayMyName();

/*
        Excepted output =>
            M
            R
            U
            N
            A
            L    
*/



// function for adding two numbers 
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// addTwoNumbers();
// Expected output =>  NaN

// addTwoNumbers(10, 20);
// Expected output =>  30

// addTwoNumbers(10, 20.5);
// Expected output =>  30.5

// addTwoNumbers(3, 'a');
// Expected output =>  3a

// addTwoNumbers(10, "20");
// Expected output =>  1020

// addTwoNumbers(10, true);
// Expected output =>  11

// addTwoNumbers(10, false);
// Expected output =>  10

// addTwoNumbers(10, null);
// Expected output =>  10

// addTwoNumbers(10, undefined);
// Expected output =>  NaN


function addTwoNumberss(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumberss(3, 5);

// console.log("Result: ", result);
// Expected output =>  Result:  8



function LoginUsermessage(username) {
    if ( username === undefined) {
        console.log("Please enter your username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(LoginUsermessage("Mrunal "));
// Expected output =>  Mrunal  just logged in

console.log(LoginUsermessage());

/*
    Expected output =>  
        Please enter your username
        undefined
*/

// above function using another apporach


function LoginUsermessagee(username) {
    if (!username) {
        console.log("Please enter your username");
        return;
    }
    return `${username} just logged in`;
}

console.log(LoginUsermessagee());
/*
    Expected output =>  
        Please enter your username
        undefined
*/


// above function using default value
function LoginUsermessageee(username = "sam") {
    if (!username) {
        console.log("Please enter your username");
        return;
    }
    return `${username} just logged in`;
}

console.log(LoginUsermessageee());
/*
    Expected output =>  sam just logged in
*/


console.log(LoginUsermessageee("Mrunal "));
/*
    Expected output =>  Mrunal  just logged in
*/
