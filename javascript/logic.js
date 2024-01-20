//Score

let playerScore = 0;
let computerScore = 0;
let resetScore = 0;

//Rounds

let endScore = 5;

// img

let img;
let imgTwo;
img = document.createElement("img");
img.style.cssText = "width:80px;height:auto;";
imgTwo = document.createElement("img");
imgTwo.style.cssText = "width:80px;height:auto;";

//Computer random choice selection logic

function getComputerChoice() {
  const ComputerChoice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * ComputerChoice.length);
  const randomSelection = ComputerChoice[random];
  return randomSelection;
}

//Wepon Selection & Who Won Round

const wpnSelection = document.querySelector(".weponSelection");
wpnSelection.textContent = "Select your FIST!";

const wonRound = document.querySelector(".wonRound");
wonRound.textContent = "Let's see who gets 5 points first";

//Player Buttons

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => handleClick("rock"));
paperButton.addEventListener("click", () => handleClick("paper"));
scissorsButton.addEventListener("click", () => handleClick("scissors"));

function handleClick(playerSelection) {
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  updateChoices(playerSelection, computerSelection);
}

//Restart Logic

const endBtn = document.querySelector("#endButton");
const endScreen = document.querySelector("#endScreen");
const selectionArea = document.querySelector("#selectionArea");
const gameDecision = document.querySelector(".gameDecision");
const desicionResult = document.querySelector(".desicionResult");
const winResult = document.querySelector(".winnerResult");
const plyResultPoints = document.querySelector(".plyResultPoints");
const cptResultPoints = document.querySelector(".cptResultPoints");

endBtn.addEventListener("click", () => {
  restartGame();
});

function playAgain() {
  if (playerScore == endScore) {
    endScreen.removeAttribute("class");
    winnerResult();
  } else if (computerScore == endScore) {
    endScreen.removeAttribute("class");
    winnerResult();
  }
}

function restartGame() {
  playerScore = resetScore;
  computerScore = resetScore;
  endScreen.removeAttribute("class");
  endScreen.classList = "hide";
  plyPoints.textContent = "Player: 0";
  cptPoints.textContent = "Computer: 0";
  wpnSelection.textContent = "Select your FIST!";
  wonRound.textContent = "Let's see who gets 5 points first";
}

function winnerResult() {
  if (playerScore == endScore) {
    gameDecision.textContent = "You won the game";
    desicionResult.textContent = "Congratulations!";
    plyResultPoints.textContent = "Player: " + playerScore;
    cptResultPoints.textContent = "Computer: " + computerScore;
  } else if (computerScore == endScore) {
    gameDecision.textContent = "Computer won the game";
    desicionResult.textContent = "Maybe next time";
    plyResultPoints.textContent = "Player: " + playerScore;
    cptResultPoints.textContent = "Computer: " + computerScore;
  }
}

//Play logic

const plyPoints = document.querySelector(".playerPoints");
plyPoints.textContent = "Player: 0";

const plySelection = document.querySelector(".playerSelection");
plySelection.textContent = "?";

const cptPoints = document.querySelector(".computerPoints");
cptPoints.textContent = "Computer: 0";

const cptSelection = document.querySelector(".computerSelection");
cptSelection.textContent = "?";

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    plyPoints.textContent = "Player: " + ++playerScore;
    wpnSelection.textContent = "Player Wins";
    wonRound.textContent = "Point For You";
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    cptPoints.textContent = "Computer: " + ++computerScore;
    wpnSelection.textContent = "Computer Wins";
    wonRound.textContent = "Point For computer";
  } else if (playerSelection === computerSelection) {
    wpnSelection.textContent = "Draw";
    wonRound.textContent = "Point For None";
  }
  playAgain();
}

// Choices [Player, Computer]

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      plySelection.textContent = "";
      imgTwo.src = "images/rock-font.png";
      plySelection.append(imgTwo);

      break;
    case "paper":
      plySelection.textContent = "";
      imgTwo.src = "images/paper-font.png";
      plySelection.append(imgTwo);
      break;
    case "scissors":
      plySelection.textContent = "";
      imgTwo.src = "images/scissors-font.png";
      plySelection.append(imgTwo);
      break;
  }

  switch (computerSelection) {
    case "rock":
      cptSelection.textContent = "";
      img.src = "images/rock-font.png";
      cptSelection.append(img);
      break;
    case "paper":
      cptSelection.textContent = "";
      img.src = "images/paper-font.png";
      cptSelection.append(img);
      break;
    case "scissors":
      cptSelection.textContent = "";
      img.src = "images/scissors-font.png";
      cptSelection.append(img);
      break;
  }
}