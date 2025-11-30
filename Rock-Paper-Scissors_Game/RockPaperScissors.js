const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const final = document.getElementById("final");

let playerScore = 0;
let computerScore = 0;
let attempts = 15;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  if (result === "YOU WIN!") {
    resultDisplay.classList.add("greenText");
    playerScore++;
  } else if (result === "YOU LOSE!") {
    resultDisplay.classList.add("redText");
    computerScore++;
  }

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  attempts--;

  if (attempts === 0) {
    if (playerScore > computerScore) final.textContent = "Player Wins";
    else if (playerScore < computerScore) final.textContent = "Computer Wins";
    else final.textContent = "Draw";
  }
}

final.style.display="block";
final.style.marginTop="40px";
final.style.fontSize="30px";
final.style.fontWeight="bold";
final.style.color="blue";