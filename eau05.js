//Utils
function stringCompare(string, stringToFind) {
    let sameChar = false
    for (let i = 0; sameChar === false; i++) {
        if (string[i] === stringToFind[0]) {
            for (chartofind of stringToFind) {
                if (string[i] === chartofind) {
                    sameChar = true
                    i++
                } else {
                    sameChar = false
                    break
                }
            }
        }
        if (sameChar === false && !string[i]) {
            return false
        }
    }
    return sameChar
}
//Gestion d'erreurs
function isValidArguments(arguments) {
    if (arguments.length != 2) {
        console.error("Le nombre d'arguments n'est pas bon")
        process.exit()
    }
    for (constchar of arguments) {
        if (!isNaN(char)) {
            console.error("Les arguments ne doivent pas etre des nombres")
            process.exit()
        }
    }

    return arguments
}
//Parsing
function getArguments() {
    const arguments = process.argv.slice(2)
    return arguments
}
//Resolution
function resolveStringCompare() {
    const strings = isValidArguments(getArguments())
    return stringCompare(strings[0], strings[1])
}

console.log(resolveStringCompare())