function saudacao(nomeDoComprador) {
    console.log(`Olá, ${nomeDoComprador}!\n`)
}

function mensagem(nomeDoProduto, nomeDoRecebedor, enderecoEntrega) {
    console.log(
        `Fizemos a entrega do produto ${nomeDoProduto} no endereço ${enderecoEntrega} com sucesso!
        O seu produto foi recebido por: ${nomeDoRecebedor}
        Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.\n`
    )
}

function agradecimento(nomeEnviante) {
    console.log(
        `
        Atenciosamente,
        ${nomeEnviante}
        `        
    )
}

saudacao("Raphael")
mensagem("Tênis", "Isabela", "Av Dante , Vitoria/ES")
agradecimento("Equipe TC Runners")
