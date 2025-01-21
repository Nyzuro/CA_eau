function twoNumbersCombs() {
    for (let i = 0; i < 100; i++) {
        for (let j = i + 1; j < 100; j++) {
            console.log(`${i} ${j}`)
        }
    }
}
twoNumbersCombs()