const HangmanGame = function (word, guesses) {
    // removes spaces from the word before adding letters to the array
    // var re = /\s*/
    this.letters = word.toLowerCase().split('')
    this.guessedLetters = []
    this.guess = []
    this.guessesLeft = guesses
}


HangmanGame.prototype.GetPuzzle = function (letter) {
    // create array of '*' on first guess
    if (this.guessedLetters.length === 0) {
        this.letters.forEach(letter => {
            letter === ' ' ? this.guess.push(' ') : this.guess.push('*')
        })
    }
    // console.log(this.guess)
    // Add used letters to guessedLetters array
    this.guessedLetters.push(letter)
    
    for (i = 0; i < this.letters.length; i++) {
        if (this.guess[i] === '*' && letter === this.letters[i]) {
            this.guess[i] = letter
        }
    }
    console.log(this.guess.join(''))
}

const newGame = new HangmanGame('TREE HOUSE', 2)
console.log(newGame.letters)
newGame.GetPuzzle('t')
console.log(newGame.guessedLetters)
newGame.GetPuzzle('a')
console.log(newGame.guessedLetters)
newGame.GetPuzzle('e')
console.log(newGame.guessedLetters)
newGame.GetPuzzle('h')
console.log(newGame.guessedLetters)
