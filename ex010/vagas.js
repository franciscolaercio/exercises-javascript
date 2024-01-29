const jobs = []

function listJobs() {
    if (jobs.length === 0) {
        alert("Não há vagas disponíveis.");
        return;
    }

    const jobsInText = jobs.reduce((accumulator, jobs, index) => {
        accumulator += index + ". "
        accumulator += jobs.name
        accumulator += " (" + jobs.candidates.length + " candidatos) \n"
        return accumulator
    }, '')
    alert(jobsInText)
}

function createJob() {
    const name = prompt("Informe um nome para a vaga:")
    const description = prompt("Informe uma descrição para essa vaga:")
    const limitDate = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga:")

    const confirmation = confirm(
        "As informações que serão enviadas estão corretas?\n" + 
        "Nome: " + name + "\n" + 
        "Descrição: " + description + "\n" +
        "Data limite: " + limitDate
    )

    if (confirmation) {
        const createJobs = {name, description, limitDate, candidates: []}
        jobs.push(createJobs)
        alert("Vaga criada com sucesso.")
    }
}

function displayJobs() {
    const index = prompt("Informe o índice da vaga que deseja exibir:")
    if (index >= jobs.length || index < 0) {
        alert("Índice inválido")
        return
    }
    const job = jobs[index]

    const candidatesInText = job.candidates.reduce((accumulator, candidate) => accumulator + "\n - " + candidate, "")

    alert(
        "Vaga nº " + index + 
        "\nNome: " + job.name +
        "\nDescrição: " + job.description + 
        "\nData limite: " + job.limitDate +
        "\nQuantidade de candidatos: " + job.candidates.length + 
        "\nCandidatos inscritos: " + candidatesInText
    )
}

function newCandidate() {
    const candidate = prompt("Informe o nome do(a) candidato(a):")
    const index = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")

    if (index >= jobs.length || index < 0) {
        alert("Índice inválido")
        return
    }

    const job = jobs[index]

    const confirmation = confirm(
        "Confirma se inscrever nesta vaga?" +
        "\n\nVaga nº " + index + 
        "\nNome: " + job.name +
        "\nDescrição: " + job.description + 
        "\nData limite: " + job.limitDate
        )

    if (confirmation) {
        job.candidates.push(candidate)
        alert("Inscrição realizada com sucesso.")
    }
}

function deleteJob() {
    const index = prompt("Informe o índice da vaga para a qual deseja se excluir:")

    if (index >= jobs.length || index < 0) {
        alert("Índice inválido")
        return
    }
    
    const job = jobs[index]

    const confirmation = confirm(
        "Confirma excluir esta vaga?" +
        "\n\nVaga nº " + index + 
        "\nNome: " + job.name +
        "\nDescrição: " + job.description + 
        "\nData limite: " + job.limitDate
        )
    
    if (confirmation) {
        jobs.splice(index, 1)
        alert("Vaga excluída com sucesso.")
    }
}

function displayMenu() {
    return prompt(
        "Bem vindo!" + 
        "\n\nEscolha uma opção:" + 
        "\n1. Listar vagas disponíveis" + 
        "\n2. Criar uma nova vaga" + 
        "\n3. Visualizar uma vaga" + 
        "\n4. Inscrever um candidato em uma vaga" + 
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
        )
}

function execute(){
    let option = ""
    
    do {
        option = displayMenu()
        
        switch (option) {
            case "1":
                listJobs()
                break
            case "2":
                createJob()
                break
            case "3":
                displayJobs()
                break
            case "4":
                newCandidate()
                break
            case "5":
                deleteJob()
                break
            case "6":
                alert("Encerrando...")
                break
            default: 
                alert("Digite um número (1, 2, 3...)")
        }

    } while (option !== "6")
}
execute()



