
// Singleton Object

// const tinderUser1 = new Object();
// console.log(tinderUser1);
// Expected output => {}

// Non-sib=ngleton Object

// const tinderUser2 = {};
// console.log(tinderUser2);
// Expected output => {}




const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
// Expected output => { id: '123abc', name: 'John Doe', isLoggedIn: false }


// Declaration of objects under objects or nested objects
const regularUser = {
    email: "someOne@gmail.com",
    fullname: {
        userfullname: {
            firstname: "John",
            lastname: "Doe"
        }
    }
}


// console.log(regularUser.fullname);
// Expected output => { userfullname: { firstname: 'John', lastname: 'Doe' } }

// console.log(regularUser.fullname.userfullname);
// Expected output => { firstname: 'John', lastname: 'Doe' }

// console.log(regularUser.fullname.userfullname.firstname);
// Expected output => John

// console.log(regularUser.fullname.userfullname.lastname);
// Expected output => Doe


// console.log(regularUser);
/*
Expected output => 
        {
            email: 'someOne@gmail.com',
            fullname: { userfullname: { firstname: 'John', lastname: 'Doe' } }
        }
*/



// combining of objects or merging of objects
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};


// const obj3 = { obj1, obj2 };
// console.log(obj3);
// Expected output => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } 


// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);
// Expected output => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);
// Expected output => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const obj4 = {5: "a", 6: "b"};
// const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);
// Expected output => { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2}   // mostly used 
// console.log(obj3);
// Expected output => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }





// while database objects are coming
// or in an array. there are many objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },

    {
        id: 1,
        email: "h@gmail.com"
    },

    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users[1].email
// console.log(users[1].email);
// Expected output => h@gmail.com

// console.log(tinderUser);
// Expected output => { id: '123abc', name: 'John Doe', isLoggedIn: false }



// console.log(Object.keys(tinderUser));
// Expected output => [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser));
// Expected output => [ '123abc', 'John Doe', false ]


// console.log(Object.entries(tinderUser));
// Expected output => [ [ 'id', '123abc' ], [ 'name', 'John Doe' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// Expected output => true









