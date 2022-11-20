// JavaScript program for Rock, Paper, Scissors


// Declare Global Variables
let items = ['rock', 'paper', 'scissors'];

// The getComputerChoice function gets random choice between rock/paper/scissors for computer

function getComputerChoice() {
    var choice = items[Math.floor(Math.random()*items.length)];
    return choice;
}

// Declare button variables
const buttons = document.querySelectorAll('#select');


// Every time a player choice is selected - run computerChoice() and game
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = (button.parentElement.getAttribute('class'));
        computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);
        checkResult(result, playerScore, computerScore);
        document.getElementById('player-score').textContent = playerScoreString;
        document.getElementById('computer-score').textContent = computerScoreString;
        console.log(playerScore, computerScore);
    })
})

let playerScoreContainer = document.querySelector('#player-score');
let playerScore = playerScoreContainer.textContent;
playerScore = parseInt(playerScore);
let computerScoreContainer = document.querySelector('#computer-score');
let computerScore = playerScoreContainer.textContent;
computerScore = parseInt(computerScore);

playerScoreString = playerScore.toString();
computerScoreString = computerScore.toString();

function checkWinner(playerScore, computerScore) {
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore === 5) {
            alert('Player wins!')
            playerScore = 0;
            computerScore = 0;
            return playerScore, computerScore;
        }
        else if (computerScore === 5) {
            alert('Computer wins!')
            playerScore = 0;
            computerScore = 0;
            return playerScore, computerScore;
        }
    }
}
    

// resultChecker Function
function checkResult(result) {
    if (result === 'tie') {
        return;
    } else if (result === 'win') {
        playerScore += 1;
        playerScoreString = playerScore.toString();
        computerScoreString = computerScore.toString();
    } else if (result === 'lose') {
        computerScore += 1;
        playerScoreString = playerScore.toString();
        computerScoreString = computerScore.toString();
    }
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
