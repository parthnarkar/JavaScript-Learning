let randNum = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#userInput');
const submitButton = document.querySelector('#submit');
const previousGuess = document.querySelector('.prevGuess');
const remaining = document.querySelector('.remChances');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.result');

const p = document.createElement('p');

let previous = [];
let chances = 0;
let playGame = true;

if (playGame) {
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Enter a Valid Number");
    }
    else if (guess < 1) {
        alert("Enter a number more than 1");
    }
    else if (guess > 100) {
        alert("Enter a number less than 100");
    }
    else {
        previous.push(guess);
        chances++;

        if (chances === 10) {
            displayGuess(guess);
            displayMessage(`Game Over, Random Number was ${randNum}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randNum) {
        displayMessage(`You Guessed it Right!`);
        endGame();
    }
    else if (guess < randNum) {
        displayMessage(`The number is TOOO Low`);
    }
    else if(guess > randNum) {
        displayMessage(`The number is TOOO High`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    previousGuess.innerHTML += `${guess}  `;
    remaining.innerHTML = `${10 - chances}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2> ${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame" >Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click' , function(e){
        randNum = parseInt(Math.random() * 100 + 1);
        previous = [];
        chances = 0;
        userInput.value = '';
        previousGuess.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${10 - chances}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;

    })
}



