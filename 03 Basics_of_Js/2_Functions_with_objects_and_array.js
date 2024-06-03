
// only one attributes
function basiccalculateCartPrice(num1){
    return num1
}
// console.log(basiccalculateCartPrice(200));
// Expected output =>  200


// arrays and function
// with many attributes
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));
/*
    Expected output =>  [ 200, 400, 500, 2000 ]
*/ 


// 
function calculateCartPricee(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPricee(200, 400, 500, 2000));
/*
    Expected output =>  [ 500, 2000 ]
*/ 


// objects and function
const user = {
    username: "mrunal",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
/*
    Expected output =>  Username is mrunal and price is undefined
*/ 


handleObject({
    username: "sam",
    price: 399
})
/*
    Expected output =>  Username is sam and price is 399
*/ 



// arrays and fuction

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
/*
    Expected output =>  Username is 400
*/ 

console.log(returnSecondValue([200, 400, 500, 1000]));
/*
    Expected output =>  Username is 400
*/ 

