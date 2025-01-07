const arguments = process.argv.slice(2)

function uppercase() {
    let result = ""
    let lastLetter = 0
    for (i in string) {
        let charAscii = string.charCodeAt(i)
        if ((lastLetter === 0) &&
            (charAscii >= 97 && charAscii <= 122)) {
            charAscii -= 32
        }
        if ((lastLetter >= 97 && lastLetter <= 122) &&
            (charAscii >= 97 && charAscii <= 122)) {
            charAscii -= 32
        }
        else if ((lastLetter >= 65 && lastLetter <= 90)
            && (charAscii >= 65 && charAscii <= 90)) {
            charAscii += 32
        }
        if (charAscii >= 65 && charAscii <= 90 || charAscii >= 97 && charAscii <= 122) {
            lastLetter = charAscii
        }
        result += String.fromCharCode(charAscii)
    }
    return result
}

if (arguments.length != 1 || Number(arguments[0])) {
    console.error("error")
    process.exit()
}

const string = arguments[0]
console.log(uppercase(string))