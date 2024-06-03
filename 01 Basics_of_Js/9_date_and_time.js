// +++++++++++++ Dates +++++++++++++++++++++++++++++


// let myDate = new Date()
// console.log(myDate);
// Expected output: 2024-05-29T18:17:14.669Z

// console.log(myDate.toString());
// Expected output: Wed May 29 2024 23:48:05 GMT+0530 (India Standard Time)

// console.log(myDate.toISOString());
// Expected output: 2024-05-29T18:19:28.268Z

// console.log(myDate.toJSON());
// Expected output: 2024-05-29T18:23:23.301Z

// console.log(myDate.toDateString());
// Expected output: Wed May 29 2024

// console.log(myDate.toTimeString());
// Expected output: 23:53:47 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleDateString());
// Expected output: 29/5/2024

// console.log(myDate.toLocaleTimeString());
// Expected output: 11:54:14 pm

// console.log(myDate.toLocaleString());
// Expected output: 29/5/2024, 11:55:00 pm



// console.log(myDate.toLocaleTimeString());
// Expected output: 11:55:38 pm

// console.log(myDate.toUTCString());
// Expected output: Wed, 29 May 2024 18:25:38 GMT

// console.log(typeof myDate)
// Expected output: object


/**
 * In Js, Months always start from 0 i.e. (January gives 0 or vice versa) 
 * 
 * 
 *      Synatx :
 *          new Date()
            new Date(value)
            new Date(dateString)
            new Date(dateObject)

            new Date(year, monthIndex)
            new Date(year, monthIndex, day)
            new Date(year, monthIndex, day, hours)
            new Date(year, monthIndex, day, hours, minutes)
            new Date(year, monthIndex, day, hours, minutes, seconds)
            new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

            Date()

            Note: Date() can be called with or without new, but with different effects. See Return value.
            
            For example, new Date(2020, 5, 0) will return May 31st, 2020.

            year
                Integer value representing the year. Values from 0 to 99 map to the years 1900 to 1999. 
                All other values are the actual year.
        

            monthIndex
                Integer value representing the month, beginning with 0 for January to 11 for December.

            day Optional
                Integer value representing the day of the month. Defaults to 1.

            hours Optional
                Integer value between 0 and 23 representing the hour of the day. Defaults to 0.

            minutes Optional
                Integer value representing the minute segment of a time. Defaults to 0.

            seconds Optional
                Integer value representing the second segment of a time. Defaults to 0.

            milliseconds Optional
                Integer value representing the millisecond segment of a time. Defaults to 0.
 */




// let myCreatedDate = new Date(2024, 0, 23); // Date(Year, Month, date)
// console.log(myCreatedDate.toString());

// let myCreatedDatee = new Date(2024, 0, 23, 5, 3); // Date(year, monthIndex, day, hours, minutes, seconds)
// console.log(myCreatedDatee.toString());

// let myCreatedDateee = new Date("2024-00-14");
// console.log(myCreatedDateee.toLocaleString());
// Expected output: Invalid Date

// let myCreatedDateeee = new Date("2024-01-14"); // (yy-mm-dd)
// console.log(myCreatedDateeee.toLocaleString());
// Expected output: 14/1/2024, 5:30:00 am

// let myCreatedDateeeee = new Date("01-14-2024"); // (mm-dd-yy)
// console.log(myCreatedDateeeee.toLocaleString());
// Expected output: 14/1/2024, 12:00:00 am


// +++++++++++++ Times +++++++++++++++++++++++++++++

let myCreatedDate1 = new Date("01-14-2024");


let myTimeStamp = Date.now();
console.log(myTimeStamp); 
// Expected output:  1717008067734 i.e., o/p in milliseconds


console.log(myCreatedDate1.getTime()); 
// Expected output:  1705170600000 i.e., o/p in milliseconds


console.log(Math.floor(Date.now()/1000)); 
// Expected output:  1717008300 i.e., o/p in seconds



let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// string interpolation
// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})