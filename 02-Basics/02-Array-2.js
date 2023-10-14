// Timming 3:32:00

const marvel_heros = ["Thor","Ironman","Spiderman"];
const dc_heros = ["superman","flash","batman"];

marvel_heros.push(dc_heros);

// console.log(marvel_heros); //[ 'Thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);// flash  push method very bad syntax


const allHeros = marvel_heros.concat(dc_heros) // add marvel Array with dc heros array
console.log(allHeros) //[ 'Thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]
console.log(allHeros[3]); //superman


// // +++++++++++++++  spread method is most prefer ++++++++++++
// const allNewHeros = [...marvel_heros,...dc_heros]
// console.log(allNewHeros); //[ 'Thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]
// same result with concat and spread method "...Arr1,...Arr2"

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const realAnotherArray =anotherArray.flat(Infinity) // flat infinty means full debth flating the given array
// console.log(realAnotherArray);// [1,2,3,4,5,6,7,6,7,4,5]



console.log((Array.isArray("pushpendra"))); // false
console.log(Array.from("pushpendra"));  //['p', 'u', 's', 'h', 'p', 'e', 'n', 'd', 'r', 'a']
console.log(Array.from({name:"pushpendra"})); // [] empty array


let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]

// Timming 3:45:00

// more study in these array topics
