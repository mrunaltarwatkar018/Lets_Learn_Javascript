

// Destructuring of Objects


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "mrunal"
}


// console.log(course.courseInstructor);
// Expected output => mrunal


const {courseInstructor} = course   // mostly used while accesiing the values of a objects
console.log(courseInstructor);
// Expected output => mrunal

const {courseInstructor: instructor} = course   // mostly used while accesiing the values of a objects
console.log(instructor);
// Expected output => mrunal





/* In React, only synatx in react  */

// const navbar = ({company}) => {

// }

// navbar(company = "mrunal")




/* APIs concept */


//  JSON structure

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// API's in array format

// [
//     {},
//     {},
//     {}
// ]
