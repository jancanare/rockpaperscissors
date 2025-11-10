

let humanScore = 0;
let computerScore = 0;

function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    const randomNum = getRandomNumber();
    if (randomNum === 1) return "rock";
    if (randomNum === 2) return "paper";
    return "scissors";
}

function playRound(humanChoice) {
    if (humanScore >= 5 || computerScore >= 5) return; // Stop when game is over

    const computerChoice = getComputerChoice();
    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");
    const winnerDiv = document.getElementById("winner");
    

    let resultText = "";

    if (humanChoice === computerChoice) {
        resultText = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultText = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultText = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    resultDiv.textContent = resultText;
    scoreDiv.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;

    // Check for game winner
    if (humanScore === 5) {
        winnerDiv.textContent = "🎉 You win the game! 🎉";
        retryButton.style.display = "inline-block";
    } else if (computerScore === 5) {
        winnerDiv.textContent = "💀 Computer wins the game! Better luck next time!";
        retryButton.style.display = "inline-block";
    }
}

const myDiv = document.getElementById('selection');

["rock", "paper", "scissors"].forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.charAt(0).toUpperCase() + choice.slice(1);
    button.addEventListener("click", () => playRound(choice));
    myDiv.appendChild(button);
});

const tryAgain = document.getElementById('retry');

const retryButton = document.createElement("button");
retryButton.style.display = "none";
retryButton.textContent = "Restart";
retryButton.addEventListener("click", () => location.reload());


tryAgain.appendChild(retryButton);