// Arithmatic operation
console.log("Arithmatic operation:");
console.log("Add:"+(3+5)+" subtract:"+(3-5)+" devide:"+(3/5)+" remainder:"+(3%5));
console.log('----------------');

// Asignment Operator
console.log("Asignment Operator:");
let a = 2;
a += 2;
console.log(a);
a -= 2;
console.log(a);
console.log('----------------');

// Comparison Operator
console.log("Comparison Operator:");
console.log("3 > 5:"+(3 > 5)+" 3 < 5:"+(3 < 5));
console.log("3 >= 5:"+(3 >= 5)+" 3 <= 5:"+(3 <= 5));
console.log("3 == 3: "+(3 == 3)+"  3 === '3': "+(3 === '3'));
console.log('----------------');

// Combining operator
console.log("Combining operator:");
console.log("3 > 5 || 4 < 5: "+(3 > 5 || 4 < 5));
console.log("3 > 5 && 4 < 5: "+(3 > 5 && 4 < 5));
console.log("!(3 > 5): "+!(3 > 5));
console.log('----------------');

// Ternary Operator
console.log("Ternary Operator:");
let x = 2;
console.log(x > 0 ? "Positive" : "Negetive");