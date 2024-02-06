const pilotName = prompt("Qual o nome do(a) piloto(a)?")

let velocity = 0

const newVelocity = parseFloat(prompt("Qual velocidade o(a) "+ pilotName + " deseja acelerar a nave? (km/s)"))

const confirmation = confirm("Indo para velocidade " + newVelocity + " km/s.")

if(confirmation) {
    velocity = newVelocity
}

if (velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if (velocity < 40) {
    alert("A nave está devagar, podemos aumentar mais.")
} else if (velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if (velocity < 100) {
    alert("Velocidade alta! Considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert(
    "Piloto(a): " + pilotName +
    "\nVelocidade atual: " + velocity + " km/s"
    )