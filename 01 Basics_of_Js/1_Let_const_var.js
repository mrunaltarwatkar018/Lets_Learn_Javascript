// declaration of constant keyword
const accountId = 144553


// declaration of let keyword
let accountEmail = "mrunal@google.com"

// declaration of variables
var accontPassword = "12345"

// declaration of variables
accountCity = "Jaipur"

let accountState; 

// const not change further once its is declared
// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accontPassword = "54321"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accontPassword, accountCity, accountState])