const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// console.log(marvel_heros);  
// Expected output => [ 'thor', 'Ironman', 'spiderman']

// console.log(dc_heros);
// Expected output => [ 'superman', 'flash', 'batman' ] 

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// Expected output => [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]);
// Expected output => flash

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);
// Expected output => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]





const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
// Expected output => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);
/*
Expected output => 
    [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
    ]
*/



console.log(Array.isArray("Mrunal"));
// Expected output => false

console.log(Array.from("Mrunal"));
// Expected output => [ 'M', 'r', 'u', 'n', 'a', 'l' ]

console.log(Array.from({name: "mrunal"})) // interesting
// Expected output => []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// Expected output => [ 100, 200, 300 ]