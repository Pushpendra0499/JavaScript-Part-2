// Promise to simulate an asynchronous task
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(() => {
    console.log("Promise One consumed");
});

// Another asynchronous task
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
});

promiseTwo.then(() => {
    console.log("Promise Two resolved");
});

// A promise with resolved and error cases
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Change this to false to trigger the error
        let error = true;
        if (!error) {
            resolve({ username: "mukku", email: "mukkuraj0499@gmail.com" });
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
});

promiseThree
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    })
    .finally(() => console.log("Promise Three: Either resolved or rejected"));

// Another promise with resolved and error cases
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Change this to false to trigger the error
        let error = false;
        if (!error) {
            resolve({ username: "JavaScript", password: "123343" });
        } else {
            reject('Error: JS went wrong');
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    })
    .finally(() => console.log("Promise Four: Either resolved or rejected"));

// Using async/await for promiseFive
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Change this to false to trigger the error
        let error = false;
        if (!error) {
            resolve({ username: "JavaScript", password: "123343" });
        } else {
            reject('Error: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

consumePromiseFive();

// Fetch data from an API using Promises
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.error("Error:", error));
