//para declarar uma variável dentro de uma função e pode agregar mais de um valor
torrar("pão de Forma", "Rodrigo")
torrar("pão integral", "Bruna")
torrar("pão doce")

//define o nome do cliente que mostrará quando não tiver nome declarado no pedido
function torrar(pao, nome =  "Cliente"){
    console.log("Torrada feita com " + pao)
    console.log("Foi um pedido feito por: " +  nome)
} 