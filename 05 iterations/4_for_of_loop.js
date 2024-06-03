/* HOGH ORDER ARRAY LOOPS */



// These loops are ARRAY specific loops

// ****************** FOR OF LOOP  **********************

// ["", "", ""]
// [{}, {}, {}]

// for-of loop implementattion with ARRAYS

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}
/*
    Expected output: 
                    1
                    2
                    3
                    4
                    5
*/



// for-of loop implementattion with STRINGS
const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

/*
    Expected output: 
                Each char is H
                Each char is e
                Each char is l
                Each char is l
                Each char is o
                Each char is
                Each char is w
                Each char is o
                Each char is r
                Each char is l
                Each char is d
                Each char is !
*/



// ****************** FOR IN LOOP  **********************


const arrr = [1, 2, 3, 4, 5]
for (const i in arrr) {
    if (Object.hasOwnProperty.call(arrr, i)) {
        const element = arrr[i];
        // console.log(i);
    }
}
/*
    Expected output: 
                    0
                    1
                    2
                    3
                    4
*/




// ****************** MAPS  **********************

const map = new Map();

map.set('IN', "India");
// console.log(map);
// Expected Output:  Map(1) { 'IN' => 'India' }


map.set('USA', "United States of America")
// console.log(map);
// Expected Output:  Map(2) { 'IN' => 'India', 'USA' => 'United States of America' }


map.set('Fr', "France")
// console.log(map);
/*
Expected Output:  
        Map(3) {
            'IN' => 'India',
            'USA' => 'United States of America',
            'Fr' => 'France'
        }
*/

map.set('IN', "India")
// console.log(map);
/*
Expected Output:  
        Map(3) {
            'IN' => 'India',
            'USA' => 'United States of America',
            'Fr' => 'France'
        }
*/


//overall console
// console.log(map);
/*
        Expected Output:  
                Map(3) {
                    'IN' => 'India',
                    'USA' => 'United States of America',
                    'Fr' => 'France'
                }
*/



// for whole values in a array
for (const key of map) {
    // console.log(key);
}

/*
        Expected Output:  
                [ 'IN', 'India' ]
                [ 'USA', 'United States of America' ]
                [ 'Fr', 'France' ]
*/

// for individual values 

for (const [key, value] of map) {
    // console.log(key, ':-', value);  
}

/*
        Expected Output:  
                IN :- India
                USA :- United States of America
                Fr :- France
*/




const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
// Expected output: myObject is not iterable
