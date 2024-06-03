// Comparision Operation : <, >, <=, >=, ==, !=, ===, !==

const isUserloggedIn = true
const temperature = 41

// ****************** if-else **********************


// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 41");
// }

// console.log("Execute");




// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);  // not in scope

// Expected output: User power: fly




const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // immature/not-recommanded code

/*
    Expected output: 
                        test
                        test2
*/


// ****************** nested if-else **********************
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");
// }
// Expected output: less than 1200



// ****************** many if-else conditions **********************

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
// Expected output: User logged in
