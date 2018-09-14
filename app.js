const newGame = new HangmanGame('TREE', 2)
newGame.GetPuzzle

window.addEventListener('keypress', function (e) {
    // debugger
    if (newGame.status === 'playing') {
        const guess = String.fromCharCode(e.charCode)
        // console.log(newGame.letters)
        generateDOM(newGame.MakeGuess(guess))   
    }
    
})

const generateDOM = (guess) => {
    const guessRoot = document.createElement('div')
    const guessText = document.createElement('span')
    const newPara = document.createElement('p')
    // console.log(guess)

    guessText.textContent = guess
    guessRoot.appendChild(guessText)
    guessText.appendChild(newPara)

    document.querySelector('#guess').appendChild(guessText)
    document.querySelector('#status').textContent = newGame.getStatusMessage
}
