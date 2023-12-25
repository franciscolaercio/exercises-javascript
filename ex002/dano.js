const nomeAtacante = prompt("Qual o nome do personagem de ataque?")
const poderDeAtaque = parseFloat(prompt("Qual o dano que o poder de ataque do " + nomeAtacante + " causa?"))
const nomeDefensor = prompt("Qual o nome do personagem de defesa?")
const pontosDeVida = parseFloat(prompt("Quantos pontos de vida tem o " + nomeDefensor + "?"))
const poderDeDefesa = parseFloat(prompt("Qual o dano que o poder de defesa pode amenizar?"))
const escudo = confirm("O " + nomeDefensor + " tem escudo? (Ok = Sim/Cancelar = Não)")

if (poderDeAtaque > poderDeDefesa && escudo === false) {
    const resultado1 = pontosDeVida - (poderDeAtaque - poderDeDefesa)
    alert("O " + nomeAtacante + " causou " + poderDeAtaque + " de dano." + 
    "\nO " + nomeDefensor + " defendeu " + poderDeDefesa + " pontos de vida do dano." + 
    "\nO " + nomeDefensor + " ficou com " + resultado1 + " pontos de vida restante."
    )
} else if (poderDeAtaque > poderDeDefesa && escudo === true) {
    const resultado2 = pontosDeVida - (poderDeAtaque - poderDeDefesa)/2
    alert("O " + nomeAtacante + " causou " + poderDeAtaque + " de dano." + 
    "\nO " + nomeDefensor + " defendeu " + poderDeDefesa + " pontos de vida; o escudo reduziu o dano sofrido." + 
    "\nO " + nomeDefensor + " ficou com " + resultado2 + " pontos de vida restante."
    )
} else {
    alert("O " + nomeDefensor + " não sofreu nenhum dano.")
}