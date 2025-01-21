function threeNumbersCombs() {
    for (let a = 0; a < 10; a++) {
        for (let b = a + + 1; b < 10; b++) {
            for (let c = b + 1; c < 10; c++) {
                const combination = `${a}${b}${c}`
                console.log(combination)
            }
        }
    }
}
threeNumbersCombs()