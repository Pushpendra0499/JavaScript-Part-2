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
myArr[1]='shri ji';
// console.log(myArr)
// console.log(myArr.length)
// console.log(typeof myArr)

const MyHeros = ['Krishna','Bhola Baba','Ganpati Bappa','Nagraj'];
// console.log(MyHeros);
// console.log(MyHeros)
// console.log(MyHeros.length)
// console.log(typeof MyHeros)

// +++++++++++++  Array Mrthod (push,pop,unshift,shift) ++++++++++++
// MyHeros.push('Mukku')
// console.log(MyHeros);// one item add from end side of array

// MyHeros.pop();
// console.log(MyHeros) // one item delete from end side

// MyHeros.unshift('Radha rani');
// console.log(MyHeros); //0 add in starting in array

// MyHeros.shift()
// console.log(MyHeros) //  remove the starting element from the array

///+++++++++++++++ Includes Method +++++++++++++++++++++

// console.log(MyHeros.includes("Krishna")) // true
// console.log(MyHeros.indexOf('Bhola Baba'))  // 1
//++++++++++++ Join () +++++++++++++++
// const newArr =MyHeros.join()
// console.log(typeof newArr) // string

//++++++++++++++++++++ slice and splice ++++++++++++
// console.log(MyHeros.slice(0,2)) //[ 'Krishna', 'Bhola Baba' ]
// console.log("A",MyHeros) //A [ 'Krishna', 'Bhola Baba', 'Ganpati Bappa', 'Nagraj' ]

// console.log(MyHeros.splice(0,3)) //[ 'Krishna', 'Bhola Baba', 'Ganpati Bappa' ]
// console.log('B',MyHeros)


