const args = process.argv.slice(2)

function numberDifference() {
    const numbers = args
    let minimalDifference = null
    for (i = 0; numbers[i]; i++) {
        for (j = i + 1; numbers[j]; j++) {
            const difference = Math.abs(numbers[i] - numbers[j])
            if (!minimalDifference || difference < minimalDifference) {
                minimalDifference = difference
            }
        }
    }
    return minimalDifference
}

if (args.length < 2) {
    console.error("error")
    process.exit()
} for (i of args) {
    if (isNaN(i)) {
        console.error("error")
        process.exit()
    }
}

console.log(numberDifference())