// 2:06:00 
// const name = "Pushpendra ";
// const repoCount =99;
// console.log(name+ repoCount+" value");

const myName ="Pushpa Bhai ";
const  repocount =99;
// console.log(myName+repocount)// this is old method

// console.log(`My name is ${myName} and my repoCount is ${repocount}`)

const gameName1 = new String("pushpendra is a good student in his class")
// console.log(gameName1); 
// 2:10:00
// const number1 =Number(myName)
// console.log(number1) // NaN
// console.log(typeof number1)// type -> number 



// but when we run this code in console than we find tha string is shown in perticulaor words this is like Object

// console.log(gameName1[8]);
// console.log(gameName1.__proto__) //{} // ye dekhne me empty hai google console me sari value aati hain
// length ,touppercase , charat,subString,slice etc ye sbbhi prorto ke function hain 

// console.log(gameName1.length)
// console.log(gameName1.toUpperCase());

// console.log(gameName1.charAt(3))//h // print the character at index of 3
// console.log(gameName1.indexOf('s'))//2


// const newString = gameName1.substring(0,4) //word of 4th index will be excluded
// console.log(newString); // we can't give negative value in substring method

// const anotherString =gameName1.slice(0,-8); // in slice method we can give negative value
// console.log(anotherString); // try good practice //pendra-pk is a good student


// const anotherString1 =gameName1.slice(1,4); // in slice method we can give negative value
// console.log(anotherString1); // try good practice

//+++++++++++++ Go to google console and study the string function+++++++++++++++

const newString1 ="         Pushpendra        "; 
console.log(newString1);
// console.log(newString1.trim());
// console.log(newString1.trimStart())
// console.log(newString1.trimEnd())

/*                                             *********** Notes * ****************
 1. By trim method we can remove the space from the string
 2. without modify original string  
 */

 //                                            ++++++++++++++++ replace method+++++++++++++++
//  const url ="https://pushpendra.com/pushpendra%04kumar";
//  console.log("original string :---",url)
//  console.log("replaced string :-",url.replace('%04kumar','99Rajput$'));

 const str1= "kaise ho bhaia aao kabhi haveli par"
 console.log("original string :---",str1)
 
//  const str2 =str1.replace('haveli par','radhe')
//  console.log("Original string :--",str2)
// console.log(str2.replace('radhe','Mukku'))

// console.log(str2.includes('radhe'))
// //  // Timming 2:17:00
//  console.log(str1.includes('pushpendra')); // check presentation of string

// +++++++++++++++++++++++++++++++++++ Go to mdn and search Method of string +++++++++++++++++++++++++++++++++

//  // convert string into array
 console.log(gameName1.split('-')); //  '-' kuch bhi ho skta hai hai
  // agar '' string console kkraye to perticular words sepprates ho jayenge 
//   const gameName = new String("Pushpendra-pk is a good student in my class");

// //  console.log(chars[4]);


// const str = 'My name is pushpendra kuamr I am a good student in my classroom';
// console.log(str)
// const words = str.split(' ');
// console.log(words[4]);

// console.log(words[3]);
// // // Expected output: "pushpendra"

// const chars = str.split('');
// console.log(chars[8]);
// // // // Expected output: "i"

// const strCopy = str.split();
// console.log(strCopy);
// Expected output: Array ["My name is pushpendra kuamr I am a good student in my classroom"]
// Timming 2:29:00










// timming 2:19:00




/*

name
: 
"anchor"
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[0]
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object

*/
