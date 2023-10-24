

function game() { 

    function getComputerChoice() {
        const ComputerChoice = ["rock", "paper", "scissors"];
        const random = Math.floor((Math.random() * ComputerChoice.length));
        const randomSelection = ComputerChoice[random];
        return randomSelection;
    }
    
    function playRound(playerSelection, computerSelection) {
    
        if (playerSelection == "rock" && computerSelection == "scissors" ||
            playerSelection == "paper" && computerSelection == "rock" ||
            playerSelection == "scissors" && computerSelection == "paper") {
                playerScore++
            return (`Player: ${playerSelection}\nComputer: ${computerSelection}\nPlayer Win!`)
        } else if (computerSelection == "rock" && playerSelection == "scissors" ||
            computerSelection == "paper" && playerSelection == "rock" ||
            computerSelection == "scissors" && playerSelection == "paper") {
                computerScore++
            return (`Player: ${playerSelection}\nComputer: ${computerSelection}\nPlayer Lost!`)
        } else if (playerSelection  === computerSelection) {
            drawScore++
            return (`Player: ${playerSelection}\nComputer: ${computerSelection}\nDRAW!`)
        }
    
    }
    
    let totalRounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    for (let i = 1; i <= totalRounds; i++) {
        console.log("Rounds: " + i)
        console.log("P: " + playerScore) 
        console.log("C: " + computerScore)
        console.log("D: " + drawScore)
        const playerSelection = prompt("Let's play!\nrock, paper or scissors").toLocaleLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    
}

console.log(game())