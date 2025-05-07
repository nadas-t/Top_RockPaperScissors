
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
    let answer;

    if (humanChoice=="paper"){
        if(computerChoice=="paper"){
            answer=`It's a draw!Both got ${humanChoice}`
        }
        else if(computerChoice=="rock"){
            answer=`You win!${humanChoice} beats ${computerChoice}`
            humanScore+=1;
        }
        else{
            answer=`You lose!${computerChoice} beats ${humanChoice}!`
            computerScore+=1
        }
    }
    else if (humanChoice=="rock"){
        if(computerChoice=="paper"){
            answer=`You lose!${computerChoice} beats ${humanChoice}!`
            computerScore+=1;
        }
        else if(computerChoice=="rock"){
            answer=```It's a draw!Both got ${humanChoice}`
        }
        else{
            answer=`You win!${humanChoice} beats ${computerChoice}`
            humanScore+=1;
        }
    }
    else{
        if(computerChoice=="paper"){
            answer=`You win!${humanChoice} beats ${computerChoice}`
            humanScore+=1;
        }
        else if(computerChoice=="rock"){
            answer=`You lose!${computerChoice} beats ${humanChoice}!`
            computerScore+=1;
        }
        else{
            answer=`It's a draw!Both got ${humanChoice}`
        }
    }
    console.log(`Score:\n You:${humanScore}\n Computer:${computerScore}`)
    const jshumanScore=document.querySelector(".humanPoints")
    const jscomputerScore=document.querySelector(".computerPoints")
    const jsAnswer=document.querySelector(".jsAnswer")

    jshumanScore.textContent=humanScore
    jscomputerScore.textContent=computerScore
    jsAnswer.textContent=answer
}

const playGame=(humanChoice)=>{
    // for(let i=0;i<5;i++){
        // console.log("Round "+i)
    // }
    playRound(humanChoice,getComputerChoice());
    const jsAnswer=document.querySelector(".jsAnswer")
    let answer;
    if (humanScore>=5 || computerScore>=5){
        if (humanScore>=5){
            answer=`human is the winner with ${humanScore} points`
        }
        else{
            answer=`computer is the winner with ${computerScore} points`
        }
        jsAnswer.textContent=answer
        humanScore=0
        computerScore=0
    }
}

const buttons=document.querySelectorAll("button")

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        playGame(e.target.className)
    })
})

