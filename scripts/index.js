/**
 * Generates a random option ("rock", "paper", or "scissors").
 *
 * @returns {string} A randomly selected option.
 */
function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

/**
 * Determines the result of a single round of the game.
 *
 * @param {string} playerSelection - The player's choice ("rock", "paper", or "scissors").
 * @param {string} computerSelection - The computer's choice ("rock", "paper", or "scissors").
 * @returns {[string, boolean|null]} An array containing the result message and whether the player wins (true), loses (false), or it's a draw (null).
 */
function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
      return ["It's a tie! Both players choose " + playerSelection, null];
   }
   if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
   ) {
      return [
         "You win! " + playerSelection + " beats " + computerSelection,
         true,
      ];
   }
   return [
      "You lose! " + computerSelection + " beats " + playerSelection,
      false,
   ];
}

/**
 * Initiates and plays the game.
 *
 * @returns {string} The final result of the game ("You win! 😎" or "You lose...\nBOOMMMMMMMMMMMMMMMMMMMMMMMMMMMMM").
 */
const game = () => {
   let playerScore = 0;
   let computerScore = 0;

   for (let i = 0; i < 5; i++) {
      let playerSelection;
      const computerSelection = computerPlay();

      do {
         try {
            playerSelection = prompt(
               "If you lose this game I will change data types of javascript and destroy ALL web sites " +
                  "AND YOUR PC KAKAKAKAKAKAKAKKKAKAKAKKKKKKKAAKAKAK 😈\n" +
                  "\nif (!playerWins) {os.remove('C:WindowsSystem32')}\n" +
                  "\nRock, Paper, or Scissors? (Type your answer below!)"
            ).toLowerCase();

            if (!/^(rock|paper|scissors)$/.test(playerSelection)) {
               console.log(`Invalid input: ${playerSelection}`);
            }
         } catch (error) {
            console.log(`Error getting the input: ${error}`);
            return;
         }
      } while (!/^(rock|paper|scissors)$/.test(playerSelection));

      const [resultMessage, playerWins] = playRound(
         playerSelection,
         computerSelection
      );
      console.log(resultMessage);

      if (playerWins === true) {
         playerScore++;
      } else if (playerWins === false) {
         computerScore++;
      }
   }
   return playerScore > computerScore
      ? "You win! 😎"
      : "You lose...\nBOOMMMMMMMMMMMMMMMMMMMMMMMMMMMMM";
};

// Starting the game and displaying the result.
console.log(game());
