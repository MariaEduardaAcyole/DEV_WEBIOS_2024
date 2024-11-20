
let url = "https://dog.ceo/api/breeds/image/random"

//async = metodo assincrono = um método q pesquisa e retorna
//await =  Promise<Response> = o tempo de espera

const DogAPI = async () => {

    //fetch faz a consulta na api
    //then = tratar a resposta da api. Se for uma resposta de sucesso ou de erro
    await fetch(url).then((response) => {//pode ser qualquer nome de parametro

        return response.json(); //transforma em formato json -> objeto
    }).then((response) => {
        //apresentar as informaçoes
        document.getElementById('mostraJSON').innerText = JSON.stringify(response)
        //Transformando objeto -> json

        let image = `<img src="${response.message}" style="width:100% height: 100%" alt="">`

        document.getElementById('mostraIMG').innerHTML = image

    })
    //    let exemplo = resp.json() // Transforma em objeto

}

DogAPI()    