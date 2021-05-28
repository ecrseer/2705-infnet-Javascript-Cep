document.body
    .style.background="pink"

let $cep=
    document.createElement('input');
let $h1=
    document.querySelector('h1');
let $ancora=
document.querySelector('body');


let armazen;

$cep.onkeyup=(evento)=>{
   $h1.innerText = evento.target.value
    let texto_digitado = evento.target.value
    if(texto_digitado.length===8){
        $h1.innerText="8 carac"
        alert(`seu cep digitado eh${texto_digitado}`)
        pesquisaCep(texto_digitado)
        $cep.onkeyup=function (){}
    }
}
function meu_callback(json){
    armazen=json;
    if(armazen.logradouro){
        console.log('vamos')
        $ancora.append(
            fabrica('h2',null,`Rua: ${armazen.logradouro}`)
        )
        $ancora.append(
            fabrica('h2',null,`Complemento: ${armazen.complemento}`)
        )
        $ancora.append(
            fabrica('h2',null,`localidade: ${armazen.localidade}`)
        )
        $ancora.append(
            fabrica('h2',null,`bairro: ${armazen.bairro}`)
        )
        $ancora.append(
            fabrica('h2',null,`uf: ${armazen.uf}`)
        )
    }
}
function pesquisaCep(cep){
    let script = document.createElement('script');

    //Sincroniza com o callback.
    script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

    //Insere script no documento e carrega o conteúdo.
    document.body.appendChild(script);
}

$ancora.append($cep)

function fabrica(tipo, filhos, texto, atributos) {
    let $el = document.createElement(tipo)

    $el.innerText = texto
    if (atributos) {
        for(let [chave, valor] of Object.entries(atributos)){
            $el.setAttribute(chave, valor)
        }
    }

    if (filhos) {
        $el.append(filhos)
    }
    return $el
}

