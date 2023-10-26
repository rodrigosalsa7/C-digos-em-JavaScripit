let pokemon = ["Pikachu", "Charmander", "Bulbassaur"]

//Para criar uma lista dentro da lista, com mais detalhes de cada um deles.
let timePokemon = [
    ["Pikachu", "M", 1],
    ["Charmander", "F", 5],
    ["Bulbassaur", "M", 12]
]
// vai imprimir: o pokemon pikachu é do sexo masculino e está no nível 1.
console.log(" O pokemon " + timePokemon[1][0] + " é do sexo " + timePokemon[1][1] + " e está no nível" + timePokemon[1][2])