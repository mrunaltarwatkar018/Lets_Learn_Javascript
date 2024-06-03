/*

// Before Static property used

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    createId(){
        return `123`
    }
}

const mrunal = new User("mrunal")
console.log(mrunal.createId());
// Expected Output => 123


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
// Expected Output => 123

*/



// After Static property used

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const mrunal = new User("mrunal")
// console.log(mrunal.createId());
// Expected Output => mrunal.createId is not a function


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")

iphone.logMe();
// Expected Output => Username: iphone


console.log(iphone.createId());
// Expected Output => iphone.createId is not a function
