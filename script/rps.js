function getComputerChoice(rpsAi) {
    const rps = ["Rock", "Paper", "Scissor"];
    rpsAi = rps[Math.floor(Math.random() * rps.length)];
    return rpsAi;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissor" || playerSelection === "Scissor" && computerSelection === "Rock") {
        return `${computerSelection} beats ${playerSelection}, you lose!`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissor" || playerSelection === "Scissor" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock") {
        return `${playerSelection} beats ${computerSelection}, you win!`;
    }
    else if (playerSelection === computerSelection) {
        return `${playerSelection} and ${computerSelection} are the same. It is a draw!`;
    }
}

function game() {
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
}

const playerSelection = prompt("Rock, paper or scissor?", "");
const computerSelection = getComputerChoice();
console.log(game(playerSelection, computerSelection));