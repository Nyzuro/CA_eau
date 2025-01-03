const arguments = process.argv.slice(2)
//Fonctions
function findFirstNumber(numberTest) {
    numberTest++
    for (let count; count != 2; numberTest++) {
        count = 0
        for (i = 1; i <= numberTest; i++) {
            if (numberTest % i === 0) {
                count++
            }
        }
    }
    return numberTest - 1
}
//Gestion d'erreurs
if (arguments.length != 1 || isNaN(arguments) || arguments < 0) {
    console.error(-1)
    process.exit()
}
//Parsing
let numberTest = arguments[0]
//Resolution
const firstNumber = findFirstNumber(numberTest)
//Affichage
console.log(firstNumber)