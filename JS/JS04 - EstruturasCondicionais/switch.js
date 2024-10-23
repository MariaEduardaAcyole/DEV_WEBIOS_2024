let media, falta;
falta = 4
media = 6.5
//6,5

console.log(`Faltas: ${falta} `)

if (media >= 7 && falta <= 5) {
    console.log(`${media} aluno APROVADO `)
} else if (media >= 6.5 && falta <= 5) {
    console.log(`${media} aluno APROVADO, por conselho`)
} else {
    console.log(`${media} aluno REPROVADO`)
}

let peso = 100;
let altura = 1.50;
let calculo;

calculo = peso / (altura * altura);

if (calculo < 18.5) {
    console.log(`Seu IMC: ${calculo.toFixed(2)} - Abaixo do peso`);
} else if (calculo >= 18.5 && calculo <= 25) { // Corrigido aqui
    console.log(`Seu IMC: ${calculo.toFixed(2)} - Peso normal`);
} else {
    console.log(`Seu IMC: ${calculo.toFixed(2)} - Acima do peso`);
}


let valor = 5;
switch (valor) {
    case 1:
        console.log('voce foi otimo :D')
        break;
    case 2:
        console.log('voce foi bom :)')
        break;

    case 3:
        console.log('voce foi regular :|')
        break;

    case 2:
        console.log('voce foi ruim :(')
        break;

    case 2:
        console.log('voce foi pessimo :c')
        break;

    default:
        console.log('voce nao foi avaliado :^)')
        break;
}
