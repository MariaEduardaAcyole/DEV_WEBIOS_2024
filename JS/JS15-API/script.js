
let url = "https://dog.ceo/api/breeds/image/random"

//async = metodo assincrono = um método q pesquisa e retorna
//await =  Promise<Response> = o tempo de espera

const DogAPI = async () => {

    //faz a consulta na api
    let resp = await fetch(url)

   let exemplo = resp.json() // Transforma em objeto
    console.log(exemplo)

}

DogAPI()