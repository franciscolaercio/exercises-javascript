const spaceshipName = prompt("Digite o nome da nave")
let invertedName = ""

for (let i = spaceshipName.length - 1; i >= 0; i--) {
    if (spaceshipName[i] === "e") {
        break
    }
    invertedName += spaceshipName[i]
}

alert(
`Nome original da nave: ${spaceshipName}
Nome após ocultação: ${invertedName}`
)