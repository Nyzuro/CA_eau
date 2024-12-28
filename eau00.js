let a = 0

for (let b; a >= 0 && a <= 7; a++) {
    b = a + 1
    for (let c; b >= 1 && b <= 8; b++) {
        c = b + 1
        for (; c >= 2 && c <= 9; c++) {
            const combinations = `${a}${b}${c}`
            console.log(combinations)
        }
    }
}