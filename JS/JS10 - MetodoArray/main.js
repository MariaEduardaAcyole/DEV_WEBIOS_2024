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
///////////////////////////////////////////////////////////////
for (let i = 0; i <= frutas.length; i++) {
    console.log(frutas[i])
}
frutas.forEach(Percorrer)

//valor = conteudo ; indice = indice
function Percorrer(valor, indice) {
    console.log(`indice: ${indice} .    valor: ${valor}`);
}

frutas.forEach((valor, indice) => {
    console.log(valor);
    console.log(indice);
})
///////////////////////////////////////

//ForEach - faz a função do for = percorre 

let infoUsuario = [
    ["Ana", 100],
    ["pedro", 100],
    ["Luisa", 100]]

infoUsuario.forEach((valor, indice) => {
    if (indice === 1) {
        console.log(valor)
    }
})

//// MAP 

let marcasCelular = [
    "samsung",
    "apple",
    "xiomi",
    "nokia",
    "lg",
    "motorola"
]

console.log()
//Math. currently / Math.max / Math.min / Math.sqrt
let valores = [5, 8, 9, 3, 10, 58]

let numerosDois = valores.map(Math.sqrt)//raiz quadrada
console.log(numerosDois)

let menorNumero = Math.min.apply(Math, valores)//menor numero do array
let maiorNumero = Math.max.apply(Math, valores)//maior numero do array

console.log("menor:", menorNumero)
console.log("maior:", maiorNumero)

let filtrar = valores.filter((valor) => {//filtrar 
    return valor >= 16
}
)
console.log(filtrar)

console.log(valores) //nao muda o array principal

/////FIND - procura uma afirmação igual a true

let tarefa = [
    {
        tarefa: "dormir",
        isFeita: true
    },
    {
        tarefa: "limpar",
        isFeita: false
    },
    {
        tarefa: "torcer",
        isFeita: true
    }

]

// console.log(tarefa.find((item, isFeita) => {
//     return item.isFeita == false
// }))

let procura = tarefa.find((item, isFeita) => {
    return item.isFeita === true
})
console.log(procura)