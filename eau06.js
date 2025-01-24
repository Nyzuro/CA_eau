function isLower(character) {
    if (character >= "a" && character <= "z") {
        return true
    }
    return false
}

function isUpper(character) {
    if (character >= "A" && character <= "Z") {
        return true
    }
    return false
}

function upperOrLower(string) {
    let finalString = ""
    let isLastCharUpper = false
    for (let char of string) {
        if (isLastCharUpper) {
            if (isUpper(char)) {
                char = char.toLowerCase()
                isLastCharUpper = false
            } else if (isLower(char)) {
                isLastCharUpper = false
            }
            finalString += char
        }
        else {
            if (isLower(char)) {
                char = char.toUpperCase()
                isLastCharUpper = true
            } else if (isUpper(char)) {
                isLastCharUpper = true
            }
            finalString += char
        }
    }
    return finalString
}

function isValidArguments(arguments) {
    if (arguments.length != 1) {
        console.error("Le nombre d'arguments n'est pas bon")
        process.exit()
    } if (!isNaN(arguments[0])) {
        console.error("L'argument ne doit pas etre un nombre")
        process.exit()
    }
    return arguments
}

function getArguments() {
    const arguments = process.argv.slice(2)
    return arguments
}

function displayUpperOrLower() {
    const strings = isValidArguments(getArguments())
    console.log(strings)
    return upperOrLower(strings[0])
}

console.log(displayUpperOrLower())