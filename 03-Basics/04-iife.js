// IIFE (Immediately Invoked Function Expressions)


// function chai(){
//     console.log('DB CONNECTED')
// }()   // this will not run


(function chai(){
    console.log(`DB CONNECTED`);
})()  // DB CONNECTED

  // to remove pollution of global scope of presented varibles
//   ( () => {
//     console.log("DB Connected two");
//   })();

( () => {
    console.log("DB Connected two");
  })();
//  +++++++++++++++++++++++++++Doubtfull lecture

( (name) => {
    console.log("DB Connected two");
  })('pushpendra');

// name iife ???????
// Timming 5:55:00
