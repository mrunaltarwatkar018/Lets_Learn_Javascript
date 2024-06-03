
// ****************** FOR IN LOOP with objects **********************


// for objects, use only FOR-IN loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
}
/*
    Expected output: 
                js
                cpp
                rb
                swift
*/


for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

/*
    Expected output: 
                js shortcut is for javascript
                cpp shortcut is for C++
                rb shortcut is for ruby
                swift shortcut is for swift by apple
*/








// ****************** FOR IN LOOP with ARRAYS **********************

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
}
/*
            Expected output: 
                    0
                    1
                    2
                    3
                    4
*/
                   
for (const key in programming) {
    // console.log(programming[key]);
}

/*
    Expected output: 
                js
                rb
                py
                java
                cpp
*/

// ****************** FOR IN LOOP with MAPS **********************

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


/*
    error occur, because over maps, for-in loop is not iterable
*/