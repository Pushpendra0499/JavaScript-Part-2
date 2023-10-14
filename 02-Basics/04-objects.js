//  const tinderUser =new object()


const tinderUser = {}

tinderUser.Id ="12344"
tinderUser.name = "sammy"
tinderUser.isLoggedIn =false

// console.log(tinderUser);

// const regularuser ={
//     email:"some@gmail.com",
//     fullName:{
//         userfullName:{
//             firstName: "pushpendra",
//             lastName: "Kumar"
//         }
//     }
// }
// console.log(regularuser.fullName.userfullName.lastName);

const obj1 = {1:"a",2: "b"}
const obj2 = {3:"c",2: "d"}
const obj4 = {5:"a", 6:"f"}


// const obj3 ={ obj1 ,obj2} // this is not good method to merge the object 
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'd', '3': 'c' } }
 

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3); // { '1': 'a', '2': 'd', '3': 'c' }


// const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3);

// const obj3 = Object.assign({}, obj1,obj2,obj4)

// const obj3 ={...obj1,...obj2,...obj4}
// console.log(obj3);

/////// when value databse se aati hai to below code likhte han

const users = [
    {
        id:1,
        email: "mukku@gmail.com"
    },
    {
        id:1,
        email: "mukku@gmail.com"
    },
    {
        id:1,
        email: "mukku@gmail.com"
    },
    {
        id:1,
        email: "mukku@gmail.com"
    }

]


users[1].email

// console.log(tinderUser); //{ Id: '12344', name: 'sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)); //[ 'Id', 'name', 'isLoggedIn' ] here we find the key of object(tinderUser)
console.log(Object.values(tinderUser));  //[ '12344', 'sammy', false ]
console.log(Object.entries(tinderUser)); //[ [ 'Id', '12344' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true show presentation of word

// Timming 4:21:00