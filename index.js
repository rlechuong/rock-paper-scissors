const humanRock = document.querySelector("#rockButton");
const humanPaper = document.querySelector("#paperButton");
const humanScissors = document.querySelector("#scissorsButton");
const humanScoreText = document.querySelector(".humanScore");
const computerScoreText = document.querySelector(".computerScore");
const resultsList = document.querySelector(".roundResultsList");
const finalResultOutput = document.querySelector(".finalResult");

humanRock.addEventListener("click", () => playRound("Rock", getComputerChoice()));
humanPaper.addEventListener("click", () => playRound("Paper", getComputerChoice()));
humanScissors.addEventListener("click", () => playRound("Scissors", getComputerChoice()));

let round = 1;
let humanScore = 0;
let computerScore = 0;

// Write a function that randomly returns "rock", "paper", or "scissors".
function getComputerChoice() {
    let compChoiceNumber = Math.floor(Math.random() * 3);
    
    if (compChoiceNumber == 0) {
        return "Rock";
    }
    else if (compChoiceNumber == 1) {
        return "Paper";
    }
    else if (compChoiceNumber == 2) {
        return "Scissors";
    }
    else {
        return "Error With getComputerChoice() Function.";
    }
}

// Write a function that takes the user choice and returns it.
// function getHumanChoice() {

//     while (true) {
//         let userChoice = prompt("Rock, Paper, or Scissors?");

//         if (userChoice.toLowerCase() == "rock") {  
//             return "Rock";
//         }
//         else if (userChoice.toLowerCase() == "paper") {
//             return "Paper";
//         }
//         else if (userChoice.toLowerCase() == "scissors") {
//             return "Scissors";
//         }
//         else {
//             alert("Invalid Input");
//         }
//     }
// }

// Write a function that takes the human and computer player choices as arguments, plays a single round, 
// increments the round winner’s score, and logs a winner announcement.
function playRound(humanChoice, computerChoice) {

    if (round == 1) {
        resultsList.textContent = "";
        finalResultOutput.textContent = "";
    }

    const roundResultsText = document.createElement("li");

    if (humanScore < 5 && computerScore < 5) {
        if (humanChoice === computerChoice) {
            roundResultsText.textContent = `Round ${round}: Your ${humanChoice} Ties ${computerChoice}`;
        }
        else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            roundResultsText.textContent = `Round ${round}: Your ${humanChoice} Beats ${computerChoice}`;
            humanScore += 1;
        }
        else if (humanChoice === "Paper" && computerChoice === "Rock") {
            roundResultsText.textContent = `Round ${round}: Your ${humanChoice} Beats ${computerChoice}`;
            humanScore += 1;
        }
        else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            roundResultsText.textContent = `Round ${round}: Your ${humanChoice} Beats ${computerChoice}`;
            humanScore += 1;
        }
        else {
            roundResultsText.textContent = `Round ${round}: Your ${humanChoice} Loses To ${computerChoice}`;
            computerScore += 1;
        }

        resultsList.appendChild(roundResultsText);
        round += 1;
        humanScoreText.textContent = humanScore;
        computerScoreText.textContent = computerScore;
    }
    checkGameState();
}

function checkGameState() {
    if (humanScore == 5 || computerScore == 5) {

        humanScoreText.textContent = humanScore;
        computerScoreText.textContent = computerScore;

        if (humanScore > computerScore) {
            finalResultOutput.textContent = `You Win ${humanScore} To ${computerScore}`;
            alert(`You Win ${humanScore} To ${computerScore}`);
        }
        else if (computerScore > humanScore) {
            finalResultOutput.textContent = `You Lose ${humanScore} To ${computerScore}`;
            alert(`You Lose ${humanScore} To ${computerScore}`);
        }
   
        round = 1;
        humanScore = 0;
        computerScore = 0;
    }
}

// Write a function that calls plays 5 rounds, keeps track of the scores, and declares a winner at the end.
// function playGame() {

//     let humanScore = 0;
//     let computerScore = 0;
    
//     for (i = 1; i <= 5; i++) {
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();

//         let result = playRound(humanSelection, computerSelection);

//         if (result === 0) {
//             alert(`Round ${i}: Tie! ${humanSelection} Ties ${computerSelection}`);
//             alert(`Round ${i}: You: ${humanScore} | Computer: ${computerScore}`);
//         }
//         else if (result === 1) {
//             humanScore += 1;
//             alert(`Round ${i}: Win! ${humanSelection} Beats ${computerSelection}`);
//             alert(`Round ${i}: You: ${humanScore} | Computer: ${computerScore}`);
//         }
//         else if (result === -1) {
//             computerScore += 1;
//             alert(`Round ${i}: Loss. ${humanSelection} Loses To ${computerSelection}`);
//             alert(`Round ${i}: You: ${humanScore} | Computer: ${computerScore}`);
//         }
//         else {
//             alert(`Error With playGame() Function.`);
//         }
//     }

//     if (humanScore > computerScore) {
//         alert(`Final Result: You Win ${humanScore} To ${computerScore}`);
//     }
//     else if (humanScore === computerScore) {
//         alert(`Final Result: You Tie ${humanScore} To ${computerScore}`);
//     }
//     else if (humanScore < computerScore) {
//         alert(`Final Result: You Lose ${humanScore} To ${computerScore}`);
//     }
//     else {
//         alert(`Error With playGame() Function.`);
//     }
// }

// playGame()