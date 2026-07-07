//* Debouncing: A function that waits for the user to stop triggering some events for a specified amount of time before it executes.


// debouncing
function debounce(callback, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback(...args);
        }, delay * 1000);
    }
}

const search = (query) => {
    console.log(`Searching for ${query}`);
}

const searchUsingDebounce = debounce(search, 2);

searchUsingDebounce("He");
searchUsingDebounce("Hello");
searchUsingDebounce("Hello ");
searchUsingDebounce("Hello World");

