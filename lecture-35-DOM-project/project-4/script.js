let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#sumb');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.result');

const p = document.createElement(`p`);

let prevguess = [];
let NumGuess = 1;

let  playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
       e.preventDefault();
       const guess = parseInt( userInput.value);
       console.log(guess);
       validateGuess(guess);

    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter a valid number`);
    } else if(guess<1){
        alert(`Please enter a number more than1`);
    }else if(guess>100){
        alert(`Please enter a number less than 100`);
    }else{
        prevguess.push(guess);
        if(NumGuess===11){
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You Guessed it right`);
        endGame();
    }else if(guess<randomNumber){
        displayMessage(`Number is Too low`);
    }else if(guess.randomNumber){
        displayMessage(`Number is Too High`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},   `;
    NumGuess++;
    remaining.innerHTML = `${11-NumGuess}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('new-game-button');
    p.innerHTML =`<h2 id ="newgame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame =false;
    newgame();
}

function newgame(){
    const newGamebutton = document.querySelector('#newgame');
    newGamebutton.addEventListener('click', function(){
        randomNumber = (parseInt(Math.random()*100+1));
        prevguess = [];
        NumGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-NumGuess}`;
        lowOrHigh.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });

   
}









