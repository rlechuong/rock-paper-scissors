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
function getHumanChoice() {

    while (true) {
        let userChoice = prompt("Rock, Paper, or Scissors?");

        if (userChoice.toLowerCase() == "rock") {  
            return "Rock";
        }
        else if (userChoice.toLowerCase() == "paper") {
            return "Paper";
        }
        else if (userChoice.toLowerCase() == "scissors") {
            return "Scissors";
        }
        else {
            alert("Invalid Input");
        }
    }
}

// Write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score, and logs a winner announcement.

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 0;
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        return 1;
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return 1;
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        return 1;
    }
    else {
        return -1;
    }
}

// Write a function that calls plays 5 rounds, keeps track of the scores, and declares a winner at the end.
function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    
    for (i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        let result = playRound(humanSelection, computerSelection);

        if (result === 0) {
            alert(`Round ${i}: Tie! ${humanSelection} Ties ${computerSelection}`);
            alert(`Round ${i}: You: ${humanScore} | Computer: ${computerScore}`);
        }
        else if (result === 1) {
            humanScore += 1;
            alert(`Round ${i}: Win! ${humanSelection} Beats ${computerSelection}`);
            alert(`Round ${i}: You: ${humanScore} | Computer: ${computerScore}`);
        }
        else if (result === -1) {
            computerScore += 1;
            alert(`Round ${i}: Loss. ${humanSelection} Loses To ${computerSelection}`);
            alert(`Round ${i}: You: ${humanScore} | Computer: ${computerScore}`);
        }
        else {
            alert(`Error With playGame() Function.`);
        }
    }

    if (humanScore > computerScore) {
        alert(`Final Result: You Win ${humanScore} To ${computerScore}`);
    }
    else if (humanScore === computerScore) {
        alert(`Final Result: You Tie ${humanScore} To ${computerScore}`);
    }
    else if (humanScore < computerScore) {
        alert(`Final Result: You Lose ${humanScore} To ${computerScore}`);
    }
    else {
        alert(`Error With playGame() Function.`);
    }
}

playGame()