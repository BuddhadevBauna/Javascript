// template literals
console.log("template literals:");
const name = 'Alice';
const age = 25;
const message = `Hello, ${name}. Is your age ${age}.`;
console.log(message);
const multiLineString = `This is a multi-line string. 
It spans across multiple lines
using template literals.`;
console.log(multiLineString);
console.log("-------------------------");

// destructuring
console.log("destructuring:");
const arr = [10, 20, 30, 40, 50];
const [a, b, ...rest] = arr;
console.log(a, b, rest);
const book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction'
};
const { title, author } = book;
console.log(`Title: ${title} & Author: ${author}`);
console.log("-------------------------");

// spread operator
console.log("spread operator:");
const newArr = [...arr, 6, 7]
console.log(newArr);
const newBook = {
    ...book,
    year: 1960,
}
console.log(newBook);
console.log("-------------------------");

// rest operator
console.log("rest operator:");
const sum = (...args) => {
    const res = args.reduce((prevValue, currentValue) => prevValue + currentValue);
    return res;
}
console.log(sum(1, 2, 3, 4, 5));
console.log("-------------------------");

// Default parameter
console.log("Default parameter:");
let product = (a, b = 3) => a * b;
console.log(product(2, 1));
console.log(product(2));
console.log("-------------------------");

// Enhanced object literals
console.log("Enhanced object literals:");
const name1 = 'John Doe';
const age1 = 30;
const person = {
    name1, // Property shorthand
    age1,  // Property shorthand
    greet() { // Method shorthand
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    incrementAge() { // Another method
        this.age += 1;
        console.log(`Happy Birthday! I am now ${this.age} years old.`);
    }
};
console.log(person);
person.greet();
person.incrementAge();

const propName1 = 'firstName';
const propName2 = 'lastName';
const value1 = 'Jane';
const value2 = 'Doe';
const person1 = {
    [propName1]: value1, // Computed property name
    [propName2]: value2, // Computed property name
};
console.log(person1);