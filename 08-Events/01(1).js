
//   document.getElementById('owl').onclick= function(){
//       alert("owl clicked")
//   }


     // attachEvent()
// jQuery ==> on eventlistener
//Timming 3:37:00
// type ,timestamp, defaultPrevented
// target, toElement,srcElement,currentTarget,
//cliientX, clientY,screenX, screenY
// altkey, ctrlkey, shiftkey,keyCode

  document.getElementById('images').addEventListener('click',function(e){
   console.log("clicked inside the ul");
},false)


// false ==> this is event bubbling 
                 // true==> capturing mode

  document.getElementById('owl').addEventListener('click',function(e){
   // alert("owl clicked again") 
   console.log("owl clicked");
   e.stopPropagation()
},false) 

document.getElementById('google').addEventListener
('click',function(e) {
   e.preventDefault(); 
   e.stopPropagation()

   console.log("google clicked");
},false)


