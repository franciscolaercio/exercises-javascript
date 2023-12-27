let m = prompt("Informe o valor em metros que você vai querer converter:")

m = parseFloat(m)

const unit = prompt("Digite para qual unidade de medida você quer converter o valor " + m + ":" + 
"\nmm" + 
"\ncm" +
"\ndm" +
"\ndam" + 
"\nhm" + 
"\nkm"
)

switch (unit) {
    case "mm" :
        const mm = m * 1000
        alert(mm + "mm")
        break
    case "cm" :
        const cm = m * 100
        alert(cm + "cm")
        break
    case "dm" :
        const dm = m * 10
        alert(dm + "dm")
        break
    case "dam" :
        const dam = m / 10
        alert(dam + "dam")
        break
    case "hm" :
        const hm = m / 100
        alert(hm + "hm")
        break
    case "km" :
        const km = m / 1000
        alert(km + "km")
        break
    default :
        alert("Opção inválida")
}
