// JavaScript program to calculate the factorial of a number

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Testing the factorial function
console.log(factorial(5));  // Expected output: 120
console.log(factorial(7));  // Expected output: 5040
