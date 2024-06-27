var timer;
var isRunning = false;
var score = {
    wins: 0,
    losses: 0
};

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("startStop").textContent = "Start";
        checkMatch();
    } else {
        timer = setInterval(incrementCounter, 333); // Increment three times faster (every 333 milliseconds)
        isRunning = true;
        document.getElementById("startStop").textContent = "Stop";
    }
}

function incrementCounter() {
    const counter = document.querySelector(".counter");
    counter.textContent = parseInt(counter.textContent) + 1;
}

function checkMatch() {
    const targetNumber = parseInt(document.getElementById("targetNumber").value);
    const counter = parseInt(document.querySelector(".counter").textContent);
    const feedback = document.querySelector(".feedback");

    if (targetNumber <= 0) {
        alert("Error: Number must be greater than zero!");
        return;
    }

    if (counter === targetNumber) {
        feedback.textContent = "Congratulations! You matched the number!";
        score.wins++;
    } else {
        feedback.textContent = "Oops! Better luck next time.";
        score.losses++;
    }

    updateScore();
    clearInput();
}

function updateScore() {
    document.getElementById("wins").textContent = score.wins;
    document.getElementById("losses").textContent = score.losses;
}

function clearInput() {
    document.getElementById("targetNumber").value = "";
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    score.wins = 0;
    score.losses = 0;
    updateScore();
    document.querySelector(".counter").textContent = "0";
    document.getElementById("startStop").textContent = "Start";
    document.querySelector(".feedback").textContent = "";
    clearInput();
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("reset").addEventListener("click", reset);

