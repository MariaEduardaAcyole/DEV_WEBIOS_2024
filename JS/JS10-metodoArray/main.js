let frutas = [
    "morango",
    "abacaxi",
    "jabuticaba",
    "manga",
    "limão",
    "uva",
    "maçã",
    "kiwi"
]

for (let i = 0 ; i <= frutas.length ; i++){
console.log(frutas[i])
}

frutas.forEach(Percorrer)

//valor = conteudo ; indice = indice
function Percorrer(valor, indice){
    console.log(`indice: ${indice} .    valor: ${valor}`);
}