const factor1 = parseFloat(prompt(
    "Olá, eu sou o Robô da Tabuada!\n" +
    "Informe o número que você deseja calcular a tabuada:"
    ))

let multiplicationTable = ""

for (let factor2 = 1; factor2 <= 20; factor2++) {
    const result = factor1 * factor2
    multiplicationTable += factor1 + " * " + factor2 + " = " + result + "\n"
}

alert("Tabuada do " + factor1 + ":\n" + multiplicationTable)