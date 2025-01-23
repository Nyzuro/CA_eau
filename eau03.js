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
        console.error("Le nombre d'arguments n'est pas bon")
        process.exit()
    } if (arguments[0] < 0) {
        console.error("Le nombre est trop petit")
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
function getFibonacciNumber() {
    const number = isValidNumber(isValidArguments(getArguments()))

    return fibonacci(number)
}
//Affichage
console.log(getFibonacciNumber())