// Prompt the user for input
let userInput = console.log("Please enter something:");

// Check the user's input
if (userInput) {
  // If the user entered something (not an empty string or canceled the prompt)
  console.log("You entered: " + userInput);
} else {
  // If the user entered nothing (pressed Cancel) or an empty string
  console.log("You did not enter anything.");
}
