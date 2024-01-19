function areaTriangle() {
    const base = parseFloat(prompt("Informe a base do triângulo:"))
    const height = parseFloat(prompt("Informe a altura do triângulo:"))
    return (base * height) / 2
}

function areaRectangle() {
    const length = parseFloat(prompt("Informe o comprimento do retângulo:"))
    const width = parseFloat(prompt("Informe a largura do retângulo:"))
    return length * width
}

function areaSquare() {
    const side = parseFloat(prompt("Informe o lado do quadrado:"))
    return side * side
}

function areaTrapezoid() {
    const baseShorter = parseFloat(prompt("Informe a base menor do trapézio:"))
    const baseLonger = parseFloat(prompt("Informe a base maior do trapézio:"))
    const height = parseFloat(prompt("Informe a altura do trapézio:"))
    return ((baseShorter + baseLonger) * height) / 2
}

function areaCircle() {
    const radius = parseFloat(prompt("Informe o raio do círculo:"))
    return (radius * radius) * 3.14
}

function displayMenu() {
    return prompt(
        "Bem vindo à calculadora geométrica!" + 
        "\n\nInforme qual cálculo deve ser feito:" + 
        "\n1. Área do triângulo" + 
        "\n2. Área do retângulo" + 
        "\n3. Área do quadrado" + 
        "\n4. Área do trapézio" + 
        "\n5. Área do círculo" +
        "\n6. Sair"
        )
}

function execute(){
    let option = ""
    
    do {
        option = displayMenu()
        let resultado
        
        switch (option) {
            case "1":
                resultado = areaTriangle()
                break
            case "2":
                resultado = areaRectangle()
                break
            case "3":
                resultado = areaSquare()
                break
            case "4":
                resultado = areaTrapezoid()
                break
            case "5":
                resultado = areaCircle()
                break
            case "6":
                alert("Encerrando...")
                break
            default: 
                alert("Digite um número (1, 2, 3...)")
        }

        if (resultado) {
            alert("Resultado: " + resultado)
        }

    } while (option !== "6")
}

execute()