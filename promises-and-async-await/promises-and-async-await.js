// Basic promise
const resolvePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise resolved");
    }, 1000)
});
resolvePromise.then((message) => {
    console.log(message);
});
const rejectPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise rejected");
    }, 1100)
});
rejectPromise
    .then((message) => {
        console.log(message);
        console.log("--------------------------");
    })
    .catch((error) => {
        console.log(error);
        console.log("--------------------------");
    });

// Chaining Promises
function fetchData(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}
fetchData('Fetching data from server: Request 1', 1200)
    .then(() => fetchData('Processing data from server: Request 2', 100))
    .then(() => fetchData('Preparing response: Request 3', 100))
    .then(() => fetchData('Finalizing and sending response: Request 4', 100))
    .then(() => {
        console.log('All requests completed!');
        console.log("-----------------------");
    })
    .catch((error) => {
        console.error('An error occurred:', error);
        console.log("-----------------------");
    });



// Use async-await
function fetchValue(delay, shouldReject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return shouldReject ? reject('Failed to fetch data') : resolve('Data fetched successfully');
        }, delay);
    });
}
const asyncFunction = async () => {
    try {
        const data = await fetchValue(1600, true);
        console.log(data);
        console.log("-----------------------");
    } catch (error) {
        console.error(error);
        console.log("-----------------------");
    }
}
asyncFunction();

// Fetch data from api
// using then-catch
function fetchDataWithPromises() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
            console.log("----------------------");
        });
}
fetchDataWithPromises();
// using try-catch
const fetchDataWithAsyncAwait = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        if (response.ok !== true) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        console.log("----------------------");
    }
}
fetchDataWithAsyncAwait();

// concurrent promises
function fetchData1(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}
const promise1 = fetchData1('Data from API 1', 2000);
const promise2 = fetchData1('Data from API 2', 3000);
const promise3 = fetchData1('Data from API 3', 2500);
//all
Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log('All promises resolved:', values);
        console.log("----------------------");
    })
    .catch((error) => {
        console.error('One of the promises rejected:', error);
        console.log("----------------------");
    });

//race
Promise.race([promise1, promise2, promise3])
    .then((value) => {
        console.log('First promise resolved:', value);
    })
    .catch((error) => {
        console.error('The first promise to reject did so with:', error);
    });