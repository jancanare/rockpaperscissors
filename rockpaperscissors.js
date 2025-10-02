console.log("hello World")

function getRandomNumber() {
    const random = Math.floor(Math.random() * 3) + 1;
     return random
}


function getComputerChoice() {
    const randomNum = getRandomNumber();
    console.log(randomNum);
    if (randomNum === 1) return "rock";
    if (randomNum === 2) return "paper";
    return "scissors";
}
console.log(getComputerChoice())

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?")
}




function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie!";

    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } 
    else {
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    for(let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);
    console.log(`Round ${i + 1}: ${result}`);

    if (result.includes("You win")) {
            humanScore++;
        } else if (result.includes("You lose")) {
            computerScore++;

    }
 }
console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You are the champion! 🏆");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the match! 🤖");
    } else {
        console.log("It’s a tie overall! ⚖️");
    }
}

playGame();