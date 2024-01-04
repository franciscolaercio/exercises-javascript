const line = []

let option = ""

do {
    let numberedLine = "";
    for (let i = 0; i < line.length; i++) {
        numberedLine += (i + 1) + "º " + line[i] + "\n";
    }

    option = prompt(
        "Pacientes: \n" + numberedLine +
        "\n\nEscolha uma ação:" +
        "\n1. Adicionar paciente" +
        "\n2. Consultar paciente" +
        "\n3. Sair"
        )

    switch (option){
        case "1" :
            const newPatient = prompt("Qual é o nome do paciente?")
            line.push(newPatient)
            break
        case "2" :
            const consultedPatient = line.shift()
            if (consultedPatient){
            alert("O(a) paciente " + consultedPatient + " foi consultado(a).")
            } else {
                alert("Não há pacientes na fila.")
            }
            break
        case "3" :
            alert("Programa encerrado. Obrigado por utilizar o sistema de fila de espera do consultório médico!")
            break
        default:
            alert("Digite 1, 2 ou 3")
    }

} while (option !== "3") 