function twoNumbersCombs() {
    for (i = 0; i >= 0 && i <= 9; i++) {
        j = 0
        for (; j >= 0 && j <= 9; j++) {
            if (j === 9) { // Dans le cas ou l'on est a la fin d'une dizaine (39 40)
                k = i + 1
            } else {
                k = 0
            }
            for (; k >= 0 && k <= 9; k++) {
                l = 0
                for (; l >= 0 && l <= 9; l++) {
                    if (i <= k) { // il faut check si le est bien <= au troisieme sinon c'est pas bon
                        if (i < k) {
                            const comb = `${i}${j} ${k}${l}`
                            console.log(comb)
                        } else if (j < l) { // dans le cas ou il est egal on check si le deuxieme est inferieur au troisieme sinon c'est pas bon
                            const comb = `${i}${j} ${k}${l}`
                            console.log(comb)
                        }
                    }
                }
            }
        }
    }
}
twoNumbersCombs()