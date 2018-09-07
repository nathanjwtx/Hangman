const HangmanGame = function (word, guesses) {
    this.word = word
    this.guesses = guesses
}

Person.prototype.getBio = function () {
    return `${this.firstName} is ${this.age}`
}

const newGame = new HangmanGame('tree', 2)
console.log(newGame.getBio())

const newGame2 = new HangmanGame('wibble', 3)
console.log(newGame2.getBio())