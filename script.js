
function game() {
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    //  if (playerSelection.toLowerCase() === computerSelection) {
    //     return "Tie";
    //  } if  (
    //     (playerSelection.toLowerCase() === 'ROCK' && computerSelection === 'SCISSORS') ||
    //     (playerSelection.toLowerCase() === 'SCISSORS' && computerSelection === 'PAPER') ||
    //     (playerSelection.toLowerCase() === 'PAPER' && computerSelection === 'ROCK')
    //  ) {
    //     //  playerScore++
    //    return 'Player'
    //  } if  (
    //     (playerSelection.toLowerCase() === 'SCISSORS' && computerSelection === 'ROCK') ||
    //     (playerSelection.toLowerCase() === 'PAPER' && computerSelection === 'SCISSORS') ||
    //     (playerSelection.toLowerCase() === 'ROCK' && computerSelection === 'PAPER')
    //  ) {
    //     //  computerScore++
    //     return 'Computer'
    //  }
 }  

function playerChoice() {
    let input = prompt('Type Rock, Paper, Scissors');
    while(input == null) {
        input = prompt('Type Rock, Paper, Scissors');
    }
    input = input.toLowerCase();
}

const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)]; 
}

game();





