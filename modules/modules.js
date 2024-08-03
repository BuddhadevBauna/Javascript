import double from "./double.js";
import person from "./person.js";
import { add, subtract, multiply, devide } from "./calculator.js";
import calculator from "./calculator.js";
import * as math from "./math.js";
import _ from "lodash";
import axios from "axios";

// ----------------
console.log(double(2));
console.log(person.greet());
console.log("------------------");

// ----------------
const res = calculator(6, 3, multiply);
console.log(res);
console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(devide(2, 3));
console.log("------------------");

// ------------------------
console.log(math.PI);
console.log(math.square(2));
console.log("------------------");

// Third-Party Modules use
const array = [1, 2, 3, 4, 5];
const reversedArray = _.reverse(array.slice());
console.log(reversedArray);
axios.get('https://dummyjson.com/products')
  .then(response => {
    const data = response.data;
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });



