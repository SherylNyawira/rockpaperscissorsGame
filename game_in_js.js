function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if ((userChoice === "rock" && computerChoice === "scissors") ||
               (userChoice === "scissors" && computerChoice === "paper") ||
               (userChoice === "paper" && computerChoice === "rock")) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function playGame() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter rock, paper, or scissors: ', (userChoice) => {
        userChoice = userChoice.toLowerCase();
        if (!["rock", "paper", "scissors"].includes(userChoice)) {
            console.log("Invalid choice. Please try again.");
            readline.close();
            return;
        }
        const computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);
        const result = determineWinner(userChoice, computerChoice);
        console.log(result);
        readline.close();
    });
}

playGame();
