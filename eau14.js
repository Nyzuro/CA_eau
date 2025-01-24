const args = process.argv.slice(2)

function asciiSort(array) {
    for (let i = array.length - 1; i >= 1; i--) {
        for (let j = 0; j <= i - 1; j++) {
            for (const k in array[j]) {
                const charAscii = array[j].charCodeAt(k)
                const nextCharAscii = array[j + 1].charCodeAt(k)
                if (charAscii < nextCharAscii) {
                    break
                }
                if (charAscii > nextCharAscii) {
                    const temp = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = temp
                    break
                }
            }
        }
    }
    return array
}

if (args.length < 1) {
    console.error("error")
    process.exit()
}

console.log(asciiSort(args))