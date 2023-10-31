let numero = 1
console.log(numero === 1)

// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo (se é texto ou número), dessa forma, a forma mais compelta é essa.

let marca = "Android"
console.log(marca === "Android")
console.log (marca !== "Android")

// !== se refere a ser diferente

let resultado = marca !== "Android"
console.log(resultado)

//verificando se as informações são as mesmas, guarando o valor da resposta em uma variável.

let cpfBloqeuado = "123.123.123-12"
let cpfUsuario = "321.321.321-32"
let resultadoCPF = cpfBloqeuado === cpfUsuario
console.log("O usuário está com pendências? " + resultadoCPF)