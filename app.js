/*global getPuzzle, HangmanGame */

const newGame = new HangmanGame('TREE HOUSE', 2);
newGame.GetPuzzle;

window.addEventListener('keypress', (e) => {
    // debugger
    if (newGame.status === 'playing') {
        const guess = String.fromCharCode(e.charCode);
        // console.log(newGame.letters)
        generateDOM(newGame.MakeGuess(guess))   ;
    }
});

const generateDOM = (guess) => {
    const guessRoot = document.createElement('div');
    const guessText = document.createElement('span');
    const newPara = document.createElement('p');
    // console.log(guess)

    guessText.textContent = guess;
    guessRoot.appendChild(guessText);
    guessText.appendChild(newPara);

    document.querySelector('#guess').appendChild(guessText);
    document.querySelector('#status').textContent = newGame.getStatusMessage;
};

// call getPuzzle XMLHTTPRequest version
// getPuzzle('3', (puzzle, error) => {
//     if (error) {
//         console.log(`Error: ${error}`);
//     } else {
//         console.log(puzzle);
//     }
// });

getPuzzle(3).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});