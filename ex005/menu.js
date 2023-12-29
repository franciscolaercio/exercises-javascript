let option = ""

do {
    option = prompt(
    "Seja bem-vindo(a)!" + 
    "\nEscolha uma opção:" + 
    "\n1. Opção 1" + 
    "\n2. Opção 2" + 
    "\n3. Opção 3" + 
    "\n4. Opção 4" + 
    "\n5. Encerrar"
    )
    
    switch (option) {
        case "1" :
            alert("Você escolheu a opção 1")
            break
        case "2" :
            alert("Você escolheu a opção 2")
            break
        case "3" :
            alert("Você escolheu a opção 3")
            break
        case "4" :
            alert("Você escolheu a opção 4")
            break
        case "5" :
            alert("Encerrando programa...")
            break
        default:
            alert("Entrada inválida! Escolha uma das cinco opções.")
    }

} while (option !== "5")
