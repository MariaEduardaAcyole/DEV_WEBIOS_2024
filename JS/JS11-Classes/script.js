
//classe = template para o obj
class NomeClasse {
    constructor() {
        x = x;
    }
}
////////////

class Aluno {
    constructor(nome, idade, altura, isCracha, isCamisa, cor) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.isCracha = isCracha;
        this.isCamisa = isCamisa;
        this.cor = cor;
    }

    retornaIdade(){}

}

let aluno1 = new Aluno('manasses', 27, 1.90, true, true, 'Black')

let aluno2 = new Aluno('Jeff', 19, 1.70, true, true, 'White')

console.log('primeiro aluno:', aluno1, "segundo aluno", aluno2)

console.log(aluno2.nome)


//METODOS

class NomeClasse{
    constructor(){}
    metodo_1(){}
    metodo_2(){}
}
