
// ****************** MAP operation **********************
// MAP is a CALL BACK FUNCTION


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNumsA = myNumers.map( (num) =>  num + 10)
// console.log(newNumsA);

/*
    Expected output: 
                [
                    11, 12, 13, 14, 15,
                    16, 17, 18, 19, 20
                ]
*/


const newNumsB = myNumers.map( (num) => { num + 10})
// console.log(newNumsB);

/*
    Expected output: 
                [
                    undefined, undefined,
                    undefined, undefined,
                    undefined, undefined,
                    undefined, undefined,
                    undefined, undefined
                ]
*/




const newNumsD = myNumers.map( (num) => { return num + 10})
// console.log(newNumsD);

/*
    Expected output: 
                [
                    11, 12, 13, 14, 15,
                    16, 17, 18, 19, 20
                ]
*/




// ****************** Channining **********************
// in chanining, two-three methods are directly used one another

const newNum1 = myNumers
                .map((num) => num * 10 )

// console.log(newNum1);

/*
    Expected output: 
                [
                    10, 20, 30, 40,  50,
                    60, 70, 80, 90, 100
                ]
*/

const newNum2 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)

// console.log(newNum2);

/*
    Expected output: 
                [
                    11, 21, 31, 41,  51,
                    61, 71, 81, 91, 101
                ]
*/




const newNum3 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNum3);

/*
    Expected output: 
                [
                    41, 51,  61, 71,
                    81, 91, 101
                ]
*/


