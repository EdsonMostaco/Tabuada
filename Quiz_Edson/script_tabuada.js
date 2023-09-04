let multiplicador = 0//Math.floor(Math.random()*10) +1
let multiplicado = 0 //Math.floor(Math.random()*10) +1

const quantity = document.getElementById('quantity-question')
const quantityQuestion = quantity















//função que gera questões de multiplicação
function geraMultiplicacao (multiplicador, multiplicado) {
    multiplicador = Math.floor(Math.random()*10) +1
    multiplicado = Math.floor(Math.random()*10) +1
    respostaCorreta = multiplicador * multiplicado
    respostas = []
    respostas.push(respostaCorreta)
    for (let i = 0 ; i < 4 ; i++) {
        let respostaAleatoria = Math.floor(Math.random()*100) + 1
        while(respostas.includes(respostaAleatoria)) {
            respostaAleatoria = Math.floor(Math.random()*10) +1
        }
        respostas.push(respostaAleatoria)
    }
    respostas.sort(() => Math.random()-5)

    let multiplicacao = {
        multiplicador: multiplicador,
        multiplicado: multiplicado,
        respostaCorreta: respostaCorreta,
        respostas: respostas
    }

    return multiplicacao
}

function verificador (resposta) {
    let respostaUsuario = resposta
    console.log(respostaUsuario)
    if( respostaUsuario == pergunta.respostaCorreta){
        return true
    }else{
        return false
    }
        
}
