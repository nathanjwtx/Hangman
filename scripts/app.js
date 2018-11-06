/*global getPuzzle, HangmanGame */

let newGame;

window.addEventListener('keypress', (e) => {
    // debugger
    if (newGame.status === 'playing') {
        const guess = String.fromCharCode(e.charCode);
        // console.log(newGame.letters)
        generateDOM(newGame.MakeGuess(guess));
    }
});

const generateDOM = (guess) => {
    const guessRoot = document.createElement('div');
    const guessText = document.createElement('span');
    const newPara = document.createElement('p');
    // console.log(guess)

    guessText.textContent = guess;
    guessText.appendChild(newPara);
    guessRoot.appendChild(guessText);

    // document.querySelector('#guess').appendChild(guessText);
    // document.querySelector('#status').textContent = newGame.getStatusMessage;
    render();
};

// call getPuzzle XMLHTTPRequest version
// getPuzzle('3', (puzzle, error) => {
//     if (error) {
//         console.log(`Error: ${error}`);
//     } else {
//         console.log(puzzle);
//     }
// });

const render = () => {
    let guessEl = document.querySelector("#guess");
    document.querySelector('#status').textContent = newGame.getStatusMessage;
    // document.querySelector("#guess").textContent = newGame.DisplayGuess;
    guessEl.innerHTML = "";
    newGame.guess.forEach(letter => {
        const letterEl = document.createElement("span");
        letterEl.textContent = letter;
        guessEl.append(letterEl);
    });
}

const startGame = async function () {
    const newPuzzle = await getPuzzleFromWeb("3");
    newGame = new HangmanGame(newPuzzle, 5);
    newGame.GetPuzzle;
    render();
}

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
