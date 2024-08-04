// Class Defination
console.log("Class Defination:");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting = () => {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    updateAge = (newAge) => {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}
// instace create
const person = new Person("Buddhadev", 22);
console.log(person.greeting());
person.updateAge(23);
person.age = 25;
console.log(person.age);
console.log("---------------------");

//Class Inheritence
console.log("Class Inheritence:");
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
    greeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}
const student = new Student('Buddhadev', 22, 'S12345');
console.log(student.getStudentId());
console.log(student.greeting());
console.log("---------------------");

// Static Methods and Properties
console.log("Static Methods and Properties:");
class NewPerson {
    // Static method for a generic greeting
    static genericGreeting() {
        return 'Hello! This is a generic greeting.';
    }
}
// Call the static method without creating an instance
console.log(NewPerson.genericGreeting());

class NewStudent{
    // static property
    static studentCount = 0;
    constructor() {
        NewStudent.studentCount += 1;
    }
}
const student1 = new NewStudent();
console.log(`Total students: ${NewStudent.studentCount}`);
const student2 = new NewStudent();
console.log(`Total students: ${NewStudent.studentCount}`);
console.log("---------------------");

// Getters and Setters
console.log("Getters and Setters:");
class Person1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new Person1('Sakti', 'Jana');
console.log(person1.fullName);
person1.fullName = 'Barun Raj';
console.log(person1.fullName);
console.log("---------------------");

// Private Fields
console.log("Private Fields:");
class Account {
    #balance;//declare private feild
    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log('Withdrawal amount must be positive and less than or equal to balance.');
        }
    }
    getBalance() {
        return this.#balance;
    }
}
const account = new Account(100);
account.deposit(50);
account.withdraw(20);
console.log(`Final balance: ${account.getBalance()}`);
