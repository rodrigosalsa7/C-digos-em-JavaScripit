//estrutura de decisão
// switch/case/break/default

let fruta = "abacate"

switch(fruta){
    case "laranja":
        console.log("Hoje vou tomar suco de " + fruta)
        break

        case "banana":
            case "abacate":
            console.log("Hoje vou tomar vitamnina de " + fruta)
            break

            case "maça":
                console.log("Hoje eu vou tomar suco de " +  fruta)
                break
                
                //quando nenhuma das opções acima é true usa o defalt.
                default:
                console.log("Suco genérico")
}