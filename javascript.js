        //variable to store player selection input
let playerSelection = prompt("Rock, Paper or Scissors?","");

        //converts input to lowercase
playerSelection = playerSelection.toLowerCase();

        //tests
//console.log(playerSelection);
//console.log(typeof playerSelection);

        //function getComputerChoice randomly 
        //returns rock, paper, or scissors.
function getComputerChoice(){
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

        //trying to store the value of above function as variable
        //and testing if it stays consistent.
let computerChoice = getComputerChoice();
//console.log(computerChoice);

        //tests
//console.log(typeof computerChoice);

//function rockPaperScissors  
//takes playerSelection and getComputerChoice and 
//returns winner message.
//*** make user input case insensitive

function rockPaperScissors(playerSelection, computerChoice){
    console.log(playerSelection);
    console.log(computerChoice);


    if (playerSelection == "rock" && computerChoice == "scissors"){
        console.log("rock beats scissors. you win!");
    }
    else if (playerSelection == "rock" && computerChoice == "paper"){
        console.log("paper beats rock. you lose!");
    }

    else if (playerSelection == "paper" && computerChoice == "rock"){
        console.log("paper beats rock. you win!");
    }
    else if (playerSelection == "paper" && computerChoice == "scissors"){
        console.log("scissors beats paper. you lose!");
    }

    else if (playerSelection == "scissors" && computerChoice == "paper"){
        console.log("scissors beats paper. you win!");
    }
    else if (playerSelection == "scissors" && computerChoice == "rock"){
        console.log("rock beats scissors. you lose!");
    }

    else if (computerChoice == playerSelection){
        console.log("It's a tie!");
    }
    
}

//testing the game
rockPaperScissors(playerSelection, computerChoice);

