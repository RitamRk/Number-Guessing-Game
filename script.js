let computerGuess;
let userGuess = [];
let userNumberUpdate = document.getElementById("textOutput");
let userValueUpdate = document.getElementById("inputBox");
let audio = new Audio("./audio.wav");

const init = () => {
    computerGuess = Math.floor(Math.random()*100);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
};

const body = document.getElementsByTagName("body")[0];
body.addEventListener("load",init());

const startGame = () => {
    audio.play();
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

const newGameButton = document.querySelector("#newGameButton button");
newGameButton.addEventListener("click", () => {
    audio.play();
    window.location.reload();
})

const startNewGame = () => {
    document.getElementById("newGameButton").style.display = "inline";
    userValueUpdate.setAttribute('disabled', '');
}

//const newGame

const input = document.getElementById("inputBox");
input.addEventListener("change", () => {
    // console.log("triggered");
    audio.play();
    const userValue = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userValue];
    document.getElementById("guess").innerHTML = userGuess;

    if (userGuess.length < maxGuess) {
        if(userValue > computerGuess) {
            userNumberUpdate.innerHTML = "Your Guess is High 😲";
            userValueUpdate.value = "";
        } else if(userValue < computerGuess) {
            userNumberUpdate.innerHTML = "Your Guess is Low 😥";
            userValueUpdate.value = "";
        } else {
            userNumberUpdate.innerHTML = "It's Correct 😋";
            userValueUpdate.value = "";
            startNewGame();
        }
    } else {
        if(userValue > computerGuess) {
            userNumberUpdate.innerHTML = `You Loose!! correct number was ${computerGuess}`;
            userValueUpdate.value = "";
            startNewGame();
        } else if(userValue < computerGuess) {
            uuserNumberUpdate.innerHTML = `You Loose!! correct number was ${computerGuess}`;
            userValueUpdate.value = "";
            startNewGame();
        } else {
            userNumberUpdate.innerHTML = "It's Correct 😋";
            userValueUpdate.value = "";
            startNewGame();
        }
    }

    document.getElementById("attempts").innerHTML = userGuess.length;

})

const easyMode = document.getElementById("easyMode");
easyMode.addEventListener("click", () => {
    maxGuess = 10;
    startGame();
})

const hardMode = document.getElementById("hardMode");
hardMode.addEventListener("click", () => {
    maxGuess = 5;
    startGame();
})