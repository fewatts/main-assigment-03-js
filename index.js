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