// main for javaScript developer deep study of Objects and events
// singleton => litrals ki rth declare krte hain to singleton objects nhi bnta hai
// constractor se object banega to signleton hoga 

// Objects literas

// Object.create  => this is constractor method
// const Object ={}  // this is represntation of object

const mySym =Symbol("key1")


const jsUser ={
    name :'Pushpendra Kumar',
    "full name" :"Pushpendra Kumar", // we can not acces this value with dot'.'
    // mySym: "mykey1", // we can not declare symbol directly in this way
   [mySym] :"mykey1", // this is right way 
    age :18,
    email: "pushpendragoogle.com",
    ContactNo: 498454876547,
    isLoggedIn:false,
    lastLoginDays :["monday","saturday"]
}

// console.log(jsUser);
// console.log(jsUser.email); //  this is not right method to aacces the element of object
// console.log(jsUser["email"]) // this is good way to acces
// console.log(jsUser["full name"]);
// //  console.log(jsUser.mySym); //mykey1
// // console.log(typeof jsUser.mySym); // string
// console.log(jsUser[mySym]); // mykey1   right way


jsUser.email ="mukku3387@gmail.com"
// Object.freeze(jsUser) // no change after freeze the object
jsUser.email ="mukku3387263226.com"
// console.log(jsUser);


// +++++++++++++++++ add function in objects +++++++++++++++
jsUser.greeting =function(){
    console.log("hello JS User");
}

jsUser.greeting2 =function(){
    console.log(`hello JS User ,${this.name}`);
}


// if you can freeze the  object then firstly comment the freeze line than run code otherwise you find eror

// console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting()); // hello JS USer
console.log(jsUser.greeting2()); //hello JS User ,Pushpendra Kumar




