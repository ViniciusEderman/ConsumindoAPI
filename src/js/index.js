
const cep = document.querySelector("#cep");

const showData = (resultado)=> {
    for(const campos in resultado) {
        if(document.querySelector("#"+campos)) {
            document.querySelector("#"+campos).value = resultado[campos];
            console.log(campos);
        }
    }
}
cep.addEventListener("blur",(event) => {

    let busca = cep.value.replace("-", "");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${busca}/json/`, options)
    .then(response =>{ response.json()
        .then( data => showData(data))
    })
    .catch(event => console.log('ERROR: ' + event,message));
});
