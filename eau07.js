const arguments = process.argv.slice(2)

function toLower(charAsciiBefore, charAscii) {
    if ((charAsciiBefore >= 65 && charAsciiBefore <= 90) || (charAsciiBefore >= 97 && charAsciiBefore <= 122)) {
        if (charAscii >= 65 && charAscii <= 90) {
            charAscii += 32
        }
    }
    return charAscii
}

function toUpper(charAsciiBefore, charAscii) {
    if (charAsciiBefore >= 9 && charAsciiBefore <= 13 || charAsciiBefore === 32) {
        if (charAscii >= 97 && charAscii <= 122) {
            charAscii -= 32
        }
    }
    return charAscii
}

function uppercase(string) {
    let result = ""
    for (let i = 0; string[i]; i++) {
        let charAscii = string.charCodeAt(i)
        let charAsciiBefore = string.charCodeAt(i - 1)
        if (!charAsciiBefore && (charAscii >= 97 && charAscii <= 122)) {
            charAscii -= 32
        }
        charAscii = toUpper(charAsciiBefore, charAscii)
        charAscii = toLower(charAsciiBefore, charAscii)
        result += String.fromCharCode(charAscii)
    }
    return result
}

if (arguments.length != 1) {
    console.error("Le nombre d'arguments n'est pas bon")
    process.exit()
} if (!isNaN(arguments[0])) {
    console.error("L'argument ne doit pas etre un nombre")
    process.exit()
}

const string = arguments[0]
console.log(uppercase(string))