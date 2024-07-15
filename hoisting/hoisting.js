// Hoisting is the default behaviour of javascript where all the variable and function declarations are 
// moved on top but initialization and funtion expression are not.

console.log(x); // undefined (var is hoisted and initialized with undefined)
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// console.log(z); // ReferenceError: Cannot access 'z' before initialization

var x = 2;
let y = 3;
const z = 4;

console.log(x); // 2
console.log(y); // 3
console.log(z); // 4

{
    let p;
    console.log(p);
    p = 3;
    console.log(p);
}


{
    // TDZ starts
    // b is hoisted but uninitialized
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization

    // TDZ ends
    let b = 10;

    console.log(b); // 10
}

f();
function f() {
    console.log("hello")
}

hi();
var hi = () => {
    console.log("name");
}