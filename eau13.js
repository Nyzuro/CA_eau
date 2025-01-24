const args = process.argv.slice(2)

function selectSort(array) {
    for (let i = 0; i <= array.length - 2; i++) {
        let min = array[i]
        for (let j = i + 1; j <= array.length - 1; j++) {
            if (array[j] < min) {
                min = array[j]
            }
        }
        if (min !== array[i]) {
            const indexMin = array.indexOf(min)
            const temp = array[i]
            array[i] = min
            array[indexMin] = temp
        }
    }
    return array
}

if (args.length < 2) {
    console.error("Le nombre d'arguments est trop faible")
    process.exit()
}
const numbers = []
for (let arg of args) {
    if (isNaN(arg)) {
        console.error("Ce ne sont pas des nombres")
        process.exit()
    }
    numbers.push(Number(arg))
}

console.log(selectSort(numbers))