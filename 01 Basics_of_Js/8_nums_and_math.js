// +++++++++++++ Nums +++++++++++++++++++++++++++++

const score = 400;
// console.log(score);
// Expected output: 400


const balance = new Number(100);
// console.log(balance);
// Expected output: [Number: 100]

// console.log(balance.toFixed(2));
// Expected output: 100.00


// console.log(balance.toString());
// Expected output: 100

// console.log(typeof balance);
// Expected output: object

// console.log(balance.toString().length);
// Expected output: 3

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));
// Expected output: 124


const otherNumber1 = 123.4966
// console.log(otherNumber1.toPrecision(3));
// Expected output: 123

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// Expected output as per US standard: 1,000,000

// console.log(hundreds.toLocaleString('en-IN'));
// Expected output as per Indian standard: 1,00,000

// console.log(hundreds.toExponential(2));
// Expected output: 1.00e+6

// console.log(Number.MAX_VALUE);
// Expected output: 1.7976931348623157e+308

// console.log(Number.MIN_VALUE);
// Expected output: 5e-324

// console.log(Number.MAX_SAFE_INTEGER);
// Expected output: 9007199254740991

// console.log(Number.MIN_SAFE_INTEGER);
// Expected output: -9007199254740991





// +++++++++++++ Maths +++++++++++++++++++++++++++++


// console.log(Math);
// Expected output: Object [Math] {}

// console.log(Math.abs(-4));
// Expected output: 4

// console.log(Math.round(4.6));
// Expected output: 5

// console.log(Math.ceil(4.2));
// Expected output: 5

// console.log(Math.floor(4.9));
// Expected output: 4

// console.log(Math.min(4, 3, 6, 8));
// Expected output: 3

// console.log(Math.max(4, 3, 6, 8));
// Expected output: 8



console.log(Math.random()); // ann ranges between 0 and 1 only mostly decimal values appears
// Expected output: 0.8096058230989267 

console.log(Math.random()*10);
// Expected output: .....varying output

console.log((Math.random()*10) + 1);
// Expected output: .....varying output

console.log(Math.floor(Math.random()*10) + 1);
// Expected output: 3
// Expected output: 5 .....varying output


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// Expected output: 16 18 17 15 