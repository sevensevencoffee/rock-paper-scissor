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

console.log(getComputerChoice())

/* get the human choice */

choice = prompt("Choose rock, paper or scissor")

function getHumanChoice() {
    if (choice.toLowerCase()=== "rock") {
        return "rock"
    } else if (choice.toLowerCase()==="paper") {
        return "paper"
    } else {
        return "scissor"
    }
}

console.log(getHumanChoice());