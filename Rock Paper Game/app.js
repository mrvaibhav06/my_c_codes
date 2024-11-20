let userScore =0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelectorAll("#msg"); 


 const genCompChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return option [randIndx];
 };
 
 const drawGame = () =>{
    console.log("game was draw");
     msg.innerText = "game Was Draw / Play again";
 };

 const showWinner = (userWin) =>{
    if (userWin){
        console.log("you Won!");
        msg.innerText = "You win!";
        msg.style.backgroundcolor="green";
    } else
    console.log("you lose!");
     msg.innerText = "You lose.";
     msg.style,backgroundcolor="red";

 };


const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice = gencompChoice();
    console.log("comp choice = ", compChoice);
    
    if (userChoice=== compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock"){
             userWin = compChoice === "paper" ?false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false:true;   
        } else {
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin);
        }
    
};


choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const  userChoice = choice.getAttribute("id");
        
    })
});