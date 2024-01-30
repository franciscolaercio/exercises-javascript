alert("Bem-vindo! A seguir pediremos que informe alguns dados.")

const Username = prompt("Informe o seu nome:")
const age = prompt("Informe a sua idade:")
const ageConfirmation = confirm("A sua idade é mesmo " + age + " anos?")


if (ageConfirmation) {
    const yes = "confirmada"
    alert(
        "Nome: " + Username +
        "\nIdade: " + age + 
        "\nConfirmação: " +  yes
    )
} else {
    const no = "não confirmada"
    alert(
        "Nome: " + Username +
        "\nIdade: " + age + 
        "\nConfirmação: " + no
    )
}
