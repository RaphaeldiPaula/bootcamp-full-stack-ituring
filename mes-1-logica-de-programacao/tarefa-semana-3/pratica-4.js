let exibeLista = lista => {
    for (let i = 0; i < lista.length; i++)
        console.log(`[${i}] ${lista[i]}`)
}

const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
exibeLista(listaSeriados)