// AND (&&) só mostra verdadeiro se duas condições forem verdadeiras

let idade = 18
let vistoVerificado = true
let podeViajar = (idade >= 18) && (vistoVerificado === true)
console.log("Essa pessoa pode viajar? " + podeViajar )

let idade2 = 16
let vistoVerificado2 = true
let podeViajar2 = (idade2 >= 18) && (vistoVerificado2 === true)
console.log("Pode viajar? " + podeViajar2)

// OR (||) só mostra verdadeiro se uma das afirmações estiver verdadeira
// nosso boneco só pode sair se estiver sem chuva ou com guarda chuva

let tempo = "sol"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("Nosso personagem pode sair? " + podeSair)

// NOT (!) - nega a afirmação

let tempo2 = "chuva"
let resultado = tempo2 !== "chuva"
console.log(!resultado)