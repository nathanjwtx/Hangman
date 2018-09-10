const HangmanGame = function (word, guesses) {
    // removes spaces from the word before adding letters to the array
    // var re = /\s*/
    this.letters = word.toLowerCase().split('')
    this.guessedLetters = []
    this.guess = []
    this.guessesLeft = guesses
}


HangmanGame.prototype.GetPuzzle = function () {
    // create array of '*' on first guess
    if (this.guessedLetters.length === 0) {
        this.letters.forEach(l => {
            l === ' ' ? this.guess.push(' ') : this.guess.push('*')
        })
    }
}

HangmanGame.prototype.MakeGuess = function (letter) {
    // Alternative method: create a boolean variable to test unique/correct guess then use the boolean variables in the if statements
    // const isUnique = !this.guessedLetters.includes(letter.toLowerCase())

    // Test if already incorrect guess or guessed
    if (!this.letters.includes(letter.toLowerCase()) || this.guessedLetters.includes(letter.toLowerCase())) {
        this.guessesLeft -= 1
    }
    // Add used letters to guessedLetters array
    if (!this.guessedLetters.includes(letter.toLowerCase())) {
        this.guessedLetters.push(letter.toLowerCase())
    }
    for (i = 0; i < this.letters.length; i++) {
        if (this.guess[i] === '*' && letter === this.letters[i]) {
            this.guess[i] = letter.toLowerCase()
        }
    }
    console.log(this.guess.join(''))
    console.log(`Guesses remaining: ${this.guessesLeft}`)
}

const newGame = new HangmanGame('TREE HOUSE', 2)
newGame.GetPuzzle()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    newGame.MakeGuess(guess)
})

