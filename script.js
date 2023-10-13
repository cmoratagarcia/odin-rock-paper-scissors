let playerScore = 0;
let computerScore = 0;
const results = document.querySelector(".result-counter");
const resultsBox = document.querySelector(".results-box");
const played = document.querySelector(".played");
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  let tieDiv = document.createElement("div");
  tieDiv.textContent = "";
  if (playerSelection === computerSelection) {
    tieDiv.textContent = "Tied!";
    resultsBox.appendChild(tieDiv);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    computerScore++;
  }
}

function handleClick(playerMove) {
  if (isGameOver()) {
    if (computerScore > playerScore) {
      alert("Sorry, you lost the game!");
    } else if (computerScore < playerScore) {
      alert("You won the game!");
    }
  } else {
    let computerMove = getComputerChoice();
    playRound(playerMove, computerMove);
    let playedRound = document.createTextNode(
      `You: ${playerMove} - Computer: ${computerMove}`
    );
    let scoreText = document.createTextNode(
      `You: ${playerScore} - Computer: ${computerScore}`
    );
    played.innerHTML = "";
    results.innerHTML = "";
    played.appendChild(playedRound);
    results.appendChild(scoreText);
  }
}
