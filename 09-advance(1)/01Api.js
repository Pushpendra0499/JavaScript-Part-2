

    const requestUrl = 'https://api.github.com/users/hiteshchoudhary'

       const xhr = new XMLHttpRequest();
       xhr.open('GET',requestUrl)
    xhr.onreadystatechange = function(){
             console.log(xhr.readyState);
             if (xhr.readyState===4) {
                console.log(this.responseText);
             }

    } 

       xhr.send();
    //    console.log(xhr.readyState);
  