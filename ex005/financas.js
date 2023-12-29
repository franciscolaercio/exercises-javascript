let balance = prompt("Qual o seu saldo de dinheiro?")
balance = parseFloat(balance)

let option = ""

do {
    option = prompt("O seu saldo é R$ " + balance + "." +  "\n1. Adicionar dinheiro" + "\n2. Remover dinheiro" + "\n3. Fechar programa")
    
    switch (option) {
        case "1":
          balance += parseFloat(prompt("Quanto de dinheiro você quer adicionar?"));
          alert("O seu novo saldo é R$ " + balance);
          break;
        case "2":
          balance -= parseFloat(prompt("Quanto de dinheiro você quer remover?"));
          alert("O seu novo saldo é R$ " + balance);
          break;
        case "3":
          alert("Fechando programa...");
          break;
        default :
          alert("Entrada inválida!")
      }

} while (option !== "3")