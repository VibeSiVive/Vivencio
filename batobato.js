let userWeapons = ["rock", "paper", "scissors", "rock", "rock"]
let userScore = 0
let botScore = 0

function user(userWeapon) {
    let botWeapons = ["rock", "paper", "scissors"]
    let randum = Math.floor(Math.random() * botWeapons.length);
    let botWeapon = botWeapons[randum]
    console.log(userWeapon + " VS. " + botWeapon)

    if (userWeapon == botWeapon) {
    return "draw"

    } else if ((userWeapon == "rock" && botWeapon == "scissors") || (userWeapon == "paper" && botWeapon == "rock") || (userWeapon == "scissors" && botWeapon == "paper")) {
    userScore++
    return "user"

    } else {
    botScore++
    return "robot"
    }
}

for (let i = 0; i < 5; i++) {
    let userWeapon = userWeapons[i]
    let result = user(userWeapon)
    console.log("user " + (i + 1) + ": " + result + " wins!");
}

if (userScore > botScore) {
    console.log ("user won with " + userScore + " points.");

} else if (userScore < botScore) {
    console.log ("robot won with " + botScore + " points.");

} else {(userScore == botScore)
    console.log ("draw! both have " + userScore + " points");
}