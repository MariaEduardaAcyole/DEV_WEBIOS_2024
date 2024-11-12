
//classe = template para o obj
// class NomeClasse {
//     constructor() {
//         x = x;
//     }
// }
////////////

//METODOS

// class NomeClasse{
//     constructor(){}
//     metodo_1(){}
//     metodo_2(){}
// }


class Aluno {
    constructor(nome, idade, altura, isCracha, isCamisa, cor, ano) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.isCracha = isCracha;
        this.isCamisa = isCamisa;
        this.cor = cor;
        this.ano = ano;

    }

    retornaIdade(){
        let dataCompleta = new Date();
        let pegaAno = dataCompleta.getFullYear()
        return pegaAno - this.ano
    }
}


//OBJETO Date -- retorna informações de data de acordo com oque esta cofigurado no seu computador/servidor

//instancia = copias
let aluno1 = new Aluno('manasses', 27, 1.90, true, true, 'Black', 1980)
let aluno2 = new Aluno('Jeff', 19, 1.70, true, true, 'White', 2005)

// console.log('primeiro aluno:', aluno1, "segundo aluno", aluno2)

console.log(`Idade do aluno 1 após calculo: ${aluno1.retornaIdade()}`)


