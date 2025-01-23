//Utils
function nextPrimeNumber(number) {
    if (number < 2) {
        return 2
    }
    let isPrime = false
    let numberTest
    for (numberTest = number + 1; isPrime === false; numberTest++) {
        for (let i = 2; i < numberTest; i++) {
            if (numberTest % i === 0) {
                isPrime = false
                break
            } else {
                isPrime = true
            }
        }
    }
    return numberTest - 1
}
//Gestion d'erreurs
function isValidArguments(arguments) {
    if (arguments.length != 1) {
        console.error("Le nombre d'arguments n'est pas bon")
        process.exit()
    } else {
        return arguments
    }
}

function isValidNumber(number) {
    if (!isNaN(number)) {
        return Number(number)
    } else {
        console.error("L'argument n'est pas un nombre")
        process.exit()
    }
}
//Parsing
function getArguments() {
    const arguments = process.argv.slice(2)
    return arguments
}
//Resolution
function getNextPrimeNumber() {
    const number = isValidNumber(isValidArguments(getArguments()))
    return nextPrimeNumber(number)
}
//Affichage
console.log(getNextPrimeNumber())