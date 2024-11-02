// Problem-01: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
    { name: 'Siyam', age: 17, gender: 'male' },
    { name: 'Siham', age: 25, gender: 'male' },
    { name: 'Saima', age: 28, gender: 'female' },
];

function filterAndMapMales(people) {
    return people.filter(person => person.gender === 'male').map(person => person.name);
}

// console.log(filterAndMapMales(people));


// Problem-02:  Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5

const square = x => x * x;
const double = x => x * 2;
const addFive = x => x + 5;

const composedFunction = x => addFive(double(square(x)));

// console.log(composedFunction(4));


// Problem-03: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// console.log(isLeapYear(2023));


// Problem-04: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbers = [1, 2, 2, 3, 4, 4, 5];

function getUniqueValues(numbers) {
    return [...new Set(numbers)];
}

// console.log(getUniqueValues(numbers));


// Problem-05: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

const allNumbers = [10, 20, 30, 40, 50];

function findMaxValue(allNumbers) {
    return Math.max(...allNumbers);
}

// console.log(findMaxValue(allNumbers));

