// Timming 8:13:00
const coding = ["js","ruby","java","python","c++"]

// coding.forEach( function(item){
//     console.log(item) // js ruby java python cpp
// })


// Arrow function
// coding.forEach( (item) => {
//     console.log(item) // same result
// } )

// function printMe(item){
// console.log(item)
// }

// coding.forEach(printMe)


// coding.forEach( (item,index,arr) =>{
//     console.log(item,index,arr) //c++ 4 [ 'js', 'ruby', 'java', 'python', 'c++' ]
// })


const myCoding =[
    {
        languageName :"javasscript",
        languageFileName :"js"
    },
    {
        languageName :"Java",
        languageFileName :"Java"
    },
    {
        languageName :"python",
        languageFileName :"py"
    }
]


myCoding.forEach( (item) => {
    console.log(item.languageName)  // javaSript java ,python
})