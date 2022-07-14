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
