const args = process.argv.slice(2)

function selectSort(array) {
    const length = array.length
    for (i = 0; i <= length - 2; i++) {
        let min = array[i]
        let j = i + 1
        for (j = i + 1; j <= length - 1; j++) {
            if (array[j] < min) {
                min = array[j]
            }
        }
        if (min != array[i]) {
            const indexMin = array.indexOf(min)
            const temp = array[i]
            array[i] = min
            array[indexMin] = temp
        }
    }
    return array
}

const numbers = []
for (let arg of args) {
    if (isNaN(arg)) {
        console.error("Ce ne sont pas des nombres")
        process.exit()
    }
    numbers.push(Number(arg))
}
if (args.length < 2) {
    console.error("Le nombre d'arguments est trop faible")
    process.exit()
}

console.log(selectSort(numbers))