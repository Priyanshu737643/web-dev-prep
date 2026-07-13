//* Debouncing: A function that waits for the user to stop triggering some events for a specified amount of time before it executes.
//! Common Uses of Debouncing technique
//? Search suggestions, API calls, Form validations, saving drafts, Window Resize events

// debouncing
// function debounce(callback, delay) {
//     let timerId;
//     return function (...args) {
//         clearTimeout(timerId);  // Cancels the last timeout
//         timerId = setTimeout(() => {
//             callback(...args);
//         }, delay * 1000);
//     }
// }

// const search = (query) => {
//     console.log(`Searching for ${query}`);
// }

// const searchUsingDebounce = debounce(search, 2);

// searchUsingDebounce("He");
// searchUsingDebounce("Hello");
// searchUsingDebounce("Hello ");
// searchUsingDebounce("Hello World");


//* Throttling: It is a technique that runs at functions at most one every specified interval, no matter how many times the event fires.

// 10 seconds of interval for throttling

function throttle(callback, interval) {
    let lastCall = 0;
    return function (...args) {
        let currentTime = Date.now();
        if (currentTime - lastCall < interval) {
            return;
        }
        lastCall = currentTime;
        return callback(...args);
    }
}

function sendComment(message) {
    console.log(`Message: ${message}`);
}

const sendCommentUsingThrottling = throttle(sendComment, 1);

sendCommentUsingThrottling("Call out my name");
sendCommentUsingThrottling("Call out my name");
sendCommentUsingThrottling("Call out my name");
sendCommentUsingThrottling("Call out my name");
sendCommentUsingThrottling("Call out my name");
sendCommentUsingThrottling("Call out my name");
sendCommentUsingThrottling("Call out my name");
sendCommentUsingThrottling("Call out my name");
sendCommentUsingThrottling("Call out my name");
sendCommentUsingThrottling("Call out my name");

//! Homework
//* Proxy and Reflect Objects 


