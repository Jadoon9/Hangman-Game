const game1 = new Hangman("Cat", 2);
const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");

puzzleEl.textContent = game1.getPuzzle();

guessesEl.textContent = `You have ${game1.remainingGuesses} guesses remaining.`;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);

  game1.getPuzzle();
  puzzleEl.textContent = game1.getPuzzle();
  guessesEl.textContent = `You have ${game1.remainingGuesses} guesses remaining.`;
});
