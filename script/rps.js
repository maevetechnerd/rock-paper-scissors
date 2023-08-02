let computerScore = 0;
let playerScore = 0;

let playerSelection = prompt("rock, paper or scissor?", "").toLowerCase(); 
let computerSelection = getComputerChoice();

function getComputerChoice(rpsAi) {
    const rps = ["rock", "paper", "scissor"];
    rpsAi = rps[Math.floor(Math.random() * rps.length)];
    return rpsAi;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "Paper beats rock. You lose!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissor") {
        playerScore++;
        return "Rock beats scissors. You win!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissor") {
        computerScore++;
        return "Scissor beats paper. You lose!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "Paper beats rock. You win!";
    }
    else if (playerSelection == "scissor" && computerSelection == "rock") {
        computerScore++;
        return "Rock beats scissors. You lose!";
    }
    else if (playerSelection == "scissor" && computerSelection == "paper") {
        playerScore++;
        return "Scissors beats rock. You win!";
    }
    else {
        return `It's a draw!`;
    }
}

function game() {
    console.log("Round 1");
    playerSelection = prompt("rock, paper or scissor?", "").toLowerCase();
    playRound(playerSelection, computerSelection);
    
    console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);

    console.log("Round 2");
    playerSelection = prompt("rock, paper or scissor?", "").toLowerCase();
    playRound(playerSelection, computerSelection);
    
    console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);

    console.log("Round 3");
    playerSelection = prompt("rock, paper or scissor?", "").toLowerCase();
    playRound(playerSelection, computerSelection);
    
    console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);

    console.log("Round 4");
    playerSelection = prompt("rock, paper or scissor?", "").toLowerCase();
    playRound(playerSelection, computerSelection);
    
    console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);

    console.log("Round 5");
    playerSelection = prompt("rock, paper or scissor?", "").toLowerCase();
    playRound(playerSelection, computerSelection);
    
    console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);

    console.log("Points");
    console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);

    if (computerScore === 5) {
        return `You got 5 points and computer got ${computerScore}. You lose!`;
    }
    else {
        return `You got ${playerScore} and computer got ${computerScore}. You win!`;
    }
}

console.log(game());