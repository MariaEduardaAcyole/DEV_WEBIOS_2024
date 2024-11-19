var nome;
//FIZ DIFERENTE DO PEDIDO
function Contador() {
    //crir uma verificação par ou impar
    let imparPar = 5;
    // se for impar entoa vamos apresentar na tela todos os numeros imparaes de 1 até 50

    if (imparPar % 2 == 1) {
        for (let cont = imparPar; cont <= 50; cont += 2) {
            console.log(cont)
        }
        console.log('esse numero é Impar')
    }
    else if (imparPar % 2 == 0) {
        for (let cont = imparPar; cont <= 50; cont += 2) {

            console.log(cont)
        }
        console.log('esse numero par')
        //senão (se for par) vamos apresentar na tela todos os numeros pares de 1 ate 50
    }
}
console.log(Contador());


console.clear()
//arrow function

const ArrowFunction = () => {
    return 'ola Arrow function'
};

console.log(ArrowFunction())


const Soma = (num1, num2) => {
    return num1 + num2;
}
console.log(Soma(1, 3))

//EVENTOS - ao clicar

console.clear()

function Clique(){
    let clique = 0;
console.log(clique = clique+1)
}

console.log(Clique())

//chama popup

let ChamaPopup = () =>{
alert('Chamou?')
}

let passeMouse = () => {
console.log('o mano passou o mouse emcima de mim')
}