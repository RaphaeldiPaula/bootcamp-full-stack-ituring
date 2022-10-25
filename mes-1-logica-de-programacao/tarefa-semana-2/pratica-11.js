function conversaoParaRGB2(cor) {
    switch (cor) {
        case "vermelha":
            return "rgb(255,0,0)"
        case "laranja":
            return "rgb(255,128,0)"
        case "amarela":
            return "rgb(255,255,0)"
        case "verde":
            return "rgb(0,255,0)"
        case "azul claro":
            return "rgb(0,255,255)"
        case "azul marinho":
            return "rgb(0,0,255)"
        case "rosa":
            return "rgb(255,0,255)"
        default:
            return "rgb(255,0,255)"
    }
}

console.log(conversaoParaRGB1("vermelha"))
console.log(conversaoParaRGB2("laranja"))
console.log(conversaoParaRGB1("amarela"))
console.log(conversaoParaRGB2("verde"))
console.log(conversaoParaRGB1("azul claro"))
console.log(conversaoParaRGB2("azul marinho"))
console.log(conversaoParaRGB1("rosa"))
console.log(conversaoParaRGB2())