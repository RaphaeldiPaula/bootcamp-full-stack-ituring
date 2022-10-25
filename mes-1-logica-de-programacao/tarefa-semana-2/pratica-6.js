const calculaDesconto = (valorProduto, desconto) => valorProduto*(1-desconto/100)

console.log(calculaDesconto(11000, 25))