// test.js

// A simple function to add two numbers
function add(a, b) {
    return a + b;
}

// A simple function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// A simple function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// A simple function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Test the functions
console.log("Testing add function:");
console.log(add(2, 3)); // Expected output: 5
console.log(add(-1, -1)); // Expected output: -2

console.log("Testing subtract function:");
console.log(subtract(5, 3)); // Expected output: 2
console.log(subtract(10, 15)); // Expected output: -5

console.log("Testing multiply function:");
console.log(multiply(4, 5)); // Expected output: 20
console.log(multiply(0, 10)); // Expected output: 0

console.log("Testing divide function:");
console.log(divide(10, 2)); // Expected output: 5
try {
    console.log(divide(10, 0)); // Expected output: Error
} catch (error) {
    console.error(error.message);
}
