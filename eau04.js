//Utils
function isPrimeNumber(dividend, divisor) {
  if (dividend % divisor === 0) {
    return false;
  }
  return true;
}

function nextPrimeNumber(number) {
  if (number < 2) {
    return 2;
  }
  let isPrime = false;
  let PrimeNumber;
  for (let i = number + 1; isPrime === false; i++) {
    for (let j = 2; j < i; j++) {
      if (isPrimeNumber(i, j)) {
        isPrime = true;
      } else {
        isPrime = false;
        break;
      }
    }
    PrimeNumber = i;
  }
  return PrimeNumber;
}
//Gestion d'erreurs
function isValidArguments(arguments) {
  if (arguments.length != 1) {
    console.error("Le nombre d'arguments n'est pas bon");
    return;
  }
  return arguments;
}

function isValidNumber(arguments) {
  if (isNaN(arguments[0])) {
    console.error("L'argument n'est pas un nombre");
    return;
  }
  const number = Number(arguments[0]);
  return number;
}
//Parsing
function getArguments() {
  const arguments = process.argv.slice(2);
  return arguments;
}
//Resolution
function getNextPrimeNumber() {
  const arguments = isValidArguments(getArguments());
  if (!arguments) return;
  const number = isValidNumber(arguments);
  if (!number) return;
  return nextPrimeNumber(number);
}
//Affichage
console.log(getNextPrimeNumber());
