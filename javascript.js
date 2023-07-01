let playerwins = 0;
let computerwins = 0;
let playername = prompt ("Please enter your name");




function getComputerChoice() {
    let ComputerChoices = ["rock", "paper", "scissors"];
    let ComputerAnswer = ComputerChoices[Math.floor(Math.random() * 3)];
    return ComputerAnswer;
}


function playRound(playerselection,computerselection) {
    if ((playerselection == 'rock' && computerselection == 'scissors') || (playerselection == 'paper' && computerselection == 'rock') || (playerselection == 'scissors' && computerselection == 'paper')) {
        alert(`${playerselection} beats ${computerselection} ,You win this one`);
        playerwins = ++playerwins;
        return playerwins;
    } else if ((computerselection == 'rock' && playerselection == 'scissors') || (computerselection == 'paper' && playerselection == 'rock') || (computerselection == 'scissors' && playerselection == 'paper')) {
        alert(`${computerselection} beats ${playerselection}, you lose !`);
        computerwins = ++computerwins;
        return computerwins;
    } else if (computerselection == playerselection) {
        alert(`Oh no, both of you chose ${playerselection}, it's a tie!`);
        return;
    } else {
        alert(`Try again ${playername}`);
        return;
    }

}

while (playerwins < 5 && computerwins < 5) {
    computerselection = getComputerChoice();
    playerselection = prompt("Choose rock, paper or scissors");
    playerselection = String(playerselection);
    playerselection = playerselection.toLowerCase();
    playRound(playerselection,computerselection);
    let score = "Score is: " + playername + ` ` + playerwins + ` - Computer ` + computerwins;
    alert(score);
}
if (playerwins == 5) {
    alert(`You won the game ${playername}`);
} else {
    alert("Computer wins!")
}