const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const devide = (a, b) => {
    if(b !== 0) return a / b;
    else return "Cannot divide by zero";
}
const calculator = (a, b, operator) => operator(a, b);

// Export the functions using named exports
export {add, subtract, multiply, devide};

// Export calculator
export default calculator;