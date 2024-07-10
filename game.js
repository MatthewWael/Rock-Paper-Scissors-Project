console.log("Hello World")

function getComputerChoice(){
    var value= Math.floor(Math.random() * 3)

    if (value==0) {
        return "rock";
    } else if (value==1){
        return "paper";
    } else if (value==2){
        return "scissors";
    }
}

function getHumanChoice(){
    var userChoice= prompt("Enter rock, paper, or scissors",)
    return userChoice;
}

function playGame(){
    var humanScore=0;
    var computerScore=0;
    function playRound(humanChoice,computerChoice ) {
    
        if(humanChoice.toLowerCase()=="rock"&&(computerChoice=="paper")){
            computerScore++;
            console.log("You lose! Paper beats Rock")
        }else if(humanChoice.toLowerCase()=="rock"&&(computerChoice=="rock")){
            console.log("It's a tie!")
        }else if(humanChoice.toLowerCase()=="rock"&&(computerChoice=="scissors")){
            humanScore++;
            console.log("You Win!")
        }else if(humanChoice.toLowerCase()=="paper"&&(computerChoice=="paper")){
            console.log("It's a tie!")
        }else if(humanChoice.toLowerCase()=="paper"&&(computerChoice=="rock")){
            humanScore++;
            console.log("You Win!")
        }else if(humanChoice.toLowerCase()=="paper"&&(computerChoice=="scissors")){
            computerScore++;
            console.log("You lose! scissors beats paper")
        }else if(humanChoice.toLowerCase()=="scissors"&&(computerChoice=="paper")){
            humanScore++;
            console.log("You Win!")
        }else if(humanChoice.toLowerCase()=="scissors"&&(computerChoice=="rock")){
            computerScore++;
            console.log("You lose! rock beats scissors")
        }else if(humanChoice.toLowerCase()=="scissors"&&(computerChoice=="scissors")){
            console.log("It's a tie!")
        }    
  
    }
    for (let index = 0; index < 5; index++) {
        const humanSelection = getHumanChoice();

        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
    if(humanScore>computerScore){
        console.log("You are the winner")
    }else{
        console.log("the computer is the winner")
    }
}

playGame()