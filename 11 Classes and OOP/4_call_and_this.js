
// function SetUsername(username) {
//     // Complex DB calls
//     this.username = username;
// }

// function createUser(username, email, password) {
//     SetUsername(username)
   
//     this.email = email
//     this.password = password
// }


// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);


/*
    Expected Output => 
        createUser { email: 'chai@fb.com', password: '123' }
*/

// In above case, username not get in output, because reference is given 





function SetUsername(username) {
    // Complex DB calls
    this.username = username;
}

function createUser(username, email, password) {
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}


const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);


/*
    Expected Output => 
        createUser { username: 'chai', email: 'chai@fb.com', password: '123' }
*/