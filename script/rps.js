function getComputerChoice(rpsAi) {
    const rps = ["rock", "paper", "scissor"];
    rpsAi = rps[Math.floor(Math.random() * rps.length)];
    return rpsAi;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock".toLowerCase() && computerSelection === "paper".toLowerCase() || playerSelection === "paper".toLowerCase() && computerSelection === "scissor".toLowerCase() || playerSelection === "scissor".toLowerCase() && computerSelection === "rock".toLowerCase()) {
        return `${computerSelection} beats ${playerSelection}, you lose!`;
    }
    else if (playerSelection === "rock".toLowerCase() && computerSelection === "scissor".toLowerCase() || playerSelection === "paper".toLowerCase() && computerSelection === "rock".toLowerCase() || playerSelection === "scissor".toLowerCase() && computerSelection === "paper".toLowerCase()) {
        return `${playerSelection} beats ${computerSelection}, you win!`;
    }
    else if (playerSelection === computerSelection) {
        return `${playerSelection} and ${computerSelection} is the same. It is a draw!`;
    }
}
const playerSelection = prompt("rock, paper or scissor?", "").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));