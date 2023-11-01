let resultado = soma(7, 18)

console.log("O resultado dessa função é: " + resultado)

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}

let usarName = getFirstName("Rodrigo Salsa Alves da Silva ")
console.log("Seja bem vindo " + usarName)
// função para retornar apenas o primeiro nome com o vetor [0] do nome completo.
function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}

