let procuraItemEmListaS1 = (lista, valor) => {
    for (var i = 0; i < lista.length; i++)
        if (lista[i] === valor)
            return i
    return undefined