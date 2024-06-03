const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }
// Expected output: Got user email

// ****************** falsy values : false, 0, -0, BigInt 0n, "", null, undefined, NaN **********************






// ****************** truthy values : "0", 'false', " ", [], {}, function(){}  **********************

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }
// Expected output: Array is empty



// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {   // to check whether the object is empty or not
//     console.log("Object is empty");
// }
// Expected output: Object is empty



// ******************  Nullish Coalescing Operator (??): null OR undefined  **********************

let val1;
val1 = 5 ?? 10
console.log(val1);
// Expected output: 5


val1 = null ?? 10
console.log(val1);
// Expected output: 10


val1 = undefined ?? 15
console.log(val1);
// Expected output: 15

val1 = null ?? 10 ?? 20
console.log(val1);
// Expected output: 10



// ****************** Terniary Operator: condition ? true_statement : false_statement  **********************

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
// Expected output: more than 80
