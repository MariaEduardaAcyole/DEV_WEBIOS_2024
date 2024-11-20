// let URL = 'https://viacep.com.br/ws/01001000/json/'

// async function BuscarCEP() {

//     let resp = await fetch(URL)

//     let exemplo = resp.json();
//     console.log(exemplo)
// }

// BuscarCEP();

// let URL = 'https://viacep.com.br/ws/01001000/json/'
// let cep = document.getElementById('cep')


// async function BuscarCEP() {

//     await fetch(URL).then((response) => {
//         //transformar JSON em OBJ
//         return response.json();
//     })

//         .then((response) => {

//             document.getElementById('cep').value = response.cep;

//             document.getElementById('logradouro').value = response.logradouro;

//             document.getElementById('bairro').value = response.bairro;

//             document.getElementById('complemento').value = response.complemento;

//             document.getElementById('estado').value = response.estado;
            
//             // document.getElementById('exibir').innerHTML = response.cep;

//         })
// }

// BuscarCEP();

// let viacep =
// {
//     cep: "01001-000",
//     logradouro: "Praça da Sé",
//     complemento: "lado ímpar",
//     unidade: "",
//     bairro: "Sé",
//     localidade: "São Paulo",
//     uf: "SP",
//     estado: "São Paulo",
//     regiao: "Sudeste",
//     ibge: "3550308",
//     gia: "1004",
//     ddd: "11",
//     siafi: "7107"
// }




let cep = document.getElementById('cep').value = response.cep;

let URL = `https://viacep.com.br/ws/${cep}/json/`

//fetch faz a consulta na api
//then = tratar a resposta da api. Se for uma resposta de sucesso ou de erro
async function BuscarCEP() {

    await fetch(URL).then((response) => {
        //transformar JSON em OBJ
        return response.json();
    })

        .then((response) => {

            document.getElementById('cep').value = response.cep;

            document.getElementById('logradouro').value = response.logradouro;

            document.getElementById('bairro').value = response.bairro;

            document.getElementById('complemento').value = response.complemento;

            document.getElementById('estado').value = response.estado;

            // document.getElementById('exibir').innerHTML = response.cep;

        })
}

BuscarCEP();

let viacep =
{
    cep: "01001-000",
    logradouro: "Praça da Sé",
    complemento: "lado ímpar",
    unidade: "",
    bairro: "Sé",
    localidade: "São Paulo",
    uf: "SP",
    estado: "São Paulo",
    regiao: "Sudeste",
    ibge: "3550308",
    gia: "1004",
    ddd: "11",
    siafi: "7107"
}