//Timming 8:24:29
//const coding = ["js","ruby","java","python","c++"]


// const values = coding.forEach( (item) =>{
//     console.log(item);
    
// })
// console.log(values) // undefined


// const values = coding.forEach( (item) =>{
//    // console.log(item);
//     return item;
    
// })
// console.log(values)  // undefined 



// const myNums =[1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter((num) => num>4)
// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]


//+++++++++++++++++++++++++++++++++++++++++++++++++
// const newNums = myNums.filter((num) => {
//    return num > 4   // bina return ke empty array print hoga
//    // scope ke sath retrun use krna hi padega  ==> []
// })

// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ] ab shi hai


// +++++++++++++++++++++++++++++ By foreach loop+++++++++++++++
// const newNums = myNums.filter((num) => {
//    return num > 4   
// })

// const newNums =[]

// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
//     // else{
//     //     console.log("Found Error")
//     // }
// });

// console.log(newNums);

/* Output
Found Error
Found Error
Found Error
Found Error
[ 5, 6, 7, 8, 9, 10 ]
*/





//++++++++++++++++++++++++++++++++++++++++++

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userBooks = books.filter( (bk) => bk.genre === 'History')
// console.log(userBooks)

//  let userBooks =books.filter( (bk) => {bk.publish >=2000})
//   console.log(userBooks); // [] because we open block scope

//  let userBooks =books.filter( (bk) => {
//   return bk.publish >=2000
// })
//   console.log(userBooks); // print books five and eight

//  let userBooks =books.filter( (bk) => {
//   return bk.publish >=1995 && bk.genre === "History"
// })
//   console.log(userBooks); // print book three 


 let userBooks =books.filter( (bk) => {
  return bk.publish >=1995 && bk.genre === "Science"
})
  console.log(userBooks); // print books five and Eight





  