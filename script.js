// Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "You win!"
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    computerScore++;
    return "Computer wins!"
  }
}

// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
  for (let i = 0; i < 5; i++) {
    let computerMove = getComputerChoice();
    // Use prompt() to get input from the user. Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
    let playerMove = prompt("Enter rock, paper or scissors").toLowerCase();

    playRound(playerMove, computerMove);
    //Using console.log to verify for now. Will change to return later
    console.log(`You:${playerScore} - Computer:${computerScore}`);
  }
}

game();
