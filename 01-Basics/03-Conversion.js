// let score ="33qwef"; //  result is number but this is not a number
//let score =null; /// output comming is "0"
// let score= undefined;  // **** Output is NaN not a number

// let score =true; // result is 1
// let score =false; // result is 0

// let result ="passed" 

  // ***************  Notes ************
/* 
1."33" =>33
2. "33kofa" => NaN
3.true => 1; false => 0;

*/

// console.log(typeof score);
// console.log(typeof(result));
// console.log(score);

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // but score is not a proper number that is string like 33qef
// console.log(valueInNumber);

// 1=> true ; 0=> false ;
// let isLoggedIn =1; // resiult show true
// let isLoggedIn =""; //  result show false
// let isLoggedIn ="hello"; // result show true



// let booleanIsLoogedIn =Boolean(isLoggedIn)
// console.log(booleanIsLoogedIn);




//**************** number convert into String ************** */
// let someNumber =99;

// let stringNumber =String(someNumber)
// console.log(stringNumber);

// console.log(typeof stringNumber);  // Output is String that showed 99 could be changed in string


// *************** Operations ***********************//
let value =3;
let negValue=-value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);

// console.log(2%3); //  this is very important

 // ************** Adding the string *********************///
// let str1 ="hello "
// let str2 ="Pushpendra"

// let  str3= str1+ str2;
// console.log(str3);

//////////// complex situation ////////////  
//   got to tc39.cs for To perimives ////

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + "2");// 12

// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2");// 32

// console.log(1 + "2" + 2); // 122

// console.log(2+3%5*9); // very bad prctice
// console.log((20+3) / (5*2)); //  good prctice


console.log(true);

//console.log(+"") // 0 in the Output

// console.log(+true); // do not try this 

// console.log(true+); // show  an error in the output 

// ****************** Assign operation *************///
// let num1,num2,num3;
// num1=num2=num3=2+2; do not try this type coding 


let gameCounter = 100;
//gameCounter++;
++gameCounter;
console.log(gameCounter); 


                      /************ Notes *************/
/* 
we must read pre increment and post oincrement
1. pre-increment ==> ++p firstly increase the value and than use the value  like ++p
2. post-increment ==> p++ firstly use the value and than increment the value like p++
*/

// link to study  (1:29:13) ==> 
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
 
