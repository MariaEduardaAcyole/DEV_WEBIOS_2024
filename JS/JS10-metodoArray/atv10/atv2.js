// Crie um Array unidimensional com 14 posições contendo os seguintes valores 17, 43, 8, 4, 97, 56, 29, 3,  75,  34, 88, 82, 61, 59  em cada posição irá conter um valor do tipo number.
// Utilizando Arrow Function com o método filter crie uma verificação para retornar somente os valores que estão entre o número 20 e 80.

let valores = [
    17, 43, 8, 4, 97, 56, 29, 3,  75,  34, 88, 82, 61, 59
]

valores.forEach((valor) => {
    if (valor >= 20 && valor <= 80) {
        console.log(valor)
    }
  
})
