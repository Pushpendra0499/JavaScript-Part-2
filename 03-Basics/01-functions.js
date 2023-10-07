//4:36:00
// console.log("H");
// console.log("I")
// console.log("T")
// console.log("E")
// console.log("S")
// console.log("H")


// function sayMyName(){
// console.log("H");
// console.log("I")
// console.log("T")
// console.log("E")
// console.log("S")
// console.log("Hello")
// }

// sayMyName // this is no shown error
// sayMyName()



// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2 );
// }


// addTwoNumbers()  //NaN
// addTwoNumbers(2,"4") //24
addTwoNumbers(3,4) //7
// addTwoNumbers(2,a) //a is not defined(Error)
// addTwoNumbers(2,null) //2

// addTwoNumbers(2,"a")  // 2a
// addTwoNumbers("a","b") //ab

function addTwoNumbers(num1,num2){
//    let result =num1+num2;
//    console.log("Pushpendra kuamr"); // string will be print in the output
//    return result;
//    console.log("Pushpendra kuamr"); // string will not be print in the output

    return num1+num2; // yhis is inside the scope
}
//  Timming 4:44:00
const result =addTwoNumbers(3,5) 
//   console.log("Result :",result) //undefined how to go undefined value

function loginUserrMessage(username){ // <== loginUserrMessage(username ="sam")
    if(username===undefined) {  // <== we can use also this method if(!username)
        console.log("Please enter a username")

        // ("") empty string will be taken like false value
        // return 
        // output will be undefined // if here we use return value than code does not exist in the next itration

    }
    return `${username} just loggeg in`
}

// loginUserrMessage("pushpendra")// this value will not print in the output

// console.log(loginUserrMessage("pushpendra")); //  pushpendra just loggeg in   string print in the output
// console.log(loginUserrMessage("")); // just loggeg in
// console.log(loginUserrMessage());  //undefined just loggeg in


//   ... this is also known as spread operator and rest operator this is depend upon use of case


function calculateCarPrice(val1, val2, ...num1){
return num1
}

console.log(calculateCarPrice(220,400,500,1000)); // [ 220, 400, 500 ,1000 ]

const user ={
    username:"pushpenra",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// but pproblem is comming if we use of prices in place oof price
}

// handleObject(user) //Username is pushpenra and price is 199

// good method

handleObject({
    username:"Pushpa",
    price:399
}) // output  ==>  Username is Pushpa and price is 399

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[3]
}


// console.log(returnSecondValue(myNewArray)); //600
console.log(returnSecondValue([200,400,500,1000])); // result will we get 1000



