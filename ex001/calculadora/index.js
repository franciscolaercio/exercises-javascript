let numero1 = prompt("Digite um número:")
let numero2 = prompt("Digite outro número:")

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)

const soma = numero1 + numero2
const subtracao = numero1 - numero2
const multiplicacao = numero1 * numero2
const divisao = numero1 / numero2

alert (
"Soma: " + soma +
"\nSubtração: " + subtracao +
"\nMultiplicação: " + multiplicacao +
"\nDivisão: " + divisao
)