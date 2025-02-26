function getComputerChoice() {
    let compChoiceNumber = Math.floor(Math.random() * 3);

    if (compChoiceNumber === 0) {
        return "rock";
    }
    else if (compChoiceNumber === 1) {
        return "paper";
    }
    else if (compChoiceNumber === 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");

    return humanChoice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Tie! Both Chose ${humanChoice.toUpperCase()}`);
        }
        else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                console.log(`You Win! Rock Beats Scissors`);
                humanScore++
            }
            else if (computerChoice === "paper") {
                console.log(`You Lose! Paper Beats Rock`);
                computerScore++
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log(`You Win! Paper Beats Rock`);
                humanScore++
            }
            else if (computerChoice === "scissors") {
                console.log(`You Lose! Scissors Beats Rock`);
                computerScore++
            }
        }
        else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                console.log(`You Win! Scissors Beats Paper`);
                humanScore++
            }
            else if (computerChoice === "rock") {
                console.log(`You Lose! Rock Beats Paper`);
                computerScore++
            }
        }
    }

    for (i = 0; i <= 4; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (humanScore > computerScore) {
        console.log(`You Won! ${humanScore} to ${computerScore}`);
    }
    else if (computerScore > humanScore) {
        console.log(`You Lost! ${computerScore} to ${humanScore}`);
    }
    else if (computerScore === humanScore) {
        console.log(`Tie! ${humanScore} to ${computerScore}`);
    }
}

playGame()