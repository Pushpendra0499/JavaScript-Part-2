const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log("promise consumed");
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("async 2 resolve");
});

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "mukku", email: "mukkuraj0499@gmail.com" });
    }, 1000);
});

promiseThree.then(function (user) {
    console.log(user);
}).catch(function (error) {
    console.error("An error occurred:", error);
});

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false; // Change this to false to resolve the promise
        if (!error) {
            resolve({ username: "Pushpedra ", password: "123343" });
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username); // Handle the username within the promise chain
    })
    .catch(function(error){
        console.log(error);
    }).finally(()=> console.log("The promise is  either resolve or reject"))


    const promiseFive = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let error = false; // Change this to false to resolve the promise
            if (!error) {
                resolve({ username: "JavaScript", password: "123343" });
            } else {
                reject('Error: JS went wrong');
            }
        }, 1000);
    });

    async function  consumePromiseFive() {
        try{
            const response = await promiseFive
            console.log(response);
        }catch(error){
            console.log(error);
        }
       
    }

    consumePromiseFive()
    // 6:10********* very important