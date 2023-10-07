// const myNums = [1,2,3];

// const myTotal = myNums.reduce(fucntion (accumulator, currval) {
//     return accumulator + currval;
// }, 0)

// console.log(myTotal);

// const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (accumulator, currval) {
//     console.log(`acc: ${accumulator} and currval : ${currval}`);
//     return accumulator + currval;
// }, 0);  // here we can give 3 vakue or any number <element of arr

// console.log(myTotal);  ///6



/////////////// _+++++++++++++++++++++++ 
// 8:56:00

const shoppingCart =[
    {
        itemName:"js cource",
        price :2999
    },
    {
        itemName:"py cource",
        price :999
    },
    {
        itemName:"mobile dev cource",
        price :5999
    },
    {
        itemName:"data science cource",
        price :12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc +item.price,0 )
console.log(priceToPay)  //22996