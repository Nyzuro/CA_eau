const characters = process.argv.slice(2)

function indexWanted() {
    const wanted = characters.pop()
    const array = characters
    const find = array.indexOf(wanted)
    if (find === -1) {
        return find
    }
    return find
}

if (characters.length < 2) {
    console.error("error")
    process.exit()
}

console.log(indexWanted(characters))