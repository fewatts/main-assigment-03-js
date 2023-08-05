//function computerPlay


function computerPlay() {
    let options = ["rock", "paper", "scissors"]
    let randomOption = Math.floor(Math.random() * options.length) + 1 
   
    if (randomOption === 1) {
      return "rock";
    } if (randomOption === 2) {
      return "paper";
    } if (randomOption === 3) {
      return "scissors";
    }
   }
   
   console.log(computerPlay()); 
   console.log(computerPlay());
   console.log(computerPlay());

//function playRound

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return ["It's a tie! Both players chose " + playerSelection, false];
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return ["You win! " + playerSelection + " beats " + computerSelection, true];
  }
  return ["You lose! " + computerSelection + " beats " + playerSelection, false];
}
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection,computerSelection))

