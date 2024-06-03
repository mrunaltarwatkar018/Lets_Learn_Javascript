/*

class User {
    constructor( email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return this.password.toUpperCase();
    }

    set password(value) {
        this.password = value.toUpperCase();
    }

}

const mrunal = new User("m@runal.ai", "123");
console.log(mrunal.password);
// Expected Output => RangeError: Maximum call stack size exceeded


*/


/*
class User {
    constructor( email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return this._password.toUpperCase();
    }

    set password(value) {
        this._password = value.toUpperCase();
    }

}

// const mrunal = new User("m@runal.ai", "123");
const mrunal = new User("m@runal.ai", "abc");
console.log(mrunal.password);
// Expected Output => 123
// Expected Output => ABC

*/


/*
class User {
    constructor( email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return `${this._password}mrunal`;
    }

    set password(value) {
        this._password = value;
    }

}

// const mrunal = new User("m@runal.ai", "123");
const mrunal = new User("m@runal.ai", "abc");
console.log(mrunal.password);
// Expected Output => abcmrunal

*/


class User {
    constructor( email, password) {
        this.email = email;
        this.password = password;
    }


    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}mrunal`;
    }

    set password(value) {
        this._password = value;
    }

}

// const mrunal = new User("m@runal.ai", "123");
const mrunal = new User("m@runal.ai", "abc");
console.log(mrunal.password);
// Expected Output => abcmrunal
console.log(mrunal.email);
// Expected Output => M@RUNAL.AI











