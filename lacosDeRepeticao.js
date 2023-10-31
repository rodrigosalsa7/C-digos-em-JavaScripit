//for

for (let contador = 0; contador < 4; contador ++)
{
    console.log(contador)
    console.log("Aumentando o contador...")
}

let pontosDeVida = 0

for(let i = 0; i < 11; i++){
    pontosDeVida += 1
    console.log("Tomou poção mágica, seu ponto de vida atual é: " + i)
}

console.log("Seu ponto de vida atual é: " + pontosDeVida)

//while = enquanto

let contador2 = 0
while(contador2 < 3){
    console.log("Olá!")
    contador2++
}

//do while = faça enquanto / será executado ao emnos uma vez a aplicação depois da verificação

let contador3 = 0 
do{
    console.log("Bem vindo")
    contador3++
} while (contador3 < 3)

