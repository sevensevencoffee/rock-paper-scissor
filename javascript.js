
/* get the computer choice */
function getComputerChoice() {
    if(Math.random()<1/3 && Math.random()>=0) {
        return "paper"
    } else if (Math.random()<2/3 && Math.random()>=1/3) {
        return "rock"
    } else {
        return "scissor"
    }    
}

let humanScore = 0;
let computerScore = 0;

/* write the logic to play a single roud */
let newDiv = document.querySelector("#selection");
let result;
let textResult = document.createElement("p");

newDiv.appendChild(textResult);

const humanDisplayBoard = document.querySelector('#humanDisplayScore');

const compDisplayBoard = document.querySelector('#compDisplayScore');
//humanDisplayBoard;

function playRound(humanChoice){
    const computerChoice = getComputerChoice();
 
    if (humanChoice === "rock" && computerChoice === "scissor"){
        humanScore++;
        result = `You win! Human: ${humanChoice} vs Computer: ${computerChoice} 
        ${humanScore} vs ${computerScore}`;
    } else if (humanChoice === computerChoice) {
        result = `It's a tie! Human: ${humanChoice} vs Computer: ${computerChoice}
        ${humanScore} vs ${computerScore}`;
    } else if (humanChoice === "scissor" && computerChoice === "rock"){
        computerScore++;
        result = `You lost! Human: ${humanChoice} vs Computer: ${computerChoice}
        ${humanScore} vs ${computerScore}`;
    } else if (humanChoice === "paper" && computerChoice === "scissor"){
        computerScore++;
        result = `You lost! Human: ${humanChoice} vs Computer: ${computerChoice}
        ${humanScore} vs ${computerScore}`;
    } else if (humanChoice === "scissor" && computerChoice === "paper"){
        humanScore++;
        result = `You win! Human: ${humanChoice} vs Computer: ${computerChoice}
        ${humanScore} vs ${computerScore}`;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        result = `You win! Human: ${humanChoice} vs Computer: ${computerChoice}
        ${humanScore} vs ${computerScore}`;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        result = `You lost! Human: ${humanChoice} vs Computer: ${computerChoice}
        ${humanScore} vs ${computerScore}`;
    }


    textResult.textContent = result;
    humanDisplayBoard.textContent = humanScore;
    compDisplayBoard.textContent = computerScore;
    checkForWinner();

}



function checkForWinner() {
    const maxScore = 5;
    let winner = document.createElement('p');
        newDiv.appendChild(winner);
    if(humanScore >= maxScore && computerScore < maxScore) {
        winner.textContent = "Human won!"
        disableButtons();
    } else if(humanScore < maxScore && computerScore === maxScore) {
        winner.textContent = "Computer won!"
        disableButtons();
    }
    
}

function disableButtons() {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissor").disabled = true;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

rock.addEventListener("click", ()=> playRound("rock"));
paper.addEventListener("click", ()=> playRound("paper"));
scissor.addEventListener("click", ()=> playRound("scissor"));




//function playGame() {
//    for (var i=0; i<6; i++) {
//        let humanSelection = getHumanChoice();
//        const computerSelection = getComputerChoice();
//        console.log (humanSelection);
//        console.log (computerSelection);
//        console.log(playRound(humanSelection, computerSelection));
//    }
//}

//playGame()