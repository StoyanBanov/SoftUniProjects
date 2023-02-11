function generateRandomSentence() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    let names = ['Ivan', 'George', 'Nikola', 'Stoyan']
    let places = ['Sofia', 'Varna', 'Plovdiv']
    let verbs = ['eats', 'takes', 'finds']
    let nouns = ['stones', 'cake', 'laptop']
    let adverbs = ['slowly', 'gracefully', 'sadly']
    let details = ['at home', 'near school']

    function getRandomWord(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    function logSentence() {
        console.log(`${getRandomWord(names)} from ${getRandomWord(places)} ${getRandomWord(adverbs)} ${getRandomWord(verbs)} ${getRandomWord(nouns)} ${getRandomWord(details)}`);
    }

    console.log('Hello, this is your first generated sentence:');
    logSentence()

    function generateSentenceAsync() {
        readline.question('Click [Enter] to generate another sentence.', enter =>{
            logSentence()
            generateSentenceAsync()
        })
    }
    generateSentenceAsync()
}

generateRandomSentence()