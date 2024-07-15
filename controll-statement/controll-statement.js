// if else statement
console.log("if else statement:");
let a = 4;
if (a == 0) console.log("zero");
else if (a > 0) console.log("positive");
else console.log("negetive");
let age = 12;
if (age >= 18) console.log("eligible for vote");
else console.log("not eligible for vote");
console.log("----------------------------------");

// nested if else statement
console.log("nested if else statement:");
let x = 2, y = 3, z = 4;
if (x > y) {
    if (x > z) console.log(x);
    else console.log(z);
} else {
    if (y > z) console.log(y);
    else console.log(z);
}
console.log("----------------------------------");


//switch case
let day = 6;
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Enter valid input");
}
let score = 86;
switch (true) {
    case score >= 90 && score <= 100:
        console.log("A");
        break;
    case score >= 80 && score < 90:
        console.log("B");
        break;
    default:
        console.log("Enter valid input");
}
console.log("----------------------------------");


// Tarnary operator
console.log("Tarnary operator:");
let p = 3;
console.log((p % 2 == 0) ? "even" : "odd");
let m = 2, n = 3, o = 4;
let greatest = (m > n) ? ((m > o) ? m : o) : ((n > o) ? n : o);
console.log(greatest);
console.log("----------------------------------");


//combining conditions
console.log("combining conditions:");
let year = 2024;
let isLeapYear = (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
console.log(isLeapYear);