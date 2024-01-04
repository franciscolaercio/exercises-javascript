const deck = []

let option = ""

do {

    option = prompt("No baralho há " + deck.length + " cartas." +
    "\n\nEscolha uma ação:" +
    "\n1. Adicionar uma carta" +
    "\n2. Puxar uma carta" +
    "\n3. Sair"
    )

    switch (option){
        case "1" :
            const newCard = prompt("Qual o nome da carta que vai ser adicionada?")
            deck.unshift(newCard)
            break
        case "2" :
            const pulledCard = deck.shift()
            if (!pulledCard) {
                alert("Não há nenhuma carta no baralho.")
            } else {
                alert("A carta " + "'" + pulledCard + "'" + " foi puxada.")
            }
            break
        case "3" :
            alert("Encerrando programa...")
            break
        default:
            alert("Digite 1, 2 ou 3")
    }

} while (option !== "3")