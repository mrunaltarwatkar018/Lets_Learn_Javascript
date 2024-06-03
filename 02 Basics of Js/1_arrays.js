// Declaration of Arrays

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];

const myHeors = ["shaktiman", "naagraj"];

console.log(myArray[0]);
// Expected output => 1

console.log(myHeors[0]);
// Expected output => shaktiman


const myArray2 = new Array(1, 2, 3, 4, 5);

// Array methods


myArray.push(11);
console.log(myArray);
        [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]
// Expected output => [[1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]


myArray.push(12);
console.log(myArray);
// Expected output => [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11, 12]

myArray.pop();
console.log(myArray);
// Expected output => [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]


myArray.unshift(0);
console.log(myArray);
// Expected output => [0, 1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]

myArray.unshift(9);
console.log(myArray);
// Expected output => [9, 0, 1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]


myArray.shift();
console.log(myArray);
// Expected output => [0, 1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]

myArray.shift();
console.log(myArray);
// Expected output => [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]



console.log(myArray.includes(9));
// Expected output => true

console.log(myArray.indexOf(9));
// Expected output => 8

console.log(myArray.indexOf(90));
// Expected output => -1

const newArray = myArray.join();
console.log(myArray);
// Expected output => [1,2,3,4,5,6,7,8,9,10,11]

console.log(typeof myArray);
// Expected output => object

console.log(newArray);
// Expected output => 1,2,3,4,5,6,7,8,9,10,11

console.log(typeof newArray);
// Expected output => string




// slice, splice

console.log("A ", myArray);
// Expected output => A [1,2,3,4,5,6,7,8,9,10,11]

const myn1 = myArray.slice(1, 3);

console.log(myn1);
// Expected output => [2,3]

console.log("B ", myn1);
// Expected output => B [2,3]



const myn2 = myArray.splice(1, 3);

console.log("C ", myArray);
// Expected output => C  [1, 5,  6,  7, 8, 9, 10, 11]

console.log(myn2);
// Expected output => [ 2, 3, 4 ]