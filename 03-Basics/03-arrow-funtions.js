  // Timming  5:29:00
// const user ={
//     username :"pushpedra",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username} ,welcome to website`)
//         console.log(this) //  this is represent current context
//     }

// }

// user.welcomeMessage() //pushpe dra ,welcome to website
// // user.username ="Sam"
// // user.welcomeMessage()  //Sam ,welcome to website

// console.log(this) //{}  

/////////////////////////////////
// function chai() {
//     console.log(this)
// }
// chai()

/////////////////////////////////////
// const chai = function(){
//     let username ="pushpendra"
//     console.log(this.username) // this did not woork in the block scope
// }
// chai()

// +++++++++++++++++++++++++++++ Arrow fnction Ex.1
// const chai = ()=> {
//     let username ="pushpendra"
//     // console.log(this.username)// undefined
//     console.log(this) // undefined

// }
// chai() //// {}

/*  +++++++++++++++++++ Arroy function++++++++++++++++++++++ */
// const addTwo = (num1, num2) => {
//     return num1 + num2

// }
// console.log(addTwo(3,4)) // 7

/*1. if we use querly brackets{} then we used to give return value compelsaory
2. if we do not use {} this is not for required return value

*/
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) // not required for return value

// const addTwo = (num1, num2) => {username :"pushpendra"}  // we can not retrun value
// const addTwo = (num1, num2) => ({username :"pushpendra"})   // { username: 'pushpendra' }
// console.log(addTwo(3,4))  //7


// const myArray =[2,4,6,7,4,5,,7]
// myArray.forEach()

// Timming 5:46:00
