/**
 * Displays a welcome message for the game.
 * The message provides instructions and warnings to the player.
 * The player is informed about potential consequences of losing the game.
 * Also, provides guidance on how to open the browser console for playing.
 */
const displayWelcomeMessage = () => {
   alert(
      "Welcome to our game If u loose, all websites and your PC\nWill be destroyed! 😈\n\nOpen your console to play!\nwin or mac: CRTL + SHIFT + I"
   );
};

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
   if (playerSelection === undefined) {
      return;
   }
   if (playerSelection === computerSelection) {
      return ["It's a tie! Both players choose " + playerSelection, undefined];
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
 * Prompts the player to input their choice of "Rock," "Paper," or "Scissors."
 * Validates the input and continues prompting until a valid choice is entered.
 *
 * @returns {string|null} The player's valid choice ("rock," "paper," or "scissors"),
 *                       or `null` if an error occurs during input.
 */
const playerPlay = () => {
   let playerSelection;

   do {
      try {
         playerSelection = prompt(
            "Rock, Paper, or Scissors? (Type your answer below!)"
         )
            .toLowerCase()
            .trim();

         if (!/^(rock|paper|scissors)$/.test(playerSelection)) {
            console.log(`Invalid input: ${playerSelection}`);
         }
      } catch (error) {
         console.log(`give up already?? KAKAKAAKAKAKA u're weak`);
         return null;
      }
   } while (!/^(rock|paper|scissors)$/.test(playerSelection));

   return playerSelection;
};

/**
 * Plays a single round of the game.
 *
 * @param {number} round - The current round of the game.
 * @returns {[boolean, string|null]} An array containing a boolean indicating whether the player wins,
 *                                   and the player's valid choice ("rock," "paper," or "scissors"),
 *                                   or `null` if an error occurs during input.
 */
const playSingleRound = (round) => {
   console.log(`Round ${round + 1}º`);

   const computerSelection = computerPlay();
   const playerSelection = playerPlay();

   if (playerSelection === null) {
      return [null, null];
   }

   const [resultMessage, playerWins] = playRound(
      playerSelection,
      computerSelection
   );
   console.log(resultMessage);

   return [playerWins, playerSelection];
};

/**
 * Determines the winner of the game based on player and computer scores.
 *
 * @param {number} playerScore - The score achieved by the player.
 * @param {number} computerScore - The score achieved by the computer.
 */
const determineWinner = (playerScore, computerScore) => {
   if(playerScore > computerScore){
      console.log("YOU WINNNNNNNNNNNN")
   }else if(playerScore === computerScore){
      console.log("DRAW");
   }else{
      console.log("YOU LOSE KKKKKKKKKKKKKKK");
   }
};

/**
 * Initiates and plays the game.
 *
 * @returns {string|null} A message indicating the game result (win or lose),
 *                        or `null` if an error occurs during input.
 */
const game = () => {
   displayWelcomeMessage();

   let playerScore = 0;
   let computerScore = 0;

   for (let i = 0; i < 5; i++) {
      const [playerWins, playerSelection] = playSingleRound(i);
      if (playerWins === null) {
         return null;
      }
      if (playerWins === true) {
         playerScore++;
      } else if (playerWins === false) {
         computerScore++;
      }
   }

   return determineWinner(playerScore, computerScore);
};

game()
