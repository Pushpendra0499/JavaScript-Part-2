// for of

// ["" ,"",""] ==> this is array representation
// [{},{},{}]  ==> this is object representation


// const arr =[1,2,3,4,5]
// for (const num of object) {   // ye loop object pe nhi lgta   sika mtlb kis cheej pe loop lagega
// }

// for(const num of arr){
//     // console.log(num);
// }

// const greetings ="Hello World"
// for (const greet of greetings) {
    
//     console.log(`Each char is ${greet}`);
// }



//Maps
const map =new Map()
map.set('IN',"India")
map.set('USA',"United of America")
map.set('Fr',"French")
// map.set('IN',"India") // this will not retain

// map are knowen  for unique values
// map's oreder is not for changeable
// console.log(map);


// for (const key of map) {
//     console.log(key); //IN USA Fr // this is will print attachment keys with value
// }

for (const [key,value] of map) {
   // console.log(key,':-',value); // here output is only keys
}

// Timing 8:01:00

const myObject ={
    game1 :'NFS',
     game2 : 'Spiderman'
}


// for (const [key,value] of myObject) {
//     console.log(key, ':-',value);
// }