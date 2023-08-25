let playerScore = 0
let computerScore = 0
let roundWinner = ''

function getComputerChoice() {
    let choice = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor(Math.random() * choice.length);
    console.log(choice[random]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    } if (
       (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
       (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
       (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++
        roundWinner = 'Player'
    } if  (
       (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') ||
       (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
       (playerSelection === 'ROCK' && computerSelection === 'PAPER')
    ) {
        computerScore++
        roundWinner = 'Computer'
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
