// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
// Expected Output => 123abc

console.log(chai.changeUsername());
// Expected Output => CHAI




/****************** Above case works in a behind the scene as  ******************/


function Userr(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

Userr.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

Userr.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new Userr("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
// Expected Output => 123abc

console.log(tea.changeUsername());
// Expected Output => TEA








