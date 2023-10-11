// Timming 1:39:00
/* 
//# Primitive 
Seven types are given bellow==>
1.String
2.Number
3.Boolean
4.Null
5.Undefined
6.Symbol
7.BigInt  ==>for big number

JavaScript is dynamically typed language
==> typesscript

for a goood JavaScript  Developer do mastering in objects and browser Events


//+++++++++++++++++++++++++++ # Reference Type (Non primitive)
Array ,objects,Functions

*/
 // *********** Ex. of primitive type ***********//
// const score =100;
// const scoreValue=100.3;

// const isLoggedIn =false;
// const outSideTemp =null;
// let userEmail;

// const id =Symbol('123');
// const anotherId =Symbol('123')

// console.log(id===anotherId); //false
// const bigNumber =2423564646n;
// console.log(bigNumber)
// console.log(typeof bigNumber);

// ************ Ex. of Non Primitive ***********//
//Array
// const heros =["shaltiman","naagraj","doga"];
// console.log( " Type of heros Array : " ,typeof heros);
// console.log(heros);

// Object
// let myObj ={
//     name:"pushpendra",
//     age:22,
// }
// console.log( "Type of this Object :",typeof myObj);

// // function
// const myFunction =function(){
//     console.log("Hello bro! How are you???");
// }

// console.log("Type of this function :",typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.

// 1:58:00
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) ,Heap (Non-Primitive)

let myYoutubename ="mukkurajj.com";
let anothername =myYoutubename;
console.log(myYoutubename)

anothername ="JavaScript with Mukku"
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne ;
userTwo.email ="mukkuraj111@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// 2:06:00 Timming
