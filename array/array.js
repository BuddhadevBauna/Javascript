// array creation and access
console.log("array creation and access:");
const arr = [1, 2, 3, 4, 5];
console.log("first : ", arr[0], " & last : ", arr[arr.length - 1]);
console.log("..................");

//array methods
console.log("array methods basic:");
const arr1 = [5, 4, 3, 2];
console.log("push:");
console.log(arr1.push(1));//return length after push element in the end
console.log(arr1);
console.log("pop:");
console.log(arr1.pop());//return poped element after remove from end
console.log(arr1);
console.log("shift:");
console.log(arr1.shift());//return poped element after remove from front
console.log(arr1);
console.log("unshift:");
console.log(arr1.unshift(5));//return length after push element in the front
console.log(arr1);
console.log("....");
console.log("array methods intermediate:");
console.log("map:");
const arr2 = [1, 2, 3, 4, 5];
const res = arr2.map(x => x * 2);
console.log(res);
console.log("filter:");
console.log(arr2.filter((x) => x % 2 == 0));
console.log("reduce:");
const res1 = arr2.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(res1);
console.log("some:");
console.log(arr2.some(x => x % 2 == 0));
console.log("..................");

// array iteration
console.log("array iteration:");
let arr3 = [1, 2, 3, 4, 5];
console.log("for loop:");
for(let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}
console.log("foreach loop:");
arr3.forEach((e) => console.log(e));
console.log("..................");

// multidimension array
console.log("multidimension array:");
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
console.log(matrix);
matrix.forEach(array => console.log(array));
console.log(matrix[0][0]);
console.log(matrix[matrix.length - 1][matrix[0].length - 1]);