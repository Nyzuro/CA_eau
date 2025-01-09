const arguments = process.argv.slice(2)

function checkLetter() {
    if ((charBefore >= 65 && charBefore <= 90) || (charBefore >= 97 && charBefore <= 122)) {
        if (charAscii >= 65 && charAscii <= 90) {
            charAscii += 32
        }
    }
}

function checkWhiteSpaces() {
    if (charBefore >= 9 && charBefore <= 13 || charBefore === 32) {
        if (charAscii >= 97 && charAscii <= 122) {
            charAscii -= 32
        }
    }
}

function uppercase() {
    let result = ""
    for (i in string) {
        charAscii = string.charCodeAt(i)
        charBefore = string.charCodeAt(i - 1)
        if (!charBefore && (charAscii >= 97 && charAscii <= 122)) {
            charAscii -= 32
        }
        checkWhiteSpaces(charBefore, charAscii)
        checkLetter(charBefore, charAscii)
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