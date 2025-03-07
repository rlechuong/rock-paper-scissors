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

const humanScoreBox = document.querySelector("#humanScoreBox");
const computerScoreBox = document.querySelector("#computerScoreBox");
const rounds = document.querySelector("#rounds");

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
        roundResult.textContent = `Round ${round}: Tie! Both Chose ${humanChoice.toUpperCase()}`;
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            roundResult.textContent = `Round ${round}: You Win! Rock Beats Scissors`;
            roundResult.style.color = "#006600";
            humanScore++
        }
        else if (computerChoice === "paper") {
            roundResult.textContent = `Round ${round}: You Lose! Paper Beats Rock`;
            roundResult.style.color = "#B30000";
            computerScore++
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            roundResult.textContent = `Round ${round}: You Win! Paper Beats Rock`;
            roundResult.style.color = "#006600";
            humanScore++
        }
        else if (computerChoice === "scissors") {
            roundResult.textContent = `Round ${round}: You Lose! Scissors Beats Paper`;
            roundResult.style.color = "#B30000";
            computerScore++
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            roundResult.textContent = `Round ${round}: You Win! Scissors Beats Paper`;
            roundResult.style.color = "#006600";
            humanScore++
        }
        else if (computerChoice === "rock") {
            roundResult.textContent = `Round ${round}: You Lose! Rock Beats Scissors`;
            roundResult.style.color = "#B30000";
            computerScore++
        }
    }

    rounds.appendChild(roundResult);
    humanScoreBox.textContent = humanScore;
    computerScoreBox.textContent = computerScore;
    round++;
    
    if (computerScore === 5 || humanScore === 5) {

        let lineBreak = document.createElement("br");
        let finalResult = document.createElement("div");
        finalResult.style.fontWeight = "bold";
        rounds.appendChild(lineBreak);

        if (humanScore === 5) {
            finalResult.textContent = `You Win! ${humanScore} to ${computerScore}`;
        }
        else {
            finalResult.textContent = `You Lose! ${computerScore} to ${humanScore}`;
        }
         
        rounds.appendChild(finalResult);
        humanScore = 0;
        computerScore = 0;
        round = 1;
        newRound = true;
    }
}