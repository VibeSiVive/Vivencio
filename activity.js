// Import the 'readline' module, which allows interaction with the command line.
const readline = require('readline');

// Create a readline interface ('rl') for reading input from the user and displaying output.
const rl = readline.createInterface({
  input: process.stdin,   // Reads user input from the command line.
  output: process.stdout  // Displays program output to the command line.
});

// Ask the user to enter the firstNumber and execute a callback function when they do.
rl.question('Enter the firstNumber: ', (firstNumber) => {
    firstNumber =  parseInt(firstNumber)  // Convert the user's input to an integer.
    console.log(firstNumber)  // Display the parsed 'firstNumber' to the console.

    // Ask the user to enter the secondNumber and execute a callback function when they do.
    rl.question('Enter the secondNumber: ', (secondNumber) => {
        secondNumber =  parseInt(secondNumber)  // Convert the user's input to an integer.
        console.log(secondNumber)  // Display the parsed 'secondNumber' to the console.

        // Ask the user to enter an operator and execute a callback function when they do.
        rl.question('Equals: ', (num) => {
            // Check the operator entered by the user and perform the corresponding operation.
            if (num === '+') {
                console.log(firstNumber + secondNumber)  // Display the result of addition.
            }
            if (num === '-') {
                console.log(firstNumber - secondNumber)  // Display the result of subtraction.
            }
            if (num === '*') {
                console.log(firstNumber * secondNumber)  // Display the result of multiplication.
            }
            if (num === '/') {
                console.log(firstNumber / secondNumber)  // Display the result of division.
            }

            rl.close();  // Close the readline interface, ending the program.
        })
    })
})
