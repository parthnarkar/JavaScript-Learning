const promiseOne = new Promise(function (resolve, reject) {
    //Do an ASYNC TAKS
    //eg: DB calls, cryptography, network

    setTimeout(function () {
        console.log('Async task is complete');
        resolve();      //now it is connected with .then
    }, 1000)

});

// .then() has direct connection with resolve
promiseOne.then(function () {
    console.log("Promise consumed");
})


//resolve and then 
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {

        //we can also pass parameters
        resolve({ username: "parthnarkar", email: "parth@gmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

//USAGE OF REJECT: reject works with catch()
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "parth", password: "123" })
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//this represents the chaining, the value return to first .then() is then used by second .then() because of chaining
//and the prevent error we use reject and .catch 
//by default finally is executed

const username = promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((myUsername) => {
    console.log(myUsername);
})
.catch(function (error) {
    console.log(error);
})
.finally(() => {
    console.log("The promise is either resolved or rejected")
})


const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        }
        else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');    
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: " , error)
//     }
// }
// getAllUsers();


fetch('https://api.github.com/users/parthnarkar')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error)
})
