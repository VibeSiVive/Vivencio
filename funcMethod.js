// Array of weapon choices
const weapons = ["rock", "paper", "scissors", "rock", "rock"];

// Function to get the robot's random choice
function getRobotChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
return weapons[randomIndex];
}

// Function to determine the winner of a single round
function determineWinner(userChoice, robotChoice) {
    if (userChoice === robotChoice) {
    return "It's a draw!";
    } 
    else if ((userChoice === "rock" && robotChoice === "scissors") || (userChoice === "paper" && robotChoice === "rock") ||(userChoice === "scissors" && robotChoice === "paper")) {
    return "You win!";
    } 
    else {
    return "Robot wins!";
    }
}


let userScore = 0;
let robotScore = 0;

function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
    const userChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();

    if (!weapons.includes(userChoice)) {
    alert("Invalid choice. Please choose rock, paper, or scissors.");
    i--; // Decrement i to repeat this round
    continue;
    }
    const robotChoice = getRobotChoice();
    alert(`Robot chose: ${robotChoice}`);
    const result = determineWinner(userChoice, robotChoice);
    alert(result);

    if (result === "You win!") {
    userScore++;   
    } 
    else if (result === "Robot wins!") {
    robotScore++;
    }
}



// Determine the overall winner
let winnerMessage = "";
    if (userScore > robotScore) {
    winnerMessage = `You won with ${userScore} points!`;
    } 
    else if (robotScore > userScore) {
    winnerMessage = `Robot won with ${robotScore} points!`;
    } 
    else {
    winnerMessage = "It's a tie!";
    }

    alert(winnerMessage);
}

playGame(5);