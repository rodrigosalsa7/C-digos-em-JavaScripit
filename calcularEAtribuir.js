let preco = 20
//preco = preco + 5
preco += 5
console.log(preco)

preco -= 5
console.log(preco)

preco *= 2
console.log(preco)

//com as () o sistema ignora a prioridade da multiplicação e resolve primeiro a soma
let novoPreco = 10 * (15 + 20)
console.log(novoPreco)