const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const roll1 = document.getElementById("roll1");
const roll2 = document.getElementById("roll2");
const dice = document.getElementById("dice");
const resetBtn = document.getElementById("reset");

let currentPlayer;
let score1 = 0;
let score2 = 0;
let gameOver = false;

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function switchPlayer() {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  roll1.disabled = !roll1.disabled;
  roll2.disabled = !roll2.disabled;
}

function checkWinner() {
  if (score1 >= 30 || score2 >= 30) {
    gameOver = true;
    currentPlayer.querySelector("h2").textContent += " (Winner!)";
    roll1.disabled = true;
    roll2.disabled = true;
  }
}

function resetGame() {
  score1 = 0;
  score2 = 0;
  currentPlayer = null;
  roll1.disabled = false;
  roll2.disabled = false;
  gameOver = false;
  player1.querySelector("h2").textContent = "Player 1";
  player2.querySelector("h2").textContent = "Player 2";
  player1.querySelector("span").textContent = score1;
  player2.querySelector("span").textContent = score2;
  dice.textContent = "0";
}

roll1.addEventListener("click", () => {
  if (!currentPlayer) {
    currentPlayer = player1;
    roll2.disabled = true;
  }
  const result = rollDice();
  score1 += result;
  player1.querySelector("span").textContent = score1;
  dice.textContent = result;
  checkWinner();
  if (!gameOver) switchPlayer();
});

roll2.addEventListener("click", () => {
  if (!currentPlayer) {
    currentPlayer = player2;
    roll1.disabled = true;
  }
  const result = rollDice();
  score2 += result;
  player2.querySelector("span").textContent = score2;
  dice.textContent = result;
  checkWinner();
  if (!gameOver) switchPlayer();
});

resetBtn.addEventListener("click", () => {
  resetGame();
});
