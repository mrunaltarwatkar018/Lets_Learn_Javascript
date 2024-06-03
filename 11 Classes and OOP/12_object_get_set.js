// object based getter and setter declaration


const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    },
}

const tea = Object.create(User)
console.log(tea.email);
// Expected Output => H@HC.COM


console.log(tea.password);
// Expected Output => ABC


