// ****************** REDUCE METHOD **********************

/*
        const array1 = [1, 2, 3, 4];

        // 0 + 1 + 2 + 3 + 4
        const initialValue = 0;
        const sumWithInitial = array1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
        );

        console.log(sumWithInitial);
        // Expected output: 10

*/

const myNums = [1, 2, 3]


// Reduce in normal function 
const myTotal = myNums.reduce(function (acc, currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
// console.log(myTotal);

/*
    Expected output: 
            acc: 0 and currval: 1
            acc: 1 and currval: 2
            acc: 3 and currval: 3
            6
*/

// Reduce in arrow function 

const myTotalA = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotalA);
// Excepted output => 6








const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
// Excepted Output => 22996
