let possibleMoves = ["rock", "paper", "scissors"];
let playerScore = 0;
let pcScore = 0;

function computerPlay(){
    return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
}

function playRound(choose, pcchoose){
    if(choose == "paper" && pcchoose == "rock" || choose=="rock" && pcchoose=="scissors" || choose=="paper" && pcchoose=="rock"){
        playerScore += 1;
        return `Player win,\n player score: ${playerScore}, \n computer score: ${pcScore}, \n computer choose: ${pcchoose}`;
    }else if(choose == pcchoose){
        return `Tie,\n player score: ${playerScore}, \n computer score: ${pcScore}, \n computer choose: ${pcchoose}`;
    } else{
        pcScore += 1;
        return `Computer win,\n player score: ${playerScore}, \n computer score: ${pcScore}, \n computer choose: ${pcchoose}`;
    }
    
}

function game(){
    let playerChoose = "";
    playerChoose = prompt("rock, paper, scissors");
    let computerChoose = ""
    computerChoose = computerPlay();
    alert(playRound(playerChoose, computerChoose));
    playerChoose = prompt("rock, paper, scissors");
    computerChoose = computerPlay();
    alert(playRound(playerChoose, computerChoose));
    playerChoose = prompt("rock, paper, scissors");
    computerChoose = computerPlay();
    alert(playRound(playerChoose, computerChoose));
    playerChoose = prompt("rock, paper, scissors");
    computerChoose = computerPlay();
    alert(playRound(playerChoose, computerChoose));
    playerChoose = prompt("rock, paper, scissors");
    computerChoose = computerPlay();
    alert(playRound(playerChoose, computerChoose));

    if(playerScore > pcScore){
        alert("Player win");
        window.location.reload; 
    } else if(playerScore < pcScore)
    {
        alert("Computer win");
        window.location.reload; 
    }else{
        alert("Tie");
        window.location.reload(); 
    }
}

game();