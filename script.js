const choice = ["rock", "paper", "scissors"];
const winners = [];
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userChoice = document.querySelector('.userChoice');
const botChoice = document.querySelector('.botChoice');
const answer = document.querySelector('.answer');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const finalScore = document.querySelector('#finalScore');
const newGameBtn = document.querySelector('#newGame');

let scoreToReach = 5;
let isGameOver = false;

playerScore.innerHTML = 0;
computerScore.innerHTML = 0;

rock.addEventListener ('click', () => {
    playRound();
    if (!isGameOver) {
        endGame();
    }
});

paper.addEventListener ('click', () => {
    playRound();
    if (!isGameOver) {
        endGame();
    }
});

scissors.addEventListener ('click', () => {
    playRound();
    if (!isGameOver) {
        endGame();
    }
});

newGameBtn.addEventListener('click', function () {
    isGameOver = false;
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    answer.innerHTML = "";
    userChoice.innerHTML = "";
    botChoice.innerHTML = "";
    finalScore.innerHTML = "";
  });

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection,computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
 }  

function playerChoice() {
    if (rock) {
        return 'rock'
    } else if (paper) {
        return 'paper'
    } else if (scissors) {
        return 'scissors'
    }
}

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)]; 
}

function validateInput(choice) {
    return choice.includes(choice);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie";
    } else if  (
        (choiceP === 'rock' && choiceC === 'scissors') ||
        (choiceP === 'scissors' && choiceC === 'paper') ||
        (choiceP === 'paper' && choiceC === 'rock')
        ) {
        return 'Player'; 
    } else {
        return "Computer";
    }
}

function logWins(){
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    playerScore.innerHTML = (playerWins);
    computerScore.innerHTML = (computerWins);
}

function logRound(playerChoice, getComputerChoice, winner, round) {
    answer.innerHTML = (winner, `${winner}`);
    userChoice.innerHTML = (playerChoice, `${playerChoice}`);
    botChoice.innerHTML = (getComputerChoice, `${getComputerChoice}`);
}



function endGame() {
    if (playerScore === scoreToReach || computerScore === scoreToReach) {
      isGameOver = true;
      if (playerScore === scoreToReach) {
        finalScore.innerHTML = "You won the game! Yay!";
      } else if (computerScore === scoreToReach) {
        finalScore.innerHTML = "You lost the game. Maybe next time.";
      }
    }
  }



