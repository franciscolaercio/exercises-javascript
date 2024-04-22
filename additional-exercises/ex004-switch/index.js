const lightYearDistance = parseFloat(prompt("Qual a distância em anos-luz deseja-se converter?"))

const option = parseInt(prompt("Qual unidade deseja-se converter?\n1. Parsec (pc)\n2. Unidade Astronômica (AU)\n3. Quilômetros (km)" ))

let chosenUnity
let convertedOption

switch (option) {
    case 1 : 
        chosenUnity = "Parsec"
        convertedOption = lightYearDistance * 0.306601
        break
    case 2 : 
        chosenUnity = "Unidade Astronômica"
        convertedOption = lightYearDistance * 63241.1
        break
    case 3 : 
        chosenUnity = "Quilômetros"
        convertedOption = lightYearDistance * (9.5 * Math.pow(10, 12))
        break
    default : 
        chosenUnity = "Unidade não identificada"
        convertedOption = "Conversão fora do escopo"
}

alert("Distância em Anos-luz: " + lightYearDistance + "\n" + chosenUnity + ": " + convertedOption)