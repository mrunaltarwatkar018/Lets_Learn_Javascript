
// ****************** FOR EACH LOOP with ARRAYS **********************


// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )

/*
    Expected output: 
                    js
                    ruby
                    java
                    python
                    cpp
*/

// console.log(values);
// Expected Output => undefined

/*
    Note:
        forEach Loop not returns anything
*/





// ****************** FILTER operation **********************
// FILTER is a CALL BACK FUNCTION



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num >4 )
// console.log(newNums);
// Expected Output => [ 5, 6, 7, 8, 9, 10 ]


// const newNumss = myNums.filter((num) => { // explicit return
//     num > 4
// })
// console.log(newNumss);
// Expected Output => []


// const newNumsss = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNumsss);
// Expected Output => [ 5, 6, 7, 8, 9, 10 ]



// above expression in forEach expression

// const newNumsssss = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNumsssss.push(num)
//     }
// } )
// console.log(newNumsssss);
// Expected Output => [ 5, 6, 7, 8, 9, 10 ]




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];



let userBooks = books.filter( (bk) => bk.genre === 'History')
// console.log(userBooks);
/*
    Expected output: 
                [
                    {
                        title: 'Book Three',
                        genre: 'History',
                        publish: 1999,
                        edition: 2007
                    },
                    {
                        title: 'Book Seven',
                        genre: 'History',
                        publish: 1986,
                        edition: 1996
                    }
                ]
*/



userBooks = books.filter( (bk) => {bk.publish >= 2000} )
// console.log(userBooks);
// Expected Output => []


userBooks = books.filter( (bk) => {return bk.publish >= 2000} )
// console.log(userBooks);
/*
    Expected output: 
                [
                    {
                        title: 'Book Five',
                        genre: 'Science',
                        publish: 2009,
                        edition: 2014
                    },
                    {
                        title: 'Book Eight',
                        genre: 'Science',
                        publish: 2011,
                        edition: 2016
                    }
                ]
*/


userBooks = books.filter( (bk) => {return bk.publish >= 1995} )
// console.log(userBooks);
/*
    Expected output: 
            [
                {
                    title: 'Book Three',
                    genre: 'History',
                    publish: 1999,
                    edition: 2007
                },
                {
                    title: 'Book Five',
                    genre: 'Science',
                    publish: 2009,
                    edition: 2014
                },
                {
                    title: 'Book Eight',
                    genre: 'Science',
                    publish: 2011,
                    edition: 2016
                }
            ]
*/




userBooks = books.filter( (bk) => { 
  return bk.publish >= 1995 && bk.genre === "History"
})

// console.log(userBooks);

/*
    Expected output: 
                [
                    {
                        title: 'Book Three',
                        genre: 'History',
                        publish: 1999,
                        edition: 2007
                    }
                ]
*/



