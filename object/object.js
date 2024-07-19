// object creation & access
console.log("object creation & access:");
const book = {
    title: "A",
    author: "B",
    year: 2012,
}
console.log(book.title, book.author, book.year);
console.table(book);
console.log("--------------------------------------");

// object methods and this keyword
console.log("object methods and this keyword:");
function getBookDetails() {
    return "title: " + this.title + " author: " + this.author;
}
let getBookDetails1 = () => {
    // arrow function fn does not have its own this context and 
    // it cannot access the title and author properties of the book1 object directly.
    return "title: " + book1.title + " author: " + book1.author;
}
let updateYear = (year) => {
    book1.year = year
}
const book1 = {
    title: "A",
    author: "B",
    year: 2012,
    fn1: getBookDetails,
    fn2: function () {
        return "title: " + this.title + " author: " + this.author;
    },
    fn3: () => "title: " + book1.title + " author: " + book1.author,
    fn4: getBookDetails1,
    fn5: updateYear
}
console.log(book1.fn1());
console.log(book1.fn2());
console.log(book1.fn3());
console.log(book1.fn4());
console.table(book1);
book1.fn5(2020);
console.table(book1);
console.log(book1)
console.log("--------------------------------------");

// nested object
console.log("nested object:");
const library = {
    name: "Central Library",
    books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
    ]
};
console.log(library);
console.log("Library Name:", library.name);
console.log("Book Titles:");
library.books.forEach(book => {
    console.log(book.title);
});
console.log("--------------------------------------");

// object iteration
console.log("object iteration:");
const book2 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Novel"
};
console.log("for...in use:");
for (const property in book2) {
    console.log(`${property}: ${book2[property]}`);
}
console.log("..........");
console.log("for...of use:");
for (const [key, value] of Object.entries(book2)) {
    console.log(`${key}: ${value}`);
}
console.log("..........");
for (const key of Object.keys(book2)) {
    console.log(`${key}: ${book2[key]}`); // Here, key is a variable
}
//Log all entries
console.log("Keys:", Object.entries(book2));
// Log all keys
console.log("Keys:", Object.keys(book2));
// Log all values
console.log("Values:", Object.values(book2));