// Basic
// use try-catch
const throwError = () => {
    throw new Error("This is an error.");
}
try {
    throwError();
} catch (error) {
    console.log(error.message);
}
// handle error if occured
const devide = (a, b) => {
    if (b == 0) throw new Error("Denominator can't be 0.");
    return a / b;
}
try {
    const res = devide(3, 0);
    console.log(res);
} catch (error) {
    console.log(error.message);
}
//finally block use
function exampleFunction() {
    try {
        throw new Error('An intentional error occurred');
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log('Inside finally block: This will execute regardless of whether an error occurred.');
    }
}
exampleFunction();
console.log("------------------");

// Custom error object
class ValidationError extends Error {
    constructor(message) {
        // Call the parent class constructor with the error message
        super(message);
    }
}
const validateUserInput = (name) => {
    try {
        if (!name || typeof (name) !== 'string' || name.trim() === '') {
            throw new ValidationError("username not not valid.");
        } else {
            console.log(name);
        }
    } catch (error) {
        console.log(error.message);
    }
}
validateUserInput("B");

// Error handling in promises
// promise that randomly rsolve or reject
const randomPromise = () => {
    return new Promise((resolve, reject) => {
        const randomNum = Math.floor((Math.random() * 10) + 1);
        const isSucess = randomNum > 5;
        setTimeout(() => {
            if (isSucess) resolve("Promise resolved sucessfully.");
            else reject(new Error("Promise rejected."));
        }, 1000);
    })
};
// handle promise that randomly rsolve or reject by then()-catch()
randomPromise()
    .then(message => console.log(message))
    .catch(error => console.log(error.message));
// handle promise that randomly rsolve or reject by try-catch
async function handleRandomPromise() {
    try {
        const response = await randomPromise();
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
}
handleRandomPromise();