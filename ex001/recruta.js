const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()

const primeiroNome = prompt("Qual o seu primeiro nome?")
const sobrenome = prompt("Qual o seu sobrenome?")
const campoDeEstudo = prompt("Qual o seu campo de estudo?")
let anoDeNascimento = prompt("Qual o seu ano de nascimento?")

anoDeNascimento = parseFloat(anoDeNascimento)

let idade = anoAtual - anoDeNascimento

alert (
    "Cadastrado com sucesso!\n" +
    "\nNome completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de Estudo: " + campoDeEstudo + 
    "\nIdade: " + idade
)
