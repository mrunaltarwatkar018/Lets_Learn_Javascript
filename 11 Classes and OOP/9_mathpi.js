
// console.log(Math.PI);
/*
    Expected Output => 
        3.141592653589793
*/

// Math.PI = 5
// console.log(Math.PI);
/*
    Expected Output => 
        3.141592653589793
*/

// In above case, first we declare Math.PI = 5, but not get the output as 5 
// Because Math.PI is universal constant/
/*
Math.PI is immutable to preserve the integrity of mathematical calculations and to conform to the standards defined by ECMAScript.
*/



const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

/*
    Expected Output => 
            {
                value: 3.141592653589793,
                writable: false,
                enumerable: false,
                configurable: false
            }
*/



// const chai = {
//     name: 'ginger chai',
//     price: 250,
//     isAvailable: true,
    
// }
// console.log(chai);
/*
    Expected Output => 
            { name: 'ginger chai', price: 250, isAvailable: true }
*/


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    
    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai));
/*
    Expected Output => 
            undefined
*/

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
    Expected Output => 
            {
                value: 'ginger chai',
                writable: true,
                enumerable: true,
                configurable: true
            }
*/



// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false,
    
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

/*
    Expected Output => 
            {
                value: 'ginger chai',
                writable: false,
                enumerable: false,
                configurable: true
            }
*/


// for (let [key, value] of chai) {
//         console.log(`${key} : ${value}`);
// }
/*
    Expected Output => 
            chai is not iterable
*/

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
/*
    Expected Output => 
            name : ginger chai
            price : 250
            isAvailable : true
*/



// Note :
// if enumerable: false, the we can not iterate
// if enumerable: true, the we can iterate






