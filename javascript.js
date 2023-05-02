        //variable to store player selection input
//let playerSelection = prompt("Rock, Paper or Scissors?","");

        //converts input to lowercase
//playerSelection = playerSelection.toLowerCase();

        //function getComputerChoice randomly 
        //returns rock, paper, or scissors.
/*
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
*/
//let computerChoice = getComputerChoice();

//function rockPaperScissors  
//takes playerSelection and getComputerChoice and 
//returns winner message.
//*** make user input case insensitive

let playerScore = 0;
let computerScore = 0;

function rockPaperScissors(playerSelection, computerChoice){

    console.log(playerSelection);
    console.log(computerChoice);

    //let playerScore = 0;
    //let computerScore = 0;

    if (playerSelection == "rock" && computerChoice == "scissors"){
        console.log("rock beats scissors. you win!");
        playerScore++;
    }
    else if (playerSelection == "rock" && computerChoice == "paper"){
        console.log("paper beats rock. you lose!");
        computerScore++;
    }
    else if (playerSelection == "paper" && computerChoice == "rock"){
        console.log("paper beats rock. you win!");
        playerScore++;
    }
    else if (playerSelection == "paper" && computerChoice == "scissors"){
        console.log("scissors beats paper. you lose!");
        computerScore++;
    }
    else if (playerSelection == "scissors" && computerChoice == "paper"){
        console.log("scissors beats paper. you win!");
        playerScore++;
    }
    else if (playerSelection == "scissors" && computerChoice == "rock"){
        console.log("rock beats scissors. you lose!");
        computerScore++;
    }
    else if (computerChoice == playerSelection){
        console.log("It's a tie!");
    }
    console.log(playerScore);
    console.log(computerScore);
}

//testing
//rockPaperScissors(playerSelection, computerChoice);

//function called singleRound that plays 1 round.
function singleRound(){

    let playerSelection = prompt("Rock, Paper or Scissors?","");
    playerSelection = playerSelection.toLowerCase();

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

    let computerChoice = getComputerChoice();

    rockPaperScissors(playerSelection, computerChoice);
};

//function called game that plays 5 rounds,
//keeps score, and announces winner.
function game(){

    //let playerScore = 0;
    //let computerScore = 0;

    singleRound();
    singleRound();
    singleRound();
    singleRound();
    singleRound();
  
    console.log("Final player score: " + playerScore);
    console.log("Final computerScore: " + computerScore);

    if (playerScore > computerScore){
        console.log("You Won the Game!");
    }
    else if (playerScore < computerScore){
        console.log("You lost the game!");
    }
    else {
        console.log("You tie the game!");
    }
    
};

//testing
game();

/*
I spent about 4 hours writing, rewriting, 
reading and googling before I figured out I had omitted the parameters
when I called the rockPaperScissors function. I thought I could
set them as variables first because I didn't understand how function
parameters worked.
*/