const choice = ["rock", "paper", "scissors"];
const winners = [];

const btn = document.getElementById('game');
btn.addEventListener ('click', () => {
    for (let i = 1; i <= 5; i++) {
        playRound(i);
    }
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
    let input = prompt('Type Rock, Paper, Scissors');
    while(input == null) {
        input = prompt('Type Rock, Paper, Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while (check == false) {
        input = prompt("Type Rock, Paper, Scissors. Spelling needs to be exact, but capitalization doesn't matter");
        while(input == null) {
            input = prompt('Type Rock, Paper, Scissors');
        }
        input = input.toLowerCase()
        check = validateInput(input);
    }
    return input; 
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





