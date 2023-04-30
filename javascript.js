//variable to store player selection input
let playerSelection = prompt("Rock, Paper or Scissors?","");
console.log(playerSelection);
console.log(typeof playerSelection);

//function getComputerChoice randomly 
//returns rock, paper, or scissors.
let getComputerChoice = function(){
    switch ((Math.floor(Math.random() * 3) + 1)){
    case 1:
        return "rock";
    case 2:
        return "paper";
    case 3:
        return "scissors";
    default:
        return "ya done goofed the code!";
}
}
console.log(getComputerChoice());
console.log(typeof getComputerChoice);
//function rockPaperScissors  
//takes playerSelection and getComputerChoice and 
//returns winner message.
//*** make user input case insensitive

function rockPaperScissors(playerSelection, getComputerChoice){
    if ((playerSelection) == (String(getComputerChoice))){
        console.log("It's a draw!");
    }
    else {
        console.log("hey, I think it's working...");
    }
}
rockPaperScissors();
//return the results of the call and also console.log to test after.
//Math.floor(Math.random() * 3) + 1;
//if i set rock paper and scissors to 
//1,2,3, I can return a corresponding random. 