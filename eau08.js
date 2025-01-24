const arguments = process.argv.slice(2)

function checkNumber() {
    for (i in string) {
        charAscii = string.charCodeAt(i)
        if (charAscii < 48 || charAscii > 57) {
            return false
        }
    }
    return true
}

if (arguments.length != 1) {
    console.error("error")
    process.exit()
}

const string = arguments[0]
console.log(checkNumber(string))