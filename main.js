// JavaScript program for Rock, Paper, Scissors

// Declare Global Variables
let items = ['rock', 'paper', 'scissors'];


// The getComputerChoice function gets random choice between rock/paper/scissors for computer

function getComputerChoice() {
    var choice = items[Math.floor(Math.random()*items.length)];
    return choice;
}

// Create playRound function with (playerChoice, computerChoice) parameters

function playRound(playerChoice, computerChoice) {

    var result = 'win';
    console.log(`Player Choice : ${playerChoice}`);
    console.log(`Computer Choice : ${computerChoice}`);
    
    // Switch statement identifies player choice and uses if statements to determine result of game
        // Evaluate conditions when player choice = rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'rock') {
                result = 'tie';
            } else if (computerChoice === 'paper') {
                result = 'lose';
            } else {
                result = 'win';
            }
        }
        // Evaluate conditions when player choice = paper
        else if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                result = 'win';
            } else if (computerChoice === 'paper') {
                result = 'tie';
            } else {
                result = 'lose';
            }
        }
        // Evaluate conditions when player choice = scissors
        else {
            if (computerChoice === 'rock') {
                result = 'lose';
            } else if (computerChoice === 'paper') {
                result = 'win';
            } else {
                result = 'tie';
            }
        }

    console.log(`You ${result}!`);
    return result;
}


// Create game() function that uses for loop to playRound 5 times, keeps score, and reports winner at end of game

function game() {

    // Declare Player and Computer Scores
    var playerScore = 0;
    var computerScore = 0;

    // Loop through 5 games and add scores
    for (let i = 0; i < 5; i++) {
        // Prompt user to make player choice
        // let playerChoice = (prompt('Choose Rock, Paper, or Scissors')).toLowerCase();
        // Call getComputerChoice function to get computer choice
        let computerChoice = getComputerChoice();

        // Call result variable from playRound function
        let result = playRound(playerChoice, computerChoice);
        // Add to player/computer score depending on result
        if (result === 'win') {
            playerScore += 1;
        }
        else if (result === 'lose') {
            computerScore += 1;
        }
        
        // Print scores
        console.log(`Your score is: ${playerScore}`);
        console.log(`Computer score is: ${computerScore}`);
    }

    // Determine winner of the game
    if (playerScore > computerScore) {
        console.log(`You win the game! Score: ${playerScore} - ${computerScore}`);
    }
    else if (computerScore > playerScore) {
        console.log(`You lose the game! Score: ${playerScore} - ${computerScore}`);
    }
    else {
        console.log(`It's a draw! Score: ${playerScore} - ${computerScore}`);
    }
    
    return playerScore, computerScore;
}

// Play game
console.log(game())