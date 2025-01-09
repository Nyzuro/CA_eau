const arguments = process.argv.slice(2)

function minMax() {
    if (firstNumber < secondNumber)
        for (i = firstNumber; i < secondNumber; i++) {
            console.log(i)
        }
    else {
        for (i = secondNumber; i < firstNumber; i++) {
            console.log(i)
        }
    }
}

if (arguments.length != 2) {
    console.error("error")
    process.exit()
}
for (i of arguments) {
    if (isNaN(i)) {
        console.error("error")
        process.exit()
    }
}

const firstNumber = arguments[0]
const secondNumber = arguments[1]
minMax(firstNumber, secondNumber)