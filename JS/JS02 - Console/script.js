//nome de variaveis (não começa com numero, caractere especial)
// = atribuição == comparação === veriicar se é identico
// let - nao permite repetir o nome da variavel
// const - nao pode alterar ela

//Numeros
// infinity , -infinity = os numeros infinitos
// boleanos - true ou false

console.log('////AULA HELO/////')

var nome = 0 // numerico
var nome = 'Homer' //string
console.log(nome);

var teste // não iniciada

let nomeAluno = 'duda'
nomeAluno = 'jojo'
console.log('primeiro:', nomeAluno);

nomeAluno = "joaozinho"
console.log(`depois: ${nomeAluno}`); //

var teste = 0 / 0
console.log(teste)
var texto = 'lorem'
var verdadeira = true
var falsa = false

console.log('////AULA ERMESON/////')
/////////////////aula emerson
//'use strict' - nao permite criar variavel sem definila

// var , const , let
let name = 'Ermeson';

//interpolação
console.log("Bacon!");
console.log('Nicolas');
console.log(`Olá, ${name}!`);

// int float Number
let num = 1
let numeroInfinito = Infinity
let num01 = 1 //seria int 
let num02 = 5.5 //seria double

console.log('num:', num, 'numero:', numeroInfinito)

//| + | - | / | * | % |

let nota1, nota2, media
nota1 = 10
nota2 = 5
media = (nota1 + nota2) / 2

console.log(`Media:${media}`)

//BOLEANO
let valor, nume01, nume02;
nume01 = 10
nume02 = '20'
// valor = nume01 > nume02
// valor = nume01 >= nume02
// valor = nume01 < nume02
// valor = nume01 == nume02 //valores iguais?
valor = nume01 === nume02 // tipos iguais?
console.log(valor);
console.log(typeof nume01);
console.log(typeof nume02);

//operadores UNARIOS
let nomeTeste = 'duda'
let numero = 5
let numero2 = 10

console.log(typeof numero)
console.log(numero + numero2)
console.log(nomeTeste.length) // . para acessar um metodo

let sol = true
let dinheiro = 300;
// vou se tiver sol e o volor 300
let praia = sol == true && dinheiro >= 300 ? "Vamos a praia :(" : "Não vamos a praia :)"
//condição ? true : false
// sol && dinheiro tem que ser verdadeiro 
// sol || dinheiro tem que ser verdadeiro 
//   E
// V + V = V
// V + F = F
// F + V = F
// F + F = F
//   OU
// V + V = V
// V + F = V
// F + V = V
// F + F = F
console.log(praia)


let mediaDele = 7
let faltas = 10


let res = mediaDele >= 7 && faltas <= 5 ? "aprovado" : "reprovado" 
console.log('Resposta: ',res)


