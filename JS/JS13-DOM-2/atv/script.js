// Utilizando o DOM crie um programa que, calcule o novo salário de um funcionário, 

let salario = document.querySelector(".salario")
let botao = document.querySelector("button")
let exibir = document.querySelector(".novo-salario")


let Calcular = () => {

    let pegaSalario = salario.value;
    alert('SALARIO: '+ pegaSalario)

    let aumento = pegaSalario * 0.17
    alert('AUMENTO: '+ aumento.toFixed(2))

    let novoSalario = pegaSalario + (aumento + 215)
    alert('NOVO SALARIO: '+ novoSalario.toFixed(2))

    // exibir.innerHTML = `seu salario é ${novoSalario}`
}


//com um aumento de 17% em cima do valor atual, mais um reajuste anual de 215 reais.

// Você deve ter um botão para chamar a função e calcular o novo salário do usuário e um campo input para o usuário inserir o salário atual.
