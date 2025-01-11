const args = process.argv.slice(2)

function bubble_sort(array) {
    for (i = array.length; i >= 1; i--) {
        let j = 0
        for (; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
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

console.log(bubble_sort(argsNumber))