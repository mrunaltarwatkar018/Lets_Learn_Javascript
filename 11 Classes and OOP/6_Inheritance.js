class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.addCourse();
// Expected Output => A new course was added by chai

chai.logMe();
// Expected Output => USERNAME is chai

const masalaChai = new User("masalaChai");

masalaChai.logMe();
// Expected Output => USERNAME is masalaChai

console.log(chai === masalaChai);
// Expected Output => false

console.log(chai === Teacher);
// Expected Output => false

console.log(chai instanceof User);
// Expected Output => true

console.log(chai instanceof Teacher);
// Expected Output => true

