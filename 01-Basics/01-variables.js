// Timming 32:40:00
const accountId =144553
let accountEmail="mukkuverma.com"
var accountPassword ="12345"
// accountCity ="Jaipur"    // do not declare like as without variables

// let accountState;  //// show in result is Undefined
let accountState="";

/*  1. To declare variables we can use let and var use for variables.
  2.To declare constant we can use const
*/

/*
1. Prefer not to use var 
beacause of issue in block scope and functional scope
2. we always use let in Javascript
 */
 


//accountId=2     ************ not allowed

accountEmail="puspa.com"
accountPassword="121212"
accountCity ="Bangaluru"



console.table([accountId,accountEmail,accountPassword,
    accountCity,accountId,accountState])
