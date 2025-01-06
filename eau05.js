const arguments = process.argv.slice(2)

function strCompare() {
    const index = str.indexOf(strToFind)
    if (index === -1) {
        return false
    }
    return true
}

if (arguments.length !== 2) {
    console.error("error")
    process.exit()
}

const str = arguments[0]
const strToFind = arguments[1]

const result = strCompare(str, strToFind)

console.log(result)