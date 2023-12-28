const tourist = prompt("Qual o seu nome?")
let numberOfCities = 0
let visitedCities = ""
let response = prompt("Você já visitou alguma cidade? (Sim/Não)")

while (response === "Sim") {
    let city = prompt("Informe o nome dessa cidade:")
    numberOfCities++
    visitedCities += city + "\n";
    response = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
    "Nome: " + tourist +
    "\n\nCidades visitadas: \n" + visitedCities +
    "\nNúmero de cidades visitadas: " + numberOfCities + "."
)

