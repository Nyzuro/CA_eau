const arguments = process.argv.slice(2)

//Fonctions
function fibonacci() {
    if (argument < 2) {
        return argument
    }
    let suite = [0, 1]
    for (i = suite.length; i <= argument; i++) {
        suite[i] = suite[i - 1] + suite[i - 2]
    }
    return suite[i - 1]
}
//Gestion d'erreurs
if (arguments < 0 || isNaN(arguments) || arguments.length != 1) {
    console.error(-1)
    process.exit()
}
//Parsing
const argument = arguments[0]
//Resolution
const indexFibonacci = fibonacci(argument)
//Affichage
console.log(indexFibonacci)