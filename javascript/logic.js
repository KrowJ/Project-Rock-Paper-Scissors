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

    function restartRound() {
        restart = prompt("want to play again?\nYes or No?").toLocaleLowerCase()
        while(true) {

            if (restart == "yes") {
                break;
            } else if (restart == "no") {
                alert("Hope to see you again!")
                //console.log(endGame())
                return "the game has ended";
            } else if (restart !== 'yes') {
                alert("Select again")
                restart = prompt("want to play again?\nYes or No?").toLocaleLowerCase()
            }
        }
            if (restart == "yes") {
                console.clear()
                console.log(game())
            } else if (restart == "no") {
                alert("Hope to see you again!")
                console.log(endGame())
                return;
            }
    }

    function endGame() {
        
    }

    let totalRounds = 10;
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    for (let i = 1; i <= totalRounds; i++) {
        console.log("Rounds: " + i)
        //let playerSelection = prompt("Let's play!\nrock, paper or scissors").toLocaleLowerCase();  
        while(true) {

                if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
                    break;
                } else if (playerSelection !== "rock" || playerSelection != "paper" || playerSelection !== "scissors") {
                    alert("Select again")
                    playerSelection = prompt("Let's play!\nrock, paper or scissors").toLocaleLowerCase();
                }
        }
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("P: " + playerScore) 
        console.log("C: " + computerScore)
        console.log("D: " + drawScore)
        if (playerScore === 3) {
            console.log("player king!\nAWESOME!")
            console.log(restartRound())    
        } else if (computerScore === 3) {
            console.log("computer king!\nGAMEOVER!")
            console.log(restartRound())
        } else if (drawScore === 3) {
            console.log("Both are bad!\nDRAW!")
            console.log(restartRound())
        }
    }
}

//console.log(game())