const tinderUser ={}

tinderUser.Id ="123"
tinderUser.name ="sammy"
tinderUser.isLoggedIn =false

// console.log(tinderUser);

const regularuser ={
    email:"some@gmail.com",
    fullName:{
        userfullName:{
            firstName:"Pushpendra",
            lastName:"Kumar"
        }
    }
}

// console.log(regularuser.fullName.userfullName.lastName);

const obj1 ={1:"a",2:'b'}
const obj2 ={3:"c",4:"d"}
const obj4 ={5:"a",6:"f"}

// const obj3 ={obj1,obj2} // this is not good method 
// console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


// const obj3=Object.assign(obj1,obj2);
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(typeof obj3) //object

// const obj3 =Object.assign({},obj1,obj2,obj4)
// console.log(obj3)

// ++++++++++++++++ Spread Operator ++++++++++++++++
// with the help of spread Operator --. ...

// const obj3 ={...obj1, ...obj2,...obj4}
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'a', '6': 'f' }

// for when values are be taken from database

const users =[
    {
        id:1,
        email:"Mukku@gmail.com"
    },
    {
        id:2,
        email:"Mukkuraj@gmail.com"
    },
    {
        id:3,
        email:"mukkBhai@gmail.com"
    },
    {
        id:4,
        email:"pushpBhai@gmail.com"
    }
    
    ]
    
    // users[1].email // find error
    console.log(users[3].id) //  4
    // console.log(users[3].email)    // [index] =[3]
    
    // console.log(Object.keys(users)) //[ '0', '1', '2', '3' ]
    // console.log(Object.values(users))
    /*  there are values of users object
    { id: 1, email: 'Mukku@gmail.com' },
  { id: 2, email: 'Mukkuraj@gmail.com' },
  { id: 3, email: 'mukkBhai@gmail.com' },
  { id: 4, email: 'pushpBhai@gmail.com' }
    */
    
    console.log(Object.entries(users)) //  [ '0', { id: 1, email: 'Mukku@gmail.com' } ],

console.log(users.hasOwnProperty(3)); // true
console.log(users.hasOwnProperty(4)); // false this is check index

    






