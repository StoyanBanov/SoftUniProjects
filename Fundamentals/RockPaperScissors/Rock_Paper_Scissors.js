function rockPaperScissors() {
    const ROCK = 'Rock'
    const PAPER = 'Paper'
    const SCISSORS = 'Scissors'

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let recursiveReadLineAsync = () => {
        readline.question(`You play with(rock(r), paper(p), scissors(s)): `, input => {
            if (input != 'rock' && input != 'r' && input != 'paper' && input != 'p' && input != 'scissors' && input != 's') {
                console.log('Invalid input! Try again.');
                recursiveReadLineAsync()
            } else {
                let playersChoice
                if (input == 'rock' || input == 'r')
                    playersChoice = ROCK
                else if (input == 'paper' || input == 'p')
                    playersChoice = PAPER
                else if (input == 'scissors' || input == 's')
                    playersChoice = SCISSORS
                let computerRandNum = Math.floor(Math.random() * 3 + 1)
                let computersChoice
                switch (computerRandNum) {
                    case 1: computersChoice = ROCK; break
                    case 2: computersChoice = PAPER; break
                    case 3: computersChoice = SCISSORS; break
                }
                console.log(`You choose ${playersChoice}\nThe computer chooses ${computersChoice}`);
                if (computersChoice == playersChoice) {
                    console.log('Draw');
                } else {
                    if (computersChoice == 'Rock' && playersChoice == 'Paper') {
                        console.log('You win!');
                    } else if (computersChoice == 'Rock' && playersChoice == 'Scissors') {
                        console.log('The computer wins!');
                    } else if (computersChoice == 'Paper' && playersChoice == 'Rock') {
                        console.log('The computer wins!');
                    } else if (computersChoice == 'Paper' && playersChoice == 'Scissors') {
                        console.log('You win!');
                    } else if (computersChoice == 'Scissors' && playersChoice == 'Rock') {
                        console.log('You win!');
                    } else if (computersChoice == 'Scissors' && playersChoice == 'Paper') {
                        console.log('The computer wins!');
                    }
                }
                readline.close()
            }
        })
    }
    recursiveReadLineAsync()
}

rockPaperScissors()