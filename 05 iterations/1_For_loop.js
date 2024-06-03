// ****************** FOR  **********************

for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
}

/*
    Expected output: 
                0
                1
                2
                3
                4
                5
                6
                7
                8
                9
                10
*/


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}
/*
    Expected output: 
                0
                1
                2
                3
                4
                5 is best number
                5
                6
                7
                8
                9
                10
*/

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 3; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j );
//     }
// }


/*
    Expected output: 
                Outer loop value: 0
                Inner loop value 0 and inner loop 0
                Inner loop value 1 and inner loop 0
                Inner loop value 2 and inner loop 0
                Inner loop value 3 and inner loop 0
                Outer loop value: 1
                Inner loop value 0 and inner loop 1
                Inner loop value 1 and inner loop 1
                Inner loop value 2 and inner loop 1
                Inner loop value 3 and inner loop 1
                Outer loop value: 2
                Inner loop value 0 and inner loop 2
                Inner loop value 1 and inner loop 2
                Inner loop value 2 and inner loop 2
                Inner loop value 3 and inner loop 2
                Outer loop value: 3
                Inner loop value 0 and inner loop 3
                Inner loop value 1 and inner loop 3
                Inner loop value 2 and inner loop 3
                Inner loop value 3 and inner loop 3
                Outer loop value: 4
                Inner loop value 0 and inner loop 4
                Inner loop value 1 and inner loop 4
                Inner loop value 2 and inner loop 4
                Inner loop value 3 and inner loop 4
                Outer loop value: 5
                Inner loop value 0 and inner loop 5
                Inner loop value 1 and inner loop 5
                Inner loop value 2 and inner loop 5
                Inner loop value 3 and inner loop 5
                Outer loop value: 6
                Inner loop value 0 and inner loop 6
                Inner loop value 1 and inner loop 6
                Inner loop value 2 and inner loop 6
                Inner loop value 3 and inner loop 6
                Outer loop value: 7
                Inner loop value 0 and inner loop 7
                Inner loop value 1 and inner loop 7
                Inner loop value 2 and inner loop 7
                Inner loop value 3 and inner loop 7
                Outer loop value: 8
                Inner loop value 0 and inner loop 8
                Inner loop value 1 and inner loop 8
                Inner loop value 2 and inner loop 8
                Inner loop value 3 and inner loop 8
                Outer loop value: 9
                Inner loop value 0 and inner loop 9
                Inner loop value 1 and inner loop 9
                Inner loop value 2 and inner loop 9
                Inner loop value 3 and inner loop 9
                Outer loop value: 10
                Inner loop value 0 and inner loop 10
                Inner loop value 1 and inner loop 10
                Inner loop value 2 and inner loop 10
                Inner loop value 3 and inner loop 10
*/




let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
// Expected output: 3


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}
/*
    Expected output: 
                flash
                batman
                superman
*/




// ****************** break and continue  **********************

/* Break Statement*/
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        break
    }
//    console.log(`Value of i is ${index}`);
}
/*
    Expected output: 
                Value of i is 1
                Value of i is 2
                Value of i is 3
                Value of i is 4
                Detected 5
*/


/* Continue Statement*/
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
}

/*
    Expected output: 
            Value of i is 1
            Value of i is 2
            Value of i is 3
            Value of i is 4
            Detected 5
            Value of i is 6
            Value of i is 7
            Value of i is 8
            Value of i is 9
            Value of i is 10
            Value of i is 11
            Value of i is 12
            Value of i is 13
            Value of i is 14
            Value of i is 15
            Value of i is 16
            Value of i is 17
            Value of i is 18
            Value of i is 19
            Value of i is 20
*/












