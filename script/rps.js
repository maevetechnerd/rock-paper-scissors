function getComputerChoice() {
    const rps = ["Rock", "Paper", "Scissor"];
    const rpsAi = rps[Math.floor(Math.random() * rps.length)];
    return rps;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection < computerSelection) {
        return `${computerSelection} beats ${playerSelection}, you lose!`;
    }
}

const playerSelection = "rock";
playerSelection.toUpperCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));