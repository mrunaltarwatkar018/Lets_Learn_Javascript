// through properties, how getters and setters are set or declared

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const mrunal = new User("M@RUNAL.AI", "mrunal")

console.log(mrunal.email);
// Expected Output => M@RUNAL.AI

console.log(mrunal.password);
// Expected Output => MRUNAL
