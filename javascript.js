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

/* get the human choice */

function getHumanChoice() {
    choice = prompt("Choose rock, paper or scissor")
    if (choice.toLowerCase()=== "rock") {
        return "rock"
    } else if (choice.toLowerCase()==="paper") {
        return "paper"
    } else if (choice.toLowerCase()==="scissor"){
        return "scissor"
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissor.");
        return getHumanChoice();
    }
}

/* declare the players score variables */ 

let humanScore = 0;
let computerScore = 0;

/* write the logic to play a single roud */

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "scissor"){
        humanScore++;
        return ["You win!", humanScore, "vs", computerScore];
    } else if (humanChoice === computerChoice) {
        return ["It's a tie!", humanScore, "vs", computerScore]
    } else if (humanChoice === "scissor" && computerChoice === "rock"){
        computerScore++;
        return ["You lost!", humanScore, "vs", computerScore];
    } else if (humanChoice === "paper" && computerChoice === "scissor"){
        computerScore++;
        return ["You lost!", humanScore, "vs", computerScore];
    } else if (humanChoice === "scissor" && computerChoice === "paper"){
        humanScore++;
        return ["You win!", humanScore, "vs", computerScore];
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return ["You win!", humanScore, "vs", computerScore];
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return ["You lost!", humanScore, "vs", computerScore];
    }
}

function playGame() {
    for (var i=0; i<6; i++) {
        let humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log (humanSelection);
        console.log (computerSelection);
        console.log(playRound(humanSelection, computerSelection));
    }
}

playGame();

