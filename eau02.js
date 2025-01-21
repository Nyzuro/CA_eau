const arguments = process.argv.slice(2)

function reversedArguments(arguments) {
    for (let i = arguments.length - 1; i >= 0; i--) {
        console.log(arguments[i])
    }
}

if (arguments.length < 1) {
    console.error("error")
    process.exit()
}

reversedArguments(arguments)