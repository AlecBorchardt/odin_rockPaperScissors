
let playerScore = 0;
let computerScore = 0;

function rockPaperScissors(playerSelection, computerChoice){

    document.getElementById('player').innerText = playerScore;
    document.getElementById('computer').innerText = computerScore;
    let gobbler = "";

    if (playerSelection == "rock" && computerChoice == "scissors"){
        gobbler = "rock beats scissors. you win!";
        playerScore++;
    }
    else if (playerSelection == "rock" && computerChoice == "paper"){
        gobbler = "paper beats rock. you lose!";
        computerScore++;
    }
    else if (playerSelection == "paper" && computerChoice == "rock"){
        gobbler = "paper beats rock. you win!";
        playerScore++;
    }
    else if (playerSelection == "paper" && computerChoice == "scissors"){
        gobbler = "scissors beats paper. you lose!";
        computerScore++;
    }
    else if (playerSelection == "scissors" && computerChoice == "paper"){
        gobbler = "scissors beats paper. you win!";
        playerScore++;
    }
    else if (playerSelection == "scissors" && computerChoice == "rock"){
        gobbler = "rock beats scissors. you lose!";
        computerScore++;
    }
    else if (computerChoice == playerSelection){
        gobbler = "It's a tie!";
    }
    document.getElementById('announcement').innerText = gobbler;
    document.getElementById('player').innerText = playerScore;
    document.getElementById('computer').innerText = computerScore;
}

function singleRound(choice){

		document.getElementById('player').innerText = playerScore;
    document.getElementById('computer').innerText = computerScore;
    
    let playerSelection = choice.toString();

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
    document.getElementById('player').innerText = playerScore;
    document.getElementById('computer').innerText = computerScore;
    rockPaperScissors(playerSelection, computerChoice);
    if ((playerScore ==5) || (computerScore == 5)){
        game();
    }
};

function game(){

    let announcement = "";
    if (playerScore > computerScore){
        announcement = "You Won the Game!";
    }
    else if (playerScore < computerScore){
        announcement = "You lost the game!";
    }
    else {
        announcement = "You tie the game!";
    }
    const element1 = document.getElementById("Rock");
    const element2 = document.getElementById("Paper");
    const element3 = document.getElementById("Scissors");
    const element4 = document.getElementById("buttons");
    element1.remove();
    element2.remove();
    element3.remove();
    element4.remove();
    document.getElementById("announcement").innerText = announcement;

};