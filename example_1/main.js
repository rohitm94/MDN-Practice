let rand_number = Math.floor(Math.random() * 100) + 1;

const guess = document.querySelector(".guess");
const prev = document.querySelector(".prev");
const lastResult = document.querySelector(".lastResult");
const feedback = document.querySelector(".feedback");
const total = document.querySelector(".total");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

const trials = 10;
const remaining = total - guessCount;

prev.textContent += trials;

function guessCheck() {
  let userInput = Number(guessField.value);

  if (guessCount === 1) {
    prev.textContent = "Previous Entries: ";
  }
  prev.textContent += userInput + " ";

  if (userInput === rand_number) {
    lastResult.textContent = "Congratulation! You won the game";
    lastResult.style.backgroundColor = "green";
    feedback.textContent = " ";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userInput < rand_number) {
      feedback.textContent = "Last guess was too low!";
    } else if (userInput > rand_number) {
      feedback.textContent = "Last guess was too high!";
    }
  }
  guessCount += 1;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", guessCheck);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".description p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  rand_number = Math.floor(Math.random() * 100) + 1;
}
