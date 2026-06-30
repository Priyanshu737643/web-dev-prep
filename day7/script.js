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

//* Promisses - A promise is an object that represent the eventual completion or failure of an asyncronous operation

//? Promises States: Pending, Fullfiled, Rejected

const myPromise = new Promise((resolve, rejected) => {
    let success = true;
    if (success) {
        resolve("Data received successfully!");
    } else {
        rejected("Something went wrong!");
    }
})

// console.log(myPromise);

myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})


