//Utils
function stringCompare(string, stringToFind) {
  for (let i = 0; i <= string.length; i++) {
    let j = 0;
    while (string[i] === stringToFind[j]) {
      i++;
      j++;
      if (j === stringToFind.length) return true;
    }
    if (j !== 0) {
      i--;
    }
  }
  return false;
}
//Gestion d'erreurs
function isValidArguments(arguments) {
  if (arguments.length != 2) {
    console.error("Le nombre d'arguments n'est pas bon");
    return;
  }
  for (const char of arguments) {
    if (!isNaN(char)) {
      console.error("Les arguments ne doivent pas etre des nombres");
      return;
    }
  }
  return arguments;
}
//Parsing
function getArguments() {
  const arguments = process.argv.slice(2);
  return arguments;
}
//Resolution
function resolveStringCompare() {
  const strings = isValidArguments(getArguments());
  if (!strings) return;
  return stringCompare(strings[0], strings[1]);
}

console.log(resolveStringCompare());
