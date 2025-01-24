const args = process.argv.slice(2)

function numberDifference(numbers) {
    let minimalDifference = Infinity
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; numbers[j]; j++) {
            const difference = Math.abs(numbers[i] - numbers[j])
            if (difference < minimalDifference) {
                minimalDifference = difference
            }
        }
    }
    return minimalDifference
}

if (args.length < 2) {
    console.error("Le nombre d'arguments est trop faible")
    process.exit()
}
for (let arg of args) {
    if (isNaN(arg)) {
        console.error("Ce ne sont pas des nombres")
        process.exit()
    }
    arg = Number(arg)
}

console.log(numberDifference(args))