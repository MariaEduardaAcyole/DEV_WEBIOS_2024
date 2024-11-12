// Crie uma classe chamada contaBancaria, no método constructor crie atributos nome, idade, salário, sexo, agência, conta, numeroConta.

class contaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }

    // Crie os métodos contaPoupança, contaCorrente e contaEstudante.
    contaPoupanca() {
        // - Conta poupança com taxa de 1,5% ao mês.
        let taxa = this.salario * 0.015
        let novoSalario = this.salario - taxa
        return novoSalario 

    }

    contaCorrente() {
        // - Conta corrente com taxa de 3,6% ao mês.
        let taxa = this.salario * 0.036
        let novoSalario = this.salario - taxa
        return novoSalario 

    }
    contaEstudante() {
        // - Conta estudante com taxa de 1,2% ao mês.
        let taxa = this.salario * 0.012
        let novoSalario = this.salario - taxa
        return novoSalario 

    }
}

// Instancie 3 objetos um para cada conta da classe contaBancaria e imprima as seguintes informações:
let cliente1 = new contaBancaria('Maria' , 18 , 1500, 'feminino', 0001, 999, 05)
let cliente2 = new contaBancaria('Eduarda' , 18 , 2000, 'feminino', 0001, 999, 05)
let cliente3 = new contaBancaria('Acyole' , 18 , 2500, 'feminino', 0001, 999, 05)

// Imprimir no console os dados do usuário, e o novo salário da aluna com o desconto aplicado

console.log("Cliente 1: ", cliente1 , 'Salario Novo: R$', cliente1.contaEstudante())
