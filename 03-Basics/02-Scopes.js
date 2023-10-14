// // let var const
// var c=300;
// let a =40;
// let b =15;


// /*  +++++++++++++++++++++++++ Note +++++++++++++++++++++++++++ */
// /*
//  this area is global scope 
//  if(){
//     this area is block scope
//  }
// */

if(true){
    let a=10;
    const b=20;
    var c =30; 
    // c=30 // we can write in this way without var


    console.log("Inner value of a :(in block scope)",a)
    console.log("Inner value of b :(in block scope)",b)
}


// console.log(a)
// console.log(b)
console.log(c)


// for (let i =0; i < array.length; i++) {
//     const element = array[i];

// }

// console.log(a); // a is not defined because a is in other scope(out of scope)
// console.log(b); // b is not defined because b is in other scope(out of scope)
// console.log(c); // 30 c is a valid for other scope 
// // Timming 5:14:00



/*  +++++++++++++++++++ Nested Scope +++++++++++++++++ */
function one(){
    const username = "pushpendra"


    function two(){
        const website ="youtube"
        console.log(username);
    }


    // console.log(website)

    two()
}
 one() //pushpendra result of one

if(true){
    const username ="pushpendra"
    if(username=== "pushpendra"){
        const website =" youtube"
        console.log(username+website) // pushpendra youtube
    }

    // console.log(website); // this is wrong way
}
// console.log(username);  // this is also wrong here


// ++++++++++++++++++++++++++ Very important Example ++++++++++++++++++++++
console.log(addone(5));
function addone(value){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}

/*    ++++++++ Doubt full last code with some argument +++++++ */
// Timming 5:29:00