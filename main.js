const perguntas = [
    {
        enunciado: "QUAL O SEU ESPORTE PREFERIDO? ",
        alternativas: [
            { texto: "MOUNTAIN BIKE", pontuacao: 1 },
            { texto: "SKATE", pontuacao: 2 }
        ]
    },
    {
        enunciado: "VOCÊ PREFERE PRATICAR ESPORTES AO AR LIVRE OU EM AMBIENTES FECHADOS?",
        alternativas: [
            { texto: "AO AR LIVRE", pontuacao: 2 },
            { texto: "EM AMBIENTES FECHADOS", pontuacao: 1 }
        ]
    },
    {
        enunciado: "QUAL DOS SEGUINTES ESTILOS VOCÊ PREFERE PARA SE EXERCITAR?",
        alternativas: [
            { texto: "PARKOUR", pontuacao: 2 },
            { texto: "ESPORTES DE AÇÃO", pontuacao: 1 }
        ]
    },
    {
        enunciado: "VOCÊ COSTUMA PRATICAR ESPORTES SOZINHO OU EM GRUPO?",
        alternativas: [
            { texto: "SOZINHO", pontuacao: 1 },
            { texto: "EM GRUPO", pontuacao: 2 }
        ]
    },
    {
        enunciado: "QUAL É O FATOR MAIS IMPORTANTE PARA VOCE AO ESCOLHER UM ESPORTE?",
        alternativas: [
            { texto: "DESAFIO FÍSICO E ADRENALINA", pontuacao: 1 },
            { texto: "SOCIALIZAÇÃO E DIVERSÃO", pontuacao: 2 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta
