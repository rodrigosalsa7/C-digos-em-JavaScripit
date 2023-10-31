// não imprime porque o if só pode imprimri se tiver um resultado TRUE
let ehLigado = false
if(ehLigado){
    console.log("Executou o comando.")
}

let ehLigado2 = true
if(ehLigado2){
    console.log("Executou o comando.")
}

let possuiOvos = false
let itensComprados = ""

if(possuiOvos){
    itensComprados = "Leite"
} else{
    console.log("Passou na sessão de congelados")
    itensComprados = "Lasanha congelada"
}

console.log("Item comprado: " + itensComprados)

let nivelFome = 7

if(nivelFome === 1){
console.log("Você está com pouca fome.")
} else if(nivelFome === 2){
console.log("Muita fome.")
} else {
console.log("Você está morrendo de fome")
}