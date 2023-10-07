// console.log(new Date);

let myDate =new Date()
// console.log(myDate.toString());// Wed Sep 27 2023 11:58:41 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString()); //2023-09-27T11:58:41.375Z
// console.log(myDate.toDateString()); //Wed Sep 27 2023
// console.log(myDate.toLocaleString()); // 9/27/2023, 12:05:55 PM
// console.log(myDate.toJSON()); // 2023-09-27T12:06:41.877Z
// console.log(myDate.toTimeString()); // 12:07:56 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleDateString()) // 9/27/2023

// // timming 2:58:00
// console.log(typeof myDate); // date is object in javascript

// // let myCreateDate =new Date(2023, 0, 23)
// let myCreateDate =new Date(2023, 0, 23 ,5,3)

//let myCreateDate1 =new Date(Year, months, date ,hour,min,sec)

//console.log(myCreateDate.toDateString()); //Mon Jan 23 2023
// console.log(myCreateDate.toLocaleString()); //1/23/2023, 5:03:00 AM

/*  +++++++++++++++++++++++++++++++++++++
months and day start with 0 index
*/
// let myCreateDate = new Date("2023-01-14") // when date formate is yyyy-mm-dd months and day start with 1  index not 0
// console.log(myCreateDate.toLocaleString()); //1/14/2023, 12:00:00 AM


let myCreateDate = new Date("01-14-2023")
//console.log(myCreateDate);  //2023-01-14T00:00:00.000Z

// console.log(myCreateDate.toLocaleString()); //1/14/2023, 12:00:00 AM


 let mytimeStamp =Date.now();
//  console.log(mytimeStamp); //1695819846766

// // let mytimeStamp =Date.now();
// console.log(myCreateDate.getTime()); //1673654400000
// console.log(Date.now()); //1695820411330
// console.log(Math.floor(Date.now()/1000)); //1695820506

let newDate =new Date()
console.log(newDate); //2023-09-27T13:16:55.554Z

console.log(newDate.getDate()); //27
console.log(newDate.getDay()); // 3
console.log(newDate.getMonth()); //8
console.log(newDate.getHours());  //13

// in backticks `${newDate.getDay()} and the time ${}`

// +++++++++++++ main notes +++++++++++++++
newDate.toLocaleString('default',{
    weekday:"long",
    // timezone in dought
})

















