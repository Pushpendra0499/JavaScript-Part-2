// if

// const isUserloggedIn =true
// const temperature =41;

// if (temperature===4) {
//     console.log("less then 50");
// }else{
//     console.log("temperature is greater than 50");
// }
// console.log("Execute")

// <,>,<=,<= ,!=, ==, === 
//////////////////////////////////////
// const score =200;
// if(score>100){
// //  const power = "fly"
// // var power = "fly"
// let power ="fly"

//  console.log(`User power :${power}`);
// }
// console.log(`User power :${power}`); // with const this line will not be print due to scope problem




// // +++++++++++++++++++++++++++++++
// const balance =1000;

// if(balance>500) console.log("test"), // implicit scope man lia hai
// console.log("test2"); /// very bad way to write do not aqain ths practice


// const balance=1000;
// if(balance < 500){
// console.log("less than 500")
// }
// else if(balance < 750){
//     console.log("less than 750")
// }
// else if(balance <900){
//     console.log("less than 750")
// }
// else{
//     console.log("less than 1200")
// }


const userloggedIn =true 
const debitCard =true
const loggedInFromGoogle =false
const loggedInFromEmail =true
if(userloggedIn && debitCard && 2==2){ //////////// all conditin should be true
    console.log("Allow to bue course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}