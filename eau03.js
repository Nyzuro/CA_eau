//Utils
function fibonacci(number) {
  if (number < 2) {
    return number;
  }
  const suite = [0, 1];
  let indexFibonnaci = suite.length;
  while (indexFibonnaci < number) {
    suite.push(suite[indexFibonnaci - 1] + suite[indexFibonnaci - 2]);
    indexFibonnaci++;
  }
  return suite[indexFibonnaci - 1];
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

function isPositiveNumber(number) {
  if (number < 0) {
    console.error("Le nombre est trop petit");
    return;
  }
  return number;
}
//Parsing
function getArguments() {
  const arguments = process.argv.slice(2);
  return arguments;
}
//Resolution
function getFibonacciNumber() {
  const arguments = isValidArguments(getArguments());
  if (!arguments) return;
  const number = isPositiveNumber(isValidNumber(arguments));
  if (!number) return;
  return fibonacci(number);
}
//Affichage
console.log(getFibonacciNumber());
