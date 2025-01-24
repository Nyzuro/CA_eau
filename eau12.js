const args = process.argv.slice(2)

function bubble_sort(array) {
    for (let i = array.length; i >= 1; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
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

console.log(bubble_sort(numbers))