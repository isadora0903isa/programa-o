const perguntas = [
    {
    enunciado: "QUAL O SEU ESPORTE PREFIRIDO?",
    alternativas: [
    "texto:MOUNTAIN BIKE, pontuacao: 1 },
    "texto:SKATE,pontuacao: 2 }
    ]
    },
    {
    enunciado: "VOCÊ PREFERE PRATICAR ESPORTES AO AR LIVRE OU EM AMBIENTES FECHADOS?",
    alternativas: [
     {texto:AO AR LIVRE,pontuacao: 1},
    {texto:EM AMBIENTES FECHADOS,pontuacao: 2 }
    ]
    },
    {
    enunciado: "QUAL DOS SEGUINTES ESTILOS VOCÊ PREFERE PARA SE EXERCITAR?",
    alternativas: [
    {texto:PARKOUR,pontuacao: 1 },
   { texto:ESPORTES DE AÇÃO,pontuacao: 2 }
    ]
    },
    {
    enunciado: "VOCÊ COSTUMA PRATICAR ESPORTES SOZINHO OU EM GRUPO?",
    alternativas: [
    "texto:SOZINHO,pontuacao: 1 },
    "texto:EM GRUPO,pontuacao: 2 }
    ]
    
    },
    {
    enunciado: "QUAL É O FATOR MAIS IMPORTANTE PARA VOCE AO ESCOLHER UM ESPORTE?",
    alternativas: [
    {texto:DESAFIO FÍSICO E ADRENALINA,pontuacao: 1 },
    {texto:SOCIALIZAÇÃO E DIVERSÃO,pontuacao: 2 }
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();
button.addEventListener('click', () => {
pontuacao += alternativa.pontuacao; // Adiciona a pontuação da alternativa
selecionada
atual++;
if (atual < perguntas.length) {
mostraPergunta();
} else {
function exibePontuacaoFinal() {
caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação
final é: ${pontuacao}`;
alternativasContainer.innerHTML = ''; // Limpa as alternativas
}
});

