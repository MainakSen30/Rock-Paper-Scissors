const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("result");
const PlayerScoreDisplay =document.getElementById("PlayerScoreDisplay");
const ComputerScoreDisplay =document.getElementById("ComputerScoreDisplay");

let PlayerScore = 0;
let ComputerScore = 0;

function playgame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);

    let result = "";
    if(playerChoice === computerChoice)
        result = "It's a TIE 😒";

    else{
        switch (playerChoice) {
            
            case "rock":
                result = (computerChoice === "scissors") ? "You WIN 😁" : "You LOSE 😔";
                break;

            case "paper":
                result = (computerChoice === "rock") ? "You WIN 😁" : "You LOSE 😔";
                break;

            case "scissors":
                result = (computerChoice === "paper") ? "You WIN 😁" : "You LOSE 😔";
                break;
    
            default:
                break;
        }
    }

    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "You WIN 😁":
            resultDisplay.classList.add("greenText");
            PlayerScore++;
            PlayerScoreDisplay.textContent = PlayerScore;
            break;
        case "You LOSE 😔":
            resultDisplay.classList.add("redText");
            ComputerScore++;
            ComputerScoreDisplay.textContent = ComputerScore;
            break;
        default:
            break;
    }
}