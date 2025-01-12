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

const argsNumber = []
for (i of args) {
    const currentNumber = parseInt(i)
    if (isNaN(currentNumber)) {
        console.error("error")
        process.exit()
    }
    argsNumber.push(currentNumber)
}
if (args.length < 2) {
    console.error("error")
    process.exit()
}

console.log(selectSort(argsNumber))