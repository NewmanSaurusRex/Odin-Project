//* Basic steps:
// ask player to enter their move
// verify if move is valid
// randomly generate the computer's move
// declare a winner using conditionals
// create a loop for other games

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return variables[Math.floor(Math.random() * options.length)];
}

function game() {
  for (let i = 0; i < 5; i++) {
    function playRound() {
      let playerSelection = "rock";
      let computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
    }
  }
}
