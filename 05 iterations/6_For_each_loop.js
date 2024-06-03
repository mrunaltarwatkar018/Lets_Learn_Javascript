/* HOGH ORDER ARRAY LOOPS */


// ****************** FOR EACH LOOP with ARRAYS **********************


// arrays and forEach looop

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    // console.log(val);
} )


/*
    Expected output: 
                    js
                    ruby
                    java
                    python
                    cpp
*/


coding.forEach( (item) => {
    // console.log(item);
} )

/*
    Expected output: 
                    js
                    ruby
                    java
                    python
                    cpp
*/



// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

/*
    Expected output: 
                    js
                    ruby
                    java
                    python
                    cpp
*/




coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )


/*
    Expected output: 
                js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/





// objects and forEach looop

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

/*
    Expected output: 
                javascript
                java
                python
*/

