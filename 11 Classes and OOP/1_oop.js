/* OBJECT LITERALS */

const user = {
    username: "mrunal",
    loginCount: 8,
    signedIn: true,
};

// console.log(user.username);
/*
    Expected Output => 
        mrunal
*/


const user1 = {
    username: "mrunal",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
    }
};

// console.log(user1.username);
// console.log(user1.getUserDetails);
/*
    Expected Output => 
        mrunal
        undefined
*/



const user2 = {
    username: "mrunal",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
    //     console.log(`Username: ${this.username}`);
    //     console.log(this);
    }
};

// console.log(user2.username);
// console.log(user2.getUserDetails());
/*
    Expected Output => 
        mrunal
        Username: mrunal
        {
        username: 'mrunal',
        loginCount: 8,
        signedIn: true,
        getUserDetails: [Function: getUserDetails]
        }
        undefined
*/


const user3 = {
    username: "mrunal",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
};

// console.log(user3.username);
// console.log(user3.getUserDetails());
// console.log(this);

/*
    Expected Output => 
        mrunal
        {}
*/




/* CONSTRUCTOR FUNCTION */

// const promiseOne = new Promise();
// const date = new Date();


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("mrunal", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne);
console.log(userTwo);

/*
    Expected Output => 
        User {
            username: 'mrunal',
            loginCount: 12,
            isLoggedIn: true,
            greeting: [Function (anonymous)]
        }
        User {
            username: 'ChaiAurCode',
            loginCount: 11,
            isLoggedIn: false,
            greeting: [Function (anonymous)]
        }
*/



console.log(userOne.constructor);
/*
    Expected Output => 
        [Function: User]
*/