// Variable declaration
console.log("Variable :");
var a = 3;
let b = "Hello";
console.log(a, b);
console.log(".....................");

// Constant declaration
console.log("Constant :");
const c = false;
console.log(c);
console.log(".....................");

// Data types
console.log("Datatypes :");
let p = 3;             // Number
let q = "Hello";       // String
let r = true;          // Boolean

let obj = {
    x: p,
    y: q,
    z: r
};
let arr = [p, q, r];   // Array containing different data types

console.log(typeof(p) + ":" + p); // Number:3
console.log(typeof(q) + ":" + q); // String:Hello
console.log(typeof(r) + ":" + r); // Boolean:true
console.log(typeof(obj) + ":" + JSON.stringify(obj)); // Object in JSON format
console.log(typeof(arr) + ":" + JSON.stringify(arr)); // Array in JSON format
console.log(".....................");

// Understanding variables
var u;
console.log(u); // undefined
u = 4;
console.log(u); // 4
let v;
console.log(v); // undefined
v = 5;
console.log(v); // 5

// Understanding const
const w = 3;
console.log(w); // 3
// The following line will cause an error because w is a constant
// w = 4; // Uncommenting this will throw a TypeError
// console.log(w);