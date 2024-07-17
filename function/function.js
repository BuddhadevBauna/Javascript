// function declaration
console.log("function declaration :");
function check(num) {
    console.log((num % 2 == 0) ? "even" : "odd");
}
check(3);
function square(num) {
    return num * num;
}
console.log(square(3));
console.log("..........................................");

// function expression
console.log("function expression:");
const max = function (num1, num2) {
    console.log("max value : "+Math.max(num1, num2));
}
max(2, 3);
const concat = function (str1, str2) {
    return str1 +" "+ str2;
}
console.log(concat("hi", "everyone!"));
console.log("..........................................");

// arrow function
console.log("arrow function:");
const arrow = (num1, num2) => num1 + num2;
console.log("sum : ", arrow(2, 3));
// const isCharExist = (str, char) => str.split('').includes(char);
// const isCharExist = (str, char) => str.indexOf(char) !== -1;
const isCharExist = (str, char) => {
    for(let i = 0; i < str.length; i++) {
        if(str[i] === char) return true;
    }
    return false;
};
console.log(isCharExist("hello", 'e'));
console.log("..........................................");

// parameters & default parameters
console.log("parameters & default parameters:");
const multiply = (num1, num2 = 2) => console.log(num1 * num2);
multiply(3);
const greeting = (pName, age = 12) => "hi " + pName + ". Is your age " + age + "?";
console.log(greeting("Suman"));
console.log("..........................................");

// heigher order function
console.log("heigher order function:");
function callFunctionNTimes(fun, n) {
    for(let i = 0; i < n; i++) {
        fun();
    }
}
const sayHello = () => console.log("Hello!");
callFunctionNTimes(sayHello, 3);
function apply(fun1, fun2, value) {
    const result = fun1(value);
    return fun2(result);
}
const double = x => x * 2;
const squareRoot = x => Math.sqrt(x);
console.log(apply(double, squareRoot, 3));