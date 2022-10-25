let exibeGruposFormadosS1 = lista => {
    for (let i = 0; i < lista.length - 1; i += 2) {

        // Colocando as 2 pessoas para ser exibida no grupo atual
        let resultadoGrupoAtual = `Grupo ${i/2 + 1}: ${lista[i]}, ${lista[i+1]}`

        // Se eu estiver no último grupo e sobrar uma última pessoa, adicionar ela neste último grupo
        const sobrouAlguem = lista.length - i === 3
        if (sobrouAlguem) resultadoGrupoAtual += `, ${lista[lista.length-1]}`
        
        // Exibindo o valor do grupo atual
        console.log(resultadoGrupoAtual)
    }
}