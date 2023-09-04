const questoes = [
    {
        id: 1,
        materia: 'Português',
        questao: 'Qual é a forma correta da palavra que completa a frase: O carro ficou _______ na garagem.',
        opcoes:['parado', 'parada', 'parados', 'paradas'],
        resposta:'parado',
    },
    {
        id: 2, 
        materia: 'Matemática',
        questao: 'Qual é o resultado da multiplicação de 6 por 7?',
        opcoes: ['36', '42', '48', '54'],
        resposta: '42'

    },
    {
        id: 3,
        materia: 'Português',
        questao: 'Qual é a forma correta da palavra que completa a frase: Os meninos jogaram _______ bola na praia.',
        opcoes: ['muita', 'muito', 'muitas', 'muitos'],
        resposta: 'muita'
    },
    {
        id: 4,
        materia: 'Matemática',
        questao: 'Qual é o resultado da divisão de 100 por 4?',
        opcoes: ['20', '25', '30', '40'],
        resposta: '25'
    },
    {
        id: 5,
        materia: 'Português',
        questao: 'Qual é a forma correta da palavra que completa a frase: Ela comprou _______ livros novos na livraria.',
        opcoes: ['alguns', 'algumas', 'alguns/as', 'alguma'],
        resposta: 'alguns'
    }
]

//for (let i of questoes) {
//    console.log(i.materia)
//    console.log(i.questao)
//    for (let j of i.opcoes){
//    console.log(j)
// }
//}
//console.log(questoes.filter(questao => questao.materia == 'Português').length)

const respostaUsuario = [
    {
        idQuestao: 1,
        opcao: 3
    },
    {
        idQuestao: 2,
        opcao: 2
    },
    {
        idQuestao: 3,
        opcao: 0
    },
    {
        idQuestao: 4,
        opcao: 0
    },
    {
        idQuestao: 5,
        opcao: 0
    }
]
function identificarQuetoesIncorretas(questoes, respostaUsuario) {
    let questoesIncorretas = []
    for (let resposta of respostaUsuario) {
        const questao = questoes.find(q => q.id === resposta.idQuestao)
        if(questao.resposta == questao.opcoes[resposta.opcao]){
            questoesIncorretas.push(questao)
        }
    }
    return questoesIncorretas
}

const erradas = identificarQuetoesIncorretas(questoes, respostaUsuario)
console.table(erradas)
let percentualErro = erradas.length / questoes.length
console.log(percentualErro * 100 + '%')