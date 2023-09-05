document.addEventListener('DOMContentLoaded', function() {
    let eValor = document.getElementById('valor');
    let eMultiplicador = document.getElementById('multiplicador');
    const btnStart = document.getElementById('btnStart');
    const btnStop = document.getElementById('btnStop');

    btnStart.addEventListener('click', start);
    btnStop.addEventListener('click', stop);

    function start() {
        const btnStart = document.getElementById('btnStart');
        const questionContainer = document.getElementById('questionContainer');
        const btnStop = document.getElementById('btnStop');
        btnStart.classList.add('deactive');
        questionContainer.classList.remove('deactive');
        btnStop.classList.remove('deactive');
        geraMultiplicacao();
    }

    function stop() {
        const btnStart = document.getElementById('btnStart');
        const questionContainer = document.getElementById('questionContainer');
        const btnStop = document.getElementById('btnStop');
        btnStart.classList.remove('deactive');
        questionContainer.classList.add('deactive');
        btnStop.classList.add('deactive');
    }

    function geraMultiplicacao() {
        let valor = Math.floor(Math.random() * 10) + 1;
        let multiplicador = Math.floor(Math.random() * 10) + 1;
        console.log('valor: ', valor, ' multiplicado: ', multiplicador);

        eValor.textContent = valor;
        eMultiplicador.textContent = multiplicador;

        let respostaCerta = valor * multiplicador;

        const respostasIncorretas = [];

        while (respostasIncorretas.length < 4) {
            const respostaIncorreta = Math.floor(Math.random() * 100) + 1;
            if (
                respostasIncorretas.indexOf(respostaIncorreta) === -1 &&
                respostaIncorreta !== respostaCerta
            ) {
                respostasIncorretas.push(respostaIncorreta);
                console.log(respostasIncorretas);
            }
        }
        console.log(respostasIncorretas);

        const respostas = [respostaCerta, ...respostasIncorretas];

        for (let i = respostas.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [respostas[i], respostas[j]] = [respostas[j], respostas[i]];
        }
        const botoes = document.querySelectorAll('.option-div');
        for (let i = 0; i < botoes.length; i++) {
            botoes[i].textContent = respostas[i];
        }
    }
    function checker() {
        const botoes = document.querySelectorAll('.option-div');
        console.log(botoes.value)
    }
});
