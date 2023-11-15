"use strict";
// select the elements
let message = document.querySelector(".message");
let number = document.querySelector(".number");
let score = document.querySelector(".score");
let yourScore = 20;
let guess = document.querySelector(".guess");
let scoreButton = document.querySelector(".check");
let gameOver = document.querySelector(".game-over");
let body = document.querySelector("body");
let again = document.querySelector(".again");
let highScore = document.querySelector(".highscore");
// Secret Number
let randomNumber = Math.floor(Math.random() * 20) + 1;
// addEventListeners
scoreButton.addEventListener("click", function () {
  guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    message.textContent = "⛔️ No number! ⛔️";
  } else if (guess === randomNumber) {
    body.style.backgroundImage =
      "linear-gradient(to right, rgb(104, 142, 142), rgb(196, 185, 92))";
    number.style.width = "30rem";
    message.textContent = "Correct Number! ✅";
    yourScore++;
    score.textContent = yourScore;
    // Update high score
    highScore.textContent = Number(highScore.textContent) + 1;
    // Generate a new random number for next round
    randomNumber = Math.floor(Math.random() * 20) + 1;
  } else if (yourScore > 0) {
    if (guess > randomNumber) {
      message.textContent = "❌ Too high ❌";
      yourScore--;
      score.textContent = yourScore;
    } else if (guess < randomNumber) {
      message.textContent = "🚫 Too low 🚫";
      yourScore--;
      score.textContent = yourScore;
    }
  } else {
    message.textContent = "You lost the game";
    gameOver.textContent = "Game Over";
  }
});
again.addEventListener("click", function () {
  location.reload();
});
