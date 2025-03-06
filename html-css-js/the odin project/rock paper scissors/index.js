let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let winnerText = document.getElementById("winner");
let playerImg = document.getElementById("playerChoiceImg");
let compImg = document.getElementById("compChoiceImg");
let winnerBox = document.getElementById("winner-box");

let winner;

function playerChoice(e){
    let playerSelect = e.target.value;
    let compSelect = computerChoice();

    playerImg.src = `./images/${playerSelect}.jpg`;
    compImg.src = `./images/${compSelect}.jpg`;

    determineWinner(playerSelect, compSelect);
}

function computerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    switch(randomNumber){
        case 1: 
            choice = "rock";
        break;
        case 2: 
            choice = "paper";
        break;
        case 3: 
            choice = "scissors";
        break;
    }
    return choice
}

function determineWinner(playerSelect, compSelect){
    winnerBox.classList.remove("hidden");
    winnerBox.classList.add("centered");

    if(playerSelect === compSelect){
        winnerText.textContent = `It's a tie!`;
    }else if(
        (playerSelect === "rock" && compSelect === "scissors") ||
        (playerSelect === "scissors" && compSelect === "paper") ||
        (playerSelect === "paper" && compSelect === "rock")
    ){
        winnerText.textContent = "You win!";
    }else{
        winnerText.textContent = "Computer wins!";
    }
}

rock.addEventListener("click", playerChoice);
paper.addEventListener("click", playerChoice);
scissors.addEventListener("click", playerChoice);