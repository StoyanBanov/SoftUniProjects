function guessANumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    let numberToGuess = Math.floor(Math.random() * 100)
    
    let borderLow = 0
    let borderHigh = 100
    
    let recursiveReadLineAsync = () => {
        readline.question('Guess a number between (0-100): ', number => {
            if(number >= borderLow && number <= borderHigh){
                if(number > numberToGuess){
                    borderHigh = number
                    console.log('Lower!');
                    recursiveReadLineAsync()
                }else if(number < numberToGuess){
                    borderLow = number
                    console.log('Higher!');
                    recursiveReadLineAsync()
                }else{
                    console.log('You guessed it!');
                    readline.close()
                }
            }else{
                console.log('Invalid input! Try again.');
                recursiveReadLineAsync()
            }
        })
    }
    recursiveReadLineAsync()
}

guessANumber()