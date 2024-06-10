const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getChoice() {
    const choices = ["rock", "paper", "scissors", "water", "snake"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice ==computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice =="rock" && (computerChoice == "scissors" || computerChoice == "snake")) ||
        (userChoice === "paper" && (computerChoice == "rock" || computerChoice == "water")) ||
        (userChoice === "scissors" && (computerChoice === "paper" || computerChoice == "snake")) ||
        (userChoice === "water" && (computerChoice == "rock" || computerChoice == "scissors")) ||
        (userChoice === "snake" && (computerChoice == "paper" || computerChoice == "water"))
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

rl.question('Enter your choice (rock, paper, scissors, water, or snake): ', (userChoice) => {
    if (["rock", "paper", "scissors", "water", "snake"].includes(userChoice)) {
        const computerChoice = getChoice();
        console.log(`Computer chooses: ${computerChoice}`);
        console.log(determineWinner(userChoice, computerChoice));
    } else {
        console.log("Invalid choice. Please choose 'rock', 'paper', 'scissors', 'water', or 'snake'.");
    }
    rl.close();
});
