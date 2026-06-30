//* Immediately Invoked Function Expression

// (function () {
//   console.log("This function runs immediately");
// })();

//* Callback function

// function greet(uname, callback) {
//     console.log("Hello", uname);
//     callback();
// }
// function done() {
//     console.log("Greeting is done");
// }
// greet("Ajay", done);

//* Callback Hell

// loginUser(function (user) {
//     getProfile(user.id, function (profile) {
//         getPosts(profile.id, function (posts) {
//             console.log(posts);
//       })
//   });
// });

// getUser(function (user) {
//     getOrders(user.id, function(order) {
//         getOrderDetails(order[0].id, function (details) {
//             getOrderStatus(details.paymentID, function (status) {
//                 console.log(status);
//             })
//         })
//     })
// })

//? Problems:
//? 1. Code becomes harder to read
//? 2. Harder to debug
//? 3. Harder to maintain
//? 4. Error handling becomes messy
//? 5. Nested structure keeps growing
//? Solution = Promisses

//* Promises - A promise is an object that represent the eventual completion or failure of an asyncronous operation

//? Promises States: Pending, Fullfilled, Rejected

// const myPromise = new Promise((resolve, rejected) => {
//     let success = true;
//     if (success) {
//         resolve("Data received successfully!");
//     } else {
//         rejected("Something went wrong!");
//     }
// })

// // console.log(myPromise);

// myPromise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

// const download = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Download Complete!");
//   }, 5000);
// });

// download.then((data) => {
//   console.log(data);
// });

//* ---------------------------------------------

//? Using Callback hell
// loginUser(function (user) {
//     getProfile(user.id, function (profile) {
//         getPosts(profile.id, function (posts) {
//             console.log(posts);
//       })
//   });
// });

//? Using Promises
//? Promise chaining
// loginUser()
//     .then((user) => { getProfile(user.id) })
//     .then((profile) => { getPosts(profile.id) })
//     .then((posts) => console.log(posts))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("Closing Promise"));

//* ---------------------------------------------

// Promise.resolve("This has been resolved")
//     .then(console.log);

// Promise.reject("Wrong Password").catch(console.log);

//? Promise.all - Runs multiple promises simultaneously
// const p1 = Promise.resolve("A");
// const p2 = Promise.resolve("B");
// const p3 = Promise.resolve("C");

// Promise.all([p1, p2, p3])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => { console.log(`Error: ${error}`); });

//? Promise.race - returns whichever Promise settles first (resolve or reject)
// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("First")
//     }, 3000);
// });

// const p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Second");
//   }, 2000);
// });

// Promise.race([p1, p2])
//     .then(console.log);

//? Promise.allSettled - waits for every promise, regardless of success or failure
// Promise.allSettled([
//     Promise.resolve("A"),
//     Promise.reject("Error")
// ])
//     .then(console.log);

//? Promise.any - returns the first fullfilled Promise, unless all promises are rejected
// Promise.any([
//     Promise.reject("Error"),
//     Promise.resolve("B"),
//     Promise.resolve("A")
// ])
//     .then(console.log);



//* Fetching API

// const title = document.querySelector('#postTitle');
// const id = document.querySelector('#postId');
// const body = document.querySelector('#postBody');
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(res => res.json())
//     .then(post => {
//         title.innerText = post.title;
//         id.innerText = post.id;
//         body.innerText = post.body;
//     })
//     .catch(error => {
//         console.log("jsonplaceholder.typecode.com is not responding!\nError:", error);
//     })



//* Higher Order Function (HOF)
//? 1. It Accepts another function as an argument
//? 2. It returns another function

// function greetA() {
//   console.log("Hello A");
// }
// function greetB() {
//   console.log("Hello B");
// }
// function greetC() {
//   console.log("Hello C");
// }


// function greet(uname, callback) {  //? HOF
//     console.log("Hello", uname);
//     callback();
// }
// function done() {  //? Callback Function
//     console.log("Greeting Completed!");
// }

// greet("A", done);


//? Function that accepts another function
// function calculate(num1, num2, operation) {  //? HOF
//     return operation(num1, num2);
// }
// function add(x, y) {  //? Callback Function
//     return x + y;
// }
// function mul(x, y) {  //? Callback Function
//   return x * y;
// }
// console.log(calculate(4, 5, add));
// console.log(calculate(4, 5, mul));

//? Function returning another function
function multiply(multiplier) {
    return function (num) {
        return num * multiplier  //? num = 10  |  multiplier = 2
    }
}
const double = multiply(2);
console.log(double(10));  //? 20

