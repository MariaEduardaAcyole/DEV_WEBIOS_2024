//usuario insere numero <input> <button>
// sistema calcula
// usuario pede resultado
// resultado apresentado

let valor = document.getElementById('recebeValor')
let span = document.getElementById('resultado')

let Tabuada = () => {
    let guardaValor = valor.value;

    if (guardaValor == '') {
      resultado.innerHTML = 'digite um valor valido '
      resultado.style.color = 'red'
    }
    else {
        resultado.style.color = 'black'

        for (let cont = 1; cont <= 10; cont++) {
            let resultado = guardaValor * cont
            span.innerHTML += `<br> ${guardaValor} X ${cont} = ${resultado}`
        }
    }
}

let botaoLimpar = document.getElementsByClassName('limpa')
let Limpar = () => {
    span.innerHTML = ``
    valor.value = ''
}