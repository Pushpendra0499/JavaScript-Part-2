
    //       ++++++++++++++++++++ way 1
    // setTimeout(function() {
    //    console.log("Pusshpendra kumar");
   // },1000)

   //++++++++++++++++++++++++++ way 2
   const sayMukku =function (){
    console.log("Pushpendra Bhaia");
   }

   setTimeout(sayMukku,1000) 

    const changeText =function(){
        document.querySelector('h1').
   innerHTML =" Mukku is best student in the class 12th";
    }

   //setTimeout(changeText,2000)  
  const changeMe = setTimeout(changeText,2000) 


document.querySelector('#stop').
addEventListener('click',function() {
    clearTimeout(changeMe)
    console.log("STOPPED")
})
 