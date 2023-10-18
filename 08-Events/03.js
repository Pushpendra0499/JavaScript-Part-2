const sayDate = function (str){
    console.log(str,Date.now()); 
}
   //setInterval(sayDate,1000,"hello Mukku")
    
    const intervalId = setInterval(sayDate,1000,"hello")
clearInterval(intervalId)