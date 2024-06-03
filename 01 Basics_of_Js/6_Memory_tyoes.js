/**
 * 
 * There are two types of MEMORY TYPES
 *      A. Stack Memory  (i.e., all primitive datatypes)
 *      B. Heap Memory  (i.e., all Reference or Non-primitive datatypes)
 */


let myYoutubename = "mrunaltarwatkar";


let anotherName = myYoutubename;

anotherName = "mtjbsd"

console.log(myYoutubename);
console.log(anotherName);



let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
console.log(userOne);

let userTwo = userOne;

userTwo.email = "yash@google.com";

console.log(userTwo);

console.log(userOne.email);
console.log(userTwo.email);