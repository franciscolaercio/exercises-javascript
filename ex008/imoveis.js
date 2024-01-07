const property = []

let option = ""

do {
    option = prompt(
        "Bem-vindo(a) ao Cadastro de Imóveis!\n" +
        property.length + " imóveis cadastrados." +
        "\n\n1. Salvar um novo imóvel" +
        "\n2. Mostrar todos os imóveis salvos" +
        "\n3. Sair"
    )

    switch (option){
        case "1" :
            const newProperty = {}
            
            newProperty.owner = prompt("Qual o nome do(a) proprietário(a) do imóvel?")
            newProperty.bedrooms = prompt("Quantos quartos possui o imóvel?")
            newProperty.bathrooms = prompt("Quantos banheiros possui o imóvel?")
            newProperty.garage = prompt("O imóvel possui garagem? (Sim/Não)")
            
            const confirmation = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + newProperty.owner +
                "\nQuartos: " + newProperty.bedrooms +
                "\nBanheiros: " + newProperty.bathrooms +
                "\nPossui Garagem? " + newProperty.garage
            )
        
            if (confirmation) {
            property.push(newProperty)
            }
            break
        case "2" :
            for (let i = 0; i < property.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + property[i].owner +
                    "\nQuartos: " + property[i].bedrooms +
                    "\nBanheiros: " + property[i].bathrooms +
                    "\nPossui Garagem? " + property[i].garage
                  )
                
            }
            break
        case "3" :
            alert("Encerrando...")
            break
        default:
            alert("Digite 1, 2 ou 3")
    }

} while (option !== "3")