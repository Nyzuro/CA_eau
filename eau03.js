//Utils
function fibonacci(number) {
    if (number < 2) {
        return number
    }
    let suite = [0, 1]
    for (let i = suite.length; i <= number; i++) {
        suite[i] = suite[i - 1] + suite[i - 2]
        if (i === number) {
            return suite[i]
        }
    }
}
//Gestion d'erreurs
function isValidArguments(arguments) {
    if (arguments.length != 1) {
        return console.log("-1")
    } if (arguments[0] < 0) {
        return console.log("-1")
    } else {
        return arguments
    }
}

function isValidNumber(number) {
    if (!isNaN(number)) {
        return Number(number)
    } else {
        return console.log("-1")
    }
}

//Parsing
function getArguments() {
    const arguments = process.argv.slice(2)
    return arguments
}

//Resolution
function getFibonacciNumber() {
    const argument = isValidArguments(getArguments())
    if (!argument) {
        return
    }

    const number = isValidNumber(getArguments())
    if (number === 0) {
        return console.log(fibonacci(number))
    } if (!number) {
        return
    }

    return console.log(fibonacci(number))
}

//Affichage
getFibonacciNumber()