
const getComputerChoice=()=>{
    let choice= Math.floor(9*Math.random())
    console.log(choice)
    if (choice<=2){
        return("rock");
    }
    else if ( choice <=5){
        return("paper");
    }
    else{
        return("scissors");
    }
}

// console.log(getComputerChoice())

const getHumanChoice=()=>{
    let answer=prompt("qual sua escolha,humano?!!");
    return answer
}
// console.log(getHumanChoice())

let humanScore=0;
let computerScore=0;

const playRound=(humanChoice,computerChoice)=>{
    humanChoice=humanChoice.toLowerCase();
    computerChoice=computerChoice.toLowerCase();

    if (humanChoice=="paper"){
        if(computerChoice=="paper"){
            console.log(`It's a draw!Both got ${humanChoice}`)
        }
        else if(computerChoice=="rock"){
            console.log(`You win!${humanChoice} beats ${computerChoice}`)
            humanScore+=1;
        }
        else{
            console.log(`You lose!${computerChoice} beats ${humanChoice}!`)
            computerScore+=1
        }
    }
    else if (humanChoice=="rock"){
        if(computerChoice=="paper"){
            console.log(`You lose!${computerChoice} beats ${humanChoice}!`)
            computerScore+=1;
        }
        else if(computerChoice=="rock"){
            console.log(`It's a draw!Both got ${humanChoice}`)
        }
        else{
            console.log(`You win!${humanChoice} beats ${computerChoice}`)
            humanScore+=1;
        }
    }
    else{
        if(computerChoice=="paper"){
            console.log(`You win!${humanChoice} beats ${computerChoice}`)
            humanScore+=1;
        }
        else if(computerChoice=="rock"){
            console.log(`You lose!${computerChoice} beats ${humanChoice}!`)
            computerScore+=1;
        }
        else{
            console.log(`It's a draw!Both got ${humanChoice}`)
        }
    }
    console.log(`Score:\n You:${humanScore}\n Computer:${computerScore}`)

}

const playGame=()=>{
    for(let i=0;i<5;i++){
        console.log("Round "+i)

        playRound(getHumanChoice(),getComputerChoice());
    }
    if (humanScore>computerScore){
        console.log(`human is the winner with ${humanScore} points`)
    }
    else{
        console.log(`computer is the winner with ${computerScore} points`)

    }
}


playGame()