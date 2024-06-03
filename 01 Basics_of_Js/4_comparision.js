
/*
Comparison Operators
            The comparison operators are used to compare two values with each other.

            The equality operator (==) is used to compare the two values, if they are 
            equal or not. But the values are not directly compared. First, they are 
            converted to the same data type and then the converted content is compared. 
            Eg., "1" == 1 evaluates to true, even though the first one is a 'string' 
            and the other is a 'number'. 

            There is another comparison operator (===) known as strict equality operator. 
            It checks both the data type and the content. If the data type are not equal, 
            it returns false. So "1" === 1 now evaluates to false. 

            Other comparison operators are - 
                ●   Inequality (!=) - It returns the opposite result of the equality operator. 
                ●   Strict Inequality (!==) - It returns the opposite result of the strict equality. 
                ●   Greater Than (>) - It returns true if left operand is greater than the right one. 
                ●   Greater Than or Equal (>=) - It returns true if left operand is greater than or 
                    equal to the right one. 
                ●   Less Than (<) - It returns true if left operand is less than the right one. 
                ●   Less Than or Equal (<=) - It returns true if left operand is less than or equal to 
                    the right one.
*/



// console.log(2 > 1); // o/p => true
// console.log(2 >= 1); // o/p => true
// console.log(2 < 1); // o/p => false
// console.log(2 == 1); // o/p => false
// console.log(2 != 1); // o/p => true


/*
    while compairing two data or numbers or string, there datatype must be same not a diiferent datatypes.
*/
// console.log("2" > 1); // o/p => true
// console.log("02" > 1); // o/p => true


/*
    The reason is that an equality check == and comparisons >, <, >=, <= work differently.

    Comparisons convert null to a number, treating it as a 0(zero).
    That's why, (3) null >= 0 is TRUE & (1) null > 0 is FALSE.

    so, avoid this types of comparision, because they leads to confussion

*/

// console.log(null > 0); // o/p => false
// console.log(null == 0); // o/p => false
// console.log(null >= 0); // o/p => true


/*
    Note: Comparison of undefined operation with any one is always FALSE.
    so, avoid this types of comparision, because they leads to confussion
*/
// console.log(undefined == 0); // o/p => false
// console.log(undefined > 0); // o/p => false
// console.log(undefined < 0); // o/p => false

// Strict check i.e.,=== 

console.log("2" === 2); // o/p => false
