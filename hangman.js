class HangmanGame {
    constructor (word, guesses) {
        // removes spaces from the word before adding letters to the array
        // var re = /\s*/
        this.letters = word.toLowerCase().split('')
        this.guessedLetters = []
        this.guess = []
        this.guessesLeft = guesses
        this.word = word.toLowerCase()
        this.status = 'playing'
    }
    get GetPuzzle () {
        // create array of '*' on first guess
        if (this.guessedLetters.length === 0) {
            this.letters.forEach(l => {
                if (l === ' ') {
                    this.guess.push(' ')
                    this.guessedLetters.push(' ')
                } else {
                    this.guess.push('*')
                }
            })
        }
        this.updateStatus() 
    }
    updateStatus () {
        const finished = this.letters.every((letter) => this.guessedLetters.includes(letter))
        // console.log(`Guesses: ${this.guessesLeft}`)
        if (this.guessesLeft <= 0) {
            this.status = 'Failed'
        } else if (finished) {
            this.status = 'Finished'
        } else {
            this.status = 'playing'
        }
    }
    get getStatusMessage () {
        var statusString
        switch (newGame.status) {
            case 'playing':
                statusString = `Guesses left: ${newGame.guessesLeft}`
                break;
            case 'Finished':
                statusString = `Congratulations! You guessed the word.`
                break
            default:
                statusString = `Sorry, the word was "${newGame.word}". Better luck next time!`
                break;
        }
        return statusString
    }
    MakeGuess (letter) {
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
        for (var i = 0; i < this.letters.length; i++) {
            if (this.guess[i] === '*' && letter === this.letters[i]) {
                this.guess[i] = letter.toLowerCase()
            }
        }
        var result = this.guess.join('')
        this.updateStatus(result)
        return result
    }
}

