//var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "mrunal"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);   // not in scope, website is not defined 

    two()

}

// one()

if (true) {
    const username = "mrunal"
    if (username === "mrunal") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  // error
}

// console.log(username);  // error


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))


function addone(num){
    return num + 1
}
// console.log(addone(5))
// addone(5)

// addTwo(5); // gives error, because we are accessing before the declaration

const addTwo = function(num){
    return num + 2
}


// addTwo(5);
console.log(addTwo(5))
