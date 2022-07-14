//* Basic steps:
// ask player to enter their move
// verify if move is valid
// randomly generate the computer's move
// declare a winner using conditionals
// create a loop for other games

let playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (playerSelection === "Paper" && computerSelection === "scissors") {
    return "-1. Paper < Scissors";
  } else if (playerSelection === "Paper" && computerSelection === "rock") {
    return "+1. Paper > Rock";
  } else if (playerSelection === "Scissors" && computerSelection === "paper") {
    return "+1. Scissors > Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "rock") {
    return "-1. Scissors < Rock";
  } else if (playerSelection === "Rock" && computerSelection === "paper") {
    return "-1. Rock < Paper";
  } else if (playerSelection === "Rock" && computerSelection === "scissors") {
    return "+1. Rock > Scissors.";
  } else {
    return "not a valid option. please choose again.";
  }
};

let computerPlay = function () {
  let options = ["rock", "paper", "scissors"];

  let randomOption = options[Math.floor(Math.random() * options.length)];
  return `${randomOption}`;
};

const playerSelection = prompt("Choose wisely - Rock, Paper, or Scissors?");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
