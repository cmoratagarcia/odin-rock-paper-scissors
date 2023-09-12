// Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
let options = ["rock", "paper", "scissors"];
let randomIndex = Math.floor(Math.random() * 3);
function getComputerChoice() {
  return options[randomIndex];
}
let computerSelection = getComputerChoice();
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
// let playerSelection = userInput.toLowerCase();
// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You lose! Paper beats rock";
    } else {
      return "You win! Rock beats scissors";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You win! Paper beats rock";
    } else {
      return "You lose! Scissors beat paper";
    }
  } else {
    if (computerSelection === "rock") {
      return "You win! Rock beats scissors";
    } else {
      return "You win! Scissors beat paper";
    }
  }
}

// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
