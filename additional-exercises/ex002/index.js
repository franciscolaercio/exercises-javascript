const oldenPersonName = prompt("Qual o nome da pessoa mais velha?")
const olderPersonAge = parseInt(prompt("Qual a idade da pessoa mais velha?"))
const youngerPersonName = prompt("Qual o nome da pessoa mais nova?")
const youngerPersonAge = parseInt(prompt("Qual a idade da pessoa mais nova?"))

const ageDifference = olderPersonAge - youngerPersonAge

alert(
    oldenPersonName + " tem " + olderPersonAge + " anos.\n" +
    youngerPersonName + " tem " + youngerPersonAge + " anos.\n\n" +
    "A diferença de idade de " + oldenPersonName + " e " + youngerPersonName + " é " + ageDifference + "."
    )