let playerScore = 0;
let computerScore = 0;
const mainGame = document.querySelector(".main-game");
const played = document.querySelector(".played");
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const results = document.querySelector(".result-counter");
const resultsBox = document.querySelector(".results-box");
const resetModal = document.querySelector(".reset-modal");
const gameResult = document.querySelector(".game-result");
const resetBtn = document.querySelector(".reset-btn");

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));
resetBtn.addEventListener("click", () => resetGame());

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (
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
  if (isGameOver()) {
    if (computerScore > playerScore) {
      gameResult.innerText = "Sorry, you lost the game!";
    } else if (computerScore < playerScore) {
      gameResult.innerText = "You won the game!";
    }
    mainGame.setAttribute("style", "display: none;");
    resetModal.setAttribute("style", "display: block;");
  }
}

function handleClick(playerMove) {
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

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  played.innerHTML = "";
  results.innerHTML = "";
  gameResult.innerHTML = "";
  resetModal.setAttribute("style", "display: none;");
  mainGame.setAttribute("style", "display: block;");
}
