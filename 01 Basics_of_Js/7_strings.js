const name = "mrunal"

const repoCount = 50

// console.log(name + " " + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// Declaration of String 

const gameName = new String('mrunal-mt-gt-yt-sn')
// console.log(gameName.length);


// console.log(gameName[0])

// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());


console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));


const newString = gameName.substring(0, 4);
console.log(newString);


const anotherString = gameName.slice(0, 4);
console.log(anotherString);


const anotherStrinng = gameName.slice(-8, 4);
console.log(anotherStrinng);


const newString1 = "      mrunal       ";
console.log(newString1);
console.log(newString1.trim());


const url = "https://hitesh.com/hitesh%20choudhary";



console.log(url.replace('%20', '-'));


console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));


console.log(gameName.split('-'));


const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split(' ');
console.log(words[8]);
// Expected output: "k"


const strCopy = str.split(' ');
console.log(strCopy);
// Expected output: Array['The', 'quick','brown', 'fox', 'jumps', 'over', 'the',   'lazy', 'dog.']