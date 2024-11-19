//JSON

let aluno = 
    {
        nome: 'duda',
        idade: 18,
        altura: 1.76,
        isCracha: true,
        isCamisa: true,
        isPaciencia: true,
        isChora: true,
        cor: 'rosa',
        notas: [10, 8, 9, 7, 8.5]
    }

   
console.log(JSON.stringify(aluno)) //transforma em JSON

let jsonito = '{"nome":"duda","idade":18,"altura":1.76,"isCracha":true,"isCamisa":true,"isPaciencia":true,"isChora":true,"cor":"rosa","notas":[10,8,9,7,8.5]}'

console.log(JSON.parse(jsonito)) // Transforma em objeto