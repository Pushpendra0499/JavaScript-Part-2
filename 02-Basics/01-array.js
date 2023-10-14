//array 
// () => Parentheses
// {} => Curly Braces (or Curly Brackets)
// [] => Square Brackets
// `` => Backticks (or Grave Accent)
// "" => Double Quotation Marks (or Double Quotes)
// '' => Single Quotation Marks (or Single Quotes)


/// go to mdn for Array for reading

const myArr =[0,1,2,3,4,5];
console.log(myArr); 
// timming 3:15:00

// const myHeros =['Krishna','Mahaveer','Ganpati Bappa','Nagraj']
// console.log(myHeros[2]);

// const myArr1 =new Array(1,2,3,4,5,6) // we can print the array in this way
// console.log(myArr1); //[ 1, 2, 3, 4, 5, 6 ] 

// but when we run  array in google console then we find a prototyp

///           +++++++++++ Array methods +++++++++++

// myArr.push(6);
// console.log(myArr)

// myArr.push(7);
// console.log(myArr)// one item add from end side of array

// myArr.pop();
// console.log(myArr) // one item delete from end side

// myArr.unshift(0)  // 0 add in starting in array
// myArr.unshift(9) // add 9 add in starting in array

// unshift method is not good for more(big aaray) elements Array

// myArr.shift() 
// console.log(myArr);// remove the starting element from the array

// console.log(myArr.includes(9)) //  result false if element is not present in array
// console.log(myArr.indexOf(0))  // 0
// console.log(myArr.indexOf(3))  // 3

const newArr =myArr.join();

// console.log(newArr); // 0,1,2,3,4,5,6  this is not array
// console.log(typeof newArr);  // o/p => string here change th type of array 

 ////////////////////// slice and splice //////////////
 console.log("A ",myArr); // o/p below A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 =myArr.slice(1,3) //3rd number is excluded
console.log(myn1); // [1,2]
console.log("B",myArr); // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 =myArr.splice(1,3) /////// manuplate the original array 
console.log("C",myArr);8
console.log(myn2)  //[ 1, 2, 3 ] result

