let heroi = "Rodrigo Salsa"
let numeroVitorias = 120
let numeroDerrotas = 20
let nivel = "Lendário"
let saldoVitorias = numeroVitorias - numeroDerrotas


switch(saldoVitorias){
    case "<= 10":
        console.log("O Herói de nome " + heroi + " tem saldo de vitórias " + saldoVitorias + " e está no nível de " + nivel)
        break

        case "<= 11 && === 20":
            console.log("O Herói de nome " + heroi + " tem saldo de vitórias " + saldoVitorias + " e está no nível de " + nivel)
            break 

            case "<= 21 && === 50":
                console.log("O Herói de nome " + heroi + " tem saldo de vitórias " + saldoVitorias + " e está no nível de " + nivel)
                break 

                case "<= 51 && === 80":
                console.log("O Herói de nome " + heroi + " tem saldo de vitórias " + saldoVitorias + " e está no nível de " + nivel)
                break 

                case "<= 81 && === 90":
                console.log("O Herói de nome " + heroi + " tem saldo de vitórias " + saldoVitorias + " e está no nível de " + nivel)
                break 

                case "<= 91 && === 100":
                console.log("O Herói de nome " + heroi + " tem saldo de vitórias " + saldoVitorias + " e está no nível de " + nivel)
                break 

                default:
                console.log("O Herói de nome " + heroi + " tem saldo de vitórias " + saldoVitorias + " e está no nível de " + nivel)
                
}