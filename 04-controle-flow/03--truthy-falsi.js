// const userEmail ="Pushpendra.com"
// const userEmail =[]  //Got user email // man lia jata hai ki value true hai
// const userEmail ="" ///Don't have user email.


// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email")
// }

/*
 1. false values ==>
false, 0, -0, bigInt, 0n, "", null, undefined, NaN

2. truthy values ==>
"0", 'false', " ", [], {}, function(){}, 

*/


// const userEmail =[]

// if(userEmail.length ===0){
//     console.log("Array is empty"); // Array is empty
// }

//Timming 7:00:00
// const eemptyObj ={}

// if (Object.keys(eemptyObj).length===0) {
//     console.log("Object is empty")
// }

/*
false ==0
true
false ==''
true
0 ==""
true
*/

// Nullish Coalesing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10    //  5
// val1 =null ?? 10   //  10
// val1  =undefined ?? 15   //15
// val1 = null ?? 10 ?? 20   // 10


// console.log(val1) //5


//+++++++++++++++++++++++nullish and terniary operator boths are different
// Terniary Operator

// ccondtion ? true :false

const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");
//  answer =>>  more than 80


