const HangmanGame = function (word, guesses) {
    // removes spaces from the word before adding letters to the array
    // var re = /\s*/
    this.letters = word.toLowerCase().split('')
    this.guessedLetters = []
    this.guess = []
    this.guessesLeft = guesses
    this.word = word.toLowerCase()
    this.status = 'playing'
}


HangmanGame.prototype.GetPuzzle = function () {
    // create array of '*' on first guess
    if (this.guessedLetters.length === 0) {
        this.letters.forEach(l => {
            l === ' ' ? this.guess.push(' ') : this.guess.push('*')
        })
    }
    // console.log('getpuzzle')   
    this.updateStatus() 
}

// HangmanGame.prototype.updateStatus = function (guess) {
//     // alternative methods. These don't need the 'guess' arguement: 
//     // 1. use a for each loop to check each in word against geussed letters using 'include'
//     // 2. create a callback function 
//     // const lettersUnguessed = this.word.filter((letter) => {
//     //     return !this.guessedLetters.includes(letter)
//     // })
//     // const finished = lettersUnguessed.length === 0

//     if (this.guessesLeft > 0 && guess === this.word) {
//         this.status = 'Finished'
//     } else if (this.guessesLeft === 0) {
//         this.status = 'Failed'
//     }
//     console.log(this.status)
// }

// alternative solution using array.every
HangmanGame.prototype.updateStatus = function () {
    const finished = this.letters.every((letter) => this.guessedLetters.includes(letter))
    // console.log(`Guesses: ${this.guessesLeft}`)
    if (this.guessesLeft <= 0) {
        this.status = 'Failed'
    } else if (finished) {
        this.status = 'Finished'
    } else {
        this.status = 'playing'
    }
    // console.log(`Status: ${this.status}`)
}

HangmanGame.prototype.getStatusMessage = function () {
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
    // console.log(this.guess.join(''))
    // console.log(`Guesses remaining: ${this.guessesLeft}`)
    var result = this.guess.join('')
    this.updateStatus(result)
    return result
}
