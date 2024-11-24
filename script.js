let userScore = 0;
let computerScore = 0;
let rounds = 0;

document.getElementById("start-game").addEventListener("click", () => {
    document.getElementById("popup-start").classList.add("hidden");
    document.getElementById("instructions").classList.remove("hidden");
});

document.getElementById("close-instructions").addEventListener("click", () => {
    document.getElementById("instructions").classList.add("hidden");
    document.getElementById("game-box").classList.remove("hidden");
});

document.getElementById("roll-dice").addEventListener("click", () => {
    if (rounds < 3) {
        const userDice1 = rollDice();
        const userDice2 = rollDice();
        const computerDice1 = rollDice();
        const computerDice2 = rollDice();

        document.getElementById("user-die1").src = `../images/dice${userDice1}.png`;
        document.getElementById("user-die2").src = `../images/dice${userDice2}.png`;
        document.getElementById("computer-die1").src = `../images/dice${computerDice1}.png`;
        document.getElementById("computer-die2").src = `../images/dice${computerDice2}.png`;

        const userRoundScore = calculateScore(userDice1, userDice2);
        const computerRoundScore = calculateScore(computerDice1, computerDice2);

        userScore += userRoundScore;
        computerScore += computerRoundScore;

        document.getElementById("user-score").textContent = userScore;
        document.getElementById("computer-score").textContent = computerScore;

        rounds++;

        if (rounds === 3) {
            const winner =
                userScore > computerScore
                    ? "Congratulations, You Win!🥳"
                    : userScore < computerScore
                    ? "Computer Wins, Better Luck Next Time!💔"
                    : "It's a Tie!🪢";
            showPopup(winner);
        }
    }
});

document.getElementById("reset-game").addEventListener("click", resetGame);

document.getElementById("close-popup").addEventListener("click", () => {
    document.getElementById("winner-popup").classList.add("hidden");
});

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function calculateScore(dice1, dice2) {
    if (dice1 === 1 || dice2 === 1) {
        return 0;
    } else if (dice1 === dice2) {
        return (dice1 + dice2) * 2;
    } else {
        return dice1 + dice2;
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    rounds = 0;

    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("result-message").textContent = "";

    document.getElementById("user-die1").src = `../images/dice1.png`;
    document.getElementById("user-die2").src = `../images/dice1.png`;
    document.getElementById("computer-die1").src = `../images/dice1.png`;
    document.getElementById("computer-die2").src = `../images/dice1.png`;
}

function showPopup(message) {
    document.getElementById("winner-message").textContent = message;
    document.getElementById("winner-popup").classList.remove("hidden");
}
