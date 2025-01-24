function indexWanted(strings, wanted) {
    let isSameChar = false
    let i = 0
    while (!isSameChar) {
        for (let j = 0; strings[i][j]; j++) {
            if (strings[i][j] === wanted[0]) {
                for (const char of wanted) {
                    if (strings[i][j] === char) {
                        isSameChar = true
                        j++
                    } else {
                        isSameChar = false
                        break
                    }
                }
            }
        }
        i++
    }
    if (!isSameChar && !strings[i]) {
        return -1
    }
    return i - 1
}

function isValidArguments(arguments) {
    if (arguments.length < 2) {
        console.error("Le nombre d'arguments est trop faible")
        process.exit()
    }
    return arguments
}

function getArguments() {
    const arguments = process.argv.slice(2)
    return arguments
}

function findIndexWanted() {
    const arrayOfStrings = isValidArguments(getArguments())
    const wanted = arrayOfStrings.pop()
    const strings = arrayOfStrings
    return indexWanted(strings, wanted)
}

console.log(findIndexWanted())