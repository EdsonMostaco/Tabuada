document.addEventListener('DOMContentLoaded', function() {
    let eValor = document.getElementById('valor');
    let eMultiplicador = document.getElementById('multiplicador');
    let corretas = 0
    let respostaCerta;
    let qtdQuestoes = 0;
    let questaoRespondida = false;
    
    const btnStart = document.getElementById('btnStart');
    const btnStop = document.getElementById('btnStop');
    const btnNext = document.getElementById('btnNext');
    const acertos = document.getElementById('nota');

    btnStart.addEventListener('click', start);
    btnStop.addEventListener('click', stop);
    btnNext.addEventListener('click', geraMultiplicacao)

    acertos.textContent = corretas
    
    function start() {
        const btnStart = document.getElementById('btnStart');
        const questionContainer = document.getElementById('questionContainer');
        const btnStop = document.getElementById('btnStop');
        const btnNext = document.getElementById('btnNext')
        btnStart.classList.add('deactive');
        questionContainer.classList.remove('deactive');
        btnStop.classList.remove('deactive');
        btnNext.classList.remove('deactive');
        geraMultiplicacao();
    }

    function stop() {
        const btnStart = document.getElementById('btnStart');
        const questionContainer = document.getElementById('questionContainer');
        const btnStop = document.getElementById('btnStop');
        
        btnStart.classList.remove('deactive');
        questionContainer.classList.add('deactive');
        btnStop.classList.add('deactive');
        btnNext.classList.add('deactive');
        qtdQuestoes = 0 
    }

    function geraMultiplicacao() {
        const qRespondidas = document.getElementById('questoesRespondidas')
        const botoes = document.querySelectorAll('.option-div');
        for(let i = 0; i <botoes.length; i++){
            botoes[i].classList.remove('correct', 'incorrect');
        }
        let valor = Math.floor(Math.random() * 10) + 1;
        let multiplicador = Math.floor(Math.random() * 10) + 1;
        console.log('valor: ', valor, ' multiplicado: ', multiplicador);

        eValor.textContent = valor;
        eMultiplicador.textContent = multiplicador;

        respostaCerta = valor * multiplicador;
        
        const respostasIncorretas = [];

        while (respostasIncorretas.length < 4) {
            const respostaIncorreta = Math.floor(Math.random() * 100) + 1;
            if (
                respostasIncorretas.indexOf(respostaIncorreta) === -1 &&
                respostaIncorreta !== respostaCerta
            ) {
                respostasIncorretas.push(respostaIncorreta);
            }
        }

        const respostas = [respostaCerta, ...respostasIncorretas];

        for (let i = respostas.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [respostas[i], respostas[j]] = [respostas[j], respostas[i]];
        }
        for (let i = 0; i < botoes.length; i++) {
            botoes[i].textContent = respostas[i];
        }
        qtdQuestoes ++
        qRespondidas.textContent = qtdQuestoes
        questaoRespondida = false
        return respostaCerta
    }
    
    window.checker = function (button) {
        if (questaoRespondida){
            return
        }
        const respostaSelecionada = parseInt(button.textContent);
        if (respostaSelecionada === respostaCerta) {
            // A resposta está correta
            console.log('Resposta correta!');
            button.classList.add('correct')
            corretas ++
            
        } else {
            // A resposta está incorreta
            console.log('Resposta incorreta. Tente novamente.');
            // Faça o que desejar quando a resposta estiver incorreta
            button.classList.add('incorrect')
        }
        questaoRespondida = true
        
    }
});
