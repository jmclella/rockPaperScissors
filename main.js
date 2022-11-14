// JavaScript program for Rock, Paper, Scissors

// Declare Global Variables
let items = ['Rock', 'Paper', 'Scissors']


// The getComputerChoice function gets random choice between rock/paper/scissors for computer

function getComputerChoice() {
    var choice = items[Math.floor(Math.random()*items.length)];
    return choice
}

// Create playerChoice and computerChoice variables that will be used playRound function

let playerChoice = 'Rock'
playerChoice = playerChoice.toLowerCase();

let computerChoice = getComputerChoice()


// Create playRound function with (playerChoice, computerChoice) parameters

    // Return string that determines winner of the round ex: "You lose! Paper beats Rock"

// Create game() function that uses for loop to playRound 5 times, keeps score, and reports winner at end of game