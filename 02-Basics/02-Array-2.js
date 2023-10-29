// Timming 3:32:00

const marvel_heros = ["Thor","Ironman","Spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]) // flash this (push) method is not good practice

// ++++++++++++++++++ concat method +++++++++++++
// const allHeros =marvel_heros.concat(dc_heros)
// console.log(allHeros)
// console.log(allHeros[3]) // superman

// +++++++++++++++++++ Spread method +++++++++++++++++
// const allNewHeros=[...marvel_heros,...dc_heros]
// console.log(allNewHeros)//[ 'Thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]
// Note same result with concat and spread method "...arr1,..arr2"

// ++++++++++++++++++++++++  Flat ++++++++++++++++++++++
//-->(infinity is good for this method)

// const anotherArray =[1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const realAnotherArray =anotherArray.flat(Infinity) //flat infinty means full debth flating the given array
// console.log(realAnotherArray);//[ 1, 2, 3, 4, 5,6, 7, 6, 7, 4,5 ]

//++++++++++++++++++++++++++++++++ isArray,from
// console.log(Array.isArray("Pushpendra")) //false
// console.log(Array.from("Pushpendra"));// ['P', 'u', 's', 'h', 'p', 'e', 'n', 'd', 'r', 'a']

// console.log(Array.from({name:"Pushpendra"})); // [] empty Array

//+++++++++++++++++++++++++++ Make Empty Array by pass []
// const Name=['ram','mohan','radhe']
// // console.log(Name.length)
// Name.length=[] // we can make empty array (o length)
// console.log(Name.length) //0

//++++++++++++++++++++++++++++++++++++++++++

let score1 =100;
let score2 =200;
let score3= 300;

console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]

// Timming 3:45:00

// more study in these array topics
