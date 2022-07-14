//* Basic steps:
// ask player to enter their move
// verify if move is valid
// randomly generate the computer's move
// declare a winner using conditionals
// create a loop for other games

let playerScore = 0;
let computerScore = 0;

let computerPlay = function () {
  let options = ["rock", "paper", "scissors"];
  let randomOption = options[Math.floor(Math.random() * options.length)];
  return `${randomOption}`;
};

let playRound = function (playerSelection, computerSelection) {
  for (let i = 1; i <= 5; i++)
    if (playerScore < 5 && computerScore < 5) {
      if (playerSelection === computerSelection) {
        return "Tie!";
      } else if (
        playerSelection === "Paper" &&
        computerSelection === "scissors"
      ) {
        computerScore++;
        return "-1. Paper < Scissors";
      } else if (playerSelection === "Paper" && computerSelection === "rock") {
        playerScore++;
        return "+1. Paper > Rock";
      } else if (
        playerSelection === "Scissors" &&
        computerSelection === "paper"
      ) {
        playerScore++;
        return "+1. Scissors > Paper";
      } else if (
        playerSelection === "Scissors" &&
        computerSelection === "rock"
      ) {
        computerScore++;
        return "-1. Scissors < Rock";
      } else if (playerSelection === "Rock" && computerSelection === "paper") {
        computerScore++;
        return "-1. Rock < Paper";
      } else if (
        playerSelection === "Rock" &&
        computerSelection === "scissors"
      ) {
        playerScore++;
        return "+1. Rock > Scissors.";
      } else {
        return "not a valid option. please choose again.";
      }
    }
};

const playerSelection = prompt("Choose wisely - Rock, Paper, or Scissors?");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
