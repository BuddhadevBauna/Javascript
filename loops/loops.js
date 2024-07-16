// for loop
console.log("for loop:");
for(let i = 1; i <= 10; i++) {
    console.log(5+" * "+i+" = "+(5*i));
}
console.log("--------------------------");

// while loop
console.log("while loop:");
let i = 10;
while (i >= 1) {
    console.log(i--);
}
console.log("--------------------------");

// Do-While loop
console.log("Do-While loop:");
let j = 10;
do {
    console.log(j);
   j--; 
} while (j >= 1);
let num = 5;
let res = 1;
do {
    res *= num;
    num--;
} while(num > 1);
console.log("facctorial:"+res);
console.log("--------------------------");

// Nested loop
console.log("Nested loop:");
for(let i = 1; i <= 5; i++) {
    let row = "";
    for(let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}