function numeroAleatorioEntre0e10000() {
    const min = 0
    const max = 10000
    const numeroAleatorio = Math.floor(Math.random()*(max - min + 1)) + min
    
    return numeroAleatorio
}

console.log(numeroAleatorioEntre0e10000())