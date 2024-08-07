// Basic
console.log("Basic:");
const outer = () => {
    let a = 2;
    const innner = () => a;
    return innner;
}
// Call the outer function and store the returned inner function
const fn = outer();
// Call the inner function and log the result
console.log("Valuue of a : ", fn());
// ----
const createCounter = () => {
    let counter = 0;
    // Return an object with two methods to interact with the counter
    return {
        increment: () => {
            counter++;
        },
        getValue: () => {
            return counter;
        }
    }
}
const myCounter = createCounter();
myCounter.increment();
console.log("Valuue of counter : ", myCounter.getValue());
// ----
const generateUniqueID = () => {
    let id = 0;
    return () => {
        id++;
        return id;
    }
}
const generateId = generateUniqueID();
console.log(generateId());
console.log(generateId());
// ----
function greet(userName) {
    return function () {
        return `Hello, ${userName}!`;
    };
}
const greetAlice = greet("Alice");
console.log(greetAlice());
console.log("---------------------------");

// Closures in Loop
console.log("Closures in Loop:");
const createFunctionArray = () => {
    let functionArray = [];
    for (let i = 0; i < 10; i++) {
        functionArray.push(
            // Use a closure to capture the current value of `i`
            ((i) => {
                return () => console.log(i);
            })(i) // Immediately invoke the function with the current `i`
        )
    }
    return functionArray;
}
const functions = createFunctionArray();
// Call each function to log its index
functions.forEach(fn => fn());
console.log("---------------------------");

// Module Pattern
console.log("Module Pattern:");
const createItemManager = () => {
    let items = [];
    return {
        addItem: (item) => {
            items.push(item);
            console.log(`Item ${item} added successfully in list.`);
        },
        removeItem: (item) => {
            let index = items.indexOf(item);
            if(index !== -1) {
                items.splice(index, 1);
                console.log(`Item ${item} remove successful from list.`);
            } else {
                console.log(`Item ${item} remove unsuccessful from list.`);
            }
        },
        listItems: () => {
            console.log("All list items:");
            items.forEach(item => console.log(item));
        }
    }
}
const itemManager = createItemManager();
itemManager.addItem("Apple");
itemManager.addItem("Banana");
itemManager.addItem("Orange");
itemManager.listItems();
itemManager.removeItem("Banana");
itemManager.listItems();
console.log("---------------------------");

// Memorization
console.log("Memorization:");
// To create a function that memorizes the result of another function,
// we can use a closure to store the results of previous computations. 
// This technique is known as memoization
function memoize(fn) {
    // Object to store results of previous computations
    const cache = {};

    return function(...args) {
        // Create a cache key based on the arguments
        const key = JSON.stringify(args);

        // Check if the result is already in the cache
        if (cache[key] !== undefined) {
            console.log(`Fetching from cache for arguments: ${args}`);
            return cache[key];
        }

        // Compute the result, store it in the cache, and return it
        const result = fn(...args);
        cache[key] = result;
        console.log(`Computing result for arguments: ${args}`);
        return result;
    };
}
// Example usage: memoizing a simple function
function add(a, b) {
    return a + b;
}
// Create a memoized version of the add function
const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));