let humanScore = 0;
let computerScore = 0;
let round = 1;
let newRound = false;

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

const rounds = document.querySelector("#rounds");
const humanScoreBox = document.querySelector("#humanScoreBox");
const computerScoreBox = document.querySelector("#computerScoreBox");

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

function playRound(humanChoice) {

    if (newRound) {
        rounds.textContent = "";
        newRound = false;
    }

    let computerChoice = getComputerChoice();
    let roundResult = document.createElement("div");

    if (humanChoice === computerChoice) {
        roundResult.textContent = `Round ${round}: Tie! Both Chose ${humanChoice.toUpperCase()}`
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            roundResult.textContent = `Round ${round}: You Win! Rock Beats Scissors`;
            humanScore++
        }
        else if (computerChoice === "paper") {
            roundResult.textContent = `Round ${round}: You Lose! Paper Beats Rock`;
            computerScore++
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            roundResult.textContent = `Round ${round}: You Win! Paper Beats Rock`;
            humanScore++
        }
        else if (computerChoice === "scissors") {
            roundResult.textContent = `Round ${round}: You Lose! Scissors Beats Rock`;
            computerScore++
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            roundResult.textContent = `Round ${round}: You Win! Scissors Beats Paper`;
            humanScore++
        }
        else if (computerChoice === "rock") {
            roundResult.textContent = `Round ${round}: You Lose! Rock Beats Paper`;
            computerScore++
        }
    }

    rounds.appendChild(roundResult);

    round++;
    humanScoreBox.textContent = humanScore;
    computerScoreBox.textContent = computerScore;

    if (computerScore === 5 || humanScore === 5) {

        let finalResult = document.createElement("div");

        if (humanScore === 5) {
            finalResult.textContent = `You Win! ${humanScore} to ${computerScore}`;
            rounds.appendChild(finalResult);
        }
        else {
            finalResult.textContent = `You Lose! ${computerScore} to ${humanScore}`;
            rounds.appendChild(finalResult);
         }

        humanScore = 0;
        computerScore = 0;
        round = 1;
        newRound = true;
    }
}

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     function playRound(humanChoice, computerChoice) {
//         if (humanChoice === computerChoice) {
//             console.log(`Tie! Both Chose ${humanChoice.toUpperCase()}`);
//         }
//         else if (humanChoice === "rock") {
//             if (computerChoice === "scissors") {
//                 console.log(`You Win! Rock Beats Scissors`);
//                 humanScore++
//             }
//             else if (computerChoice === "paper") {
//                 console.log(`You Lose! Paper Beats Rock`);
//                 computerScore++
//             }
//         }
//         else if (humanChoice === "paper") {
//             if (computerChoice === "rock") {
//                 console.log(`You Win! Paper Beats Rock`);
//                 humanScore++
//             }
//             else if (computerChoice === "scissors") {
//                 console.log(`You Lose! Scissors Beats Rock`);
//                 computerScore++
//             }
//         }
//         else if (humanChoice === "scissors") {
//             if (computerChoice === "paper") {
//                 console.log(`You Win! Scissors Beats Paper`);
//                 humanScore++
//             }
//             else if (computerChoice === "rock") {
//                 console.log(`You Lose! Rock Beats Paper`);
//                 computerScore++
//             }
//         }
//     }

//     for (i = 0; i <= 4; i++) {
//         playRound(getHumanChoice(), getComputerChoice())
//     }

//     if (humanScore > computerScore) {
//         console.log(`You Won! ${humanScore} to ${computerScore}`);
//     }
//     else if (computerScore > humanScore) {
//         console.log(`You Lost! ${computerScore} to ${humanScore}`);
//     }
//     else if (computerScore === humanScore) {
//         console.log(`Tie! ${humanScore} to ${computerScore}`);
//     }
// }

// playGame()