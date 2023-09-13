const choice = ["rock", "paper", "scissors"];
const winners = [];
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// const btn = document.getElementById('game');
// btn.addEventListener ('click', () => {
//     // for (let i = 1; i <= 5; i++) {
//         playRound();
//     // }
//     logWins();
// });

rock.addEventListener ('click', () => {
    // for (let i = 1; i <= 5; i++) {
        playRound();
    // }
    logWins();
});

paper.addEventListener ('click', () => {
    // for (let i = 1; i <= 5; i++) {
        playRound();
    // }
    logWins();
});

scissors.addEventListener ('click', () => {
    // for (let i = 1; i <= 5; i++) {
        playRound();
    // }
    logWins();
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
    console.log('Results:');
    console.log('Player Wins:',playerWins);
    console.log('Computer Wins:',computerWins);
    console.log('Ties',ties);
}

function logRound(playerChoice, getComputerChoice, winner, round) {
    console.log('Round:', round);
    console.log('Player Chose:',playerChoice);
    console.log('Computer Chose:',getComputerChoice);
    console.log(winner, "Won the Round");
    console.log('--------------------------');

}





